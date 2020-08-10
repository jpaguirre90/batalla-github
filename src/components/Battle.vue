<template>
  <div>
    <img src="@/assets/WhatsApp Image 2020-07-07 at 15.12.18.jpeg" alt="">
    <div class="container">        
        <div class="row">
            <div class="col-md-4 offset-md-4 tarjeta">                
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
        </div>
    </div>
    <ul>
      <li></li>
      <li>Numero de seguidores : {{followers}}</li>
      <li>Seguidos : {{following}}</li>
      <li>Gist publicos : {{public_gists}}</li>
      <li>Puntaje Total : {{total_score}}</li>
    </ul>
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
      })
      .catch((error)=>{
        alert(error);
      });
      }
    },
    mounted(){
      
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