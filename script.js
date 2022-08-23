const videoElememt = document.getElementById('video');
const button = document.getElementById('button');


// prompt to select media stream , pass to video elemet , then play

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElememt.srcObject = mediaStream;
        videoElememt.onloadedmetadata = () =>{
            videoElememt.play();

        }
    } catch (error) {
        console.log("error baby",error);
    }
}

button.addEventListener('click',async ()=>{
    // dissable button
    button.disable = true;

    await videoElememt.requestPictureInPicture();
})

selectMediaStream();