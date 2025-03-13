<template>
  <main class="landing-container">
    <div class="landing-content">
      <h1>Welcome to Aveena Health Solutions</h1>
      <p>Your trusted healthcare platform.</p>
      <button class="cta-button" @click="navigateToLogin">Get Started</button>
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
      router.push({ name: "Login" }); // Assuming you have a Login route
    };

    return {
      navigateToLogin,
    };
  },
};
</script>

<style scoped>
.landing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #f5f5f5; /* Light background color */
  padding: 2rem;
  box-sizing: border-box;
}

.landing-content {
  text-align: center;
  max-width: 800px; /* Limit width for readability */
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  color: #42b983;
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
}

.cta-button:hover {
  background-color: #3aa876;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .cta-button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}
</style>
