<template>
  <section id="questions">
    <div class="container">
      <h1>Questions</h1>
      <div class="question" ref="questions">
        <question-item v-for="(question, index) in form" :question="question" :key="'question_'+index" @handleSlides="handleSlides" :data="data"></question-item>
      </div>
      <div v-if="results">
        <h1> Resultats : </h1>
        <div v-for="(result, index) in data" :key="'question_'+index">
          {{result}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import QuestionItem from '@/components/QuestionItem'

export default {
  name: 'Questions',
  components: { QuestionItem },
  data () {
    return {
      currentSlide: 1,
      data: {},
      results: false,
      form: [
        {
          title: 'Dans quel arrondissement habites-tu ?',
          model: 'arrondissement',
          type: 'number',
          min: '1',
          max: '20'
        },
        {
          title: 'Dans combien de m2 habites-tu ?',
          model: 'm2',
          type: 'number',
          min: '1',
          max: '500'
        },
        {
          title: 'Dans quel type d\'appartement habites-tu ?',
          model: 'type',
          type: 'list',
          list: ['Studio', 'F1', 'F2', 'F3', 'F4', 'F5', 'F5 et +']
        },
        {
          title: 'Combien de loyer (en €) payes-tu par mois ?',
          model: 'price',
          type: 'number',
          min: '1',
          max: '10000'
        }
      ]
    }
  },
  methods: {
    handleSlides () {
      if (this.currentSlide < this.form.length) {
        this.$refs.questions.style.transform = 'translateX(-' + this.currentSlide * 100 + '%)'
        this.currentSlide++
      } else {
        this.results = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #questions {
    overflow: hidden;
    .container {
      .question {
        display: flex;
        transition: transform .5s;

        &-wrapper {
          min-width: 100%;

          &_content {
            width: 500px;
            margin: 0 auto;
          }
        }
      }

    }
  }
</style>
