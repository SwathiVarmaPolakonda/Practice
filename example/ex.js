
function myFunction() {

  const arr=[{name:"john",rollno:"1234",section:"a"},{name:"Jack",rollno:"1235",section:"b"},{name:"Daisy",rollno:"1236",section:"c"},{name:"Jim",rollno:"1237",section:"a"}];
const studentNames=[];
  arr.map((value,i)=>{
    studentNames.push(value.name);
  })
  console.log(studentNames);

  var sec="a";
  const studentOfSection=[];
    arr.map((value,i)=>{
      if(value.section==sec)
      {
        studentOfSection.push(value.name);
      }
    })
    
    console.log(studentOfSection);

      const studentOfSectionCount=[];
        arr.map((value,i)=>{
          if(value.section==sec)
          {
            studentOfSectionCount.push(value.name);
          }
        })
        console.log("student");
        console.log(studentOfSectionCount.length);

const studentRoll=[];
arr.map((values,i)=>{
  studentRoll.push(values.rollno);
})
console.log(studentRoll);
}
