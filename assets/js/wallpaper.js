//sets images to an array and picks a random one....

let images = [
  "./assets/images/backgrounds/fractals/1.jpg",
  "./assets/images/backgrounds/fractals/2.jpg",
  "./assets/images/backgrounds/fractals/3.jpg",
  "./assets/images/backgrounds/fractals/4.jpg",
  "./assets/images/backgrounds/fractals/5.jpg",
  "./assets/images/backgrounds/fractals/6.jpg",
  "./assets/images/backgrounds/fractals/7.jpg",
  "./assets/images/backgrounds/fractals/8.jpg",
  "./assets/images/backgrounds/fractals/9.jpg",
  "./assets/images/backgrounds/fractals/10.jpg",
  "./assets/images/backgrounds/fractals/11.jpg",
  "./assets/images/backgrounds/fractals/12.jpg",
  "./assets/images/backgrounds/fractals/13.jpg",
  "./assets/images/backgrounds/fractals/14.jpg",
  "./assets/images/backgrounds/fractals/15.jpg",
  "./assets/images/backgrounds/fractals/16.jpg",
  "./assets/images/backgrounds/fractals/17.jpg",
  "./assets/images/backgrounds/fractals/18.jpg",
  "./assets/images/backgrounds/fractals/19.jpg",
  "./assets/images/backgrounds/fractals/20.jpg",
  "./assets/images/backgrounds/fractals/21.jpg",
  "./assets/images/backgrounds/fractals/22.jpg",
  "./assets/images/backgrounds/fractals/23.jpg",
  "./assets/images/backgrounds/fractals/24.jpg",
  "./assets/images/backgrounds/fractals/25.jpg",
  "./assets/images/backgrounds/fractals/26.jpg",
  "./assets/images/backgrounds/fractals/27.jpg",
  "./assets/images/backgrounds/fractals/28.jpg",
  "./assets/images/backgrounds/fractals/29.jpg",
  "./assets/images/backgrounds/fractals/30.jpg",
  "./assets/images/backgrounds/fractals/31.jpg",
  "./assets/images/backgrounds/fractals/32.jpg",
  "./assets/images/backgrounds/fractals/33.jpg",
  "./assets/images/backgrounds/fractals/34.jpg",
  "./assets/images/backgrounds/fractals/35.jpg",
  "./assets/images/backgrounds/fractals/36.jpg",
  "./assets/images/backgrounds/fractals/37.jpg",
  "./assets/images/backgrounds/fractals/38.jpg",
  "./assets/images/backgrounds/fractals/39.jpg",
  "./assets/images/backgrounds/fractals/40.jpg",
  "./assets/images/backgrounds/fractals/41.jpg",
  "./assets/images/backgrounds/fractals/42.jpg",
  "./assets/images/backgrounds/fractals/43.jpg",
  "./assets/images/backgrounds/fractals/44.jpg",
  "./assets/images/backgrounds/fractals/45.jpg",
  "./assets/images/backgrounds/fractals/46.jpg",
  "./assets/images/backgrounds/fractals/47.jpg",
  "./assets/images/backgrounds/fractals/48.jpg",
  "./assets/images/backgrounds/fractals/49.jpg",
  "./assets/images/backgrounds/fractals/50.jpg",
  "./assets/images/backgrounds/fractals/51.jpg",
  "./assets/images/backgrounds/fractals/52.jpg",
  "./assets/images/backgrounds/fractals/53.jpg",
  "./assets/images/backgrounds/fractals/54.jpg",
  "./assets/images/backgrounds/fractals/55.jpg",
  "./assets/images/backgrounds/fractals/66.jpg",
  "./assets/images/backgrounds/fractals/57.jpg",
  "./assets/images/backgrounds/fractals/58.jpg",
  "./assets/images/backgrounds/fractals/59.jpg",
  "./assets/images/backgrounds/fractals/60.jpg",
  "./assets/images/backgrounds/fractals/61.jpg",
  "./assets/images/backgrounds/fractals/62.jpg",
  "./assets/images/backgrounds/fractals/63.jpg",
  "./assets/images/backgrounds/fractals/64.jpg",
  "./assets/images/backgrounds/fractals/65.jpg",
  "./assets/images/backgrounds/fractals/66.jpg",
  "./assets/images/backgrounds/fractals/67.jpg",
  "./assets/images/backgrounds/fractals/68.jpg",
  "./assets/images/backgrounds/fractals/69.jpg",
  "./assets/images/backgrounds/fractals/70.jpg",
  "./assets/images/backgrounds/fractals/71.jpg",
  "./assets/images/backgrounds/fractals/72.jpg",
  "./assets/images/backgrounds/fractals/73.jpg",
  "./assets/images/backgrounds/fractals/74.jpg",
  "./assets/images/backgrounds/fractals/75.jpg",
  "./assets/images/backgrounds/fractals/76.jpg",
  "./assets/images/backgrounds/fractals/77.jpg",
  "./assets/images/backgrounds/fractals/78.jpg",
  "./assets/images/backgrounds/fractals/79.jpg",
  "./assets/images/backgrounds/fractals/80.jpg",
  "./assets/images/backgrounds/fractals/81.jpg",
  "./assets/images/backgrounds/fractals/82.jpg",
  "./assets/images/backgrounds/fractals/83.jpg",
  "./assets/images/backgrounds/fractals/84.jpg",
  "./assets/images/backgrounds/fractals/85.jpg",
  "./assets/images/backgrounds/fractals/86.jpg",
  "./assets/images/backgrounds/fractals/87.jpg",
  "./assets/images/backgrounds/fractals/88.jpg",
  "./assets/images/backgrounds/fractals/89.jpg",
  "./assets/images/backgrounds/fractals/90.jpg",
  "./assets/images/backgrounds/fractals/91.jpg",
  "./assets/images/backgrounds/fractals/92.jpg",
  "./assets/images/backgrounds/fractals/93.jpg",
  "./assets/images/backgrounds/fractals/94.jpg",
  "./assets/images/backgrounds/fractals/95.jpg",
  "./assets/images/backgrounds/fractals/96.jpg",
  "./assets/images/backgrounds/fractals/97.jpg",
  "./assets/images/backgrounds/fractals/98.jpg",
  "./assets/images/backgrounds/fractals/99.jpg",
  "./assets/images/backgrounds/fractals/100.jpg",
];
document.getElementsByClassName("mainview")[0].style.backgroundImage =
  "url(" + images[Math.floor(Math.random() * images.length)] + ")";
