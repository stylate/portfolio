function mobileCheck() {
    console.log("width: " + window.innerWidth);
    return window.innerWidth <= 900;
}

export { mobileCheck as m };
