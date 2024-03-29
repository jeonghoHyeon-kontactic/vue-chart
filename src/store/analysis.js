import axios from 'axios'

export default {
    
    namespaced: true,

    state: () => ({
        analysisList:[],
        analysis:{},
        navPages:1,
        highItem:[],
        lowItem:[],
        searchText:"",
        startDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * -1400000)).toISOString().substring(0, 10),
        endDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10),
        id:"",
        highIgnoreKwd:[],
        lowIgnoreKwd:[],
        highReviewList:[{}],
        lowReviewList:[{}],
        highWordMixtureList:[],
        lowWordMixtureList:[],
        reviewAsinsList:[],
        boardList:[],
        highReviewCnt:"",
        lowReviewCnt:"",
        reviewTotCnt:"",
        update:false
    }),

    getters: {

    },

    mutations: {

        updateState(state, payload){
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetAnalysis(state){
            state.startDate = (new Date(Date.now() - (new Date()).getTimezoneOffset() * -1400000)).toISOString().substring(0, 10)
            state.endDate = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10)
            state.searchText = ""
        },
        updateId(state, payload){
            state.id = payload
        },
        resetState(state){
            
            state.highWordMixtureList = []
            state.lowWordMixtureList = []
            state.highReviewList = []
            state.lowReviewList = []
            state.analysis = {}
            state.highItem = {}
            state.lowItem = {}
            state.highIgnoreKwd = []
            state.lowIgnoreKwd = []
        }

    },

    actions: {

        async searchAnalysisList({state, commit}, payload){

            try{
                
                console.log(payload)
                payload.searchText.trim()
                
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

        async pageAnalysis({commit}, payload){
            try{
                const res = await _fetchAnalysisList(payload)


                const analysisList = res.data.content.list
                const navPages = res.data.content.navigatepageNums.length

                commit('updateState',{
                    analysisList,
                    navPages,
                })
            }catch (error){
                console.log(error)
            }
        },

        async searchAnalysisWithId({commit}, payload) {
            
            try{

                console.log(payload)
                
                const res = await _fetchAnalysis(payload)


                const analysis = res.data.content

                const highItem = res.data.content.highTokenCntList
                const lowItem = res.data.content.lowTokenCntList

                const highIgnoreKwd = res.data.content.highIgnoreKwrdList
                const lowIgnoreKwd = res.data.content.lowIgnoreKwrdList
                const highReviewList = res.data.content.highReviewList
                const lowReviewList = res.data.content.lowReviewList
                const highWordMixtureList = res.data.content.highWordMixtureList
                const lowWordMixtureList = res.data.content.lowWordMixtureList
                const reviewAsinsList = res.data.content.reviewAsinsList
                const highReviewCnt = res.data.content.highReviewCnt
                const lowReviewCnt = res.data.content.lowReviewCnt
                const reviewTotCnt = res.data.content.reviewTotCnt

                console.log(res)
                console.log(analysis)


                commit('updateState',{
                    highReviewCnt,
                    lowReviewCnt,
                    reviewTotCnt,
                    reviewAsinsList,
                    highWordMixtureList,
                    lowWordMixtureList,
                    highReviewList,
                    lowReviewList,
                    analysis,
                    highItem,
                    lowItem,
                    highIgnoreKwd,
                    lowIgnoreKwd,
                })
                
                // state.update == false ? true : false
                

            }catch (error){
                console.log(error)
            }
        },

        async updateAnalysis({state, commit}, payload){

            try{

                console.log(payload)
                
                const res1 = await _updateAnalysis(payload)
                console.log(res1)

                if (res1.data.operationStatus == "ERROR"){
                    alert("업데이트를 실패했습니다.")
                    
                }else{

                    let reviewAnalsId = payload.reviewAnalsId
                    state.id = reviewAnalsId
                    state.highIgnoreKwd = payload.highIgnoreKwrd
                    state.lowIgnoreKwd = payload.lowIgnoreKwrd
                    const res = await _fetchAnalysis({
                        reviewAnalsId
                    })
    
                    const analysis = res.data.content
                    const highItem = res.data.content.highTokenCntList
                    const lowItem = res.data.content.lowTokenCntList

                    const highIgnoreKwd = res.data.content.highIgnoreKwrdList
                    const lowIgnoreKwd = res.data.content.lowIgnoreKwrdList
                    const highReviewList = res.data.content.highReviewList
                    const lowReviewList = res.data.content.lowReviewList
                    const highWordMixtureList = res.data.content.highWordMixtureList
                    const lowWordMixtureList = res.data.content.lowWordMixtureList
                    const reviewAsinsList = res.data.content.reviewAsinsList


                    
                    commit('updateState',{
                        reviewAsinsList,
                        highWordMixtureList,
                        lowWordMixtureList,
                        highReviewList,
                        lowReviewList,
                        analysis,
                        highItem,
                        lowItem,
                        highIgnoreKwd,
                        lowIgnoreKwd
                    })
    
                    console.log(res)

                    // state.update == false ? true : false

                
                }

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