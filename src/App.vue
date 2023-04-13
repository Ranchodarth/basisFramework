<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script setup>
console.log('环境变量', import.meta.env.MODE);
function guessF(list, item) {
    let low = 0;
    let high = list.length - 1;
    let mid = 0;
    let guess = 0;
    let num = 1;
    while (low <= high) {
        console.log('test1');
        mid = Math.floor((low + high) / 2);
        guess = list[mid];
        console.log('test2', guess, high);
        if (guess === item) {
            console.log('test3');
            return num;
        }
        if (guess > item) {
            console.log('test4', guess);
            high = mid - 1;
            num++;
        }
        else {
            console.log('test5', guess);
            high = mid + 1;
            num++;
        }
    }
    console.log('test6');
    return "None"
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log('test', guessF(arr, 1));
</script>

<style lang="scss" scoped></style>