<template>
    <footer>
        <div>
            <div class="latest-articles">
                <br>
                <h3>LATEST ARTICLES</h3>
                <hr>
                <br>
                <p><strong>Together we make all the differnence</strong></p>
            </div>
        </div>
        <div id="Pre-footer">
            <div class="card-SX">
                <img src="../assets/photo-1444213007800-cff19e1677ac-600x450.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>Understanding community complexity</b></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iure facilis natus culpa
                        temporibus eveniet cupiditate excepturi quia earum.</p>
                </div>
            </div>
            <div class="cards-DX">
                <div class="card-small-1">
                    <img src="../assets/photo-1444664597500-035db93e2323-177x142.jpg" alt="">
                    <div class="text-small-1">
                        <h4>Understanding community complexity</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis natus culpa</p>
                    </div>
                </div>
                <div class="card-small-1">
                    <img src="../assets/photo-1447430617419-95715602278e-177x142.jpg" alt="">
                    <div class="text-small-1">
                        <h4>Understanding community complexity</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis natus culpa</p>
                    </div>
                </div>
                <div class="card-small-1">
                    <img src="../assets/photo-1460230525622-630fe3294cd7-177x142.jpg" alt="">
                    <div class="text-small-1">
                        <h4>Understanding community complexity</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis natus culpa</p>
                    </div>
                </div>
                <div class="card-small-1">
                    <img src="../assets/photo-1460600421604-5e138c208b9c-177x142.jpg" alt="">
                    <div class="text-small-1">
                        <h4>Understanding community complexity</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis natus culpa</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="red-long">
            <h3>VIEW ALL OUR CAUSES</h3>
        </div>
        <main>
            <div class="div-text-center">
                <h1>MAKE A DIFFERENCE</h1>
                <hr>
                <h6>As long as poverty, injustice & inequality persist, none of us can truly rest</h6>
                <button>VOLUNTEER</button> <button class="btn2">DONATE NOW</button>
            </div>
        </main>
        <div class="Avada">
            <img src="../assets/avada-charity-sticky-header-logo.png" alt="">
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComp',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.latest-articles {
    // background-color: rgb(113, 146, 237);
    width: 40%;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 75px;
}

.latest-articles>p {
    font-size: 1rem;
    padding-top: 10px;
}

.latest-articles>h3 {
    font-size: 2rem;
}
.container h4 {
    color:  #fcd66c;

}
#Pre-footer {
    // background-color: lightcoral;
    width: 75%;
    display: flex;
}


.card-SX {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 55%;
    // background-color: yellowgreen;
}

.card-SX:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
    padding: 2px 16px;
}

.cards-DX {
    // background-color: cornflowerblue;
    height: 450px;
    width: 40%;
    margin: 0 30px;
    color: black;
}

.text-small-1 {
    // background-color: aquamarine;
    margin-left: 10px;
}
.text-small-1 h4{
    color:  #fcd66c;
}
.text-small-1 p {
    font-size: 0.8rem;
}

.card-small-1 {
    display: flex;
    padding: 10px;
}

.card-small-1>img {
    width: 30%;
    margin-left: 10px;
}

.red-long {
    width: 75%;
    height: 50px;
    background-color:#ed6864;
    text-align: center;
    display: flex;
    align-items: center;
    color: white;
    margin-top: 75px;
    margin-bottom: 75px;
}

main {
    background-image: url("../assets/home-footer.jpg");
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
}
.div-text-center {
width: 375px;
padding-top:200px;
text-align: center;
color: white;
padding-bottom: 100px;
}

button {
    display: inline-block;
    background-color: transparent;
    // border-radius: 10px;
    border: 2px double #cccccc;
    color: #eeeeee;
    text-align: center;
    font-size: 15px;
    padding: 7px;
    width: 140px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 20px 20px;
}

button:hover {
    background-color: #f7c2f9;
}

button:hover span {
    padding-right: 10px;
}
hr {
margin-top: 15px;
margin-bottom: 30px;
width: 50%;
border-top: 2px solid #fcd66c;
}
.Avada {
    text-align: center;
    padding: 17px;
    }
    .Avada img {
        width: 230px;
    }
</style>