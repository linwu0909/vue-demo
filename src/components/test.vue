<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <input type="checkbox" :value="item.text"/>
        {{item.text}}
      </li>
    </ul>
    <button @click="remove" type="button">删除</button>
  </div>
</template>

<script>
export default {
  name: "test.vue",
  data() {
    return {
      list: [{id: 1, text: '1'}, {id: 2, text: '2'}]
    }
  },
  methods: {
    remove() {
      this.list.shift()
    }
  }
}
</script>

<style scoped>

</style>
