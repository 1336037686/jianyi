<template>
  <div class="topnav" @click="toggleMenu">
    <div class="logo">LOGO</div>
    <div class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </div>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";

export default {
  name: "TopNav",
  setup: function () {
    let menuFlagValue = inject<Ref<boolean>>("menuFlagValue");
    let toggleMenu = () => {
      menuFlagValue.value = !menuFlagValue.value;
    }
    return {toggleMenu}
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
> .logo {
  max-width: 6em;
  margin-right: auto;
}

> .menu {
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;

> li {
  margin: 0 1em;
}

}
}
</style>
