
function fun(){
  var fname =document.getElementById("id2").value;
  var lname =document.getElementById("id3").value;
  var faname =document.getElementById("id4").value;
  var dob =document.getElementById("id6").value;
  var num=document.getElementById("id7").value;
  var nation =document.getElementById("id8").value;
  var mail =document.getElementById("id9").value;
  var gen=document.myform.gender.value;
  var lan1=document.getElementById("tamil");
  var lan2=document.getElementById("english");
  var lan3=document.getElementById("hindi");
  document.write("FIRST NAME : ")
  document.write(fname.fontcolor("red"));
  document.write("<br>");
  document.write("LAST NAME : ")
  document.write(lname.fontcolor("blue"));
  document.write("<br>");
  document.write("FATHER'S NAME : ")
  document.write(faname.fontcolor("green"));
  document.write("<br>");
  document.write("DATE OF BIRTH : ")
  document.write(dob.fontcolor("yellow"));
  document.write("<br>");
  document.write("MOBILE NO : ")
  document.write(num.fontcolor("red"));
  document.write("<br>");
  document.write("GENDER : ")
  document.write(gen.fontcolor("blue"));
  document.write("<br>");
  document.write("NATIONALITY : ")
  document.write(nation.fontcolor("green"));
  document.write("<br>");
  document.write("LANGUAGES KNOWN : ")
  if(lan1.checked==true){
    document.write(lan1.value.fontcolor("yellow"));
    document.write("<br>");
  }
  if(lan2.checked==true){
    document.write(lan2.value.fontcolor("red"));
    document.write("<br>");
  }
  if(lan3.checked==true){
    document.write(lan3.value.fontcolor("blue"));
    document.write("<br>");
  }
  document.write("MAIL ID : ")
  document.write(mail.fontcolor("green"));
  
}


  
  





