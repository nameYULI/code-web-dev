<template>
  <div class="wrapper">
    <div class="box header">Header</div>
    <div class="box sidebar">Sidebar</div>
    <div class="box content">
      Content <br />
      More content than we had before so this column is now quite tall.
    </div>
    <div class="box footer">Footer</div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 120px);
  grid-template-areas:
    '. header  header'
    'sidebar content content'
    'footer  footer  footer';
  background-color: #fff;
  color: #444;
  margin: 40px;
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
  .footer {
    grid-area: footer;
  }
  .header,
  .footer {
    background-color: #999;
  }
}
</style>
