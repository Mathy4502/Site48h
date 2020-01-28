function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('fetch');
fetch('http://127.0.0.1:8000/chain')
.then(response => response.json())
.then(data => {
    for (let i = 1; i < data.length; i++) {
        console.log(data.chain[i].index)
        console.log(data.chain[i].transactions[0].author) // Prints result from `response.json()` in getRequest
        // Section template :
        document.getElementById('fetch').innerHTML +=
            '<div class="block"> <div class="top">' +

            '<div class="input"> <div>Numero</div> <div class="button">' + data.chain[i].index +
            ' </div>'+
            ' </div>'+

            '<div class="input"> <div>Hash</div> <div class="button">' + data.chain[i].hash +
            ' </div></div>' +
            ' </div> <div class="input"> <div>Mineur</div> <div id="miner" class="button">'+data.chain[i].transactions[0].author +
            '</div></div>' +

            ' </div></div>';
    }
})
.catch(error => console.error(error))