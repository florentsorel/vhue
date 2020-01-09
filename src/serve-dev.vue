<script>
import Vue from 'vue';
import Hue from '@/components/Hue/Hue.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Hue,
  },
  methods: {
    onChange(isOn) {
      console.log(isOn);
    }
  }
});
</script>

<template>
  <div id="app">
    <Hue
      icon="living"
      name="Living room"
      color="#ffc457"
      :is-on="true"
      @change="onChange"
    />

    <Hue
      icon="bedroom"
      name="Bedroom"
      color="#dfdfdf"
      @change="onChange"
    />
  </div>
</template>

<style>
body {
  align-items: center;
  background-color: #ffa69e;
  background-image: linear-gradient(315deg, #ffa69e 0%, #5d4954 74%);
  display: flex;
  height: 100vh;
  margin: 0;
  justify-content: center;
}

#app {
  display: flex;
  flex-direction: column;
}

.hue + .hue {
  margin-top: 24px;
}
</style>