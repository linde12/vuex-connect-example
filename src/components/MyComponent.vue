<template>
  <div>
    Hello {{name}}!
  </div>
</template>

<script>
export default {
  name: 'my-component',
  props: ['name'],
  created () {
    // I will be called and rendered
    alert(`[created ${this.$options._componentTag}]: Name is set to ${this.name}`)
  }
}
</script>
