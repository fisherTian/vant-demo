<template>
    <div >
        <van-tabs v-model="active">
            <van-tab title="招标公告"></van-tab>
            <van-tab title="公开询价"></van-tab>
        </van-tabs>

        <van-row class="subscribe">
            <van-col span="8"><span class="sub_k">产品：</span>软件开发</van-col>
            <van-col span="8"><span class="sub_k">地区：</span>泰州</van-col>
            <van-col span="8" class="text-right"><van-button size="small" type="primary">编辑订阅</van-button></van-col>
        </van-row>

        <van-notice-bar
                text="微信搜索：南京紫煜科技，关注公众号，订阅项目宝，每天更新1万条招标数据，获取更多商机。"
                left-icon="http://onmovvvw3.bkt.clouddn.com/eff84bad-0ba0-49bc-a5af-2a2b2de4254f6af5b7168eed548100d9041f07b7c616.png"
        />

        <ul class="project_nav">
            <li class="project_item">
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

            <li class="project_item">
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

            <li class="project_item">
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

            <li class="project_item">
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
        </ul>

    </div>
</template>

<script>
    import {  Tab, Tabs,Row, Col,Button,NoticeBar   } from 'vant';

    export default {
        components: {
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [Row.name]: Row,
            [Col.name]: Col,
            [Button.name]: Button,
            [NoticeBar.name]: NoticeBar,

        },

        data() {
            return {
                active:0
            };
        },

        computed: {

        },

        methods: {

        }
    };
</script>

<style lang="less">
.subscribe{
    padding:10px;
    font-size: 13px;
    line-height: 30px;
}
    .text-right{
        text-align: right;
    }

    .sub_k{
        color:#f44;
    }

    .project_item{
        height: 100px;
        background: #fff;
        padding: 20px 10px;
        margin: 10px 0px;
    }

.project_item .title{
    font-size: 15px;
    font-weight: blod;
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
    font-size: 14px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
}
</style>
