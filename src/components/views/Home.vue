<template>
  <input class="input" name="name" type="text" />
  <textarea name="description" id="" cols="30" rows="10"></textarea>
  <button class="btn">Add task</button>
  <ul class="task-list-container">
    <li>
      <div class="item">
        <h5>Task 1</h5>
        <p class="description">this is dummy description</p>
        <DeleteSvg class="delete" />
      </div>
    </li>
    <li>
      <div class="item">
        <h5>Task 2</h5>
        <p class="description">this is dummy description</p>
        <DeleteSvg class="delete" />
      </div>
    </li>
  </ul>
  <Footer />
</template>

<script>
import DeleteSvg from "../../assets/icons/Delete";
import Footer from "../../components/Footer";

export default {
  name: "Home",
  components: {
    DeleteSvg,
    Footer,
  },
};
</script>
