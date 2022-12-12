<template>
  <div style="height: 500px;position: relative;width: 100px">
   <div class="header"></div>
   <div class="main"></div>
   <div class="footer"></div>
<!--    <div>-->

<!--    </div>-->
    <card style="height: 500px">
      <p slot="header">标题</p>
      body
      <p slot="footer">结尾</p>
    </card>

    <card style="height: 500px">
      body
    </card>
<!--    <p>v-model动态监听输入的值{{value1}} <br /></p>-->
<!--    <p>使用v-model实现的监听：<input type="text" v-model="value1" ><br/></p>-->
<!--    <p>v-bind:value和v-on:input动态监听输入的值{{value2}} <br /></p>-->
<!--    <p>模拟v-model的方法：-->
<!--      <input type="text" :value="value2" @input="setValue" >-->
<!--    </p>-->
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      // value1:'1111',
      // value2:'2222',
      a: 0
    }
  },
  methods: {
    // setValue($event) {
    //   this.value2 = $event.target.value
    // }
  }
}
</script>

<style scoped>
/*#listBox {*/
/*  width: 900px;*/
/*  margin: 0 auto;*/

/*}*/
/*p{*/
/*  text-align: left;*/
/*  line-height:30px;*/
/*  font-weight: bold;*/
/*  font-size: 18px;*/
/*}*/
/*p input{*/
/*  border:solid 1px #ddd;*/
/*  line-height:30px*/
/*}*/
.header {
  height: 100px;
  width: 100px;
  position: absolute;
  top: 0;
  background: blue;
}
.main {
  background: #42b983;
  position: absolute;
  top: 100px;
  bottom: 100px;
  height: auto;
  width: 100px;
}
.footer {
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: 0;
  background: yellow;
}
</style>
