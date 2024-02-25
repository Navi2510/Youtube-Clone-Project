const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://youtube138.p.rapidapi.com/auto-complete/?h1=en&gl=us&q=desp");
xhr.setRequestHeader("X-RapidAPI-Key", "9ef09c4394msh15ff476f2d0b962p12e592jsnd68682291694");
xhr.setRequestHeader("X-RapidAPI-Host", "youtube138.p.rapidapi.com");

xhr.send(data);