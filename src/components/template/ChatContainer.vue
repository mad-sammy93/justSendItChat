<template>
  <div class="chat--container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content">
        <div class="message_list">
          <Message  :position="message_positoin">
            <template name="content"></template>
            <span>text</span>
          </Message>
        </div>
      </slot>
    </div>
    <div class="footer">
      <slot name="footer">
        <form action="send_message_function" method="POST">

          <input type="text" name="message" id="message-input">
          <button type="submit" class="message-send_button">send</button>
        </form>
      </slot>
    </div>
    <div class="feedback">
      person is typing ... 
    </div>
  </div>
  <h3 class="clients-total" id="client-total">Total clients:2</h3>
</template>

<script setup lang="ts">
import Message from "@/components/molecules/Message.vue"
// import io from "socket.io-client"

// const socket = io();
// socket.on('clients-total', (data:any) => {
//   console.log(data)
// })

// socket.emit('message', 'Test message');
const message_positoin = "left"
</script>
<style scoped lang="sass">
.chat
  &--container
    display: flex
    flex-direction: column
    height: 100vh
    min-width: 30rem
    background-color: #a9a9a9
</style>