<template>
  <div>
    Hello {{name}}!
  </div>
</template>

<script>
import {connect} from 'vuex-connect'

const Component = {
  name: 'my-connected-component',
  props: ['name'],
  created () {
    // I will never be called,
    // because i'm replaced entirely
    // the `render` function injected
    // by `connect` is overwritten
    // by the vue-loader template
    // so that i am never even
    // placed into the DOM

    // The `connect` HOC, however,
    // will be rendered with the template
    // defined in this file so we will
    // still see "Hello linde12"
    // but methods and other props
    // aren't set, and it's not a HOC
    // anymore, just a component

    alert(`[created]: ${this.name}`)
  }
}

export default connect({
  stateToProps: {
    name: state => state.name
  }
})('my-connected-component', Component)
</script>
