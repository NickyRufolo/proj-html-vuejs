<template>
<header class="homepage-slider">
  <div class="div-flex">
  <!-- titolo  SX -->
  <div class="header-nav">
    <img src="../assets/avada-charity-logo.png" alt="">
  </div>

  <!-- lista nav DX -->
    <div class="list" v-for="(elem, index) in propsNav" :key="index">
        <a :href="elem.link">{{elem.label.toUpperCase()}}</a>
    </div>
  </div>
<div class="div-text-center">
  <h1>MAKE A DIFFERENCE</h1> 
  <h6>As long as poverty, injustice & inequality persist, none of us can truly rest</h6>
  <button>Our mission</button> <button class="btn2">Donate now</button>
</div>
<SecondHeader/>
    </header>
</template>

<script>
import SecondHeader from './SecondHeader.vue'


export default {
  name: 'HeaderComp',
  components: {
    SecondHeader
  },
  props: {
    propsNav: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

// .header-nav{
//   background-color: yellow;
// }

.div-flex {
display: flex;
align-items: center;

}
.header-nav > img{
width: 250px;
margin-right: 400px;
position: relative;
}
.list {
padding-right: 15px;
// background-color: aqua;
}
.list > a {
  color: white;
}
.homepage-slider{
background-image: url("../assets/home-page-slider.jpg");
background-repeat: no-repeat;
background-size: contain;
background-attachment: fixed;
width: 100%;
background-size: cover;

}
header{
width: 100%;
}
.div-text-center {
width: 375px;
margin-top:300px;
text-align: center;
color: white;
padding-bottom: 100px;
}
button { 
        display: inline-block;
        background-color: transparent;
        border-radius: 10px;
        border: 2px double #cccccc;
        color: #eeeeee;
        text-align: center;
        font-size: 15px;
        padding: 5px;
        width: 100px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 10px;
      }

      button:hover {
        background-color: #f7c2f9;
      }
      button:hover span {
        padding-right: 10px;
      }
      button:hover span:after {
        opacity: 1;
        right: 0;
      }
      .btn2 {
        border: 2px double#e4de78f0;
        color: #e4de78f0;
      }

//       @mixin flex($justify) {
//     display: flex;

//     @if $justify == 'Both_Center'{
//         justify-content: center;
//         align-items: center;
//     }
//     @else if $justify == 'Between_Center'{
//         justify-content: space-between;
//         align-items: center;
//     }
//     @else if $justify == 'Between'{
//         justify-content: space-between;
//     }
// }
</style>
