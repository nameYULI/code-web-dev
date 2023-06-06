<template>
  <div class="wrapper">
    <div class="box">1</div>
    <div class="box box2">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
    <div class="box">7</div>
    <div class="box">8</div>
    <div class="box">9</div>
    <div class="box">10</div>
    <div class="box">11</div>
    <div class="box">12</div>
  </div>
</template>
<style lang="scss" scoped>
// example 1
.wrapper {
  width: 600px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 100px);
  // example 2
  // grid-template-rows: 100px 100px 100px;
  // grid-auto-flow: column;
  margin: 40px;
  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
    &:nth-child(even) {
      background-color: #ccc;
      color: #000;
    }
  }
  // example 3
  // .box2 {
  //   grid-column: 3 / 6;
  //   grid-row: 2 / 3;
  //   outline: 2px solid red;
  // }
}
</style>
