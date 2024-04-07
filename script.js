let arabic = document.getElementById("arabic")
let english = document.getElementById("english")
let title = document.getElementById("title")
let welcome = document.getElementById("welcome-text")
let about = document.getElementById("about")
let aboutText = document.getElementById("about-text")
let contact = document.getElementById("contact")


arabic.onclick = ()=>{
    setLanugage("arabic")
    localStorage.setItem("Lang","arabic")
}

english.onclick = ()=>{
    setLanugage("english")
    localStorage.setItem("Lang","arabic")
}

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"))
}

function setLanugage(getLangage){
    if(getLangage === "arabic"){
        title.innerHTML = "أنس أيت بلكويم"
        welcome.innerHTML = "مرحبا بكم في موقع أنس أيت بلكويم"
        about.innerHTML = "حاولنا "
        aboutText.innerHTML = "أنا مطور الواجهة الأمامية"
        contact.innerHTML = "إتصل بنا "
    
    }else if(getLangage === "english"){
        title.innerHTML = "ANASS AIT BELAGOUIM"   
        welcome.innerHTML = "Welcome to website of Anass ait belagouim"
        about.innerHTML = "About Us"
        aboutText.innerHTML = "I am i front-end developer"
        contact.innerHTML = "Contact us"
      
    
    }
}
