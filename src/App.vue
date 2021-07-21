<template>
    <el-container style="height: 100%;margin: 0;padding: 0">
        <el-header style="padding: 0;margin: 0">
            <el-menu :default-active="this.$route.path" router
                     mode="horizontal"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b">
                <el-menu-item index="/">TS版本</el-menu-item>
                <el-menu-item index="/jsHome">JS版本</el-menu-item>
                <el-menu-item index="/notes">笔记</el-menu-item>
            </el-menu>
        </el-header>
        <el-main style="height: 100%;padding: 0;margin: 0">
            <router-view/>
        </el-main>
    </el-container>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }
</style>
