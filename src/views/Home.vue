<template>
  <AddForm />
  <TaskList />
  <Footer />
</template>

<script>
import Footer from "../components/Footer";
import AddForm from "../components/AddForm";
import TaskList from "../components/TaskList";

export default {
  name: "Home",
  components: {
    Footer,
    AddForm,
    TaskList,
  },
};
</script>