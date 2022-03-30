<template>
  <main class="app-main">
    <SearchInput @searchReq="searchReq"/>
    <SearchResult :result="this.result"/>
  </main>
</template>

<script>
import axios from 'axios';

// component
import SearchInput from '@/components/SearchInput.vue'
import SearchResult from '@/components/SearchResult.vue'

export default {
  data () {
    return {
      hospital: [],
      result: {}
    }
  },
  components: {
    SearchInput, SearchResult
  },
  methods: {
    // 찾는 함수
    findHosiptal: function(message, data) {
      if (data.yadmNm.includes(message)) {
        this.result = data;
        return true;
      }
      return false;
    },
    //요청
    searchReq: function(message) {
      axios.get(
        'http://apis.data.go.kr/B551182/hospInfoService1/getHospBasisList1',
        {
          params: {
            // ServiceKey decode
            ServiceKey: unescape(`${process.env.VUE_APP_API_KEY}`),
            numOfRows: 1000,
            pageNo: 1
          },
          withCredentials: true
        }
      )
        .then(res => {
          res.data.response.body.items.item.forEach(e => {
            if (this.findHosiptal(message, e)) {
              return ;
            }
            this.hospital.push(e);
          });
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<style>
.app-main {
  width: 90%;
  margin: 0 auto;
}
</style>