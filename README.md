![vhue component](/screenshot.png?raw=true "vhue")

[Demo](https://zq0n5.csb.app/) | [Source](https://codesandbox.io/s/vhue-zq0n5)

## Installation
```
npm install vhue
```

## Run the app
If you clone the repository you can run a local web server to test the component
```
git clone git@github.com:rtransat/vhue.git
npm install
npm run serve
```

## Usage

```vue
<template>
  <div id="app">
    <Hue
      icon="living"
      name="Living room"
      color="#ffc457"
      :is-on="false"
      @change="onChange"
    />

    <Hue
      icon="living"
      name="Living room"
      :color="['#4a2cb6', '#c66cd8']"
      :is-on="true"
      @change="onChange"
    />
  </div>
</template>

<script>
import Hue from "vhue";

export default {
  name: "app",
  components: {
    Hue
  },
  methods: {
    onChange(isOn) {
      console.log(isOn);
    }
  }
};
</script>
```

## Documentation

<details><summary><strong>Props</strong></summary>
<br>

**`icon`**: String  
Icon to display
- attic
- balcony
- bathroom
- bedroom
- carpot
- closet
- computer
- dining
- driveway
- frontdoor
- garage
- guestroom
- gym
- hallway
- kidsbedroom
- kitchen
- laundryroom
- living
- lounge
- mancave
- nursery
- office
- other
- outdoor
- outdoor-socialtime
- pool
- porch
- recreation
- socialtime
- staircase
- storage
- studio
- terrace
- toilet

**`name`**: String  
Name of the room

**`color`**: String or Array  
Background color of the component when the light is on. If array the background will be a gradient

**`intensity`**: Number  
Percentage value of intensity of the light

**`:is-on`**: Boolean  
*default*: false  
Indicates if the light is on or off

<br/>
</details>

<details><summary><strong>Event</strong></summary>
<br>

**`toggle`**: Function  
**params**: isOn  
Trigger when the switch button is checked

**`change`**: Function  
**params**: value  
Trigger when the slider value change

<br/>
</details>

## Credit

Icons come from the official [Philips Hue icon pack](https://developers.meethue.com/develop/application-design-guidance/icon-pack/)