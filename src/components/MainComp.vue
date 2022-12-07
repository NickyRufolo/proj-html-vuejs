<template>
    <main>
        <div class="div-img">
            <div class="our-value">
                <br>
                <h3>OUR VALUES</h3>
                <hr>
                <br>
                <p><strong>Think Big. Act Bigger.</strong></p>
            </div>
            <div id="grande-4">
                <div class="Clean-water">
                    <font-awesome-icon icon="fa-solid fa-droplet" />
                    <h3>Clean Water</h3>
                    <br>
                    <p>Explicabo adipisci similique ullam officia facere, error quasi praesentium necessitatibu</p>
                    <button>LEARN MORE</button>
                </div>
                <div class="Vaccinations">
                    <font-awesome-icon icon="fa-solid fa-stethoscope" />
                    <h3>Vaccinations</h3>
                    <br>
                    <p>Explicabo adipisci similique ullam officia facere, error quasi praesentium necessitatibus</p>
                    <button>LEARN MORE</button>
                </div>
                <div class="Education">
                    <font-awesome-icon icon="fa-solid fa-graduation-cap" />
                    <h3>Education</h3>
                    <br>
                    <p>Explicabo adipisci similique ullam officia facere, error quasi praesentium necessitatibus</p>
                    <button>LEARN MORE</button>
                </div>
                <div class="Farming">
                    <font-awesome-icon icon="fa-brands fa-pagelines" />
                    <h3>Farming</h3>
                    <br>
                    <p>Explicabo adipisci similique ullam officia facere, error quasi praesentium necessitatibus</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>
        <SecondMain/>
    </main>
</template>

<script>
import SecondMain from './SecondMain.vue'

export default {
    name: 'MainComp',
    components: {
        SecondMain
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.div-img {
    background-image: url("../assets/home-content-bg-2.jpg");
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding-bottom: 50px;
}
// main {
// height: 100vh;
// }
.our-value {
    // background-color: yellow;
    width: 30%;
    text-align: center;
    margin-bottom: 30px;
    color: white;
}
.our-value > p {
font-size: 1.5rem;
}
.our-value > h3 {
font-size: 2.7rem;
}
.our-value > hr {
margin-top: 10px;
width: 50%;
border-top: 2px solid #f5cc00;
}

#grande-4 {
    display: flex;
    align-items: flex-end;
    // height: 300px;
    // background-color: azure;
    text-align: center;
    color:white;


}

.fa-droplet,
.fa-stethoscope,
.fa-graduation-cap,
.fa-pagelines {
    font-size: 4.5rem;
    padding-bottom: 30px;
    color:#f5cc00;
}

// .Clean-water {
//     background-color: greenyellow;
// }

// .Vaccinations {
//     background-color: rgb(255, 68, 47);

// }

// .Education {
//     background-color: rgb(47, 168, 255);

// }

// .Farming {
//     background-color: rgb(255, 0, 230);

// }

button {
    display: inline-block;
    background-color: transparent;
    // border-radius: 10px;
    border: 2px double#f5cc00;
    background-color:#f5cc00;
    color: white;
    text-align: center;
    font-size: 15px;
    padding: 7px;
    width: 150px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
}

button:hover {
    background-color: #f7c2f9;
}


</style>