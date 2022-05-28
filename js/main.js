// Nav bar menu hide show function 

const navMenuHideShow = () =>{
    console.log("Clicked");
    const x=document.getElementById("nav-menu");
    if (x.className==="nav-bar-menu__hidden"){
        x.className="nav-bar-menu";
    }else{
        x.className="nav-bar-menu__hidden";
    }
}


// FAQ Section 
const upperContainer = document.querySelectorAll('.faq-card-upper-container');
upperContainer.forEach((upperContainer)=>{
    upperContainer.addEventListener('click', ()=>{
        const bottomContainer = upperContainer.parentNode.lastElementChild;
        const faqArrow = upperContainer.firstElementChild;
        
        if(bottomContainer.className=="faq-card-bottom-container-hide"){
            bottomContainer.className = "faq-card-bottom-container"
            faqArrow.innerHTML = `<svg class="svg-arrow" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com
             License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
             <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 
             0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/></svg>`
        }else{
            bottomContainer.className = "faq-card-bottom-container-hide"
            faqArrow.innerHTML = `<svg class="svg-arrow" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com 
            License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25
             0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>`
        }
    })
})