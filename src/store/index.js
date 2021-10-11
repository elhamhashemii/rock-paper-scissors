import { createStore } from 'vuex'

export default createStore({
    state:{
        Hands: ['✊🏼', '✋🏼', '✌🏼'],
        userHand: ''
    },
    getters:{
        Hands(state){
            return state.Hands
        }
    }
})
