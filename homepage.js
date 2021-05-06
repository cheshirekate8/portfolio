window.addEventListener("DOMContentLoaded", () => {

    let at = document.querySelector(".clickableTitle__at")
    let coder = document.querySelector(".clickableTitle__coder")
    let slash = document.querySelector(".clickableTitle__slash")
    let comedian = document.querySelector(".clickableTitle__comedian")
    let ball = document.querySelector(".ball")


    coder.addEventListener("mouseover", () => {
        ball.classList.remove("ball-center");
        ball.classList.add('ball-coder');
        if (ball.classList.contains('ball-comedian')) {
            ball.classList.remove("ball-comedian")
        }
    })
    comedian.addEventListener("mouseover", () => {
        ball.classList.remove("ball-center")
        ball.classList.add('ball-comedian')
        if (ball.classList.contains('ball-coder')) {
            ball.classList.remove("ball-coder")
        }
    })

    coder.addEventListener("mouseout", () => {
        if (ball.classList.contains('ball-comedian')) {
            ball.classList.remove("ball-comedian")
        }
        if (ball.classList.contains('ball-coder')) {
            ball.classList.remove("ball-coder")
        }
        ball.classList.add('ball-center')
    })
    comedian.addEventListener("mouseout", () => {
        if (ball.classList.contains('ball-comedian')) {
            ball.classList.remove("ball-comedian")
        }
        if (ball.classList.contains('ball-coder')) {
            ball.classList.remove("ball-coder")
        }
        ball.classList.add('ball-center')
    })
})
