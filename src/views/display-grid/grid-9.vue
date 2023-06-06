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
  grid-gap: 10px;
  grid-template-columns: repeat(5, [col] 100px);
  grid-template-rows: repeat(3, [row] auto);
  background-color: #fff;
  color: #444;
  margin: 40px;
  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
    z-index: 10;
  }
  .a {
    grid-column: col / span 2;
    grid-row: row;
  }
  .b {
    grid-column: col 3 / span 3;
    grid-row: row;
  }
  .c {
    grid-column: col;
    grid-row: row 2;
  }
  .d {
    grid-column: col 2 / span 3;
    grid-row: row 2;
  }
  .e {
    grid-column: col / span 5;
    grid-row: row 3;
  }
  .f {
    grid-column: col 3 / span 3;
    grid-row: row 2;
    background-color: rgba(49, 121, 207, 0.5);
    z-index: 5;
  }
}
</style>
