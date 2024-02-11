document.addEventListener("DOMContentLoaded", function(){
    const teddyImages = document.getElementById("teddyImages");
    const teddyBearUrls = [
        "https://tse4.mm.bing.net/th?id=OIP.XEdKj8ws73xwDhwjdjQaHwHaHa&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.wIwXW04keKDkbAtf0oxsqgHaIf&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.GtEueUl-z2lQs2jsvLW2swHaHo&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.2jF5EirQE31NIA3RQ25wxAHaHa&pid=Api&P=0&h=180"
    ]

    teddyBearUrls.forEach(url => {
        const imgElement = document.createElement("img");
        imgElement.src = url;
        teddyImages.appendChild(imgElement)
    })
})