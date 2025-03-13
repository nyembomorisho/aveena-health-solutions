<template>
  <main class="login-container">
    <div class="login-content">
      <!-- Login Form -->
      <h1>Log In</h1>
      <form @submit.prevent="showDisclaimer">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Log In</button>
      </form>
      <p class="help-text">If you need assistance, please contact support.</p>
    </div>

    <!-- Disclaimer Modal -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <p>
          This system is intended for business use only. All data herein is
          considered confidential and proprietary. Unauthorized access, use,
          modification, destruction, or disclosure of information supported by
          this system will result in prosecution.
        </p>
        <button class="btn btn-primary" @click="handleLogin">OK</button>
      </div>
    </div>

    <footer class="login-footer">
      <p>Phone Support: 877-399-6538</p>
      <p>Monday-Friday 7:00 AM - 7:00 PM Central Time</p>
      <p>Copyright © 2023 Aveena Health Solutions. All rights reserved.</p>
    </footer>
  </main>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

export default {
  name: "LoginView",
  setup() {
    const router = useRouter();
    const toast = useToast();
    const email = ref("");
    const password = ref("");
    const showModal = ref(false);

    const showDisclaimer = () => {
      if (email.value && password.value) {
        showModal.value = true; // Show the disclaimer modal
      } else {
        toast.error("Please enter valid credentials.");
      }
    };

    const handleLogin = () => {
      showModal.value = false; // Hide the modal
      // Simulate a login request
      setTimeout(() => {
        localStorage.setItem("isAuthenticated", "true");
        toast.success("Login successful. Redirecting to dashboard...");
        router.push({ name: "Dashboard" });
      }, 1000);
    };

    return {
      email,
      password,
      showModal,
      showDisclaimer,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: var(--spacing-xl);
  box-sizing: border-box;
}

.login-content {
  background-color: var(--white);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
}

.form-group {
  margin-bottom: var(--spacing-lg);
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-sm);
  color: var(--text-color);
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  box-sizing: border-box;
}

.help-text {
  margin-top: var(--spacing-md);
  color: var(--text-color);
  font-size: var(--font-size-base);
}

.login-footer {
  margin-top: var(--spacing-xl);
  text-align: center;
  color: var(--text-color);
  font-size: var(--font-size-base);
}

.login-footer p {
  margin: var(--spacing-sm) 0;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: var(--white);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.modal-content p {
  margin-bottom: var(--spacing-lg);
  color: var(--text-color);
  font-size: var(--font-size-base);
}
</style>
