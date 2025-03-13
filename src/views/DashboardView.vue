<template>
  <main class="dashboard-container">
    <h1>Welcome to Your Dashboard</h1>
    <p>This is your personalized dashboard.</p>
    <button class="logout-button" @click="handleLogout">Log Out</button>
  </main>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "DashboardView",
  setup() {
    const router = useRouter();

    const handleLogout = () => {
      localStorage.removeItem("isAuthenticated");
      router.push({ name: "Home" }); // Redirect to home page
    };

    return {
      handleLogout,
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
  box-sizing: border-box;
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

.logout-button {
  padding: 0.75rem 1.5rem;
  background-color: #ff4d4d;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
}

.logout-button:hover {
  background-color: #e63939;
}
</style>
