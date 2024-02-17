<template>
  <input class="input" placeholder="title" name="title" type="text" />
  <textarea
    name="description"
    placeholder="description"
    id=""
    cols="30"
    rows="10"
  ></textarea>
  <button class="btn ripple">Add task</button>
</template>

<script>
export default {
  name: "AddItemForm",
};
</script>

<style scoped>
.input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.input:hover {
  border-color: #666;
}
.input:focus {
  outline: none; /* Remove default focus outline */
  border-color: #007bff; /* Border color when focused */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Optional: Add a box shadow when focused */
}

textarea {
  height: 60px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
}
textarea:hover {
  border-color: #666;
}
textarea:focus {
  outline: none; /* Remove default focus outline */
  border-color: #007bff; /* Border color when focused */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Optional: Add a box shadow when focused */
}

/* Button style */
.btn {
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  box-shadow: 0 0 4px #999;
  outline: none;
}
.btn.ripple {
  background-position: center;
  transition: background 0.8s;
}
.btn.ripple:hover {
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
    center/15000%;
}
.btn.ripple:active {
  background-color: #6eb9f7;
  background-size: 100%;
  transition: background 0s;
}
</style>