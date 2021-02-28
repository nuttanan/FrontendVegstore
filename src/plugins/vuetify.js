import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// import colors from 'vuetify/lib/util/colors'


// import '../../node_modules/vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    iconfont: 'mdi' || 'md' || 'mdi' || 'fa' || 'fa4'
  })

const opts = {}

export default new Vuetify(opts)