<template>
  <Panel :class="$style.panel" title="轮播图"> 
      <Slider :items="items" :cname="$style.slider"/>
  </Panel>
</template>
 
<script>
import Slider from "../core/silder.vue"
import Panel from "../core/panel.vue"
export default {
     components :{
        Slider,
        Panel
    },
  name: '',
  data () {
    return {
        items: [{
               id:"1",
               src: "//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320",
           },{
                id:"2",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320",
           }]
       }
    }
  }
</script>
 
<style module lang="scss">
  @import "../../css/element.scss";
 .panel{
     @include panel;
     >h4{
         display: none;
     }
     .slider{
         margin-top: 120px;
         img{
             width: 100%;
             height: 272px;
         }
     }
 }
</style>