import MyButton from './Button'
import MyInput from './Input'

const ALLCOMPS = [
  MyButton,
  MyInput
]

const MyUI = {}

MyUI.install = function (Vue, options) {
  if (options && options.components) {
    const components = options.components
    components.forEach(compName => {
      ALLCOMPS.forEach(comp => {
        if (comp.name === compName) {
          Vue.component(comp.name, comp)
        }
      })
    })
  } else {
    ALLCOMPS.forEach(comp => {
      Vue.component(comp.name, comp)
    })
  }
}

export default MyUI