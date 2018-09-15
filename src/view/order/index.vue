<template>
    <div>
        <van-nav-bar
                title="订阅"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />

        <div class="subTitle">
            <div class="bgi"></div>&nbsp;&nbsp;您能接哪些地区的业务？
        </div>

        <div class="citys">
            <van-tag  type="primary" class="tag_item">南京</van-tag>
            <van-tag  type="primary" class="tag_item">泰州</van-tag>
            <van-tag  plain type="success">添加地区</van-tag>
        </div>

        <div class="subTitle">
            <div class="bgi"></div>&nbsp;&nbsp;您经营的产品或主营业务是？
        </div>

            <van-field
                    v-model="messageA"
                    label="主营产品1"
                    type="textarea"
                    placeholder="请输入关键词"
                    rows="1"
                    autosize
            />
            <van-field
                    v-model="messageB"
                    label="主营产品2"
                    type="textarea"
                    placeholder="请输入关键词"
                    rows="1"
                    autosize
            />
            <van-field
                    v-model="messageC"
                    label="主营产品3"
                    type="textarea"
                    placeholder="请输入关键词"
                    rows="1"
                    autosize
            />
        <van-field
                v-model="messageD"
                label="主营产品4"
                type="textarea"
                placeholder="请输入关键词"
                rows="1"
                autosize
        />
        <van-field
                v-model="messageE"
                label="主营产品5"
                type="textarea"
                placeholder="请输入关键词"
                rows="1"
                autosize
        />
        <div style="padding: 0 20px;">
        <van-button type="primary" size="large" style="margin-top: 30px;height: 38px;line-height: 38px;">保存</van-button>
        </div>
    </div>
</template>

<script>
    import { NavBar,Tag,Field,Button } from 'vant';

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Tag.name]: Tag,
            [Field.name]: Field,
            [Button.name]: Button

        },

        data() {
            return {
                messageA:'',
                messageB:'',
                messageC:'',
                messageD:'',
                messageE:''
            };
        },

        computed: {

        },
        mounted(){

        },
        methods: {
            onClickLeft(){
                this.$router.push({
                    path: '/index/subscibe'
                })
            }
        }
    };
</script>

<style lang="less">
.subTitle{
    background: RGB(231,243,254);
    font-size: 13px;
    padding: 6px;
    position: relative;
}
.subTitle  .bgi{
    background-color: #45a5fd;
    width: 3px;
    height: 13px;
    position: absolute;
    top: 8px;
    }

    .citys{
        padding: 12px 15px;
        background: #ffffff;
    }

    .tag_item{
        margin-right: 10px;
    }
</style>
