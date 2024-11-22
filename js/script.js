// CAROUSEL

const carousel = document.querySelectorAll('.carousel')
const slider = document.querySelectorAll('.slider')
const prev = document.querySelectorAll('.prev')
const next = document.querySelectorAll('.next')
const carouselElementCount = []
carousel.forEach((c, index) => {
    if(index === 1)
    {
        carouselElementCount.push(c.querySelector('.slider').children.length / 3)
    } else {
        carouselElementCount.push(c.querySelector('.slider').children.length)
    }
})

var index = []

for(let i = 0; i < carousel.length; i++)
{
    index.push(0)
    next[i].addEventListener('click', () => {
        if(index[i] === carouselElementCount[i] - 1)
        {
            index[i] = 0
        } else {
            index[i]++
        }
        translateAmount = 100 / carouselElementCount[i]
        slider[i].style.transform = `translate(-${translateAmount * index[i]}%)`
    })
    prev[i].addEventListener('click', () => {
        if(index[i] === 0)
        {
            index[i] = carouselElementCount[i] - 1
        } else {
            index[i]--
        }
        translateAmount = 100 / carouselElementCount[i]
        slider[i].style.transform = `translate(-${translateAmount * index[i]}%)`
    })
}

