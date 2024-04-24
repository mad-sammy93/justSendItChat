
<script setup lang="ts">

</script>
<template>
  <div class="main--wrapper">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style scoped lang="sass">

</style>