<template>
  <div style="margin-top: 100px;margin-left: 200px">
    SwitchDemo<br>
    <jy-switch v-model:value="value" :change="switchCallBack" :disabled="false"/>
  </div>
</template>

<script lang="ts">
import JySwitch from "../lib/switch/JySwitch.vue";
import {ref} from "vue";
export default {
  name: "SwitchDemo",
  components: {JySwitch},
  setup () {
    let value = ref(1);
    let switchCallBack = (value) => {
      console.log(value);
    }
    return {value, switchCallBack}
  }
}
</script>

<style lang="scss" scoped>

</style>
