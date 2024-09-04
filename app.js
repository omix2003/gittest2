

// let btn=document.querySelector("button");
// btn.addEventListener("click", function(){
//     let h3=document.querySelector("h3");
//     let randomcolor=getRandomcolor();
//     h3.innerText=randomcolor;
//     let div=document.querySelector("div"); 
//     div.style.backgroundColor=randomcolor;
//     console.log("color updated");
// });
// function getRandomcolor(){
//     let red= Math.floor(Math.random()*255);
//     let green= Math.floor(Math.random()*255);
//     let blue= Math.floor(Math.random()*255);

//     let color= `rgb(${red},${green},${blue})`;
//     return color;
// }
// h2=document.querySelector("h2");
//  let jsonres='{"fact":"Mountain lions are strong jumpers, thanks to muscular hind legs that are longer than their front legs.","length":102}'
//  console.log(jsonres);
//   let res=JSON.parse(jsonres);
//   console.log(res);
//   console.log(res.fact);

//   let student={
//     name: "Omkar",
//     marks: "150",
//   };
//   console.log(JSON.stringify(student));


// fetch(url)
// .then((res)=>
// {
//     console.log(res);
//     return res.json();
// })
// .then((data) =>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("ERROR",err);
// });
// let btn=document.addEventListener("click", async()=>{
//     let facts= await getFacts();
//     console.log(facts);
//     let p=document.querySelector("#fact");
//     p.innerText= facts;
// })
// async function getFacts(){
//     try{
//         let res= await axios.get(url);
//         // console.log(res.data);
//         return res.data.fact;
//     }
//     catch(e){
//         console.log("ERROR",e);
//         return "No Fact was found";
//     }
// }
let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");

btn.addEventListener("click", async()=>{
    let link= await getImage();
    // console.log(link);
    let img=document.querySelector("#fact");
    img.setAttribute("src", link);
})
async function getImage(){
    try{
        let res= await axios.get(url2);
        // console.log(res.data.message);
        return res.data.message;
    }
    catch(e){
        console.log("ERROR",e);
        return "/";
    }
}
