let changBackground = document.querySelector(".landing");
let settingmove = document.querySelector(".solid");
let setting = document.querySelector(".setting");
let colors = document.querySelectorAll(".listColor li");



let imagesArray = ["1.jpg", "2.png", "3.jpg"];
setInterval(()=>{
    let randomNumber = Math.floor(Math.random() * imagesArray.length);
    // console.log(randomNumber);
    changBackground.style.backgroundImage =`url("images/${imagesArray[randomNumber]}")`
}, 10000)




settingmove.addEventListener("click", ()=>{
    setting.classList.toggle("open")

});
if( setting.classList.contains("open")){
    document.querySelector('.overlay').addEventListener("click", (e)=>{
        console.log(e.target);
        if(e.target.className != 'setting' || e.target.className != 'soild'){
            setting.classList.remove('open')
        }
    })
}

colors.forEach(li =>{
    li.addEventListener("click", (e)=>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        // remove active
        e.target.parentElement.querySelectorAll('.activeColor').forEach(element => {
            element.classList.remove('activeColor');
        });
        e.target.classList.add('activeColor');
    });
});
