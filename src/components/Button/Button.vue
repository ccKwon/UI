<template>
    <div>
        <button type="button" class="c-button" :class="[
            type ? 'c-button--' + type : '',
            {
                //朴素按钮
                'is-plain': plain,
                // 圆角按钮
                'is-round': round
            }
        ]">
            <span>
                <slot></slot>

            </span>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                default: 'default',
                type: String,
            },
            plain: Boolean,
            round: Boolean
        }

    }
</script>

<style lang="scss">
    .c-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;

        &:focus,
        &:hover {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff
        }

        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: none
        }
    }

    .c-button.is-round {
        border-radius: 20px;
        padding: 12px 23px
    }

    .c-button--primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff
    }

    .c-button--primary:focus,
    .c-button--primary:hover {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff
    }

    .c-button--primary:active {
        outline: none
    }

    .c-button--primary.is-active,
    .c-button--primary:active {
        background: #3a8ee6;
        border-color: #3a8ee6;
        color: #fff
    }

    .c-button--primary.is-disabled,
    .c-button--primary.is-disabled:active,
    .c-button--primary.is-disabled:focus,
    .c-button--primary.is-disabled:hover {
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff
    }

    .c-button--primary.is-plain {
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff
    }

    .c-button--primary.is-plain:focus,
    .c-button--primary.is-plain:hover {
        background: #409eff;
        border-color: #409eff;
        color: #fff
    }

    .c-button--primary.is-plain:active {
        background: #3a8ee6;
        border-color: #3a8ee6;
        color: #fff;
        outline: none
    }

    .c-button--primary.is-plain.is-disabled,
    .c-button--primary.is-plain.is-disabled:active,
    .c-button--primary.is-plain.is-disabled:focus,
    .c-button--primary.is-plain.is-disabled:hover {
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff
    }


    .c-button--success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a
    }

    .c-button--success:focus,
    .c-button--success:hover {
        background: #85ce61;
        border-color: #85ce61;
        color: #fff
    }

    .c-button--success:active {
        outline: none
    }

    .c-button--success.is-active,
    .c-button--success:active {
        background: #5daf34;
        border-color: #5daf34;
        color: #fff
    }

    .c-button--success.is-disabled,
    .c-button--success.is-disabled:active,
    .c-button--success.is-disabled:focus,
    .c-button--success.is-disabled:hover {
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d
    }

    .c-button--success.is-plain {
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0
    }

    .c-button--success.is-plain:focus,
    .c-button--success.is-plain:hover {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff
    }

    .c-button--success.is-plain:active {
        background: #5daf34;
        border-color: #5daf34;
        color: #fff;
        outline: none
    }

    .c-button--success.is-plain.is-disabled,
    .c-button--success.is-plain.is-disabled:active,
    .c-button--success.is-plain.is-disabled:focus,
    .c-button--success.is-plain.is-disabled:hover {
        color: #a4da89;
        background-color: #f0f9eb;
        border-color: #e1f3d8
    }

    .c-button--warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c
    }

    .c-button--warning:focus,
    .c-button--warning:hover {
        background: #ebb563;
        border-color: #ebb563;
        color: #fff
    }

    .c-button--warning:active {
        outline: none
    }

    .c-button--warning.is-active,
    .c-button--warning:active {
        background: #cf9236;
        border-color: #cf9236;
        color: #fff
    }

    .c-button--warning.is-disabled,
    .c-button--warning.is-disabled:active,
    .c-button--warning.is-disabled:focus,
    .c-button--warning.is-disabled:hover {
        color: #fff;
        background-color: #f3d19e;
        border-color: #f3d19e
    }

    .c-button--warning.is-plain {
        color: #e6a23c;
        background: #fdf6ec;
        border-color: #f5dab1
    }

    .c-button--warning.is-plain:focus,
    .c-button--warning.is-plain:hover {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff
    }

    .c-button--warning.is-plain:active {
        background: #cf9236;
        border-color: #cf9236;
        color: #fff;
        outline: none
    }

    .c-button--warning.is-plain.is-disabled,
    .c-button--warning.is-plain.is-disabled:active,
    .c-button--warning.is-plain.is-disabled:focus,
    .c-button--warning.is-plain.is-disabled:hover {
        color: #f0c78a;
        background-color: #fdf6ec;
        border-color: #faecd8
    }

    .c-button--danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c
    }

    .c-button--danger:focus,
    .c-button--danger:hover {
        background: #f78989;
        border-color: #f78989;
        color: #fff
    }

    .c-button--danger:active {
        outline: none
    }

    .c-button--danger.is-active,
    .c-button--danger:active {
        background: #dd6161;
        border-color: #dd6161;
        color: #fff
    }

    .c-button--danger.is-disabled,
    .c-button--danger.is-disabled:active,
    .c-button--danger.is-disabled:focus,
    .c-button--danger.is-disabled:hover {
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6
    }

    .c-button--danger.is-plain {
        color: #f56c6c;
        background: #fef0f0;
        border-color: #fbc4c4
    }

    .c-button--danger.is-plain:focus,
    .c-button--danger.is-plain:hover {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff
    }

    .c-button--danger.is-plain:active {
        background: #dd6161;
        border-color: #dd6161;
        color: #fff;
        outline: none
    }

    .c-button--danger.is-plain.is-disabled,
    .c-button--danger.is-plain.is-disabled:active,
    .c-button--danger.is-plain.is-disabled:focus,
    .c-button--danger.is-plain.is-disabled:hover {
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2
    }

    .c-button--info {
        color: #fff;
        background-color: #909399;
        border-color: #909399
    }

    .c-button--info:focus,
    .c-button--info:hover {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff
    }

    .c-button--info:active {
        outline: none
    }

    .c-button--info.is-active,
    .c-button--info:active {
        background: #82848a;
        border-color: #82848a;
        color: #fff
    }

    .c-button--info.is-disabled,
    .c-button--info.is-disabled:active,
    .c-button--info.is-disabled:focus,
    .c-button--info.is-disabled:hover {
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc
    }

    .c-button--info.is-plain {
        color: #909399;
        background: #f4f4f5;
        border-color: #d3d4d6
    }

    .c-button--info.is-plain:focus,
    .c-button--info.is-plain:hover {
        background: #909399;
        border-color: #909399;
        color: #fff
    }

    .c-button--info.is-plain:active {
        background: #82848a;
        border-color: #82848a;
        color: #fff;
        outline: none
    }

    .c-button--info.is-plain.is-disabled,
    .c-button--info.is-plain.is-disabled:active,
    .c-button--info.is-plain.is-disabled:focus,
    .c-button--info.is-plain.is-disabled:hover {
        color: #bcbec2;
        background-color: #f4f4f5;
        border-color: #e9e9eb
    }
</style>