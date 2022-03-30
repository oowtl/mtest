<template>
  <div class="SearchInput-div">
    <span>병원명</span>
    <div>
      <input v-model="searchWord" type="text">
      <button v-on:click="handleClick(searchWord)">검색</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      searchWord: 'None'
    }
  },
  methods: {
    handleClick: function (message) {
      this.$emit('searchReq', message);
    }
  }
}
</script>

<style>
.SearchInput-div {
  display: flex;
}
</style>