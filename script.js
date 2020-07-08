const button = document.querySelector('.button');

const mouseHoverAnimation = () => {
    anime({
        targets: button,
        width: '50%',
        scale: {
            delay: 1000,
            value: 1.5
        },
        duration: 1500
    })
}

const mouseoutAnimation = () => {
    anime({
        targets: button,
        width: '20',
        scale: {
            delay: 800,
            value: 1
        },
        duration: 1500
    })
}

button.addEventListener('mouseover', mouseHoverAnimation)
button.addEventListener('mouseout', mouseoutAnimation)
