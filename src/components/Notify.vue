<template>
  <div class="notify">
    <transition-group tag="ul">
      <li
        v-for="message in messages"
        :key="message.title"
        class="notify-list__item"
      >
        {{ message.title }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.notify-list__item {
  list-style-type: none;
}
</style>
