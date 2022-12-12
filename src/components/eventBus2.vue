<template>
<div></div>
</template>

<script>
export default {
  name: "eventBus2",
  mounted() {
    this.$eventBus.$on('update', val => {
      console.log('接收到' + val)
    })
  }
}
</script>

<style scoped>

</style>
