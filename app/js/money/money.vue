<template>
  <Panel title="理财精选" class="panel">
      <div class="content">
          <dl v-for="item in items" :key="item.title" class="item">
            <dt>{{item.title}}<span>{{item.sub}}</span></dt>
            <dd>{{item.rate}}</dd>
            <dd>{{item.text}}</dd>
          </dl>
      </div>
  </Panel>
</template>
 
<script>
import Panel from "../core/panel.vue"
export default {
  components :{
        Panel,
    },
    data(){
        return{
            items:[{
                title:"长乐盈",
                sub:"180天可质押",
                rate:"5.80%",
                text:"近1年历史年化投资回报率" 
            },
            {
               title:"京智0号",
                sub:"大数据赋能",
                rate:"6.00%",
                text:"近1月历史年化投资回报率"
            },
            {
                title:"月月盈",
                 sub:"建信养老",
                rate:"4.57%",
                text:"近7日年化收益"
            },
            {
                title:"小白基金",
                sub:"超短期",
                rate:"4.50%",
                text:"7日年化收益率"
            }]
        }
    }
}
</script>
 
<style scoped lang="scss">
@import "../../css/element.scss";
 .panel{
     @include panel;
     .content{
       @include flex(row);  
       justify-content: space-around; 
       box-sizing: border-box;
       &:after{
            
       }
       .item{
           width: 50%;
           position: relative;
           box-sizing: border-box;
           padding: 34px 16px;
           &:after{
            content: '';
            width: 1px;
            height: 136px;
            position: absolute;
            top: 50%;
            margin-top: -68px;
            border-right: 1px solid #ddd;
            display: block;
            right: 0;
           }
           &:nth-child(2n){
                &:after{
                    display: none;
               }
           }
           dt{
               font-size: 34px !important;
               line-height: 42px;
               color: #333;
               span{
                   font-size: 22px;
                   color: #ff5155;
                   border: 1px solid #ff5155;
                   padding: 0 8px;
                   margin-left: 10px;
                   vertical-align: middle;
               }
           }
           dd{
               &:nth-child(2){
                   font-weight: 700;
                   font-size: 44px;
                   height: 58px;
                   line-height: 58px;
                    color: #FF5155;
                 white-space: nowrap;
                 text-overflow: ellipsis;
                    overflow: hidden;
               }
               &:nth-child(3){
                   font-size: 24px;
                   height: 24px;
                   line-height: 24px;
                    color: #999;
                 white-space: nowrap;
                 text-overflow: ellipsis;
                    overflow: hidden;
               }
           }
       }
     }
 }

</style>