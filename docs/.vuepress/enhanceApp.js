import Vue from 'vue'
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

// AUTO ADS
// Vue.use(Ads.AutoAdsense, { adClient: 'ca-pub-2288127327453255' })