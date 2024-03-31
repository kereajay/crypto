let mainsearch = document.getElementById("main_search");
mainsearch.addEventListener('click', () => {

    window.location.href = "./search.html";
})
function loaddetails() {
    let url_string = window.location.href;
    let url_obj = new URL(url_string);
    let params = new URLSearchParams(url_obj.search);
    if (!params.has('id')) {
        window.location.href = "./index.html";
    }
    else {
        async function details() {
            let res = await fetch(`https://api.coingecko.com/api/v3/coins/${params.get('id')}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
            let data = await res.json();
            displaydetails(data);
        }
        details();
    }

}
function displaydetails(data) {
    console.log(data);
    document.getElementById('image').src = data.image.large;
    document.getElementById('name').textContent = data.name;
    document.getElementById('symbol').textContent = data.symbol;
    document.getElementById('rupee').textContent += data.market_data.current_price.inr;
    document.getElementById('doller').textContent += data.market_data.current_price.usd;
    document.getElementById('Euro').textContent += data.market_data.current_price.eur;
    document.getElementById('desc').textContent = data.description.en;

}


window.onload = () => loaddetails();