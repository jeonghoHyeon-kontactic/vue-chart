import axios from 'axios'

export default {

    namespaced: true,

    state: () => ({
        token:"",
        userName:"",
        message:""
    }),

    getters: {},

    mutations: {
        login(state, payload){
            state.token = payload.token
            state.userName = payload.userName
        },
        logout(state){
            state.token = "",
            state.userName = ""
        },
        test(state){
            state.message = "안녕"
        }
        
    },

    actions: {
        async loginMember({commit}, payload){
            console.log(payload)
            await axios.post('/api/login',payload)
            .then(res => {
                console.log(res)

                commit('login',{
                    token: res.data.accessToken,
                    userName: res.data.userName
                })
            })
            .catch(err => {
                console.log(err)
                return err
            })
        },
        logout({commit}){
            commit("logout")
        },
        async updatePwd({commit},payload){
            console.log(payload)
            await axios.post('/api/update-password',payload)
            .then(res => {
                console.log(res)
                if(res.data.operationStatus == "ERROR"){
                    alert("비밀번호는 영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상씩 포함된 8자 ~ 20자의 비밀번호여야 합니다.")
                }else{
                    alert("비밀번호 변경 성공!")
                    commit('test')
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

}

