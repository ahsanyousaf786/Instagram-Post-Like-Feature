let container= document.querySelector(".container")

let heart = document.querySelector(".ri-heart-3-fill")

let like_btn = document.querySelector(".ri-heart-fill")

let like_count = document.getElementById("#likes")

let check=0

let total_likes = null

container.addEventListener("dblclick",function(){
    
    total_likes =1  

    console.log(total_likes);
    
    document.getElementById("likes").innerHTML = total_likes;
    

    heart.style.transform ='translate(-0%,-0%) scale(1)'
    transition= 'all ease'
    
    like_btn.style.color ="red"

    setTimeout(() => {
         heart.style.transform ='translate(-0%,-0%) scale(0)'
         transition= 'all ease'
        
    }, 500);

like_btn.addEventListener("click",function(){
    if(check==0 ){
        like_btn.style.color ="red"
        check=1
        total_likes=1
        document.getElementById("likes").innerHTML = total_likes;
   
      
    }else{
        like_btn.style.color ="black"
        check=0
        total_likes = null 
        document.getElementById("likes").innerHTML = total_likes;
      
    }
})
   

})
