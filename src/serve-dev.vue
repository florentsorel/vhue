<script>
import Vue from 'vue';
import Hue from '@/components/Hue/Hue.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Hue,
  },
  methods: {
    onToggle(id, isOn) {
      console.log(id, 'light ID');
      console.log(isOn, `slider is${isOn ? '' : ' not'} visible`);
    },
    onChange(id, value) {
      console.log(id, 'light ID');
      console.log(value, `value slider`);
    }
  }
});
</script>

<template>
  <div id="app">
    <Hue
      icon="kitchen"
      id="kitchen"
      color="#ffc457"
      :intensity="30"
      :is-on="true"
      name="Kitchen"
      @toggle="onToggle"
      @change="onChange"
    />

    <Hue
      icon="bedroom"
      id="bedroom"
      color="#f2e2cd"
      :intensity="50"
      name="Bedroom"
      @toggle="onToggle"
      @change="onChange"
    />

    <Hue
      icon="living"
      id="living"
      :color="['#4a2cb6', '#c66cd8']"
      name="Living room"
      :intensity="90"
      :is-on="true"
      @toggle="onToggle"
      @change="onChange"
    />

    <Hue
      id="computer"
      icon="computer"
      :color="['#d8d16c', '#b62c2c']"
      name="Gaming room"
      :intensity="90"
      :is-on="true"
      @toggle="onToggle"
      @change="onChange"
    />

    <Hue
      icon="garage"
      id="garage"
      color="#7e2626"
      name="Garage"
      :intensity="20"
      :is-on="false"
      @toggle="onToggle"
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

.hue-container + .hue-container {
  margin-top: 24px;
}
</style>