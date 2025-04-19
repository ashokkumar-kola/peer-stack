// let firstname=["Emma", "Daniel", "Ron"]
// let lastname="Watson"
// let newarray=[]

// for (let i =0; i<firstname.length; i++){
//     // let fullname = `${firstname[i]} ${lastname}`
//     // newarray.push(fullname)
//     newarray.push(`${firstname[i]} ${lastname}`)
// }
// console.log(newarray)

// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback();
//     // console.log(`Hello ${callback(name)}  `)
// }

// function morning(name) {
//     console.log("Good Morning!");
//     // return `Good morning ${name}`
// }

// function night(name) {
//     console.log("Good Night!");
//     //   return `Good night ${name}`
// }

// greet("Alice", morning);
// greet("Bob", night);

// console.log(document.getElementById("text"))
// console.log(document.getElementById("item")) //null

// console.log(document.getElementsByClassName("para"))
// console.log(document.getElementsByClassName("content"))

// console.log(document.getElementsByTagName("h1"))
// console.log(document.getElementsByTagName("p"))

// const tagitems = document.getElementsByTagName("p")
// console.log(tagitems)
// const newtagitems= [...tagitems]
// console.log(newtagitems)

// console.log(document.querySelector("#text")) //#text is used in css for targeting
// console.log(document.querySelector(".content"))
// console.log(document.querySelector("h1"))

// console.log(document.querySelectorAll(".content"))
// const allcontent = document.querySelectorAll(".content")
// console.log(allcontent)
// console.log(allcontent[0])
// console.log(allcontent[1])

// const ul = document.querySelector(".navbar")
// console.log(ul)

// const lis = document.querySelectorAll("li")
// const lis = document.querySelectorAll(".navbar li")
// console.log(lis)

// const listitem = document.querySelector("ul li:nth-child(3)")
// console.log(listitem)

// const list = document.querySelector("ul")
// console.log(list)

// DOM NAVIGATION
// console.log(list.childNodes) //textnodes(whitespaces)
// console.log(list.children) //no text nodes

// const listitem = document.querySelector("ul li:nth-child(3)")
// console.log(listitem) //contact
// console.log(listitem.nextSibling) //text
// console.log(listitem.nextElementSibling) //login

// console.log(listitem.previousSibling) //text
// console.log(listitem.previousElementSibling) //about

// const item = document.querySelector("ul")
// console.log(item.parentElement) //body

// console.log(item.firstChild) //text
// console.log(item.firstElementChild) //home

// console.log(item.lastChild) //text
// console.log(item.lastElementChild) //logout


// const para = document.querySelector(".prgh")
// console.log(para)
// console.log(para.innerText) //ui
// console.log(para.textContent) //all spaces
// console.log(para.innerHTML)//html structure

// para.textContent="Hello rishika"
// para.innerHTML="<h1>Heyyy</h1>"
// para.innerText="welcome"


// let p=document.querySelector(".jiji")
// // console.log(p)
// p.textContent="Sree rachana"

// let p = document.getElementsByClassName("jiji")
// console.log(p)
// p[0].textContent="sree"

// console.log(a) //undefined
// var a=10

// console.log(b) //error cant access before initialization
// let b=10

// console.log(c) //error cant access before initialization
// const c=10


// getMsg() //hello
// console.log(getMsg) //whole function, internally it stores whole the function
// function getMsg(){
//     console.log("hello")
// }



// getMsg()// getMsg is not a function, internally it stores undefined in place of function
// var getMsg=()=>{
//     console.log("hello")
// }



// console.log(fun) //undefined
// var fun = getMsg=()=>{
//     console.log("hello")
// }