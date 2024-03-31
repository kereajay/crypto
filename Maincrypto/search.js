let display_container = document.getElementById("search-cintainer");
let search = document.getElementById("search");
let searchvalue = document.getElementById("input2");
let mainsearch=document.getElementById("main_search");
mainsearch.addEventListener('click',()=>{

    window.location.href="./search.html";
})
async function displyicons() {
    let appenda = "";
    let res = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchvalue.value}`);
    let data = await res.json();
    if (data.coins.length == 0) {
        display_container.innerHTML = `<h1 class="text-2xl text-orange-400 font-bold text-center">Sorry your Search not found...!</h1>`;
        console.log("ajay");
    }
    else {
        let index = 1;
        data.coins.forEach(element => {
            appenda += `
            <div id="container" class="flex h-14 w-11/12 bg-white justify-between  p-2 hover:shadow-xl transition-all duration-200 ">
                <div id="inner" class="flex  justify-between">
                   <p class="text-xl ">${index}</p>
                   <img src="${element.thumb}" alt="" class="ml-5">
                  <p class="text-xl font-bold ml-5">${element.name}   ${element.symbol}</p>
                
                </div>
                <div id="buttons">
                <a href="./details.html?id=${element.id}"><button vlaue="More-info" id="More_info" class="p-1 border-2 border-black hover:bg-blue-400 hover:border-blue-400">More info</button></a>
                </div>
            
               
           </div>
           <br>`

            display_container.innerHTML = appenda;
            index++;
        });
    }
}

search.addEventListener('click', displyicons);

