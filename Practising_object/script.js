let arr = []

function addData() {
    getDate = document.getElementById("date").value;
    getEventName = document.getElementById("eventName").value;
    getLocation = document.getElementById("Location").value;
    getPrice = document.getElementById("price").value;

    obj = {
        date: getDate,
        event: {
            name: getEventName,
            location: getLocation,
            price: Number(getPrice)
        }
    }

    arr.push(obj)
    console.log(obj.event.location)

}
console.log(arr)


function groupByDate() {
    const today = new Date().toISOString().split('T')[0];
    const result = Object.groupBy(arr, ({ date }) => date == today ? date : date);
    document.getElementById("outputData").innerHTML = `<h1>Date wise Filter</h1> <br> ${JSON.stringify(result, null, 4)}`
    console.log(result)
}

function priceFliter() {
    const result = arr.filter((obj)=>obj.event.price >=200 )
    document.getElementById("outputData").innerHTML = `<h1>Price higher then 200</h1> <br> ${JSON.stringify(result, null, 4)}`

    console.log(result)
}

function locationFilter(){
    const location = arr.filter((obj)=> obj.event.location === "rajkot")
    document.getElementById("outputData").innerHTML = `<h1>Location = Rajkot </h1> <br> ${JSON.stringify(location, null, 4)}`

 }