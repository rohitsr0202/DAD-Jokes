
const jokes = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokebtn");

const generatejoke= async () =>{

    try{
    const setHeader = {
        headers :{
            Accept : "application/json"
        }
    }

   const res = await fetch('https://icanhazdadjoke.com', setHeader);
   const data =await res.json();
   jokes.innerHTML = data.joke;

}catch(err){
    console.log(`the error is ${err}`);
}

}

jokebtn.addEventListener('click', generatejoke);
generatejoke();