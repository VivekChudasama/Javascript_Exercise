let sDetails = []

function checkScore() {
    studentName = document.getElementById("sName").value;
    mathsMarks = document.getElementById("mathsMarks").value;
    sciencMarks = document.getElementById("scienceMarks").value;
    englishMarks = document.getElementById("englishMarks").value;

    Obj = {
        Name:studentName,
        maths:mathsMarks,
        science:sciencMarks,
        english:englishMarks
    };

    sDetails.push(Obj);

    total = parseFloat(Obj.maths)+parseFloat(Obj.science)+parseFloat(Obj.english);
    let result=""

    switch (true){
        case total >=200:
            result='you are passed with grade A'
            break;

        case total>=100:
            result="you are passed with grade B"
            break;

        case  total < 100 && total >= 0:
            result="you are passed with grade C"
            break;
        
        default:
            result="You are failed"
    }


    document.getElementById("result").innerHTML= `total marks = ${total} , result : ${result}`
}


function randomNumbersArray(length = 10) {

    arr = Array.from(Array(length), () => Math.floor(Math.random() * 10) + 1);
}
const random = randomNumbersArray()



document.getElementById("array").innerHTML = arr

function tillFive() {
    arrtillfive = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === 5)
            break;
        else {
            arrtillfive.push(arr[i])
        }
    }

    document.getElementById("arrayElement").innerHTML = arrtillfive

}

function skipFive() {
    arrskipfive = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === 5) {
            continue;
        }
        else {
            arrskipfive.push(arr[i])
        }

        document.getElementById("arrayElement").innerHTML = arrskipfive
    }
}

[
    {
        "date": "2026-02-16",
        "event": {
            "name": "test1",
            "location": "rajkot",
            "price": 400
        }
    },
    {
        "date": "2026-02-16",
        "event": {
            "name": "test1",
            "location": "rajkot",
            "price": 400
        }
    },
    {
        "date": "2026-02-16",
        "event": {
            "name": "test1",
            "location": "rajkot",
            "price": 400
        }
    }
]

[
    {
       "2026-02-16": [
            {
                "date": "2026-02-16",
                "event": {
                    "name": "test1",
                    "location": "rajkot",
                    "price": 400
                }
            }
       ]
    } 
]


