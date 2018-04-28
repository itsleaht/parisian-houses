<template>
  <section id="questions">
    <div class="container">
      <h1>Questions</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum nesciunt cupiditate deserunt quisquam inventore cum in iure minima eaque. Fugit voluptatem dolore corrupti fugiat ipsum rem hic delectus! Officiis.</p>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Questions',
  components: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  #home {
    background: #e0d8d8;
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
        margin: 0 auto;
      }

      a {
        text-transform: uppercase;
        background:#2ca879;
        padding: 5px 10px;
        border: none;
        border-radius: 20px;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
        transition: background .3s;
        text-decoration: none;

        &:hover {
          background: #34b9a5;
        }
      }

    }

    canvas {
      position: absolute;
      z-index: 1;
    }
  }
</style>
