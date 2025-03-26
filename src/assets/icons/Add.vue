<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <mask id="mask0_7174_2140" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="21"
            height="20">
            <rect x="0.599609" width="20" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_7174_2140)">
            <path
                d="M9.97477 10.625H5.18311V9.37498H9.97477V4.58331H11.2248V9.37498H16.0164V10.625H11.2248V15.4166H9.97477V10.625Z"
                :fill="color" />
        </g>
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    color?: string;
}>()

</script>