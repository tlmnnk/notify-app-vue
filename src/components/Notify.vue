<template>
  <div class="notify">
    <transition-group tag="ul" name="fade">
      <li
        v-for="message in messages"
        :key="message.title"
        class="notify-list__item"
      >
        - {{ message.title }}
      </li>
    </transition-group>
    <el-button @click="onLoadMore" :disabled="isDisabled">Load more</el-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  computed: {
    isDisabled() {
      return this.isBtnDisabled();
    }
  },
  methods: {
    ...mapActions("notify", ["loadMore"]),
    ...mapGetters("notify", ["isBtnDisabled"]),
    onLoadMore() {
      this.loadMore();
      console.log(this.isBtnDisabled());
    }
  }
};
</script>

<style>
.notify-list__item {
  text-align: left;
  list-style-type: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
