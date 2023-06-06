<template>
  <div class="yellow"></div>
  <div class="red"></div>
  <br />
  <div class="yellow1">
    <div class="blue1"></div>
  </div>
  <br />
  <div class="yellow2" onmouseenter="alert(0)"></div>
  <br />

  <div class="red3">
    <div class="yellow3"></div>
  </div>
  <p class="blue3" onmouseenter="alert(0)"></p>
</template>

<script setup></script>
<style lang="scss">
.yellow {
  width: 100px;
  height: 100px;
  background: yellow;
}
.red {
  width: 100px;
  height: 100px;
  background: red;
}
.yellow1 {
  width: 100px;
  height: 100px;
  background: yellow;
  opacity: 0; /* 父元素的 opacity属性取值为0 */
}
.blue1 {
  width: 50px;
  height: 50px;
  background: blue;
  opacity: 1; /* 子元素的 opacity属性取值为1 */
}
.yellow2 {
  width: 100px;
  height: 100px;
  background: yellow;
  opacity: 0;
}

.red3 {
  width: 400px;
  height: 40px;
  background: red;
  position: relative;
}

.yellow3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 300px;
  background: yellow;
  visibility: hidden;
}

.blue3 {
  width: 200px;
  height: 200px;
  background: blue;
}
.red3:hover .yellow3 {
  visibility: visible;
}
</style>
