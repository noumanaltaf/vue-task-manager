<template>
  <div
    :class="{ task: true, completed: task.completed }"
    :title="task.title"
    @dblclick="toggleTask(task.id)"
  >
    <h5>{{ task.title }}</h5>
    <p class="description" :title="task.description">
      {{ task.description }}
    </p>
    <DeleteSvg class="delete" @click="removeTask(task.id)" />
  </div>
</template>

<script>
import DeleteSvg from "../assets/icons/Delete";
import { mapActions } from "vuex";

export default {
  name: "Task",
  props: {
    task: Object,
  },
  components: {
    DeleteSvg,
  },
  methods: {
    ...mapActions(["removeTask", "toggleTask"]),
  },
};
</script>

<style scoped>
.description {
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 30px);
}
.task {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
}
.task.completed {
  border-left: 2px solid lightseagreen;
}
.delete {
  position: absolute;
  top: 25px;
  right: 10px;
  cursor: pointer;
}
h5 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 30px);
}
</style>