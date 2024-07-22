<template>
    <div class="modal_wrapper">
        <div class="modal_wrap">
            <div class="container">
                <div class="modal_header">
                    <h2 class="title">{{ article.RCP_NM }}</h2>
                </div>
                <div class="modal_content">
                    <img :src="article.ATT_FILE_NO_MK" alt="요리" class="img">
                    <span class="info_list1">
                        <span class="item">{{ article.RCP_PAT2 }}</span>
                        <span class="item">{{ article.RCP_WAY2 }}</span>
                        <span class="item">{{ article.INFO_ENG }}cal</span>
                    </span>
                    <div class="info_list2">
                        <span class="item">
                            <span class="title">재료정보</span>
                            <span class="info">{{ article.RCP_PARTS_DTLS }}</span>
                        </span>
                        <span class="item">
                            <span class="title">탄수화물</span>
                            <span class="info">{{ article.INFO_CAR }}</span>
                        </span>
                        <span class="item">
                            <span class="title">단백질</span>
                            <span class="info">{{ article.INFO_PRO }}</span>
                        </span>
                        <span class="item">
                            <span class="title">지방</span>
                            <span class="info">{{ article.INFO_FAT }}</span>
                        </span>
                        <span class="item">
                            <span class="title">나트륨</span>
                            <span class="info">{{ article.INFO_NA }}</span>
                        </span>
                        <span class="item">
                            <span class="title">Tip</span>
                            <span class="info">{{ article.RCP_NA_TIP }}</span>
                        </span>
                    </div>
                    <span>
                        <span v-for="(num, idx) in 20" :key="idx">
                            <img :src="String(num).length == 1 ? article[`MANUAL_IMG0${num}`] : article[`MANUAL_IMG${num}`]" alt="요리">
                            {{ String(num).length == 1 ? article[`MANUAL0${num}`] : article[`MANUAL${num}`] }}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
    name: 'App',
        data() {
            return {
            }
        },
        props: {
            article: Object
        }
    }
</script>

<style>
.modal_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000057;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    z-index: 20;
}

.modal_wrap {
    width: 1000px;
    padding: 20px;
    background-color: #fff;
    max-height: 100%;
    border-radius: 10px;
    overflow-y: auto;
}

.modal_header {
    margin-bottom: 20px;
}

.img {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 10px;
}

.info_list2 {
    display: flex;
    flex-direction: column;
}

.info_list2 > .item {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.info_list2 > .item > .title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
}
</style>
