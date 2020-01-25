<template>
  <div class="hue-slider-container">
    <div
      class="hue-slider"
      :style="{
        background: isVisible ? backgroundColor : 'rgb(66, 66, 66)',
      }"
      ref="slider"
      @mousedown="handleDown($event)"
    >
      <div class="hue-slider-overlay"></div>
      <div class="hue-slider-progress" ref="progress" :style="{width: value + '%'}"></div>
      <div class="hue-slider-dot-container" ref="dot" :style="{left: 'calc('+value+'% - ' + dotHalfWidth + 'px)'}">
        <div class="hue-slider-dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    value: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    isVisible: {
      type: Boolean,
      required: true
    },
    backgroundColor: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dragging: false,
      sliderWidth: null,
      sliderLeftPosition: null,
      progress: null,
      dotHalfWidth: 15,
    };
  },
  methods: {
    handleDown(event) {
      this.dragging = true;
      this.$emit('dragging', this.dragging);
      this.sliderWidth = this.$refs.slider.offsetWidth;
      this.sliderLeftPosition = this.$refs.slider.getBoundingClientRect().left;
      document.addEventListener("mousemove", this.setNewCurrentPosition);
      document.addEventListener("mouseup", this.mouseUp);
      this.setNewCurrentPosition(event);
      return false;
    },
    mouseUp() {
      this.dragging = false;
      this.$emit('dragging', this.dragging);
      document.removeEventListener("mousemove", this.setNewCurrentPosition);
      document.removeEventListener("mouseup", this.mouseUp);
    },
    setNewCurrentPosition(event) {
      if (
        this.dragging &&
        event.pageX >= this.sliderLeftPosition &&
        event.pageX <= this.sliderLeftPosition + this.sliderWidth
      ) {
        this.progress =
          Math.round(
            ((event.pageX - this.sliderLeftPosition) / this.sliderWidth) * 100
          );
        this.$refs.dot.style.left = event.pageX - this.sliderLeftPosition - this.dotHalfWidth + "px";
        this.$refs.progress.style.width = this.progress + "%";
        this.$emit('change', this.progress)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$dot-width: 22px;
$dot-height: $dot-width;

.hue-slider-container {
  height: 14px;
  position: relative;
  width: 100%;
}

.hue-slider {
  background: #777;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}

.hue-slider-overlay {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  height: 14px;
  position: absolute;
}

.hue-slider-progress {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(255, 255, 255, 0.7) 100%);
  height: 14px;
  position: relative;
  width: 25%;
  z-index: 1;
}

.hue-slider-dot-container {
  height: 30px;
  width: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.hue-slider-dot {
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  height: $dot-width;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: $dot-height;
}
</style>