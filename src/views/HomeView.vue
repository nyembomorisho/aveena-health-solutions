<template>
  <main class="home-container">
    <div class="home-content">
      <h1>Welcome to Aveena Health Solutions</h1>
      <p>Your trusted healthcare platform.</p>
      <button class="btn btn-primary" @click="navigateToLogin">
        Get Started
      </button>
    </div>
  </main>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "HomeView",
  setup() {
    const router = useRouter();

    const navigateToLogin = () => {
      router.push({ name: "Login" });
    };

    return {
      navigateToLogin,
    };
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: var(--spacing-xl);
  box-sizing: border-box;
}

.home-content {
  text-align: center;
  max-width: 800px;
}

h1 {
  color: var(--text-color);
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
}

p {
  color: var(--primary-color);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-lg);
}
</style>
