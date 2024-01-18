const comment=(res) =>{
                              
                              var res=document.getElementById(res)
    console.log(res)
    if(res.className=='all_comment'){
        res.className='all_comment__show';
    }
     else if (res.className=='all_comment__show'){
        res.className='all_comment'
    }
}
const like=document.getElementById('like_btn');
var clickCounter=0;
like.addEventListener('click',function(){
    clickCounter++
    if( clickCounter === 1){
        singleClickTimer=setTimeout(function(){
            clickCounter = 0;
            singleClick();
        },400);
    }

    else if(clickCounter===2){
        clearTimeout(singleClickTimer);
        clickCounter = 0;
        doubleClick();
    }
},false)


const singleClick = () => {
        like.style.background='rgba(57, 57, 235, 0.849)';
        like.style.fontWeight='bold';
        like.innerHTML='like it';
        like.style.color='#fff';
}
const doubleClick = () => {
        like.innerHTML='dislike';
        like.style.background='red';
}
