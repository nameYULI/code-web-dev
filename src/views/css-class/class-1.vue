<template>
    <div class="container">
        container
        <div class="father">
            father
            <div class="children">
                children
                <el-button>点我</el-button>
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

.container:focus-within {
    background: #ff5722;
}

.father:focus-within {
    background: #ffeb3b;
}

.children:focus-within {
    background: #4caf50;
}
</style>