<template>
  <button :class="['my-btn', type]">测试按钮</button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: String,
  },
  mounted() {
    let a = "abc";
    console.log(a);
    let pms = Promise.resolve();
    console.log(pms);
  },
};
</script>

<style lang="less">
.my-btn {
  height: 34px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 4px;
  user-select: none;

  &.primary {
    color: #fff;
    background-color: #008cee;
    border: 1px solid #129cff;
  }
  &.danger {
    color: #fff;
    background-color: red;
    border: 1px solid rgb(252, 21, 21);
  }
}
</style>