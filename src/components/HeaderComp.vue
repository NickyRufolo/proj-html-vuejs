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
<div class="div-white">
  <div><h3>EVERY MOMENT COUNTS</h3></div>
  <h6>Lorem, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus explicabo, a placeat quisquam nihil dignissimos quas odio, magni reprehenderit illum delectus incidunt libero? Nesciunt dolorem iusto quae necessitatibus! Officiis, iste? consectetur adipisicing elit. Magnam quia praesentium, ducimus similique autem eveniet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quibusdam recusandae voluptatibus consequatur odit sunt, earum laboriosam at Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, consectetur maxime aperiam quas, explicabo ratione totam exercitationem,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim, hic saepe aut tempore quas quo, maxime mollitia aperiam quos fugiat Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nam, aliquam odit quasi optio consequatur debitis dolore unde mollitia excepturi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, odio beatae adipisci cupiditate, hic voluptatibus fuga ducimus obcaecati at assumenda dignissimos aliquid eum consectetur in aliquam praesentium error mollitia est. reprehenderit nemo ut, magni perspiciatis possimus aperiam, impedit nisi iusto. necessitatibus, ducimus culpa illo voluptatum ex recusandae deserunt. Inventore. nostrum vero fugiat et saepe? Nobis sit, dolor nam dolore rem voluptas maiores. distinctio aspernatur quae, ipsum repellendus molestiae vero eaque, debitis a officia veniam. iste minus itaque fuga aut a rem incidunt ipsum nesciunt odit, vel laboriosam nobis maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus quidem recusandae pariatur. Ducimus explicabo temporibus perferendis voluptatum obcaecati, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, quidem animi exercitationem nulla ducimus aut similique sint in dolore, suscipit molestiae tenetur ea ratione doloremque quae placeat unde vero sit? soluta, praesentium corrupti iste sequi sunt asperiores, harum nisi expedita. Possimus!  ipsum dolor sit amet consectetur adipisicing elit. Maiores ratione est eos rerum harum dicta commodi libero incidunt tenetur, praesentium, ducimus inventore laudantium itaque veniam nemo hic quod sequi alias? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus vitae aperiam doloremque at maiores quasi, perferendis, fugit repudiandae reiciendis quas placeat labore voluptates iste facilis in error eos tenetur officiis!</h6>
</div>
    </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: {
    propsNav: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header-nav{
  // background-color: yellow;
}

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
height: 100%;
background-repeat: no-repeat;
background-size: contain;
}
header{
width: 100%;
}
.div-text-center {
width: 375px;
margin-top:300px;
text-align: center;
color: white;
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
      .div-white {
      background-color: white;
      width: 65%;
      // margin-top: 400px;
      // margin-right: 500px;
      }
</style>
