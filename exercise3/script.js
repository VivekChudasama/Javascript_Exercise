
let empData = [];
let id = 1;

function addData() {
    let name = document.getElementById("uname").value;
    let salary = document.getElementById("usalary").value;

    let empObj = {
        id: id++,
        name: name,
        salary: salary,
    };

    empData.push(empObj);

    document.getElementById("Array").innerHTML = JSON.stringify(empData);

    let names = empData.map((item) => item.name);
    document.getElementById("namesOnly").innerHTML = names;

    let totalSal = empData.reduce((sum, item) => sum + parseFloat(item.salary), 0);
    document.getElementById("totalSalary").innerHTML = totalSal;

    let filter = empData.filter((find) => find.name === "test1");
    document.getElementById("test1").innerHTML = JSON.stringify(filter);

}

function findIndex() {
    let getUrl = document.getElementById("Url").value;
    let index = getUrl.lastIndexOf("/");
    document.getElementById("lastIndex").innerHTML = index;
}

function reomveDuplicate() {
    let a = ['A', 'B', 'A', 'C', 'B'];
    unique = a.filter((item, index) => a.indexOf(item) === index);
    document.getElementById("uniquechar").innerHTML = `<p> The unique element is ${unique}</p>`;
}

function removeFirstElement() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    removeFirstele = fruits.shift();
    document.getElementById("removeFirstElement").innerHTML = `<p>After remove first element from array : ${fruits}</p>`;
}

function getBinary() {
    let arr = [1, 2, 4, 5, 6];
    let binaryArr = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] >= 0) {
            bin = arr[i].toString(2);
            binaryArr.push(bin)
        }
        else {
            bin = (~arr[i]).toString(2)
            binaryArr.push(bin)
        }

    }

    document.getElementById("displayBinArr").innerHTML=binaryArr
}

function getArray() {
    let text = "Mr. Blue has a blue house";
    let arr = text.split(" ");
    document.getElementById("displayArray").innerHTML = `<p>display all this word in array : [ ${arr} ]</p>`;
}

function checkString() {
    let input = document.getElementById("getInput").value;
    let lastchar = input.charAt(input.length - 1);
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(lastchar)) {
        document.getElementById("getInput").style.backgroundColor = "red"
    }
    else {
      document.getElementById("getInput").style.backgroundColor = "green"
    }
}

function checkValidString() {
    let getStr = document.getElementById("valid").value;
    console.log(getStr)
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (regex.test(getStr)) {
        document.getElementById("validString").innerHTML = "String is valid";
    }
    else {
        document.getElementById("validString").innerHTML = "string is not valid";
    }
}