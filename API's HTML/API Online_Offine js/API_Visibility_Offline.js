const video = document.getElementById('video')

addEventListener('visibilitychange', (e) =>{
    //console.log(document.visibilityState)

    if(document.visibilityState  === 'visible'){
        console.log('PLAY')
        video.play()
    }else if(document.visibilityState === 'hidden'){
        console.log('PAUSE')
        video.pause()
    }

})


//operador ternario
addEventListener('visibilitychange', (e) => document.visibilityState === 'visible' ? video.play() : video.pause())
