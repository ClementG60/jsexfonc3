button.addEventListener("click", action)

const multiply = (n1, n2) => n1 * n2

function action() {
    let p = document.createElement("p")
    p.innerText = multiply(n1.value,n2.value)
    document.body.append(p)
}
