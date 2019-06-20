function mobileCheck() {
    console.log("width: " + window.innerWidth);
    return window.innerWidth <= 1100;
}

export { mobileCheck as m };
