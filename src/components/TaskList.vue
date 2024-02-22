<template>
  <p>Double tap to change status.</p>
  <ul class="task-list-container">
    <li v-bind:key="index" v-for="(task, index) in tasks">
      <Task :task="task" />
    </li>
  </ul>
</template>

<script>
import Task from "../components/Task";
import { mapState } from "vuex";

export default {
  name: "TaskList",
  components: {
    Task,
  },
  computed: {
    ...mapState(["tasks"]),
  },
};
</script>

<style scoped>
ul {
  max-height: 250px;
  overflow: auto;
}
li {
  text-align: start;
  flex-shrink: 0;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
}
p {
  padding: 0;
  margin: 0;
  font-style: italic;
}
</style>