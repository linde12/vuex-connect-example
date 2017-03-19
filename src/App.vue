<template>
  <div>
    MyComponet: <my-component name='linde12' /><br />
    MyConnectedComponet: <my-connected-component /><br />
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'
import MyConnectedComponent from './components/MyConnectedComponent.vue'

export default {
  name: 'app',
  components: {MyComponent, MyConnectedComponent}
}
</script>
