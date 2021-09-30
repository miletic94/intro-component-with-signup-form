function handleSubmit(e) {
    e.preventDefault()
    let done = false;
    for (let element of e.target.elements) {
        if(element.tagName=== "BUTTON") continue
        if(isEmpty(element)) {
            applyErrorStyle(element)
            dispatchMessage(element, `${element.placeholder} cannot be empty.`)
            showErrorMessage(element)
        } else {
                removeErrorStyle(element)
                hideErrorMessage(element)
            }
        if (element.id === "email" && !isEmpty(element)) {
            if(!isMail(element)) {
                dispatchMessage(element, "Looks like this is not email.")
                applyErrorStyle(element)
                showErrorMessage(element)
            } 
        }   
    }
}
//TODO Mora da se pojednostavi handleSubmit. Mora da može da ima širu implementaciju.
function isEmpty(element) {
    return element.value === ""
}
function isMail(element) {
    const regex = /.+@.+\.com/
    return regex.test(element.value)
}
function applyErrorStyle(element) {
    element.classList.add("invalid") // SEE CSS .invalid
}
function removeErrorStyle(element) {
    element.classList.remove("class", "invalid")
}
function showErrorMessage(element) {
    document.querySelector(`#${element.id}-error`).style = "display: block"
} 
function hideErrorMessage(element) {
    document.querySelector(`#${element.id}-error`).style = "display: none"
}
function dispatchMessage(element, message) {
    document.querySelector(`#${element.id}-error`).innerText = message
}
// Napraviti u yup-u