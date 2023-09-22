// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(res => {
//     res.map((item, i) => {
//         let tr = document.createElement("tr")
//         tr.innerHTML =`
//         <td>${i+1}</td>
//         <td>${item.name}</td>
//         <td>${item.username}</td>
//         <td>${item.email}</td>
//         <td>${item.address.city}</td>
//         <td>${item.phone}</td>`
//         document.getElementById("table").appendChild(tr)
//     })
// })
async function updatefile (path, text, value){
    fs. readFile(path, "utf-8", data =>{
        fs.writeFile(path,data + text, "utf-8")
    })
    
}