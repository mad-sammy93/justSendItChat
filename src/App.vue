<script setup lang="ts">
import MainWrapper from "@/components/template/MainWrapper.vue"
import ChatContainer from "@/components/template/ChatContainer.vue"
</script>

<template>
  <MainWrapper>
    <template #header>header</template>
    <template #content>
      <ChatContainer>

      </ChatContainer>
    </template>
    <template #footer>footer</template>
  </MainWrapper>
</template>

<style scoped></style>
