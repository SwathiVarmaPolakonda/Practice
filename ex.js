

         var student1 = { "rollno" : "01", "name" : "John", "section"  : "A" };
         document.write("<h1>JSON with JavaScript example</h1>");
         document.write("<br>");
         document.write("<h3>rollno = " + student1.rollno+"</h3>");
         document.write("<h3>name = " + student1.name+"</h3>");
         document.write("<h3>section = " + student1.section+"</h3>");

         var student2 = { "rollno" : "02", "name" : "Jack", "section"  : "B" };
         document.write("<br>");
          document.write("<h3>rollno = " + student2.rollno+"</h3>");
         document.write("<h3>name = " + student2.name+"</h3>");
         document.write("<h3>section = " + student2.section+"</h3>");

         var student3 = { "rollno" : "03", "name" : "Jim", "section"  : "C" };
         document.write("<br>");
          document.write("<h3>rollno = " + student3.rollno+"</h3>");
         document.write("<h3>name = " + student3.name+"</h3>");
         document.write("<h3>section = " + student3.section+"</h3>");

         var student4 = { "rollno" : "04", "name" : "Jill", "section"  : "A" };
         document.write("<br>");
          document.write("<h3>rollno = " + student4.rollno+"</h3>");
         document.write("<h3>name = " + student4.name+"</h3>");
         document.write("<h3>section = " + student4.section+"</h3>");


          document.write("<h3>Student Names = "+student1.name+" <br/> "+student2.name+" <br/> "+student3.name+" <br/>  "+student4.name+"</h3>");

          var mydata = JSON.parse(students);
               alert(mydata[0].rollno);
              alert(mydata[1].rollno);
              alert(mydata[0].name);
              alert(mydata[1].name);
