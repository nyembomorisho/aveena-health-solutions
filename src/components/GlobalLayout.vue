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
        <button class="btn btn-primary" @click="navigateToLogin">Log In</button>
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
      router.push({ name: "Login" });
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
  padding: var(--spacing-xl);
  background-color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 40px;
}

.nav-menu {
  display: flex;
  gap: var(--spacing-lg);
}

.nav-menu a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
}

.nav-menu a.router-link-exact-active {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--spacing-md);
  }

  .nav-menu {
    margin: var(--spacing-md) 0;
  }

  .auth-actions {
    width: 100%;
    text-align: right;
  }
}
</style>
