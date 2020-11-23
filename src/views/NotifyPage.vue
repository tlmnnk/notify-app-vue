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
import Notify from "../components/Notify.vue";

export default {
  components: {
    Notify
  },
  data: () => ({
    messages: [
      { title: "message 1" },
      { title: "message 2" },
      { title: "message 3" },
      { title: "message 4" },
      { title: "message 5" }
    ]
  })
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
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}

.notify__title p {
  font-size: 24px;
  text-align: left;
}
</style>
