<template>
    <teleport to="body">
        <transition name="dialog-fade">
            <div class="my_element" v-show="modelValue">
                <div class="my_dialog" style="margin-top: 15vh;">
                    <div class="my_header">
                        <span class="my_title">我是一个弹窗</span>
                        <button class="my_button"
                                @click="$emit('update:modelValue', $event.target.value = false)">
                            <i class="el-icon el-icon-close"></i>
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script lang="js">
    export default {
        name: "TSTeleportDialog",
        emits: ['update:modelValue'],
        props: {
            modelValue: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .my_element {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2000;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        overflow: auto;
    }
    .my_dialog {
        position: relative;
        margin: 0 auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0 0 0 0.3);
        box-sizing: border-box;
        width: 50%;
    }
    .my_header {
        padding: 20px 20px 20px;
    }
    .my_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
    }
    .my_button{
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 20px;
        margin: auto;
        cursor: pointer;
        font-size: 16px;
    }
</style>
