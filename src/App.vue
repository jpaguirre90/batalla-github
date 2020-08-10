<template>
  <div id="app">    
    <div>
      <img src="@/assets/WhatsApp Image 2020-07-07 at 15.12.18.jpeg" alt="">
      <div class="container">        
          <div class="row">
            <div class="col-md-1"></div>
            <Battle usuario="1"/>
            <div class="col-md-2"></div>
            <Battle usuario="2"/>
            <div class="col-md-1"></div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <button @click="duelo" type="button" class="btn btn-primary">Batalla</button>
            </div>
          </div>
      </div>
    </div>    
  </div>
</template>

<script>
import Battle from './components/Battle.vue'

export default {
  name: 'App',
  components: {
    Battle
  },
  methods:{
    duelo(){
      const Puntaje_1=this.$store.state.Puntaje_1
      const Puntaje_2=this.$store.state.Puntaje_2
      if(Puntaje_1>Puntaje_2){
        alert("Ganador Jugador 1")
      }else if(Puntaje_2>Puntaje_1){
        alert("Ganador Jugador 2")
      }else{
        alert("Empate")
      }
    }
  }
}
</script>

<style>

</style>
