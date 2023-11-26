const imageList=[
    {
    id:0,
    img:"media/image1.jpg",
    },

    

    {
        id:2,
        img:"media/image3.jpg"

    },

    {
        id:3,
        img:"media/image4.jpg",

    },

    {
        id:4,
        img:"media/image5.jpg",
    },

    {
        id:5,
        img:"media/image6.jpg",
    },

    {
        id:6,
        img:"media/image7.jpg",
    },

    {
        id:7,
        img:"media/image8.jpg",
    },

];

const previous = document.getElementById("previous");
const next = document.getElementById("next");

let currentImage=0;

function writeData(){
    image.src = `./${imageList[currentImage].img}`;
}

writeData();

next.onclick = () => {
    if (currentImage>= imageList.length - 1) {
      currentImage = 0;
    } else {
      currentImage++;
    }
    writeData();
    playImage();
  };

  previous.onclick = () => {
    if (currentImage === 0) {
      currentImage = imageList.length - 1;
    } else {
      currentImage--;
    }
    writeData();
    playImage();
  };
