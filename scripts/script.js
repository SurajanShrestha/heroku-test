const xhr=new XMLHttpRequest();
const url='https://surajan-heroku-test.herokuapp.com/';
xhr.responseType='json';
xhr.onreadystatechange=()=>{
  if(xhr.readyState===XMLHttpRequest.DONE){
    console.log(xhr.response);
    document.getElementsByTagName("textarea")[0].innerHTML='Name: '+xhr.response.name+'\n'+'Age: '+xhr.response.age+'\n'+'Gender: '
    +xhr.response.gender+'\n'+'Height: '+xhr.response.height;
  }
};
xhr.open('GET',url);
xhr.send();