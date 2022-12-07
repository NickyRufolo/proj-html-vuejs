<template>
    <main>
        <div class="Avada">
            <p> © Copyright - 2020 AVADA THEME BY THEME FUSION | ALL RIGHT RESERVED | POWERED BY WORDPRESS</p>
        </div>
    
        <li class="Icons-Js" v-for="(elem, index) in propsFooter[0].contacts" :key="index">
            <font-awesome-icon :icon="elem"/>
        </li> 

        <div class="fonts">
            <div>
                <font-awesome-icon icon="fa-brands fa-facebook" />
            </div>

            <div>
                <font-awesome-icon icon="fa-brands fa-instagram" />
            </div>

            <div>
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </div>

            <div>
                <font-awesome-icon icon="fa-brands fa-youtube" />
            </div>

        </div>
    </main>
</template>
    
<script>


export default {
    name: 'FooterJs',
    props: {
        propsFooter: Array
    }
}
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .header-nav{
//   background-color: yellow;
// }
.Avada {
    text-align: center;
    padding: 17px;
    background-color:#e4e4e7;
    color: grey;
    font-size: 0.7rem;
}
main {
    background-color:#e4e4e7;

}
.Icons-Js {
    color: black;

}

.fonts {
    text-align: center;
    color: #fcd66c;
    background-color:#e4e4e7;;
}
.fonts div {
    background-color: whitesmoke;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    margin: 7px;
}
</style>
    