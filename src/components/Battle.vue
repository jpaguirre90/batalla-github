<template>
<div class="col-md-4 tarjeta">                
  <h3 class="text-center">Welcome to GitHub Battle</h3>
  <form @submit.prevent="cargar_usuario">
    <div class="form-group">  
      <input v-model="usuario_github" type="text" class="form-control" id="exampleInputPassword1" placeholder="Ingrese nombre de usuario">
    </div>
    <div class="col-md-4 offset-md-4 ">
      <input type="submit" class="btn btn-primary" />
    </div>
    <div class="col-md-12">
      <h3>Github de {{login}}</h3>
    </div>
    <div class="form-group form-check">
      <ul id="nombre">
        <li>Repositorios publicos : {{public_repos}}</li>
        <li>Numero de seguidores : {{followers}}</li>
        <li>Seguidos : {{following}}</li>
        <li>Gist publicos : {{public_gists}}</li>
        <li>Puntaje Total : {{total_score}}</li>
      </ul>
    </div>                  
  </form>
</div>
</template>

<script>
export default {
    name:'Battle',
    data(){
      return {
        login:"",
        public_repos:0,
        public_gists:0,
        followers:0,
        following:0,
        total_score:0,
        usuario_github:""
      }
    },
    methods:{
      cargar_usuario(){
        this.axios.get(`https://api.github.com/users/${this.usuario_github}`)
        .then((datos)=>{
          const usuario = datos.data;
          this.public_repos=usuario.public_repos;
          this.followers=usuario.followers;
          this.following=usuario.following;
          this.public_gists=usuario.public_gists;
          this.login=usuario.login
          this.total_score=((usuario.public_repos)+(usuario.followers)+(usuario.following)+(usuario.public_gists))
          if (this.usuario=="1"){
            this.$store.commit("CambiarPuntaje1",this.total_score)
          }else{
            this.$store.commit("CambiarPuntaje2",this.total_score)
          }
      })
      .catch(()=>{
        alert("Usuario inexistente en GitHub");
      });
      }
    },
    props:{
      usuario:String
    }  
}
</script>

<style>
img{
    width: 100%;
    position: absolute;
}
h3{
    color: #538dd2; 
}
.tarjeta{
    background-color: #032E44;
    width: 100%;
    border-radius: 10px;
    margin-top: 12%;    
}
#nombre{
    color: #538dd2; 
}
</style>