<template>
  <div class="flex mt-5">
    <div class="txt">
      css 滚动驱动动画
      这段文字滚动会变色变色变色变色变色变色啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
    </div>
    <div class="txt">css 滚动驱动动画</div>
  </div>
</template>
<style scoped>
.txt {
  width: 300px;
  height: 4em;
  padding: 8px;
  outline: 1px dashed #9747ff;
  font-family: cursive;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 20px;
  position: relative;
}
.txt {
  animation: check 1s;
  animation-timeline: scroll(self);
}
.txt {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
.txt {
  --trunc: false;
}
@keyframes check {
  from,
  to {
    color: #9747ff;
    --trunc: true;
  }
}
@container style(--trunc: true) {
  .txt::after {
    content: "";
    position: absolute;
    inset: 2px;
    border: 1px solid red;
  }
}
</style>
