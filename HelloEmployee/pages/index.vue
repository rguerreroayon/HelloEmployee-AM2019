<template>
  
     
        
    <div class="col-lg-6 mx-auto">
        
        <h1 style="center">Inicio de Sesión</h1>
        
        <br>
        <form @submit.prevent>
            <div class="form-group">
                <input 
                v-model="account.email"
                id="nuxtfire-email" 
                type="email" 
                placeholder="Correo Electrónico"
                class="form-control">
            </div>
            <div class="form-group">
                <input 
                v-model="account.password" 
                id="nuxtfire-password" 
                type="password"
                placeholder="Contraseña" 
                class="form-control">
            </div>
            <div class="form-group">
                <input 
                @click="login"
                type="submit"
                class="btn btn-primary">
            </div>
            <div v-if='isError' class="alert alert-danger">
                <p class="mb-0">{{errMsg}}</p>
            </div>
        </form>    
    </div>    




</template>

<script>
export default {
    data: () => ({
        account: {
            email: "",
            passworld: ""
        },
        isError: false,
        errMsg: ''
    }),
    methods: {
        login(){
            this.$store.dispatch('users/login',this.account).catch(error =>{
                this.isError = true;

                setTimeout(() => {
                     this.isError = false;

                },5000);
            });
            this.$router.push("/admin");
        }
    }
};
</script>

<style>

</style>