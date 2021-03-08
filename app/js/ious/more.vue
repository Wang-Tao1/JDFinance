<template>
  <Panel :class="$style.panel" title="更多服务">
    <ul :class="$style.content">
      <li :class="$style.item">
        <img
          src="https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132"
          alt=""
        />
        <p>优惠券</p>
      </li>
      <li :class="$style.item">
        <img
          src="https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132"
          alt=""
        />
        <p>领福利</p>
      </li>
      <li :class="$style.item">
        <img
          src="https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132"
          alt=""
        />
        <p>抢钢镚</p>
      </li>
      <li :class="$style.item">
        <img
          src="https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135"
          alt=""
        />
        <p>白条提额</p>
      </li>
      <li :class="$style.item">
        <img
          src="https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132"
          alt=""
        />
        <p>工资理财</p>
      </li>
      <li :class="$style.item">
        <img
          src="https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90"
          alt=""
        />
        <p>众筹</p>
      </li>
      <li :class="$style.item">
        <img
          src="https://img12.360buyimg.com/jrpmobile/jfs/t1/3924/28/657/3552/5b9240dbE60256c31/78b52d5ab675f800.png?width=90&height=90"
          alt=""
        />
        <p>租房</p>
      </li>
      <li :class="$style.item">
        <img
          src="https://img12.360buyimg.com/jrpmobile/jfs/t27088/243/2089650291/12365/2469f395/5bf677f9N795eec5e.png?width=120&height=120"
          alt=""
        />
        <p>车主服务</p>
      </li>
    </ul>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: {
    Panel,
  },
};
</script>

<style module lang="scss">
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
    border-bottom: 1px solid #ddd;
  }
  .content {
    @include flex(row);
    height: 360px;
    box-sizing: border-box;
    margin: 40px auto 10px;
    .item {
      width: 25%;
      height: 50px;
      text-align: center;
      img {
        width: 88px;
        height: 88px;
        margin: 0 32px;
      }
      p {
        font-size: 26px;
        color: #666;
        margin-top: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
