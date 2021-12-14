<template>
  <header>
    <v-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <v-menu-item index="0">home</v-menu-item>
      <v-menu-item index="1">about</v-menu-item>
      <v-menu-item index="2">news</v-menu-item>
    </v-menu>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { useRouter } from "vue2-helpers/vue-router";
export default defineComponent({
  setup() {
    const route = useRouter();
    const activeIndex = ref("0");

    const handleSelect = (key: string) => {
      const routes = ["/", "/about", "/news/1"];
      activeIndex.value = key;
      const idx = Number(key);
      const path = routes[idx];
      route.push(path);
    };
    return { activeIndex, handleSelect };
  },
});
</script>
