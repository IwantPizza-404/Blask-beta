<script>
import { RouterLink, RouterView } from "vue-router";
import mainHeader from "./components/Header.vue";
import mainFooter from "./components/Footer.vue";

export default {
  components: {
    mainHeader,
    mainFooter,
  },
};
</script>

<template>
  <div class="page-wrapp">
    <mainHeader v-if="$route.meta.showHeader"/>
    <main class="page-sections">
      <RouterView/>
    </main>
    <mainFooter v-if="$route.meta.showFooter"/>
  </div>
</template>

<style>
.page-wrapp{
  display: flex;
  flex-direction: column;
}
.page-sections{
  display: flex;
  flex-direction: column;
  gap: 200px;
  overflow-x: clip;
}
@media screen and (max-width: 550px){
  .page-sections{
  gap: 160px;
  }
}
@media screen and (max-width: 425px){
  .page-sections{
  gap: 120px;
  }
}
</style>