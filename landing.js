//landing page intro
function intro() {
//variable declaration
  var name;
  name = prompt("Please Enter Your Characters Name");
//output
  document.write("Time: 9:08PM" + "<br>");
  document.write("Location: Somewhere over the Pacific" + "<br>");
  document.write("Pilot: \"MAYDAY MAYDAY I'M GOING DOWN!\"" + "<br>" + "....." + "<br>" + "\"This is " + name + ", pilot of Flight 48.  We've lost both engines, if anyone can hear m....\"" + "<br>" + "<hr>");
  document.write("<br>" + "After engine failure, Flight 48 Cargo went down somewhere over the Atlantic.  There was only one person on board, the pilot.  As " + name + ", you must find 3 items and a place to shelter for the night");
}

intro();
