<template>
    <div class="main_box">
        <transition name="fade-transverse">
            <router-view class="xmb-view"/>
        </transition>
        <van-tabbar v-model="active">
            <van-tabbar-item @click="open('/index/project')">
                <span>项目</span>
                <i slot="icon" style="font-size: 23px;"
                   slot-scope="props" :class="props.active ? 'iconfont icon-xiangmu-copy' : 'iconfont icon-xiangmu'"></i>
            </van-tabbar-item>
            <van-tabbar-item @click="open('/index/subscibe')">
                <span>订阅</span>
                <i slot="icon" style="font-size: 23px;"
                   slot-scope="props" :class="props.active ? 'iconfont icon-dingyue-copy-copy' : 'iconfont icon-dingyue-copy'"></i>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vant';

    export default {
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
        },

        data() {
            return {
                active:0
            };
        },

        computed: {

        },
        mounted(){
            if(this.$router.history.current.fullPath == '/index/project'){
                this.active = 0;
            }else{
                this.active = 1;
            }
        },
        methods: {
            open (url) {
                this.$router.push({
                    path: url
                })
            }
        }
    };
</script>

<style lang="less" scoped>

    .van-tabbar--fixed{
        position: fixed!important;
    }

.main_box{
    width: 100%;
    height: calc(100% - 50px);
    position: absolute;
    overflow: auto;
}
.xmb-view{
    width:100%;
    height:100%;
}

.fade-transverse-leave-active,
.fade-transverse-enter-active {
    transition: all .5s;
}

.fade-transverse-enter {
    opacity: 0;
    transform: translateX(-30px);
}

.fade-transverse-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
