<template>
<div></div>
</template>

<script>
export default {
  name: "eventBus",
  mounted() {
    this.$eventBus.$emit('update', '更新123')
  }
}
</script>

<style scoped>

</style>
