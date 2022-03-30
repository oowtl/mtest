<template>
  <div>
    <h1> 병원 검색결과 </h1>
    <table>
      <th class="SearchResult-table-header SearchResult-key">항목명</th>
      <th class="SearchResult-table-header">내용</th>
      <tr v-for="v, k in this.result" :key="k">
        <td class="SearchResult-key">{{k}}</td>
        <td>{{v}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  props: ["result"],
}
</script>

<style>
table {
  width: 100%;
}

table tr td {
  padding-bottom: 10px;
}

.SearchResult-table-header {
  height: 30px;
  border-bottom: 1px solid grey;
}

.SearchResult-td-key {
  width: 50%;
}
</style>