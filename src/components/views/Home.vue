<template>
  <section id="home">
    <house ref="house"></house>
    <div class="container" ref="container">
      <h1>Parisian Houses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum nesciunt cupiditate deserunt quisquam inventore cum in iure minima eaque. Fugit voluptatem dolore corrupti fugiat ipsum rem hic delectus! Officiis.</p>
      <button @click="handleLeavingAnimation">Start</button>
    </div>
  </section>
</template>

<script>
import house from '@/components/House'
import { TimelineMax } from 'gsap'

export default {
  name: 'Home',
  components: { house },
  data () {
    return {
      isLeaving: false
    }
  },
  methods: {
    handleLeavingAnimation () {
      this.isLeaving = true
      this.tlHouse.to(this.$refs.house.$el, 1, {y: -1000})
      this.tlContainer.to(this.$refs.container, 1.5, {opacity: 0})
    },
    handleStartingAnimation () {
      this.tlHouse = new TimelineMax({onComplete: this.redirect})
      this.tlContainer = new TimelineMax()
      this.tlHouse.fromTo(this.$refs.house.$el, 1, {y: -1000}, {y: 0})
      this.tlContainer.fromTo(this.$refs.container, 1.5, {opacity: 0}, {opacity: 1})
    },
    redirect () {
      if (this.isLeaving) {
        this.$router.push({name: 'questions'})
      }
    }
  },
  mounted () {
    this.handleStartingAnimation()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  #home {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;

    .container {
      h1 {
        margin: 0 auto;
        padding: 0;
      }

      p {
        width: 50%;
        margin: 15px auto;
      }

      button {
        display: inline-block;
        padding: 5px 10px;
        background:#2ca879;
        border: none;
        border-radius: 20px;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
        transition: background .3s;
        text-transform: uppercase;
        // text-decoration: none;

        &:hover {
          background: #34b9a5;
        }
      }
    }
  }
</style>
