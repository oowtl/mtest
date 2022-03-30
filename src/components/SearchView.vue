<template>
  <main class="app-main">
    <SearchInput @searchReq="searchReq"/>
  </main>
</template>

<script>
import axios from 'axios';

// component
import SearchInput from '@/components/SearchInput.vue'

export default {
  data () {
    return {
      hospital: {}
    }
  },
  components: {
    SearchInput
  },
  methods: {
    searchReq: function(message) {
      console.log(message);
      axios.get(
        '/B551182/hospInfoService1/getHospBasisList1',
        {
          params: {
            ServiceKey: `${process.env.VUE_APP_API_KEY}`,
            numOfRows: 1000,
            pageNo: 1
          },
          withCredentials: true
        }
      )
        .then(res => {
          console.log(res.data);
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