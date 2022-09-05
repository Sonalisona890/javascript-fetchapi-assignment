const h2=document.querySelector("h2")
const h3=document.querySelector("h3")
const h4=document.querySelector("h4")
const h5=document.querySelector("h5")
const h6=document.querySelector("h6")
const div=document.querySelector("image")
const button=document.querySelector("button")


const data= async ()=>{
    try {
      const res= await fetch("https://random-data-api.com/api/v2/users")  
      const resData= await res.json()
      console.log(resData)
     
     image.innerHTML=`<img src="${resData.avatar}"> `
     h2.innerText=resData.first_name
     h3.innerText=resData.last_name 
     h4.innerText = resData.date_of_birth
     h5.innerText = resData.phone_number
     h6.innerText = resData.email
    } catch (error) {
      console.log(error)  
    }
}
button.addEventListener("click",data)
data()
