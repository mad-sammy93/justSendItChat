<template>
  <div class="message" :class="`message--${props.position}`">
    <div class="message--content">
      
    </div>
    <div class="message--details">
      <p>sender <span>time</span></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  position: String,
})
</script>
<style scoped lang="sass">
.message
  padding: 10px
  border-radius: 10px

  &--left
    margin: 10px auto 10px 5px
    max-width: 330px
    background-color: #7a7a7a

  &--right
    margin: 10px 5px 10px auto    
    background-color: #ae2d2d
    width: auto
    max-width: 330px
</style>