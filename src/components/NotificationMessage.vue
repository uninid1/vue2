<template>
  <div v-if="visible" class="notification">
    <p>{{ message }}</p>
    <button @click="closeNotification">Закрыть</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      message: 'Уведомление',
    };
  },
  methods: {
    closeNotification() {
      this.visible = false;
    },
  },
};
</script>

<style>
.notification {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 10px;
}
</style>