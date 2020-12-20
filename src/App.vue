<template>
  <router-view />
</template>

<script lang="ts">
import { Ref, ref, provide } from 'vue'
export default {
  name: 'App',
  setup () {
    const menuFlagValue = ref(true);
    provide<Ref<boolean>>("menuFlagValue", menuFlagValue);
  }
}
</script>
