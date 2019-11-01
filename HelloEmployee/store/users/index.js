import { auth } from "@/server/firebase";
import Cookie from "js-cookie";

export const state = () => ({
  user: null
});

export const mutations = {
  SET_USER: (state, account) => {
    state.user = account;
  }
};

export const actions = {
  async login({ coomit }, account) {
    try {
      //Login with user
      await auth.signInWithEmailAndPassword(account.email.account.password);

      //Get Json Web Token por firebase
      const token = await auth.currentUser.getIdToken();
      const { email,uid } = auth.currentUser; 
      //SET JWT a la cookie
      Cookie.set("access_token", token);
      

      //Commit the user locally
      commit('SET_USER', {email,uid});

    } catch (error) {
      throw error;
    }
  }
};
