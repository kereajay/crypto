let coin_container = document.getElementById('coin-container');
let mainsearch = document.getElementById("main_search");
mainsearch.addEventListener('click', () => {

  window.location.href = "./search.html";
})

async function crypto1() {
  let res = await fetch("https://api.coingecko.com/api/v3/search/trending");
  let data = await res.json();
  console.log(data.coins);
  let appenda = "";
  data.coins.forEach(element => {
    console.group(element.item.thumb);
    appenda += ` 
      <div id="coinone" class="w-96 h-20 bg-white p-2 flex ">
        <div id="inner" class="w-20">
          <img src="${element.item.thumb}"  alt="">
       </div>
         <div id="inner2" class="">
          <p class="text-2xl ">${element.item.name} (${element.item.symbol})</p>
           <p>₹${(element.item.price_btc * 5900152 * 10000) / 10000}</p>
         </div>
       </div>`
    coin_container.innerHTML = appenda;
  });
}





window.onload = () => crypto1();