<template>
    <div class="login-container">
        <div class="login-box">
            <div class="login-title">
                Kontactic
            </div>
            <div class="input-box">
                <v-text-field
                v-model="userEmail"
                counter="10"
                label="아이디를 입력해주세요."
                required
                ></v-text-field>
                <v-text-field
                v-model="userPwd"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="비밀번호를 입력해주세요."
                hint="At least 8 characters"
                counter
                @keydown.enter="login"
                @click:append="show1 = !show1"
                ></v-text-field>
            </div>
            <div class="btn-box">
                <v-btn
                block
                elevation="3"
                class="login-btn"
                @click="login"
                >로그인</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                show1: false,
                userPwd: '',
                rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
                },
                userEmail:"",
            }
        },
        methods:{
            login(){
                this.$store.dispatch("login/loginMember",{
                    userEmail: this.userEmail,
                    userPwd: this.userPwd
                })
                .then(()=> {
                    if(this.token == ""){
                        alert("아이디 또는 비밀번호가 일치하지 않습니다.")
                    }else{
                        alert("로그인 성공")
                        this.$router.push("/home")
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        },
        computed:{
            token(){
                return this.$store.state.login.token
            }
        }
    }
</script>

<style lang="scss" scoped>
.login-container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-box{
        border: 0 2px 0 2px solid gray;
        border-radius: 50px;
        box-shadow: 3px 3px gray;
        background:lightgray;
        width: 30%;
        height: 40%;
        box-sizing: border-box;
        padding: 30px;
        .login-title{
            text-align: center;
            font-size: 50px;
            font-weight: 600;
            height: 30%;
        }
        .input-box{
            height: 50%;
            // padding: 10px 0;
            margin: auto;
        }
        .btn-box{
            height: 20%;
            .login-btn{

            }
        }
    }
}


</style>