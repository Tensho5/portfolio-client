<template>
  <div class="main-container" :class="{'grabbing': dragging}" @mousemove="mouseMoving" @mouseup="stopDrag">
    <h3 class="title-date">{{ currentDate | round }}</h3>
    <div class="calendar">
      <div class="date-item" v-for="date in dates" :key="date" :style="tempElementStyle(date)">
        <span>{{ date }}</span><br>
        <span v-if="date" class="date-line">|</span>
      </div>
    </div>
    <div class="lower-container">
      <div class="slider-container" :style="sliderStyle">
        <svg class="slider-wave">
          <path d="M74.3132 0C47.0043 2.44032e-05 50.175 30 7.9179 30H144.27C99.4571 30 101.622 -2.44032e-05 74.3132 0Z" transform="translate(-7.38794 0.5)" fill="rgba(255,82,82,.4)"/>
        </svg>
        <div class="slider-button" :class="{'grabbing': dragging}" @mousedown="startDrag">
          <v-icon style="padding-left: 13px; padding-top: 13px">mdi-school</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const sliderMinX = 0;
const sliderMaxX = 420;


export default {
  data: () =>  ({
    dragging: false,
    initialMouseX: 0,
    sliderX: 0,
    initialSliderX: 0,
    dates: [2011, null, 2013, 2014, 2015, null, 2017, 2018]
  }),
  filters: {
    round (num) {
      return Math.round(num);
    }
  },
  methods: {
    startDrag (e) {
      this.dragging = true;
      this.initialMouseX = e.pageX;
      this.initialSliderX = this.sliderX;
    },
    stopDrag () {
      this.dragging = false;
    },
    mouseMoving (e) {
      if(this.dragging) {
        const dragAmount = e.pageX - this.initialMouseX;
        const targetX = this.initialSliderX + dragAmount;
        this.sliderX = Math.max(Math.min(targetX, sliderMaxX), sliderMinX);
      }
    },
    tempElementStyle (tempDate) {
      const nearDistance = 3;
      const liftDistance = 12;

      const diff = Math.abs(this.currentDate-tempDate);
      const distY = (diff/nearDistance) - 1;

      const elementY = Math.min(distY*liftDistance, 0);
      return `transform: translate3d(0, ${elementY}px, 0)`;
    }
  },
  computed: {
    currentDate () {
      const rangeStart = 2011;
      const range = 7;
      return (this.sliderX / sliderMaxX * range) + rangeStart;
    },
    sliderStyle () {
      return `transform: translate3d(${this.sliderX}px,0,0)`;
    }
  }
};
</script>

<style>

.main-container {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
}

.title-date {
  position: absolute;
  bottom: 300px;
  user-select: none;
  font-size: 5rem;
  width: 100%;
  text-align: center;
}

.calendar {
  left: calc(50% - 250px);
  position: absolute;
  bottom: -5px;
  user-select: none;
}

.date-item {
  text-align: center;
  display: inline-block;
  width: 40px;
  font-weight: 700;
  color: #f8f8f8;
  margin: 0 10px 0 10px;
}

.date-line {
  font-size: 7px;
}

.lower-container {
  background-color: rgba(255,82,82,.4);
}

.slider-wave {
  z-index: 500;
  position:relative;
  top: -30px;
}

.slider-container {
  width: 150px;
  height: 80px;
  margin-top: -30px;
  margin-left: calc(50% - 287px);
  position: relative;
}
.slider-button {
  position: absolute;
  z-index: 999;
  left: 42px;
  top: -25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f8f8f8;

  cursor: grab;
  cursor: -webkit-grab;
  cursor: -moz-grab;
}
.grabbing {
  cursor: grabbing;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
}

.slider-icon {
  margin-top: 16px;
  margin-left: 21px;
  color: #232328;
}
</style>
