function myfun(){
    let username=document.getElementById("username").value
    let pass=document.getElementById("pass").value

    if(username=="Vinni" && pass=="vini_28"){

       window.location='home.html'
       
       // document.getElementById("result").innerHTML="Logged in successfully"//
    }
    else{
        document.getElementById("result").innerHTML="Invalid!"
    }
    
}