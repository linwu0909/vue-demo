<template>
<div></div>
</template>

<script>
export default {
  name: "grandchildren",
  inject: ['age'],
  mounted() {
    console.log('孙子拿到爷爷年龄' + this.age)
  }
}
</script>

<style scoped>

</style>
