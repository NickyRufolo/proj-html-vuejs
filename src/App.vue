<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HeaderComp :propsNav="arrayNavbar"/>
    <MainComp/>
    <FooterComp/>
    <FooterJs :propsFooter="arrayFooter"/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'
import FooterJs from './components/FooterJs.vue'


export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp,
    FooterJs
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
        }
        
      ],
      arrayFooter: [
        {
          contacts: ["fa-brands fa-instagram", "fa-brands fa-twitter", "fa-brands fa-facebook", "fa-brands fa-youtube"]
        }
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
}

* {
margin: 0 auto;
padding: 0;
box-sizing: border-box;
text-decoration: none;}

</style>
<!-- <font-awesome-icon icon="fa-regular fa-heart" />
<font-awesome-icon icon="fa-solid fa-globe" />
<font-awesome-icon icon="fa-solid fa-dollar-sign" />
<font-awesome-icon icon="fa-brands fa-facebook" />
<font-awesome-icon icon="fa-brands fa-facebook-f" />
<font-awesome-icon icon="fa-brands fa-instagram" />
<font-awesome-icon icon="fa-brands fa-twitter" />
<font-awesome-icon icon="fa-brands fa-youtube" /> -->