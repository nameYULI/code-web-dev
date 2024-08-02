<template>
    <div class="container">
        <span>container</span>
        <div class="father">
            <span>father</span>
            <div class="children">
                <el-input />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container,
.father,
.children {
    padding: 30px;
    border: 1px solid #999;
}

.container:focus-within span {
    opacity: 0;
}
</style>