<template>
  <div class="chat--container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content">
        <Message>
          <span>text</span>
        </Message>
      </slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Message from "@/components/molecules/Message.vue"
</script>
<style scoped lang="sass">
.chat
  &--container
    display: flex
    flex-direction: column
    height: 100vh
    width: 100vw
    background-color: #a9a9a9
</style>