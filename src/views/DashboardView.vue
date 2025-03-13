<template>
  <div class="container">
    <main class="dashboard-container">
      <!-- Overview Section -->
      <section class="overview">
        <h2>Overview</h2>
        <div class="metrics">
          <div class="metric">
            <h3>Appointments</h3>
            <p>{{ appointments.length }}</p>
          </div>
          <div class="metric">
            <h3>Tasks</h3>
            <p>{{ tasks.length }}</p>
          </div>
          <div class="metric">
            <h3>Messages</h3>
            <p>{{ messages.length }}</p>
          </div>
        </div>
      </section>

      <!-- Patients Section -->
      <section class="patients">
        <h2>Patients</h2>
        <div class="patient-controls">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search patients..."
            class="search-input"
          />
          <select v-model="groupBy" class="group-select">
            <option value="none">None - Show All</option>
            <option value="date">Date</option>
            <option value="patient">Patient</option>
            <option value="task">Task</option>
            <option value="status">Status</option>
          </select>
        </div>
        <table class="patient-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="patient in paginatedPatients" :key="patient.id">
              <td>{{ patient.name }}</td>
              <td>{{ patient.email }}</td>
              <td>{{ patient.phone }}</td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">
            Previous
          </button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">
            Next
          </button>
        </div>
      </section>

      <!-- Appointments Section -->
      <section class="appointments">
        <h2>Appointments</h2>
        <div class="calendar">
          <p>Calendar view coming soon...</p>
        </div>
      </section>

      <!-- Tasks Section -->
      <section class="tasks">
        <h2>Tasks</h2>
        <div class="task-list flex-wrap">
          <!-- Added flex-wrap here -->
          <div v-for="task in tasks" :key="task.id" class="task-card">
            <h3>{{ task.title }}</h3>
            <p>{{ task.description }}</p>
            <p>Status: {{ task.status }}</p>
          </div>
        </div>
      </section>

      <!-- Messages Section -->
      <section class="messages">
        <h2>Messages</h2>
        <div class="message-list flex-wrap">
          <!-- Added flex-wrap here -->
          <div
            v-for="message in messages"
            :key="message.id"
            class="message-card"
          >
            <h3>{{ message.sender }}</h3>
            <p>{{ message.content }}</p>
            <p>{{ message.timestamp }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "DashboardView",
  setup() {
    // Mock data (replace with API calls)
    const appointments = ref([
      { id: 1, date: "2023-10-10", patient: "John Doe" },
      { id: 2, date: "2023-10-11", patient: "Jane Smith" },
    ]);

    const tasks = ref([
      {
        id: 1,
        title: "Follow up with John",
        description: "Check on recovery progress",
        status: "Pending",
      },
      {
        id: 2,
        title: "Review lab results",
        description: "Analyze blood test results",
        status: "Completed",
      },
    ]);

    const messages = ref([
      {
        id: 1,
        sender: "John Doe",
        content: "Feeling better, thank you!",
        timestamp: "2023-10-09 10:00 AM",
      },
      {
        id: 2,
        sender: "Jane Smith",
        content: "Can we reschedule?",
        timestamp: "2023-10-09 11:00 AM",
      },
    ]);

    const patients = ref([
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "987-654-3210",
      },
      // Add more patients as needed
    ]);

    const searchQuery = ref("");
    const groupBy = ref("none");
    const currentPage = ref(1);
    const itemsPerPage = 25;

    const filteredPatients = computed(() => {
      return patients.value.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const paginatedPatients = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredPatients.value.slice(start, end);
    });

    const totalPages = computed(() =>
      Math.ceil(filteredPatients.value.length / itemsPerPage)
    );

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    return {
      appointments,
      tasks,
      messages,
      patients,
      searchQuery,
      groupBy,
      currentPage,
      paginatedPatients,
      totalPages,
      nextPage,
      prevPage,
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);
  box-sizing: border-box;
  margin: 0 auto;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
    padding-left: 0;
    padding-right: 0;
  }
}

.dashboard-container {
  padding: var(--spacing-xl);
}

.overview {
  margin-bottom: var(--spacing-xl);
}

.metrics {
  display: flex;
  gap: var(--spacing-lg);
}

.metric {
  flex: 1;
  padding: var(--spacing-md);
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.metric h3 {
  color: var(--text-color);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
}

.metric p {
  color: var(--primary-color);
  font-size: var(--font-size-xl);
}

.patients,
.appointments,
.tasks,
.messages {
  margin-bottom: var(--spacing-xl);
}

h2 {
  color: green; /* Updated heading color */
}

.patient-controls {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.search-input,
.group-select {
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}

.patient-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--spacing-md);
}

.patient-table th,
.patient-table td {
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  text-align: left;
}

.patient-table th {
  background-color: #f0f0f0; /* Grey background for table header */
  color: var(--text-color); /* Ensure text is visible */
}

.pagination {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.pagination button {
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
}

.pagination button:disabled {
  background-color: var(--disabled-color);
  cursor: not-allowed;
}

.task-list,
.message-list {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); /* Smaller boxes */
  gap: var(--spacing-md);
}

.task-card,
.message-card {
  padding: var(--spacing-md);
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-card h3,
.message-card h3 {
  color: var(--text-color);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
}

.task-card p,
.message-card p {
  color: var(--text-color);
  font-size: var(--font-size-base);
}
</style>
