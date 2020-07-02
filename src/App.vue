<template>
    <div class="app">
        <div class="demo-button">
            <c-button type="primary">主要按钮</c-button>
            <c-button type="success">成功按钮</c-button>
            <c-button type="info">信息按钮</c-button>
            <c-button type="warning">警告按钮</c-button>
            <c-button type="danger">危险按钮</c-button>
            <c-button>默认</c-button>
        </div>

    </div>
</template>


<script>
    import CButton from './components/Button/Button.vue'

    export default {
        name: 'app',
        components: {
            CButton
        }
    }
</script>

<style lang="scss" scoped>
    .app {
        text-align: center;


        .demo-button {
            display: flex;

            justify-content: center;
        }
    }
</style>