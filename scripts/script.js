const xhr=new XMLHttpRequest();
const url='https://surajan-heroku-test.herokuapp.com/';
xhr.responseType='json';
xhr.onreadystatechange=()=>{
  if(xhr.readyState===XMLHttpRequest.DONE){
    console.log(typeof xhr.response);
    console.log(xhr.response);
  }
};
xhr.open('GET',url);
xhr.send();