import axios from 'axios'

export default {

    namespaced: true,

    state: () => ({
        clientList: [],
        client:{},
    }),

    getters: {},

    mutations: {
        updateState(state, payload){
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },

    actions: {
        // 고객사 리스트
        async searchClientList({commit},payload){
            try{
                console.log(payload)
                const res = await _fetchClientList(payload)
                console.log(res)
                const clientList = res.data.content.list
                console.log(clientList)
                commit("updateState",{
                    clientList
                })
            }catch (err) {
                console.log(err)
            }
        },
        // 고객사 상세페이지
        async searchClient({commit},payload){
            try{
                console.log(payload)
                const res = await _fetchClient(payload)
                console.log(res)
                const client = res.data
                console.log(client)
                commit("updateState",{
                    client
                })
            }catch (err) {
                console.log(err)
            }
        },
        // 고객사 HeatMap
    }
}

async function _fetchClientList(payload){
    return await axios.post('/api/client-company',payload)
}

async function _fetchClient(payload){
    return await axios.post('/api/client-company/detail',payload)
}

