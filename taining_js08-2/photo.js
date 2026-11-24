const showButton = document.getElementById("showPhotos");
const photoList = document.getElementById("photoList");

// 表示する写真
const photos = [
    "images/photo_1.jpg",
    "images/photo_2.jpg",
    "images/photo_3.jpg",
    "images/photo_4.jpg",
    "images/photo_5.jpg",
    "images/photo_6.jpg",
    "images/photo_7.jpg",
    "images/photo_8.jpg"
];

// ボタンをクリックしたときの処理
showButton.addEventListener("click", function() {

    if (photoList.children.length > 0) {
    return;
}

    photos.forEach(function(photo, index) {

        const image = document.createElement("img");

        image.src = photo;
        image.alt = "写真" + (index + 1);

        photoList.appendChild(image);

    });

});