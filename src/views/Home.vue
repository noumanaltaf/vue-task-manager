<template>
  <AddItemForm />
  <TaskList />
  <Footer />
</template>

<script>
import Footer from "../components/Footer";
import AddItemForm from "../components/AddItemForm";
import TaskList from "../components/TaskList";

export default {
  name: "Home",
  components: {
    Footer,
    AddItemForm,
    TaskList,
  },
};
</script>