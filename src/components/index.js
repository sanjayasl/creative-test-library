import Vue from "vue"
import QuantityButton from "./QuantityButton"

const Components = {
    QuantityButton
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})
