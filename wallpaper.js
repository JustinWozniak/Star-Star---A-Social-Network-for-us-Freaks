
//sets images to an array and picks a random one....

  var images = ['./assets/images/backgrounds/fractals/1.png', './assets/images/backgrounds/fractals/2.png','./assets/images/backgrounds/fractals/3.png','./assets/images/backgrounds/fractals/4.png','./assets/images/backgrounds/fractals/5.png','./assets/images/backgrounds/fractals/6.png','./assets/images/backgrounds/fractals/7.png','./assets/images/backgrounds/fractals/8.png','./assets/images/backgrounds/fractals/9.png','./assets/images/backgrounds/fractals/10.png','./assets/images/backgrounds/fractals/11.png','./assets/images/backgrounds/fractals/12.png','./assets/images/backgrounds/fractals/13.png','./assets/images/backgrounds/fractals/14.png','./assets/images/backgrounds/fractals/15.png','./assets/images/backgrounds/fractals/16.png','./assets/images/backgrounds/fractals/17.png','./assets/images/backgrounds/fractals/18.png','./assets/images/backgrounds/fractals/19.png','./assets/images/backgrounds/fractals/20.png'];
  document.getElementsByClassName('mainview')[0].style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';
