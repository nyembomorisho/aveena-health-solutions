<template>
  <main class="login-container">
    <div class="login-content">
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
      <p class="signup-link">
        Don't have an account? <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "LoginView",
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const handleLogin = () => {
      // Mock login logic (replace with API call)
      if (email.value && password.value) {
        localStorage.setItem("isAuthenticated", "true");
        router.push({ name: "Dashboard" }); // Redirect to dashboard
      } else {
        alert("Please enter valid credentials.");
      }
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
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

.signup-link {
  margin-top: 1rem;
  color: #2c3e50;
}

.signup-link a {
  color: #42b983;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
