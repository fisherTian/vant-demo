<template>
    <div>
        <van-nav-bar
                title="信息详情"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />

        <div class="info_top">
            <div class="title">
                泰州学院数据中心采购项目
            </div>
            <van-row class="sub">
                <van-col span="8"><i class="sub_k iconfont icon-tongzhi"></i> 招标</van-col>
                <van-col span="8"><i class="sub_k iconfont icon-didian"></i> 泰州</van-col>
                <van-col span="8"><i class="sub_k iconfont icon-shijian"></i> 2018-09-10</van-col>
            </van-row>
        </div>

        <van-notice-bar
                text="微信搜索：南京紫煜科技，关注公众号，订阅项目宝，每天更新1万条招标数据，获取更多商机。"
                left-icon="http://onmovvvw3.bkt.clouddn.com/eff84bad-0ba0-49bc-a5af-2a2b2de4254f6af5b7168eed548100d9041f07b7c616.png"
        />

        <van-field
                v-model="info.xmmc"
                label="采购项目名称	"
                type="textarea"
                placeholder=""
                rows="1"
                autosize
        />
        <van-field
                v-model="info.pm"
                label="品目"
                type="textarea"
                placeholder=""
                rows="1"
                autosize
        />
        <van-field
                v-model="info.cgdw"
                label="采购单位"
                type="textarea"
                placeholder=""
                rows="1"
                autosize
        />
        <van-field
                v-model="info.xzqh"
                label="行政区域"
                type="textarea"
                placeholder=""
                rows="1"
                autosize
        />
        <van-field
                v-model="info.ggsj"
                label="公告时间"
                type="textarea"
                placeholder=""
                rows="1"
                autosize
        />
        <van-field
                v-model="info.wjdd"
                label="文件地点"
                type="textarea"
                placeholder=""
                rows="1"
                autosize
        />

    </div>
</template>

<script>
    import { NavBar,Field,Row,Col,NoticeBar } from 'vant';

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Field.name]: Field,
            [Row.name]: Row,
            [Col.name]: Col,
            [NoticeBar.name]: NoticeBar
        },

        data() {
            return {
                info:{
                 xmmc:'天津市滨海新区中塘镇农村环卫一体化项目',
                 pm:'服务/专业技术服务/测绘服务',
                 cgdw:'天津市滨海新区中塘镇人民政府机关',
                 xzqh:'宁河县',
                 ggsj:'2018年09月15日 15:31',
                 wjdd:'法正项目管理集团有限公司（天津市滨海新区大港港东新城旭日路266号）'
            }
            };
        },

        computed: {

        },
        mounted(){

        },
        methods: {
            onClickLeft(){
                this.$router.push({
                    path: '/index/project'
                })
            }
        }
    };
</script>

<style lang="less">
    .info_top{
        background: #fff;
        padding: 8px 10px;
    }

    .info_top .title{
        font-size: 15px;
    }
    .info_top .sub{
        padding: 10px 0 5px 0;
        font-size: 12px;
        color: #ccc;
    }

    .info_top .sub .sub_k{
        color:#0079f3;
        font-size: 12px;
    }
</style>
