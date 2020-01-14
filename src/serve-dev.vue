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
      icon="kitchen"
      name="Kitchen"
      color="#ffc457"
      :is-on="true"
      @change="onChange"
    />

    <Hue
      icon="bedroom"
      name="Bedroom"
      color="#f2e2cd"
      @change="onChange"
    />

    <Hue
      icon="living"
      name="Living room"
      :color="['#4a2cb6', '#c66cd8']"
      :is-on="true"
      @change="onChange"
    />

    <Hue
      icon="computer"
      name="Gaming room"
      :color="['#d8d16c', '#b62c2c']"
      :is-on="true"
      @change="onChange"
    />

    <Hue
      icon="garage"
      name="Garage"
      color="#7e2626"
      :is-on="false"
      @change="onChange"
    />
  </div>
</template>

<style>
body {
  align-items: center;
  background-color: #ffa69e;
  background-image: radial-gradient(#C08ED6 0%, #281E29 100%);
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