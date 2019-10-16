<template>
<div class="home" :style="{backgroundImage: 'url('+ bg +')'}">
  <div class="title">
    <h2>力臻机电数据可视化系统</h2>
    <h3>Visualization of Mechanical and Electrical Data of Lizhen</h3>
  </div>
  <div class="date">
    <DateTime/>
  </div>
<div class="teble">
  <div class="left" :style="{backgroundImage: 'url('+ tebleBg +')'}">
    <h4>成品模具</h4>
    <table class="leftTable">
      <thead>
        <tr>
          <th v-for="item in tableHeadLeft" v-text="item"></th>
        </tr>
      </thead>
      <tbody>
        <tr :class="{'marginTop':index===0}" v-for="(item,index) in tableBodyLeft">
          <td  class="num" v-text="item.code"></td>
          <td  class="name" ><p v-text="item.name"></p></td>
          <td  class="state" :class="item.state==='上机'?'shangji':item.state==='待维修'?'daiweixiu':item.state==='维修中'?'weixiuzhong':item.state==='待保养'?'daibaoyang':item.state==='保养中'?'baoyangzhong':''" v-text="item.state"></td>
          <td  class="time" v-text="item.updateTime"></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="right" :style="{backgroundImage: 'url('+ tebleBg +')'}">
    <h4>配件库存</h4>
    <table class="rightTable">
      <thead class="rightThead">
      <tr>
        <th v-for="item in tableHeadRight" v-text="item"></th>
      </tr>
      </thead>
      <tbody class="rightTbody">
        <tr :class="{'marginTop':index===0}" v-for="(item,index) in tableBodyRight">
          <td  class="name" ><p v-text="item.name"></p></td>
          <td  v-text="item.partSku"></td>
          <td  class="center" v-text="item.unit"></td>
          <td  class="tdright" v-text="item.stock"></td>
          <td  class="tdright time" v-text="item.updateTime"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
</template>

<script>
import DateTime from './DateTime'
import {getData} from './axios.js'

    export default {
        name: "Index",
        data(){
          return{
              bg:require('.././assets/images/01.jpg'),
              tebleBg:require('.././assets/images/02.png'),
              tableHeadLeft:['编号','名称','状态','更新时间'],
              tableHeadRight:['名称','规格','单位','库存数量','更新时间'],
              tableBodyLeft:[],
              tableBodyRight:[],
              // resLeftList:[
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑电器盒左右支撑电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑电器盒左右支撑电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              //     ['BG123402651','电器盒左右支撑','上机','2019-09-30  10:25:20'],
              // ],
              // resRightList:[
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑电器盒左右支撑电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑电器盒左右支撑电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              //     ['电器盒左右支撑','800*650*20','个','12021','2019-09-30  10:25:20'],
              // ],
              timer:null,
              modelPage:-1,
              partPage:-1

          }
        },
        components:{
            DateTime
        },
        mounted(){
            this.setTimerFun()
        },
        methods:{
           //请求数据
            async getInfo(){
                //请求
                console.log(this.modelPage,this.partPage)
                let data=this.$qs.stringify({
                    modelPage:this.modelPage,
                    partPage:this.partPage,
                })
                let res=await getData(this.$hef+'wxapi/v1/stock.php?type=getOtherData',"post",data)
                console.log(res,'目前请求定时器设置的5秒')
                if(res.code===1){
                    this.modelPage=res.data.modelPage
                    this.partPage=res.data.partPage
                    this.tableBodyLeft=res.data.modelTable
                    this.tableBodyRight=res.data.partTable
                }
            },
            //设置定时器 循环展示
             setTimerFun(){
                this.timer= setInterval(async ()=>{
                    await this.getInfo()
                },5000)
            },
            routeHandle(newUrl,oldUrl){
              console.log(newUrl,oldUrl)
            }
        },
        beforeDestroy() {
          clearInterval(this.timer)
          this.timer=null
        },
        watch:{
          '$route':'routeHandle'
        }
    }
</script>

<style lang="stylus" scoped>
.home
  width:1920px;
  height:1080px;
  background-repeat no-repeat
  background-position center
  background-size 100%
  padding 0 31px 26px
  box-sizing border-box
  .title
    width 100%
    height 58px
    color #00F0FF
    padding-top 38px
    h2
      width 100%
      text-align center
      font-size 36px
      font-weight bold
    h3
      width 100%
      text-align center
      font-size 12px
      font-family Source Han Sans CN
      font-weight 400
      color #00DEFF
      margin-top 10px
  .date
    text-align right
    width 100%
  .teble
    width 100%
    height 100%
    display flex
    align-items center
    justify-content space-between
    margin-top 34px
    .left,.right
      width 49.3%
      height 100%
      background-repeat no-repeat
      background-position top
      background-size 100%
      padding 0 62px 44px
      box-sizing border-box
      h4
        font-size 24px
        color #FFFFFF
        text-align center
        line-height 48px
      table
        thead
          overflow hidden
          tr
            line-height 55px
            width 100%
            color #00F0FF
            font-size 18px
        tbody
          color #59BAF2
          font-size 18px
          margin-top 20px
          tr
            height 54px
            line-height 54px
            .shangji
              color #1EFE3B
            .daiweixiu
              color #FF4157
            .weixiuzhong
              color #FFA639
            .daibaoyang
              color #C539FF
            .baoyangzhong
              color #FF57C6

    .left
      .leftTable
        width 100%
        thead
          width 100%
          color #00F0FF
          tr
            width 100%
            th:nth-of-type(1)
              width 188px
            th:nth-of-type(2)
              width 250px
            th:nth-of-type(3)
              width 80px
              text-align center
            th:nth-of-type(4)
              width 170px
              text-align right
        tbody
          width 100%
          tr
            .name
              p
                width 250px
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            .state
              text-align center
            .time
              text-align right

    .right
      .rightTable
        width 100%
        .rightThead
          width 100%
          color #00F0FF
          tr
            width 100%
            th:nth-of-type(1)
              width 188px
            th:nth-of-type(2)
              width 105px
            th:nth-of-type(3)
              width 60px
              text-align center
            th:nth-of-type(4)
              width 60px
              text-align right
            th:nth-of-type(5)
              width 180px
              text-align right
        .rightTbody
          width 100%
          tr
            width 100%
            td:nth-of-type(1)
              width 188px
            td:nth-of-type(2)
              width 105px
            td:nth-of-type(3)
              width 60px
              text-align center
            td:nth-of-type(4)
              width 60px
              text-align right
            td:nth-of-type(5)
              width 170px
              text-align right
            .name
              p
                width 188px
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            .center
              text-align center
            .tdright
              text-align right
</style>
