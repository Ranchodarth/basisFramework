<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script setup>
console.log('环境变量',import.meta.env.MODE);
</script>

<style lang="scss" scoped></style>