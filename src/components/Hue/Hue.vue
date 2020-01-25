<template>
  <div class="vhue-container" :class="{'is-dragging': dragging}">
    <div
      class="vhue"
      :style="{
        background: isChecked ? BackgroundColor : 'rgb(66, 66, 66)',
        borderBottomLeftRadius: isChecked ? '0' : '10px',
        borderBottomRightRadius: isChecked ? '0' : '10px',
      }"
    >
      <div class="vhue-content">
        <div class="vhue-content-icon">
          <component :is="Icon" :color="FontColor" :checked="isChecked" />
        </div>
        <div class="vhue-content-text">
          <div
            class="vhue-content-text-name"
            :style="{
              color: isChecked ? FontColor : '#FFFFFF',
              fontSize: dragging ? '14px' : '16px'
            }"
          >
            {{ dragging ? value + '%' : name }}
          </div>
        </div>
        <div class="vhue-content-toggle">
          <input
            type="checkbox"
            class="vhue-content-toggle-checkbox"
            :checked="isChecked"
            value="1"
          />
          <label
            class="vhue-content-toggle-label"
            @click="handleToggle"
            :style="{
              backgroundColor: isChecked ? ToggleColor : '#7B7B7B'
            }"
          >
            Toggle
          </label>
        </div>
      </div>
    </div>
    <Slider
      v-if="isChecked"
      :value="value"
      :is-visible="isChecked"
      :background-color="BackgroundColor"
      @change="handleChange"
      @dragging="handleDragging"
    />
  </div>
</template>

<script>
import Slider from "../Slider/Slider.vue";
import Color from "color";
import Gradient from "tinygradient";
import icons, { choices } from "../Icon";
export default {
  name: "Hue",
  components: Object.assign(icons, {
    Slider
  }),
  props: {
    color: {
      type: [String, Array],
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
      validator(value) {
        return choices.indexOf(value) !== -1;
      }
    },
    intensity: {
      type: Number,
      required: true
    },
    isOn: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      dragging: false,
      isChecked: this.isOn,
      value: this.intensity
    };
  },
  computed: {
    BackgroundColor() {
      if (Array.isArray(this.color)) {
        if (this.color.length < 2) {
          return this.color[0];
        }
        const gradient = Gradient(this.color);
        return gradient.css("linear");
      }
      return this.color;
    },
    FontColor() {
      let color = this.color;
      if (Array.isArray(this.color)) {
        color = this.color[0];
      }
      return Color(color).isLight() ? '#101010' : '#FFFFFF';
    },
    Icon() {
      return this.icon.replace(/\w+/g, function(w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
      });
    },
    ToggleColor() {
      if (Array.isArray(this.color)) {
        return Color(this.color[this.color.length - 1]).darken(0.2);
      }
      return Color(this.color).darken(0.2);
    }
  },
  methods: {
    handleToggle() {
      this.isChecked = !this.isChecked;
      this.$emit("toggle", this.id, this.isChecked);
    },
    handleChange(value) {
      this.value = value;
      this.$emit("change", this.id, value);
    },
    handleDragging(value) {
      this.dragging = value;
    },
    Color
  }
};
</script>

<style lang="scss" scoped>
.vhue-container {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  
  max-width: 300px;
  min-width: 290px;
  transition: all 0.3s ease;
  position: relative;

  &.is-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

.vhue {
  padding: 20px;
  border-radius: 10px;
}

.vhue-content {
  display: flex;
  min-height: 40px;
}

.vhue-content-icon {
  align-self: center;
  flex: 0 0 32px;
  height: 32px;
  max-width: 32px;
}

.vhue-content-text {
  align-self: center;
  margin: 0 16px;
  width: 150px;
}

.vhue-content-text-name {
  flex: 1 0 auto;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.vhue-content-toggle {
  align-self: center;
  margin-left: auto;
}

.vhue-content-toggle-checkbox {
  height: 0;
  width: 0;
  display: none;
  &:checked {
    + .vhue-content-toggle-label {
      &:after {
        background: #ffffff;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        left: 100%;
        transform: translate(-100%, -50%);
      }
    }
  }
}

.vhue-content-toggle-label {
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
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
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
