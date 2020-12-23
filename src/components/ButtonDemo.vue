<template>
  <div style="margin-top: 100px;margin-left: 200px">
    ButtonDemo<br>
    <jy-button @click="myClick" @focus="myClick" @mouseover="myClick">这是我的按钮哦</jy-button>
  </div>
</template>

<script lang="ts">
import JyButton from "../lib/button/JyButton.vue";
export default {
  name: "ButtonDemo",
  components: {JyButton},
  setup() {
    const myClick = () => {
      console.log("handler!")
    }
    return {myClick}
  }
}
</script>

<style lang="scss" scoped>

</style>
