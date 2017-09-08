function myFunction() {

  const employee = [{
      basic_details: {
        Firstname: "John",
        Lastname: "abc",
        Email: "john@gmail.com"
      },
      address: {
        hno: "4-5-753",
        city: "hyd",
        state: "TG"
      },
      phone: ["12345679", "12094666"],
      salary: "90"
    },
    {
      basic_details: {
        Firstname: "Jack",
        Lastname: "xyz",
        Email: "jack@gmail.com"
      },
      address: {
        hno: "1-2-123",
        city: "sec",
        state: "TG"
      },
      phone: ["361496326", "97563665"],
      salary: "150"
    },


    {
      basic_details: {
        Firstname: "Jim",
        Lastname: "pqr",
        Email: "jim@gmail.com"
      },
      address: {
        hno: "5-9-369",
        city: "hyd",
        state: "TG"
      },
      phone: ["98532147", "69853214"],
      salary: "100"
    }
  ];

  const employeeFirstName = [];
  employee.map((value, i) => {
    employeeFirstName.push(value.basic_details.Firstname);
    // employeeNames.push(value.basic_details.Lastname);
  })
  //console.log(employeeFirstName);


  const employeeLastNames = [];
  employee.map((value, i) => {
    employeeLastNames.push(value.basic_details.Lastname);
    // employeeNames.push(value.basic_details.Lastname);
  })
  //console.log(employeeLastNames);


  const employeecity = [];
  employee.map((value, i) => {
    employeecity.push(value.address.city);
    // employeeNames.push(value.basic_details.Lastname);
  })
  //console.log(employeecity);


  const employeephone = [];
  employee.map((value, i) => {
    employeephone.push(value.phone);
    // employeeNames.push(value.basic_details.Lastname);
  })
  //console.log(employeephone);

  var city = {};
  employee.map((value, i) => {

      city[value.salary] =  value.basic_details.Firstname;

  })
  //console.log(city);


var salary = [];
employee.map((value, i)=>{
  salary.push(value.salary);
})

var largest = 1;


for(i = 0; i <= salary.length; i++) {
  // console.log(typeof(parseInt(salary[i]) ));
  // console.log(typeof(largest));
  if (parseInt(salary[i]) > largest) {
    var largest = (parseInt(salary[i]))
  }
  else {
    console.log("not working");
  }
}


console.log(largest);
console.log(city);
a='' +largest
console.log(typeof(a));
// console.log(largest.toString());
console.log(city);
console.log(city["150"]);



}
