import Vue from 'vue'
import App from './App.vue'
 /* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

 /* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

 /* import specific solid icons  */
import { faUserSecret, faGlobe, faDollarSign, faDroplet, faStethoscope, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
 /*Import icone regular */
import { faHeart } from '@fortawesome/free-regular-svg-icons'
 /*Import icone brands */
import { faFacebook,faFacebookF,faInstagram, faTwitter, faYoutube, faPagelines} from '@fortawesome/free-brands-svg-icons'

 /* add icons to the library */
 //solid
library.add(faUserSecret, faGlobe,faDollarSign, faDroplet, faStethoscope, faGraduationCap)
//regular
library.add(faHeart)
//brands
library.add(faFacebook,faFacebookF,faInstagram, faTwitter, faYoutube, faPagelines)








 /* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
