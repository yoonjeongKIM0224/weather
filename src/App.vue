<template>
  {{ article }}
</template>

<script>
import apiBoard from './assets/api/board.js'
export default {
  name: 'App',
  data(){
    return {
      article: null,
    }
  },
  components: {
    
  },
  mounted(){
    apiBoard.getAricles(0)
      .then((response) => {
      // 성공 시
      console.log('getAricles', response)

      this.article = response.data
    })
      .catch((e) => {
      // 에러
      console.log(e)
    });
  }
}
</script>

<style>
</style>
