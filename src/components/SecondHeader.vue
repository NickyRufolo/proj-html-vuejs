<template>
    <main>
        <div class="div-white">
            <div>
                <h2>EVERY MOMENT COUNTS</h2> <br>
                <hr> <br>

                <h6>Doloribus, esse. Corporis numquam hic ducimus quibusdam eligendi voluptates perspiciatis placeat
                    perferendis, labore officiis laboriosam quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    consectetur adipisicing elite <br> <br>
                    Lorem, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, esse. Corporis
                    necessitatibus enim dignissimos consequuntur eveniet assumenda numquam hic ducimus quibusdam
                    eligendi
                    voluptates perspiciatis placeat perferendis, labore officiis laboriosam quos. Lorem ipsum dolor sit
                    amet
                    Lorem ipsum dolor sit amet consectetur adipisicing elit <br> <br>
                    Lorem, Lorem ipsum elitet assumenda numquam hic ducimus quibusdam eligendi voluptates perspiciatis
                    placeat perferendis, labore officiis laboriosam quos. Lorem ipsum dolor sit amet </h6>
                    <br>
                    <button>OUR MISSION</button>
            </div>


        </div>
        <div class="div-red">
            <h6>Lorem, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, esse. Corporis
                necessitatibus enim dignissimos consequuntur eveniet assumenda numquam hic ducimus quibusdam eligendi
                voluptates perspiciatis placeat perferendis, labore officiis laboriosam quos. Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet consectetur adipisicing elit</h6>
            <h6>Lorem, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, esse. Corporis
                necessitatibus enim dignissimos consequuntur eveniet assumenda numquam hic ducimus quibusdam eligendi
                voluptates perspiciatis placeat perferendis, labore officiis laboriosam quos. Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet consectetur adipisicing elit</h6>
            <h6>Lorem, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, esse. Corporis
                necessitatibus enim dignissimos consequuntur eveniet assumenda numquam hic ducimus quibusdam eligendi
                voluptates perspiciatis placeat perferendis, labore officiis laboriosam quos. Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet consectetur adipisicing elit</h6>

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
    width: 65%;
}

.div-red {
    background-color: rgb(255, 0, 0);
    width: 35%;
}

.div-white>div {
    padding: 100px;
}

main {
    display: flex;
    margin-top: 300px;
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