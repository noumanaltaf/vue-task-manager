<template>
  <div class="container">
    <h3>Task Manager</h3>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
.container {
  text-align: center;
  max-width: 400px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px;
  gap: 15px;
}

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

.btn {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  background-color: rgb(25, 118, 210);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}
.btn:hover {
  text-decoration: none;
  background-color: rgb(21, 101, 192);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
}
.btn:active {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
}
.btn:disabled {
  opacity: 0.5; /* Reduce opacity for disabled state */
  cursor: not-allowed; /* Change cursor for disabled state */
}
.description {
  margin: 0;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  text-align: start;
  flex-shrink: 0;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
}
h3,
h5 {
  margin: 0;
}
.item {
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
</style>
