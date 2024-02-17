<template>
  <div class="task" :title="task.title">
    <h5>{{ task.title }}</h5>
    <p class="description" :title="task.description">
      {{ task.description }}
    </p>
    <DeleteSvg class="delete" />
  </div>
</template>

<script>
import DeleteSvg from "../assets/icons/Delete";

export default {
  name: "Task",
  props: {
    task: Object,
  },
  components: {
    DeleteSvg,
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
  padding: 10px 0;
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