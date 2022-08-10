<template>
<div class="login">
    <div class="loginTop">欢迎登录</div>
    <div class="loginContent">
      <input
        type="text"
        name="phone"
        class="phone"
        v-model="phone"
        placeholder="请输入手机号码"
      />
      <input
        type="password"
        name="passworld"
        class="passworld"
        v-model="password"
        placeholder="请输入密码"
      />
      <button class="btn" @click="Login">登录</button>
    </div>
</div>
</template>
<script>
import {getLoginUser} from '@/request/api/home.js'
export default{
    data(){
        return{
            phone:'',
            password:''
        }
    },
    methods:{
        Login: async function() {
            let res = await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
            console.log(res);
            // 判断是否登录成功
            if(res.data.code === 200){
                this.$store.commit('updateIsLogin',true)
                this.$store.commit('updateToken',res.data.token)
                let result=await getLoginUser(res.data.account.id)
                console.log('www',result);
                this.$store.commit('updateUser',result)
                this.$router.push('/infoUser')

            }else{
                alert('手机号码或者密码错误');
                this.password = ''
            }
        }
    }
}
</script>