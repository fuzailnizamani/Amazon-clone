// const xhr = new XMLHttpRequest();

// xhr.addEventListener('load', () => {
//   console.log(xhr.response);
// });

// xhr.open('GET', 'https://supersimplebackend.dev/greeting');
// xhr.send();
// console.log(xhr.response);

//  await fetch('https://supersimplebackend.dev/greeting').then((response) => {
//     return response.text();
//   }).then((text) => {
//     console.log(text);
//   });

async function callGreeting(){

  try {
    const response = await fetch('https://supersimplebackend.dev/greeting', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
     });
  
     if (response.status >= 400){
      throw response;
     }
  
     const text = await response.text();
     console.log(text);

  } catch(error) {
    if (error.status === 400){
      const errorMessage = await error.json();
      console.log(errorMessage);
     }else{
      console.log('Network error. Please try again later');
     }
  }
}

callGreeting();




/*
async function getAmazon() {
  try {
    const response = await fetch('https://amazon.com');
    const text = await response.text();
    console.log(text);
  } catch(error){
    console.log('CORS error. Your request was blocked by the backend.');
  }
}
getAmazon();*/