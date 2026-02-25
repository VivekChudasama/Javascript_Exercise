let data = [];
let curentId = 1;


function addData() {
    let date = document.getElementById("date").value;
    let description = document.getElementById("description").value;

    let obj = {
        id: curentId++,
        description: description,
        date: date
    };

    data.push(obj);
    dislpayData();
    console.log(data);

}

function dislpayData() {
    const today = new Date().toISOString().split('T')[0];
    const list = document.getElementById('orderList');
    list.innerHTML = '';

    // Filter and display
    data.filter(order => order.date === today).forEach(order => {
        let li = document.createElement('li');
        li.textContent = `ID: ${order.id} ,  ${order.description} ,  Date: ${order.date}`;
        list.appendChild(li);
        console.log(li)

    });
}


function graterNumber() {
    let getnumber = document.getElementById("number").value;
    document.getElementById("displayNumber").innerHTML = parseFloat(getnumber) + 1;
}


function replaceStr() {
    let sen = document.getElementById("replace").value;

    const words = sen.split(" ");
    const searchChar = "a";
    const replaceChar = "z";

    const updatedWords = words.map(word => {
        if (word[0] === searchChar) {
            return replaceChar + word.slice(1);
        }
        return word;
    });



    document.getElementById("replaceStr").innerHTML = updatedWords.join(" ");
}

function revStr() {
    let str = document.getElementById("text").value;
    let reverseStr = str.split('').reverse().join('');
    document.getElementById("reverseStr").innerHTML = reverseStr;
}

function getVowelsCount() {
    let vowels = document.getElementById("vowels").value;
    let lowerstr = vowels.toLowerCase();
    let vowelsCount = 0;
    for (let i = 0; i <= lowerstr.length; i++) {
        if (lowerstr[i] == "a" || lowerstr[i] == "e" || lowerstr[i] == "i" || lowerstr[i] == "o" || lowerstr[i] == "u") {
            vowelsCount++;
        }
    }
    document.getElementById("getVowels").innerHTML = vowelsCount;
}

//or

// function getVowelsCount(){
//     let vowels = document.getElementById("vowels").value;
//     let vowelsCount = 0;
//     let vowel="aeiouAEIOU";
//     for (let char of vowels){
//         if (vowel.includes(char)) {
//             vowelsCount++;
//         }
//     }
//     document.getElementById("getVowels").innerHTML=vowelsCount
// }