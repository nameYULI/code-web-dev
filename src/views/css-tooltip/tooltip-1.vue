<template>
  <div
    class="flex justify-center flex-col gap-5 p-5 w-80 outline outline-2 outline-cyan-500"
  >
    <div class="relative">
      <div class="txt" data-title="这是一段可以自动出现tooltip的文本">
        这是一段可以自动出现tooltip的文本
      </div>
    </div>
    <div class="relative">
      <div class="txt" data-title="较少的文本不会出现">较少的文本不会出现</div>
    </div>
    <div class="relative">
      <div
        class="txt"
        data-title="只有字数多的时候才出现tooltip，而且还会有省略号省略号省略号省略号省略号省略号省略号省略号省略号省略号省略号"
      >
        只有字数多的时候才出现tooltip，而且还会有省略号省略号省略号省略号省略号省略号省略号省略号省略号省略号省略号
      </div>
    </div>
  </div>
</template>
<style scoped>
.txt {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 8px;
  outline: 1px dashed #9747ff;
  font-family: cursive;
  border-radius: 4px;
  animation: check 1s;
  animation-timeline: scroll(x self);
  --trunk: false;
}
@keyframes check {
  from,
  to {
    --trunk: true;
  }
}
@container style(--trunk: true) {
  .txt::after {
    content: attr(data-title);
    position: absolute;
    top: 0;
    width: fit-content;
    left: 50%;
    margin: auto;
    transform: translate(-50%, -100%);
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0.3em 1em;
    border-radius: 4px;
    color: #fff;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s 0.1s;
  }
  .txt:hover::after {
    cursor: default;
    opacity: 1;
    visibility: visible;
  }
}
</style>
