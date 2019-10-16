<template>
    <div class="timeWarp">
        <span v-text="ymd"></span>
        <span v-text="hms"></span>
        <span v-text="day"></span>
    </div>
</template>

<script>
    export default {
        name: "DateTime.vue",
        data(){
          return{
              //年月日
              ymd:null,
              //时分秒
              hms:null,
              day:null,
              timer:null
          }
        },
        mounted() {
            this.timer=setInterval(()=>{
                this.initDate();
            },1000)
        },
        methods:{
            //格式化时间
            initDate(){
                this.date=new Date();
                let year=this.date.getFullYear()
                let month=this.date.getMonth() + 1;
                if(month<10){
                    month='0'+(this.date.getMonth() + 1);
                }
                let date=this.date.getDate();
                if(date<10){
                    date='0'+this.date.getDate();
                }
                let h=this.date.getHours();
                if(h<10){
                    h='0'+this.date.getHours();
                }
                let m=this.date.getMinutes();
                if(m<10){
                    m='0'+this.date.getMinutes();
                }
                let s=this.date.getSeconds();
                if(s<10){
                    s='0'+this.date.getSeconds();
                }
                let day=this.date.getDay();
                if(day==0){
                    day='Sunday'
                }else if(day==1){
                    day='Monday'
                }else if(day==2){
                    day='Tuesday'
                }else if(day==3){
                    day='Wednesday'
                }else if(day==4){
                    day='Thursday'
                }else if(day==5){
                    day='Friday'
                }else if(day==6){
                    day='Saturday'
                }
                this.ymd=year + '-' + month + '-' + date;
                this.hms= h + ':'+ m +':'+ s;
                this.day=day
            },
        },
        beforeDestroy() {
          //组件卸载时清除定时器
          this.timer=null;
          clearInterval(this.timer)
        }
    }
</script>

<style lang="stylus" scoped>
.timeWarp
  span
    font-family: 'UniDreamLED';
    font-size 24px
    font-weight 400
    color #00F0FF
    margin 0 10px
    letter-spacing 5px
</style>
