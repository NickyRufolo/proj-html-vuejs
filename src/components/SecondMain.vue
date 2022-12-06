<template>
    <main>
        <div class="recent-causes">
            <br>
            <h3>RECENT CAUSES</h3>
            <hr>
            <br>
            <p><strong>We run projects in over 30 countries in 5 continents</strong></p>
        </div>
        <div class="div-cards">
            <div class="card-1">
                <img src="../assets/avada-charity-fair-trade-featured-400x300.jpg" alt="">
            </div>
            <div class="card-2">
                <img src="../assets/avada-charity-farming-featured-400x300.jpg" alt="">
            </div>
            <div class="card-3">
                <img src="../assets/avada-charity-shelter-featured-400x300.jpg" alt="">
            </div>
            <div class="card-4">
                <img src="../assets/avada-charity-vaccines-featured-400x300.jpg" alt="">
            </div>
        </div>
        <div class="red-long">
            <h3>VIEW ALL OUR CAUSES</h3>
        </div>
    </main>
</template>

<script>
export default {
    name: 'SecondMain',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main {
    width: 100%;
    // background-color: rgb(162, 220, 220);
    // height: 500px;
}

.recent-causes {
    // background-color: rgb(38, 93, 243);
    width: 40%;
    text-align: center;
    padding-top: 50px;
}

.card-1 {
    // background-color: yellowgreen;
    height: 200px;
    display: flex;
    flex-grow: 1;
}

.card-2 {
    // background-color: rgb(50, 205, 84);
    height: 200px;
    display: flex;
    flex-grow: 1;
}

.card-3 {
    // background-color: rgb(153, 0, 255);
    height: 200px;
    display: flex;
    flex-grow: 1;
}

.card-4 {
    // background-color: rgb(255, 140, 0);
    height: 200px;
    display: flex;
    flex-grow: 1;
}

.div-cards {
    display: flex;
    width: 80%;
    height: 400px;
    align-items: center;
    padding-bottom: 50px;
}

.recent-causes>p {
    font-size: 1rem;
    padding-top: 10px;
}

.recent-causes>h3 {
    font-size: 2rem;
}

.recent-causes>hr {
    margin-top: 10px;
    width: 50%;
    border-top: 2px solid #fcd66c
}
.red-long {
    width: 100%;
    height: 80px;
    background-color: #ed6864;
    text-align: center;
    display: flex;
    align-items: center;
    color: white;
}
</style>