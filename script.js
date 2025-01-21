const downloadBtn=document.querySelector(".download-btn");

// google drives file link 
const fileLink = "https://docs.google.com/presentation/d/1nXJZAKTIcybzqb7FU3LsVK2uiAoTkMS8/edit#slide=id.p1";

const initTimer= () =>{

    if(downloadBtn.classList.contains("disable-timer")){
        return (location.href = fileLink )
    }

    let timer = downloadBtn.dataset.timer
    downloadBtn.classList.add("timer")
    downloadBtn.innerHTML = `Your file will download in ${timer} seconds `;

    const  initCounter = setInterval(()=>{
        if(timer>0){
            timer--;
            return  downloadBtn.innerHTML = `Your file will processing in ${timer} seconds `;
        }
        clearInterval(initCounter)
        location.href = fileLink 
        downloadBtn.textContent = "Your file is processing ..."

        setTimeout(()=>{
            downloadBtn.classList.replace("timer","disable-timer")
            downloadBtn.innerHTML = ` <span class="text">Download Again</span>`
        },3000)
    },1000)
}


downloadBtn.addEventListener("click",initTimer )