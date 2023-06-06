<template>
  <div class="wrapper">
    <div class="box header">Header</div>
    <div class="box sidebar">Sidebar</div>
    <div class="box content">
      Content <br />
      More content than we had before so this column is now quite tall.
    </div>
    <div class="box sidebar2">Sidebar2</div>
    <div class="box footer">Footer</div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-gap: 1em;
  grid-template-areas:
    'header'
    'sidebar'
    'content'
    'sidebar2'
    'footer';
  background-color: #fff;
  color: #444;
  margin: 40px;
  @media only screen and (min-width: 500px) {
    & {
      grid-template-columns: 20% auto;
      grid-template-areas:
        'header   header'
        'sidebar  content'
        'sidebar2 sidebar2'
        'footer   footer';
    }
  }

  @media only screen and (min-width: 600px) {
    & {
      grid-gap: 20px;
      grid-template-columns: 120px auto 120px;
      grid-template-areas:
        'header  header  header'
        'sidebar content sidebar2'
        'footer  footer  footer';
      max-width: 600px;
    }
  }
  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
  }
  .header {
    grid-area: header;
  }
  .sidebar {
    grid-area: sidebar;
  }
  .content {
    grid-area: content;
  }
  .sidebar2 {
    grid-area: sidebar2;
  }
  .footer {
    grid-area: footer;
  }
  .header,
  .footer {
    background-color: #999;
  }
  .sidebar2 {
    background-color: #ccc;
    color: #444;
  }
}
</style>
