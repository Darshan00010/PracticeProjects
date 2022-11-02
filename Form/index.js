var fn=[];
var ln=[];
var ge=[];

var r=1;
var x=0;

function disp(){

    var tablerow=document.getElementById('show');
    var tablerow=tablerow.insertRow(r);
  
    fn[x]=document.getElementById('fname').value;
    ln[x]=document.getElementById('lname').value;
    ge[x]=document.getElementById('age').value;
   
   var c1= tablerow.insertCell(0);
   var c2= tablerow.insertCell(1);
   var c3= tablerow.insertCell(2);
   c1.innnerHTML=fn[x];
   c2.innnerHTML=ln[x];
   c3.innnerHTML=ge[x];
  r++;
  x++;
}