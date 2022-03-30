<template>
  <div class="SearchInput-div">
    <span class="SearchInput-div-title">병원명</span>
    <div class="SearchInput-div-form">
      <input class="SearchInput-div-input" v-model="searchWord" v-on:keyup.enter="handleClick(searchWord)" type="text">
      <button class="SearchInput-div-button" v-on:click="handleClick(searchWord)">검색</button>
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
      if (message !== 'None') {
        this.$emit('searchReq', message);
      }
    }
  }
}
</script>

<style>
.SearchInput-div {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top : 10px;
}

.SearchInput-div-title {
  font-size: 30px;
  margin-right: 50px;
}

.SearchInput-div-input {
  width: 300px;
  height: 30px;
  margin-right: 10px;
}

.SearchInput-div-button {
  height: 35px;
  background-color: black;
  border-radius: 5px;
  border-color: green;
  color: green;
}
</style>