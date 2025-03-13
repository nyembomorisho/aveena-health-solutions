<template>
  <div class="global-layout">
    <!-- Navigation Menu -->
    <header class="app-header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Aveena Health Solutions Logo" />
      </div>
      <nav class="nav-menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/services">Services</router-link>
      </nav>
      <div class="auth-actions">
        <button class="login-button" @click="navigateToLogin">Log In</button>
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "GlobalLayout",
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
.global-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 40px;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
}

.nav-menu a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
}

.nav-menu a.router-link-exact-active {
  color: #42b983;
}

.auth-actions .login-button {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.auth-actions .login-button:hover {
  background-color: #3aa876;
}

@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .nav-menu {
    margin: 1rem 0;
  }

  .auth-actions {
    width: 100%;
    text-align: right;
  }
}
</style>
