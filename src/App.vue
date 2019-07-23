<template>
  <div id="app">
    <Select
      v-model="value"
      :loading="loading"
    >
      <option value="" selected disabled>-Select Option-</option>
      <option
        v-for="(item, index) in pods"
        :value="item.id"
        :key="index"
      >
        {{ item.id }}
      </option>
    </Select>
    <hr>
    <Select
      v-model="value"
      :loading="loading"
    >
      <option value="" selected disabled>-Select Option-</option>
      <option
        v-for="(item, index) in manufacturers"
        :value="item.id"
        :key="index"
      >
        {{ item.id }}
      </option>
    </Select>
  </div>
</template>

<script>
import Select from "./components/Select.vue";
import withFetch from "./mixins/withFetch";

export default {
  name: "App",
  mixins: [withFetch],
  components: {
    Select
  },
  data() {
    return {
      value: '',
      pods: [],
      manufacturers: []
    }
  },
  async beforeMount() {
    await Promise.all([
      this.getData('manufacturers', 10000),
      this.getData('pods', 20000)
    ])

  }
};
</script>