import './polyfills'
import VueDaterangepickerPresets from './components/VueDaterangepickerPresets.vue'

const VueDaterangepickerPresetsPlugin = {
  install(Vue, options) {
    Vue.component(VueDaterangepickerPresets.name, {
      ...options,
      ...VueDaterangepickerPresets,
    })
  },
}

// User has to install the component by themselves, to allow to pass options
if (typeof window !== 'undefined' && window.Vue) {
  window.VueDaterangepickerPresets = VueDaterangepickerPresetsPlugin
}
export default VueDaterangepickerPresetsPlugin
