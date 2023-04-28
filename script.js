const mobilebtn = document.getElementById('mobile')
const mobilemenu = document.getElementById('mobile-menu')

mobilebtn.addEventListener('click',function(){
    mobilemenu.classList.toggle('hidden')
    console.log("hello");
})