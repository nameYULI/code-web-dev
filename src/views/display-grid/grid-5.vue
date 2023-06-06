<template>
  <div class="wrapper">
    <div class="box a">A</div>
    <div class="box b">B</div>
    <div class="box c">C</div>
    <div class="box d">D</div>
    <div class="box e">E</div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 100px);
  grid-auto-columns: 100px;
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
    grid-column: 1 / span 2;
  }
  .b {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
  .e {
    grid-column: 4 / 5;
    grid-row: 1 / 4; // 超出现有网格线 会把 gap 也占据
  }
}
</style>
