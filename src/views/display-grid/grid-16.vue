<template>
  <div class="wrapper">
    <div class="box a">A</div>
    <div class="box b">B</div>
    <div class="box c">C</div>
    <div class="box d">
      <div class="box e">E</div>
      <div class="box f">F</div>
      <div class="box g">G</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: 150px 100px 150px 100px;
  grid-template-rows: repeat(3, minmax(100px, auto));
  background-color: #fff;
  color: #444;
  margin: 40px;
  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
    .box {
      background-color: #ccc;
      color: #444;
    }
  }
  .a {
    grid-column: 1 / 3;
  }
  .b {
    grid-column: 4;
  }
  .c {
    grid-column: 1;
    grid-row: 2 / 4;
  }
  .d {
    grid-column: 2 / 5;
    grid-row: 2 / 4;
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
  }
  .e {
    grid-row: 1 / 3;
    grid-column: 1;
  }
  .f {
    grid-row: 1;
    grid-column: 2 / 4;
  }
  .g {
    grid-row: 2;
    grid-column: 3;
  }
}
</style>
