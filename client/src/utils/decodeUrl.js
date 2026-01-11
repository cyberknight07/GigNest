const decodedUrl = (url) => {
    console.log("encoded Url = " + url);
    const searchUrl = decodeURI(url);
    console.log("Decoded Url = " + searchUrl);
    return searchUrl;
};

export default decodedUrl;