<template>
    <div class="class-4">
        <el-input v-model="input" placeholder="请在这里输入" />
        <input type="text" placeholder="请在这里输入请在这里输入请在这里输入请在这里输入请在这里输入">
    </div>
    <input type="text" placeholder="请在这里输入请在这里输入请在这里输入请在这里输入请在这里输入">
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
<style lang="scss">
.class-4 {
    margin: 20px 0;

    .el-input {
        margin-bottom: 20px;
    }

    input:placeholder-shown {
        border: 2px solid darkorange;
        text-overflow: ellipsis;
    }
}
</style>