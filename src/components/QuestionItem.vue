<template>
  <div class="question-wrapper">
    <div class="question-wrapper_content">
      <h1>{{question.title}}</h1>
      <input type="number" v-if="question.type === 'number'" :min="question.min" :max="question.max" v-model="data[question.model]">
      <div v-if="question.list" v-for="(listItem, index) in question.list" :key="'button'+index" >
        <input type="button" :value="listItem" @click="handleButtonSelect(question.model, listItem)">
      </div>
      <button @click="nextSlide">OK</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'QuestionItem',
  props: {
    question: {
      type: Object,
      required: true
    },
    data: {
      type: Object
    }
  },
  methods: {
    nextSlide () {
      this.$emit('handleSlides')
    },
    handleButtonSelect (model, val) {
      this.data[model] = val
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
