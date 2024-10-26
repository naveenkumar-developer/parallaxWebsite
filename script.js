window.addEventListener('scroll',function(){
    let mountain=document.querySelector('#mountain')
    let birds=document.querySelector('#birds')
    let title=document.querySelector('#title')

    let scrollSpeed=window.scrollY
    title.style.marginTop=scrollSpeed * -1 + 'px'
    mountain.style.top=scrollSpeed *  1.5 + 'px'
    birds.style.right=scrollSpeed * 1.5 + 'px'
})