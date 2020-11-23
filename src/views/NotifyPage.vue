<template>
  <div class="notify">
    <div class="container">
      <el-card class="box-card notify__wrappper">
        <div class="notify__title">
          <p>Notify App</p>
          <!-- svg -->
        </div>
        <div class="notify__content">
          <Notify :messages="messages" />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Notify from "../components/Notify.vue";

export default {
  components: {
    Notify
  },
  data: () => ({
    loading: false
    //messages: []
  }),
  computed: {
    messages() {
      return this.loadedMessages();
    }
  },
  mounted() {
    this.fetchMessages();
  },
  methods: {
    ...mapGetters("notify", ["loadedMessages"]),
    ...mapActions("notify", ["fetchMessages"])
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
.notify__wrappper {
  width: 400px;
}
.notify__content {
  display: flex;
  flex-direction: column;
  min-height: 300px;
}

.notify__title p {
  font-size: 24px;
  text-align: left;
}
</style>
