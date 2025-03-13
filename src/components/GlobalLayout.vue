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
        <!-- Dynamic Button Based on Login Status -->
        <button
          v-if="isAuthenticated"
          class="btn btn-logout"
          @click="handleLogout"
        >
          Log Out
        </button>
        <button v-else class="btn btn-primary" @click="navigateToLogin">
          Log In
        </button>
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "GlobalLayout",
  setup() {
    const router = useRouter();
    const isAuthenticated = ref(false);

    // Check authentication status on component mount
    onMounted(() => {
      isAuthenticated.value =
        localStorage.getItem("isAuthenticated") === "true";
    });

    // Watch for changes in localStorage
    watch(
      () => localStorage.getItem("isAuthenticated"),
      (newValue) => {
        isAuthenticated.value = newValue === "true";
      }
    );

    const navigateToLogin = () => {
      router.push({ name: "Login" });
    };

    const handleLogout = () => {
      localStorage.removeItem("isAuthenticated");
      isAuthenticated.value = false;
      router.push({ name: "Home" });
    };

    return {
      isAuthenticated,
      navigateToLogin,
      handleLogout,
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

.auth-actions {
  display: flex;
  gap: var(--spacing-md);
}

.heading-menu {
  text-align: center;
  padding: var(--spacing-xl);
  background-color: var(--background-color);
}

.heading-menu h1 {
  color: var(--text-color);
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
}

.hotbox {
  padding: var(--spacing-xl);
  background-color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: var(--spacing-xl) auto;
  max-width: 800px;
  width: 100%;
  text-align: center;
}

.hotbox h2 {
  color: var(--text-color);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-md);
}

.hotbox p {
  color: var(--text-color);
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
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
