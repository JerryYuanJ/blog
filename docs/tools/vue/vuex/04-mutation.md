# Mutation 

## mutation 的使用方法

**更改 Vuex 的 store 中的状态的唯一方法是提交 mutation**。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数。我们来看一个例子：

```js
const store = new Vuex.Store({
  state: {
    name: 'Jerry',
  },
  mutations: {
    changeName(state, newName) {
      state.name = newName
    }
  }
})
```

这个 Store 中定义了一个名为 changeName 的 mutation。我们可以在 Vue 组件中这样来使用：

```js
export default {
  methods: {
    change() {
      this.$store.commit('changeName', 'Kobe')
    }
  },
}
```

确实跟事件系统很像，这里相当于“触发”一个 changeName 的事件，并且传递 'Kobe' 作为参数。Store 接收到“事件”以后，会执行 changeName 方法来修改 state 中的 name 属性的值。

## mutation 的实现原理

### mutation 的注册

还是老样子，我们还是先看一下 Store 的构造函数，首先初始化了这两个变量：

```js
this._committing = false
this._mutations = Object.create(null)
```

接着重新绑定了 commit 方法的作用域：

```js
this.commit = function boundCommit (type, payload, options) {
  return commit.call(store, type, payload, options)
}
```

然后就是我们熟悉的代码：

```js
installModule(this, state, [], this._modules.root)
```

它的内部会调用 `makeLocalContext` 来生成一个 `local` 对象，之前两节都分析过了，因为此时的 `noNamespace` 为 `true`，所以这个
local 对象的 commit 属性的值就是 store.commit。此时的 local 的值为：

```js
{
  commit: store.commit,
  dispatch: store.dispatch,
  getters: () => store.getters,
  state: () => getNestedState(store.state, path)
}
```

接着就开始注册 mutation 了：

```js
module.forEachMutation((mutation, key) => {
  const namespacedType = namespace + key
  registerMutation(store, namespacedType, mutation, local)
})
```

`module.forEachMutation` 与上一节提到的 `module.forEachGetter` 类似，也是 Module 类上面的方法：

```js
forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn)
  }
}
```

这里的 `this._rawModule` 就是我们的 options，它定义了一个 changeName 的 mutation，所以会进 if 判断里面，执行：

```js
forEachValue(this._rawModule.mutations, fn)
```

也就是遍历这个 mutation 对象，用 fn 去操作。这里的 fn 就是：

```js
(mutation, key) => {
  const namespacedType = namespace + key
  registerMutation(store, namespacedType, mutation, local)
}
```

这个匿名函数了。因为我们的 namespace 为空，所以这里的 namespaceType 就是 key 的值，也就是 changeName，接着执行 `registerMutation` 去注册我们的 mutation。我们来看一下注册的实现逻辑：

```js
function registerMutation (store, type, handler, local) {
  const entry = store._mutations[type] || (store._mutations[type] = [])
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload)
  })
}
```

首先定义我们根据 type ，也就是我们的 mutation 的名称来获取对应的方法，如果没有的话，初始化成一个空数组；接着，往这个数组里面添加一个函数 `wrappedMutationHandler`，这个函数接收一个 payload 作为参数，函数里面调用了：
```js
handler.call(store, local.state, payload)
```

这里的 handler 就是我们自己在初始化 Store 时定义的 changeName 方法，这里我们也可以看出来，为什么 mutation 方法接收的参数，第一个是 state，第二个是 payload 了。

到这里，mutation 的初始化其实就已经完成了，做的事情其实很简单，就是往 `store._mutations` 中添加这个方法。

### mutation 的提交

有了 mutation 以后，我们就可以通过提交 mutation 的方式来修改 state 中某个属性的值了，我们结合一开始的例子看一下：

```js
this.$store.commit('changeName', 'Kobe')
```

调用的这个 commit 方法，其实就是绑定后的 boundCommit 方法，实际调用的还是 `commit.call(store, type, payload, options)` 方法，只不过强行绑定了 store 作为函数运行作用域而已，我们来看看这个 commit 方法的实现：

```js
commit (_type, _payload, _options) {
  // check object-style commit
  const {
    type,
    payload,
    options
  } = unifyObjectStyle(_type, _payload, _options)

  const mutation = { type, payload }
  const entry = this._mutations[type]
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`[vuex] unknown mutation type: ${type}`)
    }
    return
  }
  this._withCommit(() => {
    entry.forEach(function commitIterator (handler) {
      handler(payload)
    })
  })
  this._subscribers.forEach(sub => sub(mutation, this.state))

  if (
    process.env.NODE_ENV !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      `[vuex] mutation type: ${type}. Silent option has been removed. ` +
      'Use the filter functionality in the vue-devtools'
    )
  }
}

```

首先执行的是 `unifyObjectStyle` 方法，它其实也是针对参数做规范化，我们来看看它的实现：

```js

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload
    payload = type
    type = type.type
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof type === 'string', `expects string as the type, but found ${typeof type}.`)
  }

  return { type, payload, options }
}
```

由于我们调用 commit 的方式有两种：`commit(type, payload, options)` 或者 `commit({type, palyload}, options)`，所以这个函数会针对两种不同的情况做统一化的操作。可以看出来，如果第一个参数是对象类型的话，那么就说明是通过第二种方式调用的，这时候要手动的把参数向后移位，再给 type 赋值（转化成第一种的方式），最后返回这个统一后的对象 `{ type, payload, options }`。

拿到这个对象以后，再继续往下看：

```js
const mutation = { type, payload }
const entry = this._mutations[type]
if (!entry) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(`[vuex] unknown mutation type: ${type}`)
  }
  return
}
```

这里把上面生成的统一化对象中的 `{ type, payload }` 合并成一个 mutation 对象，接着获取我们的 mutation 函数，它是一个数组。如果没有找到这个 mutation 的话，会在开发环境报错提示。接着就是我们重点要介绍的一段逻辑了：

```js
this._withCommit(() => {
  entry.forEach(function commitIterator (handler) {
    handler(payload)
  })
})
```

这里的代码实际上在执行我们的 mutation 方法，但是是用 `this._withCommit` 包裹的一层。这个函数也是定义在 Store 构造函数中，我们来看看它是干什么的：

```js
_withCommit (fn) {
  const committing = this._committing
  this._committing = true
  fn()
  this._committing = committing
}
```

它接收一个函数作为参数，然后获取我们当前 store 的 `_committing` 状态，这个我们一开始就介绍了，它的初始值为 false。然后设置它的值为 true，表示当前正在提交 mutation，紧接着就开始执行我们传入的参数，执行完以后复位这个 `_committing` 状态。其实这种模式跟我们的切面编程有点类似，就是在 fn 函数的前后执行一些切面逻辑。

好了，再回到例子中，我们的 fn 对应的就是这个函数：

```js
() => {
  entry.forEach(function commitIterator (handler) {
    handler(payload)
  })
}
```

这个函数的作用，就是遍历我们 entry 中的 mutation，然后执行 `handler` 函数，并把 payload 作为参数传进去。

这里的 handler，其实就是我们上面介绍的这个函数：
```js
function wrappedMutationHandler (payload) {
  handler.call(store, local.state, payload)
}
```

也就是会执行我们的定义好的 `changeName` 方法，去改变 state 中的值。到这里，是不是有一些豁然开朗的感觉呢？

## mapMutations 的使用用法

## mapMutations 的实现原理

## Strict 的作用

## 总结