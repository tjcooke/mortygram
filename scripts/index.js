console.log("Test");

// When we click any .picture-frame
const targetElements = document.querySelectorAll("[data-target]");
// we see an enlarged version of the image that 
// is inside the .picture-frame

function respondToClick() {
    console.log('hello');
    console.log('how are you?');
    console.log('I am fine.');
}

function attachClickHandler(oneElement) {
    //  This is how we handle one element
    oneElement.addEventListener("click", respondToClick);
}



targetElements.forEach(attachClickHandler);