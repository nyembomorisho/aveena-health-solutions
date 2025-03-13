<template>
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
      <div class="patient-list">
        <div v-for="patient in patients" :key="patient.id" class="patient-card">
          <h3>{{ patient.name }}</h3>
          <p>{{ patient.email }}</p>
          <p>{{ patient.phone }}</p>
        </div>
      </div>
    </section>

    <!-- Appointments Section -->
    <section class="appointments">
      <h2>Appointments</h2>
      <div class="calendar">
        <!-- Calendar component can be added here -->
        <p>Calendar view coming soon...</p>
      </div>
    </section>

    <!-- Tasks Section -->
    <section class="tasks">
      <h2>Tasks</h2>
      <div class="task-list">
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
      <div class="message-list">
        <div v-for="message in messages" :key="message.id" class="message-card">
          <h3>{{ message.sender }}</h3>
          <p>{{ message.content }}</p>
          <p>{{ message.timestamp }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";

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
    ]);

    return {
      appointments,
      tasks,
      messages,
      patients,
    };
  },
};
</script>

<style scoped>
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

.patient-list,
.task-list,
.message-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.patient-card,
.task-card,
.message-card {
  padding: var(--spacing-md);
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.patient-card h3,
.task-card h3,
.message-card h3 {
  color: var(--text-color);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
}

.patient-card p,
.task-card p,
.message-card p {
  color: var(--text-color);
  font-size: var(--font-size-base);
}
</style>
