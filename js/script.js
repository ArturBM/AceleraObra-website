const carouselSolutions = document.querySelector('.servicos')
const sliderSolutions = carouselSolutions.querySelector('.slider')
const prevSolutions = carouselSolutions.querySelector('.prev')
const nextSolutions = carouselSolutions.querySelector('.next')
const solutions = sliderSolutions.children

var direction
nextSolutions.addEventListener('click', function(){
    direction = -1
    translateAmount = 100 / solutions.length
    carouselSolutions.style.justifyContent = 'flex-start'
    sliderSolutions.style.transform = `translate(-${translateAmount}%)`
})
prevSolutions.addEventListener('click', function(){
    direction = 1
    translateAmount = 100 / solutions.length
    carouselSolutions.style.justifyContent = 'flex-end'
    sliderSolutions.style.transform = `translate(${translateAmount}%)`
})
sliderSolutions.addEventListener('transitionend', function(){
    if (direction === -1)
    {
        sliderSolutions.appendChild(sliderSolutions.firstElementChild)
    } else {
        sliderSolutions.prepend(sliderSolutions.lastElementChild)
    }
    sliderSolutions.style.transition = 'none'
    sliderSolutions.style.transform = `translate(0)`
    setTimeout(() => {
        sliderSolutions.style.transition = 'all 0.5s'
    })
})

const faqQuestions = document.getElementsByClassName("faq-question")

for(let i = 0; i < faqQuestions.length; i++)
{
    faqQuestions[i].addEventListener('click', function() {
        this.classList.toggle("active")
        answer = this.nextElementSibling
        if (answer.style.maxHeight)
        {
            answer.style.maxHeight = null
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px'
        }
    })
}