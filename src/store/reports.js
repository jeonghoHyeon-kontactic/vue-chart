import axios from "axios"

export default {

    namespaced: true,

    state: () => ({
        heatMap:[],
        message:""
    }),

    getters: {},

    mutations: {
        updateState(state, payload){
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },

    actions:{
        async getHeatMap({commit},payload){
            try {
                console.log(payload)
                const res = await _fetchHeatMap(payload)
                console.log(res)
                const data = res.data.content
                console.log(data)
                commit("updateState",{
                    heatMap:data
                })
            }catch(err){
                console.log(err)
            }
        },

        async uploadFile({commit},payload){
            try{
                console.log(payload)
                const res = await _uploadFile(payload)
                console.log(res)
                const data = res.data
                console.log(data)
                commit("updateState",{
                    message:"안녕"
                })

            }catch(err){
                console.log(err)
            }
        }
    }
}

async function _fetchHeatMap(payload){
    return await axios.post('/api/payments-report/heatMap',payload)
}

async function _uploadFile(payload){
    return await axios.post('/api/payments-report/upload',payload)
}