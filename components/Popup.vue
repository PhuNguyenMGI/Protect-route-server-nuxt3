<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-[#2a363ecc] flex items-center justify-center z-[90001]"
    @click.self="handleClose"
  >
    <div
      class="w-[341px] overflow-auto max-h-[90vh] bg-white border border-[#D3D6D7] shadow-[0_10px_6px_#00000029] rounded-[3px] relative"
      :class="className"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  handleClose: Function,
  className: String,
});
</script>
