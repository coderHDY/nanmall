<template>
  <div class = "params-box" v-if = "itemParams">
    <table class = "info">
      <caption>{{itemParams.info.key}}</caption>
      <tr v-for = "item in itemParams.info.set">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
    <table class = "rule">
      <caption>{{itemParams.rule.key}}</caption>
      <tr v-for = "index in itemParams.rule.tables[0]">
        <td v-for = "indey in index">{{indey}}</td>
      </tr>
    </table>
    <span class = "disclaimer">{{itemParams.rule.disclaimer}}</span>

  </div>
</template>

<script>
  export default {
    name: "ItemParams",
    props: {
      itemParams: Object,
      default() {
        return {}
      }
    }
  }
</script>
<style scoped>
  .params-box {
    position: relative;
    margin-top: 30px;
    width: 100%;
    box-shadow: 0 -5px 5px rgba(100, 100, 100, 0.3);
  }

  /*info信息*/
  .info, .rule {
    position: relative;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 20px;
    left: 5%;
    width: 90%;
  }

  .info caption, .rule caption {
    height: 40px;
    color: var(--color-height-text);
    font-size: 25px;
  }

  .info tr, .rule tr {
    height: 25px;
    border: 1px solid #878eb8;
  }

  .info td, .rule td {
    padding-left: 5px;
  }

  .info td:nth-child(1), .rule td:nth-child(1) {
    border-right: 1px solid #878eb8;
    width: 80px;
  }

  /*说明*/
  .disclaimer {
    position: relative;
    display: block;
    margin-top: 10px;
    font-size: var(--font-size);
    left: 5%;
    width: 90%;
  }
</style>
