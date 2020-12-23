<template>
  <button @click="toggle" :disabled="disabled" :class="{checked: value}">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  name: "JySwitch",
  props: {
    value: Boolean | String | Number,
    disabled: Boolean,                            // 是否禁用
    change: Function,                             // 回调函数

  },
  setup(props, context) {
    let toggle = () => {
      context.emit('update:value', !props.value);
      // 回调函数
      if (props.change) {
        props.change(!props.value);
      }
    }
    return {toggle};
  }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }

  &.checked {
    background: #1890ff;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  button.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}

</style>
