<template>
    <div class="app">
        <div class="demo-button">
            <div class="c-row">
                <c-button>默认按钮</c-button>
                <c-button type="primary">主要按钮</c-button>
                <c-button type="success">成功按钮</c-button>
                <c-button type="info">信息按钮</c-button>
                <c-button type="warning">警告按钮</c-button>
                <c-button type="danger">危险按钮</c-button>
            </div>
            <div class="c-row">
                <c-button plain>朴素按钮</c-button>
                <c-button type="primary" plain>主要按钮</c-button>
                <c-button type="success" plain>成功按钮</c-button>
                <c-button type="info" plain>信息按钮</c-button>
                <c-button type="warning" plain>警告按钮</c-button>
                <c-button type="danger" plain>危险按钮</c-button>
            </div>

            <div class="c-row">
                <c-button round>圆角按钮</c-button>
                <c-button type="primary" round>主要按钮</c-button>
                <c-button type="success" round>成功按钮</c-button>
                <c-button type="info" round>信息按钮</c-button>
                <c-button type="warning" round>警告按钮</c-button>
                <c-button type="danger" round>危险按钮</c-button>
            </div>

            <div class="c-row">
                <c-button disabled>圆角按钮</c-button>
                <c-button type="primary" disabled>主要按钮</c-button>
                <c-button type="success" disabled>成功按钮</c-button>
                <c-button type="info" disabled>信息按钮</c-button>
                <c-button type="warning" disabled>警告按钮</c-button>
                <c-button type="danger" disabled>危险按钮</c-button>
            </div>
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


            .c-row {
                display: flex;
                justify-content: center;
                margin-bottom: 20px;

            }
        }
    }
</style>