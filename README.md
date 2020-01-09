![vhue component](/screenshot.png?raw=true "vhue")

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

**`color`**: String  
Background color of the component when the light is on

**`:is-on`**: Boolean  
*default*: false  
Indicates if the light is on or off

<br/>
</details>

<details><summary><strong>Event</strong></summary>
<br>

**`name`**: Function  
**params**: isOn  
Do something when is toggle (api call to turn on/off light)

<br/>
</details>

## Credit

Icons come from the official [Philips Hue icon pack](https://developers.meethue.com/develop/application-design-guidance/icon-pack/)