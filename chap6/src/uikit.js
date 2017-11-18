import 'jquery'
import 'uikit'
import 'uikit/dist/css/uikit.min.css'

export default(Vue,options)=>{
    const ui = window.UIkit
    Vue.prototype.$ui = {
        alert:UIkit.modal.alert,
        confirm:UIkit.modal.confirm,
        prompt:UIkit.modal.prompt,
        block:UIkit.modal.block
    }
}