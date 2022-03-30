import axios from 'axios'

export default {
    
    namespaced: true,

    state: () => ({
        analysisList:[],
        analysis:{},
        navPages:1,
        highItem:{},
        lowItem:{},
        searchText:"",
        startDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        endDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }),

    getters: {
        startDate(){

            const d = new Date();

            // 날짜를 정하기
            new Date(2020, 0, 1).toLocaleDateString();
            // "2020. 1 1."


            const year = d.getFullYear(); // 년
            const month = d.getMonth();   // 월
            const day = d.getDate();      // 일
            return new Date(year, month, day - 7).toLocaleDateString();

    
        }
    },

    mutations: {

        updateState(state, payload){
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },

    },

    actions: {

        async searchAnalysisList({state, commit}, payload){

            try{
                
                console.log(payload)
                const res = await _fetchAnalysisList(payload)
                state.searchText = payload.searchText
                state.startDate = payload.startDate
                state.endDate = payload.endDate
                const analysisList = res.data.content.list
                const navPages = res.data.content.navigatepageNums.length
                console.log(res)
                console.log(analysisList)

                commit('updateState',{
                    analysisList,
                    navPages,
                })

            } catch (error) {
                console.log(error)
            }

        },

        async searchAnalysisWithId({commit}, payload) {

            try{

                console.log(payload)
                
                const res = await _fetchAnalysis(payload)

                const analysis = res.data.content
                const highTokenCnt = JSON.parse(res.data.content.highTokenCnt)
                const lowTokenCnt = JSON.parse(res.data.content.lowTokenCnt)
                const highLabel = Object.keys(highTokenCnt)
                const highData = Object.values(highTokenCnt)
                const lowLabel = Object.keys(lowTokenCnt)
                const lowData = Object.values(lowTokenCnt)
                console.log(res)
                console.log(analysis)
                commit('updateState',{
                    analysis,
                    highItem:{
                        highLabel,
                        highData,
                    },
                    lowItem:{
                        lowLabel,
                        lowData
                    }
                })

            }catch (error){
                console.log(error)
            }
        },

        async updateAnalysis({commit}, payload){

            try{

                console.log(payload)
                const res1 = _updateAnalysis(payload)
                console.log(res1)
                let reviewAnalsId = payload.reviewAnalsId

                const res = await _fetchAnalysis({
                    reviewAnalsId
                })

                const highTokenCnt = JSON.parse(res.data.content.highTokenCnt)
                const lowTokenCnt = JSON.parse(res.data.content.lowTokenCnt)
                const highLabel = Object.keys(highTokenCnt)
                const highData = Object.values(highTokenCnt)
                const lowLabel = Object.keys(lowTokenCnt)
                const lowData = Object.values(lowTokenCnt)

                commit('updateState',{
                    highItem:{
                        highLabel,
                        highData,
                    },
                    lowItem:{
                        lowLabel,
                        lowData
                    }
                })
            }catch (error){
                console.log(error)
            }
        },



    }
}

async function _fetchAnalysisList(payload){
    return await axios.post('/api/review-anals', payload)
}

async function _fetchAnalysis(payload){
    return await axios.post('/api/review-anals/detail', payload)
}

async function _updateAnalysis(payload){
    return await axios.post('/api/review-anals/update',payload)
}