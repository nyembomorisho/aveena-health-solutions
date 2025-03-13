import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"; // Import the CSS

const app = createApp(App);

// Configure toast options
const toastOptions = {
  timeout: 3000, // Toast disappears after 3 seconds
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
};

app.use(Toast, toastOptions); // Use the toast plugin
app.use(router);
app.use(store);
app.mount("#app");
