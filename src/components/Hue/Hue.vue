<template>
  <div
    class="hue"
    :style="{
      background: isChecked ? BackgroundColor : 'rgb(66, 66, 66)'
    }"
  >
    <div class="hue-content">
      <div class="hue-content-icon">
        <component :is="Icon" :checked="isChecked" />
      </div>
      <div class="hue-content-text">
        <div
          class="hue-content-text-name"
          :style="{
            color: isChecked ? '#000000' : '#FFFFFF'
          }"
        >
          {{ name }}
        </div>
      </div>
      <div class="hue-content-toggle">
        <input
          type="checkbox"
          class="hue-content-toggle-checkbox"
          :checked="isChecked"
          value="1"
        />
        <label
          class="hue-content-toggle-label"
          @click="handleChange"
          :style="{
            backgroundColor: isChecked ? ToggleColor : '#7B7B7B'
          }"
        >
          Toggle
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import Color from "color";
import Gradient from "tinygradient";
import icons, { choices } from "../Icon";
export default {
  name: "Hue",
  components: icons,
  props: {
    icon: {
      type: String,
      required: true,
      validator: function (value) {
        return choices.indexOf(value) !== -1;
      }
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: [String, Array],
      required: true,
    },
    isOn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: this.isOn
    };
  },
  computed: {
    ToggleColor() {
      if (Array.isArray(this.color)) {
        return Color(this.color[this.color.length - 1]).darken(0.2);
      }
      return Color(this.color).darken(0.2);
    },
    BackgroundColor() {
      if (Array.isArray(this.color)) {
        const gradient = Gradient(this.color);
        return gradient.css("linear");
      }
      return this.color;
    },
    Icon() {
      return this.icon.replace(/\w+/g, function(w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
      });
    }
  },
  methods: {
    handleChange() {
      this.isChecked = !this.isChecked;
      this.$emit("change", this.isChecked);
    },
    Color
  }
};
</script>

<style lang="scss" scoped>
.hue {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
  min-width: 280px;
  position: relative;
  transition: all 0.3s ease;
}

.hue-content {
  display: flex;
  min-height: 40px;
}

.hue-content-icon {
  align-self: center;
  flex: 0 0 32px;
  height: 32px;
  max-width: 32px;
}

.hue-content-text {
  align-self: center;
  margin: 0 16px;
  width: 10rem;
}

.hue-content-text-name {
  flex: 1 0 auto;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.hue-content-toggle {
  align-self: center;
  margin-left: auto;
}

.hue-content-toggle-checkbox {
  height: 0;
  width: 0;
  display: none;
  &:checked {
    + .hue-content-toggle-label {
      &:after {
        background: #ffffff;
        left: 100%;
        transform: translate(-100%, -50%);
      }
    }
  }
}

.hue-content-toggle-label {
  cursor: pointer;
  text-indent: -9999px;
  width: 40px;
  height: 18px;
  display: block;
  border-radius: 100px;
  position: relative;
  &:active {
    &:after {
      width: 25px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 22px;
    height: 22px;
    background: #b9b9b9;
    border-radius: 90px;
    transition: 0.3s;
    transform: translateY(-50%);
  }
}
</style>
