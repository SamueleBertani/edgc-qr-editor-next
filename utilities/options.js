export {
    defaultQrOptions
}

const defaultQrOptions = {
    data : "https://master.d2g7knv9wv4iw9.amplifyapp.com/",
    width: 1000,
    height: 1000,
    type: "svg",
    margin: 2,
    image: "",
    dotsOptions: {
        color: "#000000",
        type: "square",
        gradient : ""
    },
    imageOptions: {
        crossOrigin: "anonymous",
        hideBackgroundDots: false,
        imageSize : 0.3,
        margin: 5
    },
    cornersSquareOptions: {
        color: "#000000",
        type: "square",
        gradient : ""
    },
    cornersDotOptions: {
        color: "#000000",
        type: "square",
        gradient : ""
    },
}