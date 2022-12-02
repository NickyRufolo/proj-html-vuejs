<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HeaderComp :propsNav="arrayNavbar"/>
    <MainComp/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'


export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
  data(){
  return {
    //ogni li della navbar corrisponde ad un oggetto dell'array con link vuoto
    //oggetto home: '/about'(link)
    //oggetto contact us: '/about'(link)
      //oggetto about: '/about'(link) ---> nella navbar HTML li vai a creare ul-li e fai il ciclo
      arrayNavbar: [
        {
          'label': 'home',
          "link": "/home"
        },
        {
          'label': 'mission',
          "link": "/mission"
        },
        {
          'label': 'causes',
          "link": "/causes"
        },        
        {
          'label': 'journal',
          "link": "/journal"
        },
        {
          'label': 'donate',
          "link": "/donate"
        },
        
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 2000px;
  width: 100vw;
  background-color: rgb(223, 216, 216);
}

* {
margin: 0 auto;
padding: 0;
box-sizing: border-box;
text-decoration: none;}

</style>
