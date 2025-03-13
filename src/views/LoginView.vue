<template>
  <main class="login-container">
    <div class="login-content">
      <!-- Disclaimer Message -->
      <div class="disclaimer">
        <p>
          This system is intended for business use only. All data herein is
          considered confidential and proprietary. Unauthorized access, use,
          modification, destruction, or disclosure of information supported by
          this system will result in prosecution.
        </p>
        <button class="disclaimer-button" @click="acceptDisclaimer">OK</button>
      </div>

      <!-- Login Form -->
      <h1>Log In</h1>
      <form @submit.prevent="handleLogin">
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
        <button type="submit" class="login-button">Log In</button>
      </form>
      <p class="help-text">If you need assistance, please contact support.</p>
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
    const toast = useToast(); // Initialize toast
    const email = ref("");
    const password = ref("");

    const handleLogin = () => {
      // Mock login logic (replace with API call)
      if (email.value && password.value) {
        // Simulate a 200 success response
        setTimeout(() => {
          localStorage.setItem("isAuthenticated", "true");
          toast.success("Login successful. Redirecting to dashboard..."); // Show success toast
          router.push({ name: "Dashboard" }); // Redirect to dashboard
        }, 1000); // Simulate a 1-second delay for API call
      } else {
        toast.error("Please enter valid credentials."); // Show error toast
      }
    };

    const acceptDisclaimer = () => {
      toast.info("Disclaimer accepted. Proceed to login."); // Show disclaimer toast
    };

    return {
      email,
      password,
      handleLogin,
      acceptDisclaimer,
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
  background-color: #f5f5f5;
  padding: 2rem;
  box-sizing: border-box;
}

.login-content {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.disclaimer {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: center;
}

.disclaimer p {
  color: #2c3e50;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.disclaimer-button {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
}

.disclaimer-button:hover {
  background-color: #3aa876;
}

h1 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
}

.login-button:hover {
  background-color: #3aa876;
}

.help-text {
  margin-top: 1rem;
  color: #2c3e50;
  font-size: 0.875rem;
}

.login-footer {
  margin-top: 2rem;
  text-align: center;
  color: #666;
  font-size: 0.875rem;
}

.login-footer p {
  margin: 0.25rem 0;
}
</style>
