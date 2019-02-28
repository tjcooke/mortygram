console.log("Test");

// When we click any .picture-frame
const targetElements = document.querySelectorAll("[data-target]");
// we see an enlarged version of the image that 
// is inside the .picture-frame

function respondToClick(event) {
    console.log('hello');
    console.log('how are you?');
    console.log('I am fine.');

    console.log(event.target.parentElement);
    // add the "big" class to the thing that got clicked
    event.target.parentElement.classList.add('big');
}

function attachClickHandler(oneElement) {
    //  This is how we handle one element
    oneElement.addEventListener("click", respondToClick);
}



targetElements.forEach(attachClickHandler);