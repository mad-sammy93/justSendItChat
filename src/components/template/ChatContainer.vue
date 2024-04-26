<template>
  <div class="chat--container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content">
        <div class="message_list">
          <Message  :position="message_position">
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
  <h3 class="clients-total" id="clients-total">Total clients:{{clientCount}}</h3>
</template>

<script setup lang="ts">
import { ref,onMounted, onBeforeMount } from 'vue'
import Message from "@/components/molecules/Message.vue"
import io from "socket.io-client"


onMounted  (() => {
    const socket = io(); // Connect to your Express.js backend

    // Example: Sending a message to the server
    socket.emit('chatMessage', 'Hello from client!');

    // Example: Listening for incoming messages from the server
    socket.on('chatMessage', (message) => {
      console.log('Received message from server:', message);
      // Handle incoming message, e.g., update chat UI
    });

    // Example: Handling disconnection
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  })
  const clientCount = ref();
  const message_position = "right"


  clientCount.value = 0
  
  const socket = io()
  socket.on('clients-total', (data:any) => {
    clientCount.value = data
    console.log('clients-total',socket)   
    
  })
  
  
  socket.on('clients-total', (data:any) => {
    // clientsTotal?.innerText = `Total clients:${data}`
    console.log('clients-total',data)
  })
</script>
<style scoped lang="sass">
.chat
  &--container
    display: flex
    flex-direction: column
    height: 100vh
    max-height: 420px
    max-width: 100vw
    min-width: 30rem
    background-color: #2f2f2f
</style>