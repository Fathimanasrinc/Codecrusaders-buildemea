 function closeForm() {
  document.getElementById("myDiv").style.display = "none";
}


function menu() {
 
   document.getElementById("myDiv").style.display = "block";
 
}

function tick(x){
  var r = 236, g = 230, b = 223;

  var messbtn = document.getElementById('messbtn');
  var entrybtn = document.getElementById('entrybtn');
  var cleanbtn = document.getElementById('cleanbtn');

  let messicon = document.createElement('i');
  messicon.classList.add('mfi','pull-left','fa-2x','fas','fa-utensils');
  let entryicon = document.createElement('i');
  entryicon.classList.add('mfi','pull-left','fa-2x','fas','fa-sign-out-alt')
  let cleanicon = document.createElement('i');
  cleanicon.classList.add('mfi','pull-left','fa-2x','fa-solid','fa-brush')

  var stylec = window.getComputedStyle(cleanbtn);
  var stylem = window.getComputedStyle(messbtn);
  var stylee = window.getComputedStyle(entrybtn);
  

  

  if(x===1){

     // Convert the RGB value to the intege format
    if (parseInt(stylem.backgroundColor.match(/\d+/g)[0]) === r && 
      parseInt(stylem.backgroundColor.match(/\d+/g)[1]) === g && 
      parseInt(stylem.backgroundColor.match(/\d+/g)[2]) === b) {
    // Change the background color
    messbtn.style.backgroundColor = 'lightgreen';
    messbtn.innerHTML = 'Messin';
   }else if( messbtn.style.backgroundColor === 'lightgreen'){
      messbtn.style.backgroundColor = 'red';
      messbtn.innerHTML = 'Messout'
    }else{
      messbtn.style.backgroundColor = "rgb(236, 230, 223)";
      messbtn.textContent = 'Mess' ;
      messbtn.appendChild(messicon);
    }   
   }else if(x===2){
    
    if(parseInt(stylee.backgroundColor.match(/\d+/g)[0]) === r && 
    parseInt(stylee.backgroundColor.match(/\d+/g)[1]) === g && 
    parseInt(stylee.backgroundColor.match(/\d+/g)[2]) === b) {
  // Change the background color
  entrybtn.style.backgroundColor = 'lightgreen';
  entrybtn.innerHTML = 'Checkin';
 }else if( entrybtn.style.backgroundColor === 'lightgreen'){
    entrybtn.style.backgroundColor = 'red';
    entrybtn.innerHTML = 'Checkout'
  }else{
    entrybtn.style.backgroundColor = "rgb(236, 230, 223)";
    entrybtn.textContent = 'Entry' ;
    entrybtn.appendChild(entryicon)
    }   
  }else if (x===3){
    if(parseInt(stylec.backgroundColor.match(/\d+/g)[0]) === r && 
    parseInt(stylec.backgroundColor.match(/\d+/g)[1]) === g && 
    parseInt(stylec.backgroundColor.match(/\d+/g)[2]) === b) {
  // Change the background color
  cleanbtn.style.backgroundColor = 'yellow';
  cleanbtn.innerHTML = 'Swept';
 }else if( cleanbtn.style.backgroundColor === 'yellow'){
    cleanbtn.style.backgroundColor = 'lightgreen';
    cleanbtn.innerHTML = 'Mopped';
  }else{
    cleanbtn.style.backgroundColor = "rgb(236, 230, 223)";
    cleanbtn.textContent = 'Cleaning' ;
    cleanbtn.appendChild(cleanicon)
    } }  
  return;
  }