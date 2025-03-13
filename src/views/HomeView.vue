<template>
  <div class="home-view">
    <AppHeader />
    <main class="home-content">
      <h1>Welcome to Aveena Health Solutions</h1>
      <p>Your trusted healthcare platform.</p>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "HomeView",
  components: {
    AppHeader,
  },
};
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.home-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  color: #42b983;
  font-size: 1.25rem;
}
</style>
