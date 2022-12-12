<template>
<div><grandchildren></grandchildren></div>
</template>

<script>
import Grandchildren from "@/components/grandchildren";
export default {
  components: {Grandchildren},
  name: "children",
  inject: ['age'],
  mounted() {
    console.log('儿子拿到父亲的年龄' + this.age)
  }
}
</script>

<style scoped>

</style>
