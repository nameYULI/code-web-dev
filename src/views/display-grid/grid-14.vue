<template>
  <div class="wrapper">
    <div class="box a">
      <p>This is box A.</p>
    </div>
    <div class="box b">
      <p>This is box B.</p>
    </div>
    <div class="box c">
      <p>This is box C.</p>
    </div>
    <div class="box d">
      <p>This is box D.</p>
    </div>
    <div class="box e">
      <p>
        Each of the boxes on the left has a grid area of 3 columns and 3 rows (we're counting the
        gutter col/row).
      </p>
      <p>The align-items property is used to align the content inside each grid-area.</p>
      <p>Other values of align-items are:</p>
      <ul>
        <li>stretch</li>
        <li>start</li>
        <li>end</li>
        <li>center</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  // example 1
  // align-items: center;
  // example 2
  justify-items: center;
  background: no-repeat url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/grid.png);
  grid-gap: 10px;
  grid-template-columns: repeat(6, 150px);
  grid-template-rows: repeat(4, 150px);
  background-color: #fff;
  color: #444;
  margin: 40px;
  .box {
    border: 1px solid #444;
    padding: 20px;
    font-size: 150%;
  }
  // example 1
  // .a {
  //   grid-column: 1 / 3;
  //   grid-row: 1 / 3;
  // }
  // .b {
  //   grid-column: 3 / 5;
  //   grid-row: 1 / 3;
  // }
  // .c {
  //   grid-column: 1 / 3;
  //   grid-row: 3 / 6;
  // }
  // .d {
  //   grid-column: 3 / 5;
  //   grid-row: 3 / 6;
  // }
  // .e {
  //   grid-column: 5 / 7;
  //   grid-row: 1 / 6;
  //   align-self: stretch;
  // }
  // example 2
  .a {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  .b {
    grid-column: 3 / 5;
    grid-row: 1 / 3;
  }
  .c {
    grid-column: 1 / 3;
    grid-row: 3 / 6;
  }

  .d {
    grid-column: 3 / 5;
    grid-row: 3 / 6;
  }

  .e {
    grid-column: 5 / 7;
    grid-row: 1 / 6;
    align-self: stretch;
  }
}
</style>
