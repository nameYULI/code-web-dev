<template>
  <div class="wrapper">
    <div class="box box1">1</div>
    <div class="box box2">2</div>
    <div class="box box3">3</div>
    <div class="box box4">4</div>
    <div class="box box5">5</div>
    <div class="box box6">6</div>
    <div class="box box7">7</div>
    <div class="box box8">8</div>
    <div class="box box9">9</div>
    <div class="box box10">10</div>
    <div class="box box11">11</div>
    <div class="box box12">12</div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: 600px;
  display: grid;
  grid-template-columns: repeat(6, 100px);
  grid-gap: 10px;
  margin: 40px;
  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
    order: 1;
    &:nth-child(even) {
      background-color: #ccc;
      color: #000;
    }
  }
  .box1 {
    order: 3;
  }
  .box2 {
    order: 2;
  }
}
</style>
