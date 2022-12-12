<template>
<div>
  <children/>
</div>
</template>

<script>
import Children from "@/components/children";
export default {
  name: "parent",
  components: {Children},
  provide() {
    return {
      type: 'yeye',
      age: 60
    }
  }
}
</script>

<style scoped>

</style>
