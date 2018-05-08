<template>
  <div class="list">
    <ul>
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        :ref="item"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    // this.$refs['A'][0].offsetTop is the height of "A" section to the top (header is NOT included)
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // e.touches[0].clientY is the height of touch point to device top
          // 79 is the height of the header
          const touchY = e.touches[0].clientY - 79
          // touchY - startY
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(index)
          // console.log(startY)
          if (index >= 0 && this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  right 0
  top 1.58rem
  bottom 0
  width .4rem
  .item
    text-align center
    line-height .4rem
    color $bgColor
</style>
