import {Ziggy} from './ziggy'

window.Ziggy  = Ziggy;
window.route = require('../../../vendor/tightenco/ziggy/dist/js/route');

export default {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
}