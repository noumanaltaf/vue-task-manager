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

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
h3,
h5 {
  margin: 0;
}
a {
  text-decoration: none;
}
</style>
