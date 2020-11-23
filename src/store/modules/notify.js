import axios from "axios";
import mutations from "../mutations";

const { SET_MESSAGE, LOAD_MORE, DISABLE_BTN } = mutations;
const LOAD_MORE_STEP = 3;

const notifyStore = {
  namespaced: true,
  state: {
    messages: [],
    lazyLoadMessages: [],
    isBtnDisabled: false
  },
  getters: {
    getMessages: ({ messages }) => messages,
    loadedMessages: ({ lazyLoadMessages }) => lazyLoadMessages,
    isBtnDisabled: ({ isBtnDisabled }) => isBtnDisabled
  },
  mutations: {
    [DISABLE_BTN](state, payload) {
      state.isBtnDisabled = payload;
    },
    [SET_MESSAGE](state, payload) {
      state.messages = payload;
      state.lazyLoadMessages = payload.slice(0, 3);
    },
    [LOAD_MORE](state, step) {
      state.lazyLoadMessages = [
        ...state.lazyLoadMessages,
        ...state.messages.slice(
          state.lazyLoadMessages.length,
          state.lazyLoadMessages.length + step
        )
      ];
      console.log(state.lazyLoadMessages);
    }
  },
  actions: {
    async fetchMessages({ commit }) {
      const res = await axios.get("http://jsonplaceholder.typicode.com/todos");
      commit(SET_MESSAGE, res.data.slice(0, 11));
    },
    disableBtn({ commit }) {
      commit(DISABLE_BTN, true);
    },
    loadMore({ commit, state, dispatch }) {
      if (
        state.lazyLoadMessages.length + LOAD_MORE_STEP >=
        state.messages.length
      ) {
        dispatch("disableBtn");
        commit(
          LOAD_MORE,
          state.messages.length - state.lazyLoadMessages.length
        );
      } else {
        commit(LOAD_MORE, LOAD_MORE_STEP);
      }
    }
  }
};

export default notifyStore;
