<template>
    <div >
        <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
        >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>

        <div class="selection">
            <van-row class="sub">
                <van-col span="8" class="text-center" style="border-right: 1px solid rgb(242, 242, 242);"><div @click="showCity()">全国 &nbsp;<i class="sub_k iconfont icon-iconfontarrowdown"></i></div></van-col>
                <van-col span="8" class="text-center" style="border-right: 1px solid rgb(242, 242, 242);"><div @click="showTime()">{{timeStr}} &nbsp;<i class="sub_k iconfont icon-iconfontarrowdown"></i></div></van-col>
                <van-col span="8" class="text-center"><div @click="showType()">{{typeStr}} &nbsp;<i class="sub_k iconfont icon-iconfontarrowdown"></i></div></van-col>
            </van-row>
        </div>

        <ul class="project_nav">
            <li class="project_item" @click="open('/detail')">
                <div class="title">
                    泰州学院数据中心采购项目
                </div>
                <van-row class="sub">
                    <van-col span="8"><i class="sub_k iconfont icon-tongzhi"></i> 招标</van-col>
                    <van-col span="8"><i class="sub_k iconfont icon-didian"></i> 泰州</van-col>
                    <van-col span="8"><i class="sub_k iconfont icon-shijian"></i> 20118-09-10</van-col>
                </van-row>
                <div class="sub_content">
                    标文件评分标准 （1）厂商需具备互联网安全研发中心应用安全联盟会员资格，具备3年以上（含）会员资格，并且公司业务多
                </div>
            </li>

            <li class="project_item" @click="open('/detail')">
                <div class="title">
                    泰州学院数据中心采购项目泰州学院数据中心采购项目泰州学院数据中心采购项目泰州学院数据中心采购项目
                </div>
                <van-row class="sub">
                    <van-col span="8"><i class="sub_k iconfont icon-tongzhi"></i> 招标</van-col>
                    <van-col span="8"><i class="sub_k iconfont icon-didian"></i> 泰州</van-col>
                    <van-col span="8"><i class="sub_k iconfont icon-shijian"></i> 20118-09-10</van-col>
                </van-row>
                <div class="sub_content">
                    标文件评分标准 （1）厂商需具备互联网安全研发中心应用安全联盟会员资格，具备3年以上（含）会员资格，并且公司业务多
                </div>
            </li>

            <li class="project_item" @click="open('/detail')">
                <div class="title">
                    泰州学院数据中心采购项目泰州学院数据中心采购项目泰州学院数据中心采购项目泰州学院数据中心采购项目
                </div>
                <van-row class="sub">
                    <van-col span="8"><i class="sub_k iconfont icon-tongzhi"></i> 招标</van-col>
                    <van-col span="8"><i class="sub_k iconfont icon-didian"></i> 泰州</van-col>
                    <van-col span="8"><i class="sub_k iconfont icon-shijian"></i> 20118-09-10</van-col>
                </van-row>
                <div class="sub_content">
                    标文件评分标准 （1）厂商需具备互联网安全研发中心应用安全联盟会员资格，具备3年以上（含）会员资格，并且公司业务多
                </div>
            </li>


        </ul>


        <van-picker v-show="TimeChoiceFlag" class="selectCls"
                show-toolbar
                title="选择时间"
                @cancel="clearFlag"
                :columns="timeColumns"
                @confirm="onConfirmTime"
        />

        <van-picker v-show="TypeChoiceFlag" class="selectCls"
                    show-toolbar
                    title="选择类型"
                    @cancel="clearFlag"
                    :columns="typeColumns"
                    @confirm="onConfirmType"
        />

        <div class="xmb-modal" v-show="modalFlag">

        </div>

    </div>
</template>

<script>
    import { Search,Row, Col,Picker  } from 'vant';

    export default {
        components: {
            [Search.name]: Search,
            [Row.name]: Row,
            [Col.name]: Col,
            [Picker.name]: Picker
        },

        data() {
            return {
                value:'',
                modalFlag:false,
                TimeChoiceFlag:false,
                timeColumns: ['近一个月', '近三个月', '近半年', '近一年','全部'],
                timeStr:'全部',
                TypeChoiceFlag:false,
                typeColumns: ['全部', '招标公告', '公开询价'],
                typeStr:'全部'
            };
        },

        computed: {

        },

        methods: {
            onSearch(){

            },
            showTime(){
                this.clearFlag();
                this.modalFlag = true;
                this.TimeChoiceFlag = true;
            },
            onConfirmTime(value) {
                this.timeStr = value;
                this.clearFlag();
            },
            showType(){
                this.clearFlag();
                this.modalFlag = true;
                this.TypeChoiceFlag = true;
            },
            onConfirmType(value){
                this.typeStr = value;
                this.clearFlag();
            },
            clearFlag(){
                this.TimeChoiceFlag = false;
                this.TypeChoiceFlag = false;
                this.modalFlag = false;
            },
            showGg(){

            },
            open (url) {
                this.$router.push({
                    path: url
                })
            }
        }
    };
</script>

<style lang="less" scoped>
.selection{
    height:20px;
    background-color: #ffffff;
    line-height: 20px;
    padding: 10px 0;
}
.selection .sub{
    font-size: 12px;
    color: #38f;
}
.selection .sub i{
    font-size: 12px;
}
    .text-center{
        text-align: center;
    }

.text-right{
    text-align: right;
}

.project_nav{
    width: 100%;
    height: calc(100% - 85px);
    overflow: auto;
}

.project_item{
    background: #fff;
    padding: 20px 10px;
    margin: 10px 0px;
}

.project_item .title{
    font-size: 15px;
    font-weight: bold;
}
.project_item .sub{
    padding: 15px 0;
    font-size: 12px;
    color: #ccc;
}

.project_item .sub .sub_k{
    color:#0079f3;
    font-size: 12px;
}
.project_item .sub_content{
    font-size: 13px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
}

    .selectCls{
        position: fixed;
        top:85px;
        z-index: 1000;
        width: 100%;
    }

    .xmb-modal{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 85px;
        left: 0;
        z-index: 999;
        background-color: rgba(0, 0, 0, 0.7);
    }
</style>
