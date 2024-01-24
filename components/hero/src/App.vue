<script setup lang="ts">
import { ref } from "vue";
import logo from "../public/logo.png";
import { serverClient, ActionOutput } from "oc-server";
const props = defineProps<{
  firstName: string;
  lastName: string;
  born: number;
  hobbies: string[];
}>();

const additionalData = ref<ActionOutput<"funFact"> | null>(null);
async function getFunFact() {
  additionalData.value = await serverClient.funFact({ year: props.born });
}
const hobbies = props.hobbies.map((x) => x.toLowerCase()).join(", ");
</script>

<template>
  <div className="container">
    <img width="50" height="50" v-bind:src="logo" alt="Logo" />

    <h1>This section is in Vue Js</h1>
  </div>
</template>

<style scoped>
.container {
  background-color: #ffa500;
  color: #fff;
  font-family: sans-serif;
  padding: 40px;
  text-align: center;
}

.button {
  background-color: #a97613;
  border: none;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  color: inherit;
  cursor: pointer;
}

h1 {
  margin: 0 0 20px 0;
}

span {
  text-decoration: underline;
}

.info {
  margin-bottom: 20px;
}

.block {
  margin: 6px 0;
}
</style>
