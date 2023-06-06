<template>
  <div class="amazing-focus">
    <h1>Amazing Focus</h1>
    <div class="amazing-focus__box1">
      <div class="amazing-focus__box2">
        <div class="amazing-focus_box3">
          <input class="amazing-focus__box3" value="hhhhhhhh" />
        </div>
      </div>
    </div>
    <button class="focus-visible">focus-visible</button>
    <button class="focus">focus</button>
  </div>
  <div class="box-model">
    <h1>Box Model</h1>
    <div class="box-model-item">
      <p>I am a paragraph. A short one.</p>
      <ul>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
      </ul>
      <p>
        I am another paragraph. Some of the <span class="block">words</span> have been wrapped in a
        <span>span element</span>.
      </p>
    </div>
    <br />
    <div class="content-box"></div>
    <br />
    <div class="box">I use the standard box model.</div>
    <div class="box alternate">I use the alternate box model.</div>
    <br />
    <div class="margin-box-container">
      <div class="margin-box">Change my margin.</div>
    </div>
    <br />
    <div class="margin-box-container">
      <p class="one">I am paragraph one.</p>
      <p class="two">I am paragraph two.</p>
    </div>
    <br />
    <div class="inline-box">
      <p>
        I am a paragraph and this is a <span>span</span> inside that paragraph. A span is an inline
        element and so does not respect width and height.
      </p>
      <nav>
        <ul class="links-list">
          <li><a href="">Link one</a></li>
          <li><a href="">Link two</a></li>
          <li><a href="">Link three</a></li>
        </ul>
      </nav>
    </div>
  </div>
  <br />
  <div class="mastering-margin-collapsing">
    <h1>Mastering Margin Collapsing</h1>
    <div class="box-01">
      <p>下边界范围会...</p>
      <p>...会跟这个元素的上边界范围重叠。</p>
    </div>
    <div class="box-02">
      <section>
        <header>上边界重叠 87</header>
        <main></main>
        <footer>下边界重叠 87 不能再高了</footer>
      </section>
    </div>
    <div class="box-03">
      <!--margin-top 会溢出父元素-->
      <p>下边界范围是 87 ...</p>
      <div></div>
      <!--margin-bottom 会溢出父元素-->
      <p>... 上边界范围是 87</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.amazing-focus {
  margin-bottom: 50px;
  .amazing-focus__box1 {
    margin-bottom: 20px;
  }
  .amazing-focus__box1:focus-within {
    outline: 2px solid #f00;
    background-color: #f00;
  }
  .focus-visible:focus-visible {
    outline: 2px solid #f00;
  }
  .focus:focus {
    outline: 2px solid #f00;
  }
}
.box-model {
  .box-model-item {
    p,
    ul {
      border: 2px solid rebeccapurple;
      padding: 0.5em;
    }

    .block,
    li {
      border: 2px solid blue;
      padding: 0.5em;
    }

    ul {
      display: flex;
      list-style: none;
    }

    .block {
      display: block;
    }
  }
  .content-box {
    /* box-sizing: content-box; */
    width: 200px;
    height: 200px;
    margin: 25px;
    padding: 25px;
    border: 5px solid #000;
    background-color: #fff;
  }

  .box {
    border: 5px solid rebeccapurple;
    background-color: lightgray;
    padding: 40px;
    margin: 40px;
    width: 300px;
    height: 150px;
  }

  .alternate {
    box-sizing: border-box;
  }
  .margin-box-container {
    border: 5px solid blue;
    margin: 60px;
    /* 高度 150 + 20 + 40 - 40 + 5 + 5 = 180 */
    .margin-box {
      border: 5px solid rebeccapurple;
      background-color: lightgray;
      height: 150px;
      padding: 10px;
      margin-top: -40px;
      margin-right: 30px;
      margin-bottom: 40px;
      margin-left: 4em;
    }
    .one,
    .two {
      border: 5px solid rebeccapurple;
      background-color: lightgray;
      padding: 10px;
    }
    .one {
      margin-top: 20px;
      margin-bottom: 50px;
    }
    .two {
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }
  .inline-box {
    padding: 10px;
    border: 2px solid rebeccapurple;
    span {
      margin: 20px;
      padding: 20px;
      width: 80px;
      height: 50px;
      background-color: lightblue;
      border: 2px solid blue;
      display: inline-block; /* 会使宽高生效 */
    }
    .links-list {
      display: flex;
      list-style: none;
      margin: 20px;
      padding: 0;
      border: 1px solid #000;
      li {
        margin: 5px;
      }
      a {
        background-color: rgb(179, 57, 81);
        color: #fff;
        text-decoration: none;
        padding: 1em 2em;
        &:hover {
          background-color: rgb(66, 28, 40);
          color: #fff;
        }
        display: inline-block; /* 使 a 标签可以撑开父元素 */
      }
    }
  }
}
.mastering-margin-collapsing {
  .box-01 {
    p:nth-child(1) {
      margin-bottom: 13px;
    }
    p:nth-child(2) {
      margin-top: 87px;
    }
  }
  .box-02 {
    section {
      margin-top: 13px;
      margin-bottom: 87px;
    }

    header {
      margin-top: 87px;
    }

    footer {
      margin-bottom: 13px;
    }
  }
  .box-03 {
    p {
      margin: 0;
    }
    div {
      margin-top: 13px;
      margin-bottom: 87px;
    }
  }
}
</style>
