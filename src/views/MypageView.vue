<template>
    <div class="mypage-container">
        <div class="mypage-box">
            <v-row class="mypage-title">
                비밀번호 변경
            </v-row>
            <v-row>
                <v-text-field
                v-model="userEmail"
                counter="10"
                label="이메일을 입력해주세요."
                required
                ></v-text-field>
            </v-row>
            <v-row justify="center">
                <v-dialog
                v-model="dialog"
                persistent
                max-width="500"
                >
                <template v-slot:activator="{ on, attrs }">
                    <div class="update-box">
                        <v-btn
                        color="primary"
                        dark
                        block
                        v-bind="attrs"
                        v-on="on"
                        >
                        비밀번호 변경
                        </v-btn>
                    </div>
                </template>
                <v-card>
                    <v-card-title class="text-h5">
                    비밀번호 변경
                    </v-card-title>
                    <v-card-text>
                        <v-text-field
                            v-model="userPwd"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="현재 비밀번호를 입력해주세요."
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                            ></v-text-field>
                            <v-text-field
                            v-model="newPwd"
                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show2 ? 'text' : 'password'"
                            name="input-10-1"
                            label="변경할 비밀번호를 입력해주세요."
                            hint="At least 8 characters"
                            counter
                            @click:append="show2 = !show2"
                            ></v-text-field>
                            <v-text-field
                            v-model="checkPwd"
                            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show3 ? 'text' : 'password'"
                            name="input-10-1"
                            label="한번 더 입력해주세요."
                            :rules="[rules.check]"
                            @keyup="checkPwrd"
                            hint="At least 8 characters"
                            counter
                            @click:append="show3 = !show3"
                            ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="updatePwd"
                    >
                        변경
                    </v-btn>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="closeModal"
                    >
                        취소
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialog: false,
            show1: false,
            show2: false,
            show3: false,
            userPwd: '',
            newPwd:'',
            checkPwd: '',
            userEmail:'',
            rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => (`The email and password you entered don't match`),
            check: () => this.newPwd == this.checkPwd ? true : false,
            },
        }
    },
    methods:{
        updatePwd(){
            if(this.checkPwrd()){
                this.$store.dispatch("login/updatePwd",{
                    updatePwd: this.newPwd,
                    userEmail: this.userName,
                    userPwd: this.userPwd
                })
                .then(() =>{
                    this.closeModal()
                })
                
            }else{
                alert("변경할 비밀번호가 일치하지 않습니다.")
            }
        },
        closeModal(){
            this.dialog = false
            this.userPwd = '',
            this.newPwd = '',
            this.checkPwd = ''
        },
        checkPwrd(){
            if(this.newPwd  == this.checkPwd ){
                return true
            }else{
                return false
            }
        }
        
    },
    computed:{
        userName(){
            return this.$store.state.login.userName
        }
    }
}
</script>

<style lang="scss" scoped>
.mypage-container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .mypage-box{
        width: 30%;
        background: lightgray;
        border: 2px solid gray;
        border-radius: 50px;
        padding: 40px;
        .mypage-title{
            justify-content: center;
            font-size: 3em;
            font-weight: 600;
        }
    }
}
.update-box{
    box-sizing: border-box;
    padding-top:20px;
    width: 100%;
}
</style>base
