<template>
  <div class="wrapper">
    <div class="box a">A</div>
    <div class="box b">B</div>
    <div class="box c">C</div>
    <div class="box d">D</div>
    <div class="box e">E</div>
    <div class="box f">F</div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-auto-flow: column dense;
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
    grid-column-start: 2;
  }
  .b {
    grid-row-start: 2;
    grid-column-start: 2;
  }
  .c {
    grid-row-start: 2;
    grid-column-start: 3;
  }
}
</style>
