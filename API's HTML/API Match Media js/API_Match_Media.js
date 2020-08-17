/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia
    mql = window.matchMedia(mediaQueryString)

    mql viene de media query list, que es el objeto
    que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS
*/

//console.log(innerWidth)

const mql = matchMedia('(min-width:400px) and (orientation:landscape)')

console.log(mql)

const applyMatchMedia = mql =>{
    mql.matches ? 
    //NO HACER ESTO NUNCA
        document.body.style.backgroundColor = 'red'
        :
         //NO HACER ESTO NUNCA
        document.body.style.backgroundColor = 'royalblue'
}

addEventListener('resize', () => applyMatchMedia(mql))
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql))

//applyMatchMedia(mql)
