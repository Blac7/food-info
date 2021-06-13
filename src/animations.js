document.addEventListener('DOMContentLoaded', () => {
    slide("sec-1-logo", "0")
    slide("sec-1-cont", "0")
    svg_bounce()
    slide_array("numb-cont", "0")
    bounce_array("numb-back", "0.5s")
    // slide("t-dish-title", "0.5s")
    // slide("p-dish-title", "0.5s")
    // images()
})

const slide = (className, delay) => {
    const temp = document.querySelector(`.${className}`)
    let observer_slide = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                entry.target.style.animation = `slide-left 0.75s forwards ease-in`
                entry.target.style.animationDelay = delay
            } else {
                entry.target.style.animation = 'none'
            }
        })
    })
    if(temp) observer_slide.observe(temp)
} 

const slide_right = (className, delay) => {
    const temp = document.querySelector(`.${className}`)
    let observer_slide = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                entry.target.style.animation = `slide-right 0.75s forwards ease-in`
                entry.target.style.animationDelay = delay
            } else {
                entry.target.style.animation = 'none'
            }
        })
    })
    if(temp) observer_slide.observe(temp)
} 

const bounce = (className, delay) => {
    const temp = document.querySelector(`.${className}`)
    let observer_bounce = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                entry.target.style.animation = `bounce 1.4s forwards ease-in-out`
                entry.target.style.animationDelay = delay
            } else entry.target.style.animation = 'none'
        })
    })
    if(temp) observer_bounce.observe(temp)
}

const slide_array = (className, delay) => {
    const temp = document.querySelectorAll(`.${className}`)
    let observer_slide = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                entry.target.style.animation = `slide-left 0.75s forwards ease-in`
                entry.target.style.animationDelay = delay
            } else {
                entry.target.style.animation = 'none'
            }
        })
    })
    if(temp) {
        temp.forEach(t => observer_slide.observe(t))
    }
} 

const slide_right_array = (className, delay) => {
    const temp = document.querySelectorAll(`.${className}`)
    let observer_slide = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                entry.target.style.animation = `slide-right 0.75s forwards ease-in`
                entry.target.style.animationDelay = delay
            } else {
                entry.target.style.animation = 'none'
            }
        })
    })
    if(temp) {
        temp.forEach(t => observer_slide.observe(t))
    }
} 

const bounce_array = (className, delay) => {
    const temp = document.querySelectorAll(`.${className}`)
    let observer_bounce = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                entry.target.style.animation = `bounce 1.4s forwards ease-in-out`
                entry.target.style.animationDelay = delay
            } else entry.target.style.animation = 'none'
        })
    })
    if(temp) {
        temp.forEach(t => observer_bounce.observe(t))
    }
}

const svg_bounce = () => {
    const svg = document.querySelector(".main-svg") 
    const spoons = document.querySelectorAll(".spoon") 
    const forks = document.querySelectorAll(".fork") 
    let observer_bounce = new IntersectionObserver((entries) => {
        let entry = entries[0]
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `bounce 1.4s forwards ease-in-out`
            entry.target.style.animationDelay = `1s`
            spoons.forEach(spoon => {
                spoon.style.animation = `slight-rotate 0.5s forwards ease-in`
                spoon.style.animationDelay = `2.5s`
            })
            forks.forEach(fork => {
                fork.style.animation = `opacity-visible 0.75s forwards ease-in`
                fork.style.animationDelay = `2.5s`
            })
        } else {
            entry.target.style.animation = 'none'
            spoons.forEach(spoon => {
                spoon.style.animation = `none`
            })
            forks.forEach(fork => {
                fork.style.animation = `none`
            })
        }
    })
    if(svg) observer_bounce.observe(svg)
}

// const images = () => {
//     console.log(document.querySelector('.dish-img-box'))
// }