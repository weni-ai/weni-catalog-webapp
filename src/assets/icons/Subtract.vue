<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <mask id="mask0_7174_2364" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="21"
            height="20">
            <rect x="0.600098" width="20" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_7174_2364)">
            <path d="M5.8501 10.5416V9.45831H15.3501V10.5416H5.8501Z" :fill="color" />
        </g>
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    color?: string;
}>()

</script>