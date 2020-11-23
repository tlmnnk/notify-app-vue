<template>
  <div id="app">
    <div id="nav">
      <el-menu
        :default-active="activeIndex2"
        class="app-menu"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" class="app-menu__item"
          ><router-link to="/" class="app-menu__link"
            >Home</router-link
          ></el-menu-item
        >

        <el-menu-item index="2" class="app-menu__item"
          ><router-link to="/Notify" class="app-menu__link"
            >Notify</router-link
          ></el-menu-item
        >
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    // activeIndex: "1",
    activeIndex2: "2"
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

.app-menu {
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
}
.app-menu__item {
  padding: 0 !important;
}
.app-menu__link {
  padding: 0 15px;
  display: block;
}

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: #fafbfc;
}

ul {
  padding-inline-start: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
