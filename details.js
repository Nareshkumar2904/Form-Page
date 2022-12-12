var apiUrl = 'http://localhost:3000/posts';
var userArray = [];

function validate() {
    // console.log("hhjjs");

    var emails = document.getElementById("email").value;
    var mobileNumber = document.getElementById("phone").value;
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var company = document.getElementById("company").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var zip = document.getElementById("zip").value;

    if (emails == "") {
        document.getElementById ("emailId").innerHTML = " **Please Enter Valid Email ";    
}
    if (mobileNumber == "") {
        document.getElementById("phoneNo").innerHTML = " **Please Enter Phone Number";
}
    if (isNaN(mobileNumber)) {
        document.getElementById("phoneNo").innerHTML = " **User must write digits only not characters";
}
    if (mobileNumber.length < 10 ) {
        document.getElementById("phoneNo").innerHTML = " **User must enter 10 digit number";
}
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emails))){
        document.getElementById ("emailId").innerHTML = " **Please Enter Valid Email ";
        // console.log("email not")
            return true ;
} 

    if (emails != '' && firstName != '' && lastName != '' && company != '' && address1 != '' && address2 != '' && state != '' && country != '' && zip != '' && mobileNumber != '') {
        console.log("data");
        document.getElementById("emailId").innerHTML = null;
       
        var userdetails = {
            "firstname": firstName,
            "lastname": lastName,
            "email": emails,
            "company": company,
            "address1": address1,
            "address2": address2,
            "state": state,
            "country": country,
            "zip": parseInt(zip),
            "phone": parseInt(mobileNumber)

        }

    restForm();
    fetch(apiUrl, {
        method: 'POST', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdetails)
    }).then(response => {
        console.log(data);
        // restForm();
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {

    });
    } else {
        alert('Please fill all the fields')
    }
}

function buildTable(data) {
    var table = document.getElementById('data_source')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${i+1}</td>
                        <td>${data[i].firstname}</td>
                        <td>${data[i].lastname}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].company}</td>
                        <td>${data[i].address1}</td>
                        <td>${data[i].address2}</td>
                        <td>${data[i].state}</td>
                        <td>${data[i].country}</td>
                        <td>${data[i].zip}</td>
                        <td>${data[i].phone}</td>
                        <td><button id="`+ i + `"onclick="editRow(` + i + `)">Edit</button></td>
                        <td><button id="`+ i + `"onclick="deleteRow(` + i + `)">Delete</button></td>
                  </tr>`
        table.innerHTML += row
    }
}

function editRow(data) {
    fetch(apiUrl + `/` + userArray[data]._id, {
        method: 'GET'
    }).then(response => {
    }).then(data => {
        console.log(data);
    }).catch(err => {
    });
    console.log('edit--', data, userArray)

}

function deleteRow(data) {
    fetch(apiUrl + `/` + userArray[data]._id, {
        method: 'DELETE'
    }).then(response => {
    }).then(data => {
        console.log(data);
        userArray = data;
        buildTable(data);
    }).catch(err => {
    });
    console.log('delete--', data, userArray)

}


function getData() {
    console.log("calll")

    fetch(apiUrl, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        userArray = data;
        buildTable(data);
    }).catch(err => {
    });
}
getData()


function restForm() {
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("company").value = '';
    document.getElementById("address1").value = '';
    document.getElementById("address2").value = '';
    document.getElementById("state").value = '';
    document.getElementById("country").value = '';
    document.getElementById("zip").value = '';
};

