<template>
    <main>
        <div class="div-white">
            <div>
                <h2>EVERY MOMENT COUNTS</h2> <br>
                <hr> <br>

                <p>Doloribus, esse. Corporis numquam hic ducimus quibusdam eligendi voluptates perspiciatis placeat
                    perferendis, labore officiis laboriosam quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    consectetur adipisicing elite <br> <br>
                    Lorem, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, esse. Corporis
                    necessitatibus enim dignissimos consequuntur eveniet assumenda numquam hic ducimus quibusdam
                    eligendi
                    voluptates perspiciatis placeat perferendis, labore officiis laboriosam quos. Lorem ipsum dolor sit
                    amet
                    Lorem ipsum dolor sit amet consectetur adipisicing elit <br> <br>
                    Lorem, Lorem ipsum elitet assumenda numquam hic ducimus quibusdam eligendi voluptates perspiciatis
                    placeat perferendis, labore officiis laboriosam quos. Lorem ipsum dolor sit amet </p>
                <br>
                <button>OUR MISSION</button>
            </div>


        </div>
        <div class="div-red">
            <div class="FirstParagraph">
                <span><font-awesome-icon icon="fa-regular fa-heart" />
                    <h1>2032</h1>
                </span>
                <h4>Volunteers worldwide</h4>
            </div>
            <div class="FirstParagraph">
                <span><font-awesome-icon icon="fa-solid fa-globe" />
                    <h1>132</h1>
                </span>
                <h4>Active projects</h4>
            </div>
            <div class="FirstParagraph">
                <span><font-awesome-icon icon="fa-solid fa-dollar-sign" />
                    <h1>3.8M</h1>
                </span>
                <h4>Donated</h4>
            </div>
        </div>
    </main>
</template>

<script>


export default {
    name: 'SecondHeader',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.div-white {
    background-color: white;
    padding: 170px;
    // dovrei usare o il calc o il flex grow
}
.div-white p  {
font-size: 1rem;
}
.div-white > div {
margin-top: -27px;
font-size: 1.5rem;
}
.div-red {
    background-image: url("../assets/home-content-bg-1.jpg");
    background-repeat: no-repeat;
    padding: 120px;
    text-align: center;
    color: white;
}

// .div-white>div {
//     padding: 100px;
// }

main {
    display: flex;
    margin-top: 297px;
}

.FirstParagraph h1 {
    display: inline-block;
    margin-left: 10px;
    font-size: 30px;
}

.FirstParagraph .fa-heart,
.fa-globe,
.fa-dollar-sign {
    font-size: 40px;
}

.FirstParagraph:nth-child(2),
:nth-child(3) {
    margin-top: 50px;
}

.FirstParagraph:first-child {
}

hr {
    width: 20%;
    margin-left: 0;
    border-top: 2px solid #f5cc00;
}

button {
    display: inline-block;
    background-color: #f5cc00;
    border-radius: 0px;
    border: 2px double #ffffff;
    color: #eeeeee;
    text-align: center;
    font-size: 15px;
    padding: 3px;
    width: 130px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 0 auto;
}

button:hover {
    background-color: #f7c2f9;
}
</style>