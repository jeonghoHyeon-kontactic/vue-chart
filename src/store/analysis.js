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
        startDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * -1400000)).toISOString().substring(0, 10),
        endDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10),
        id:"",
        highIgnoreKwd:"",
        lowIgnoreKwd:"",
        header:[
            {
                text: 'Dessert (100g serving)',
                align: 'start',
                sortable: false,
                value: 'name',
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
        ],
        desserts:[
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%',
                },
                {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: '1%',
                },
                {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: '7%',
                },
                {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: '8%',
                },
                {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                    protein: 3.9,
                    iron: '16%',
                  },
                  {
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%',
                  },
                  {
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%',
                  },
                  {
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%',
                  },
                  {
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%',
                  },
                  {
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%',
                  },
        ]
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
                const highTokenCnt = JSON.parse(res.data.content.highTokenCnt)
                const lowTokenCnt = JSON.parse(res.data.content.lowTokenCnt)
                const highLabel = Object.keys(highTokenCnt)
                const highData = Object.values(highTokenCnt)
                const lowLabel = Object.keys(lowTokenCnt)
                const lowData = Object.values(lowTokenCnt)
                const highIgnoreKwd = res.data.content.highIgnoreKwrd
                const lowIgnoreKwd = res.data.content.lowIgnoreKwrd
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
                    },
                    highIgnoreKwd,
                    lowIgnoreKwd
                })

            }catch (error){
                console.log(error)
            }
        },

        async updateAnalysis({state, commit}, payload){

            try{

                console.log(payload)
                
                const res1 = await _updateAnalysis(payload)
                console.log(res1)
                let reviewAnalsId = payload.reviewAnalsId
                state.id = reviewAnalsId
                state.highIgnoreKwd = payload.highIgnoreKwrd
                state.lowIgnoreKwd = payload.lowIgnoreKwrd
                const res = await _fetchAnalysis({
                    reviewAnalsId
                })

                const analysis = res.data.content
                const highTokenCnt = JSON.parse(res.data.content.highTokenCnt)
                const lowTokenCnt = JSON.parse(res.data.content.lowTokenCnt)
                const highLabel = Object.keys(highTokenCnt)
                const highData = Object.values(highTokenCnt)
                const lowLabel = Object.keys(lowTokenCnt)
                const lowData = Object.values(lowTokenCnt)
                
                
                commit('updateState',{
                    analysis,
                    highItem:{
                        highLabel,
                        highData,
                    },
                    lowItem:{
                        lowLabel,
                        lowData
                    },
                })

                console.log(res)
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