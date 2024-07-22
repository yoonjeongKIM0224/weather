<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        ¤
      </h1>
    </div>
  </header>

  <div v-if="loading" class="loading">
    <div class="container">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  </div>
  <div v-else class="wrap">
    <div class="section_info">
      <input type="text" placeholder="요리를 검색해 보세요." @input="search($event.target.value)" class="input">
    </div>

    <div class="list_type1">
      <div v-if="article.length === 0">
      데이터 없음
      </div>
      <ul class="list" v-else>
        <li v-for="(item, idx) in article" :key="idx" class="item" @click="clickWath = idx, modalOpen = true">
          <div class="item_cont">
            <div class="img_wrap">
                <img :src="item.ATT_FILE_NO_MK" alt="요리" class="img">
            </div>
            <div class="info_wrap">
                <h2 class="title">{{ item.RCP_NM }}</h2>
                <span class="info_list1">
                  <span class="item">{{ item.RCP_PAT2 }}</span>
                  <span class="item">{{ item.RCP_WAY2 }}</span>
                  <span class="item">{{ item.INFO_ENG }}cal</span>
                </span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <TheModal :article="article[clickWath]" v-if="modalOpen"></TheModal>
  </div>
</template>

<script>
import apiBoard from './assets/api/board.js'
import TheModal from './components/TheModal'

export default {
  name: 'App',
  data() {
    return {
      OriArticle: null,
      article: null,
      loading: true,
      clickWath: 0,
      modalOpen: false,
    }
  },
  components: {
    TheModal
  },
  mounted() {
    apiBoard.getAricles()
      .then((response) => {
        // 성공 시
        console.log('getAricles', response)

        this.OriArticle = response.data.COOKRCP01.row
        this.article = response.data.COOKRCP01.row
        this.loading = false
      })
      .catch((e) => {
        // 에러
        console.log(e)
      });

    
  },
  methods: {
    search : function(value){
      let arr = [...this.OriArticle]
      let newArr = arr.filter(item => item.RCP_NM.includes(value));
      this.article = newArr
    }
  },
}
</script>

<style>
@import '~@/assets/style/style.scss';
</style>
