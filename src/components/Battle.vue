<template>
  <div>
    <h3>Github de {{login}}</h3>
    <ul>
      <li>Repositorios publicos : {{public_repos}}</li>
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
    mounted(){
      this.axios.get('https://api.github.com/users/jpaguirre90')
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
    },
    data(){
      return {
        login:"",
        public_repos:0,
        public_gists:0,
        followers:0,
        following:0,
        total_score:0
      }
    }
}
</script>

<style>

</style>