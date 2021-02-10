import axios from 'axios';

export const gridPokemon = {
  state:{
    allPokemons: null,
  },
  getters:{
    allPokemons(state) {
      return state.allPokemons;
    },
  },
  mutations:{
    SetAllPokemons(state, value) {
      state.allPokemons = value;
    },
  },
  actions:{

    async SetBackHome({ commit }, options){
      await commit('SetBackHome', options.backHome);
    }
  }
};