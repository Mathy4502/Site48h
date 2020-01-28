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
        document.getElementById('text').innerHTML +=
        data.chain[i].transactions[0].content;
    }
})
.catch(error => console.error(error))