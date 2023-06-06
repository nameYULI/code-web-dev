<template>
  <div class="wrapper">
    <div class="box a">A</div>
    <div class="box b">B</div>
    <div class="box c">C</div>
    <div class="box d">D</div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  gap: 10px;
  background-color: #fff;
  color: #444;
  margin: 40px;
  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
  }
  .a {
    grid-column-start: span 2;
  }
  .b {
    grid-row-start: span 2;
  }
}
</style>
