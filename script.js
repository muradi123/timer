let clicks = 0;

function go() {
    clicks ++;
    if (clicks == 1) {
        document.getElementById("scs").value = 1;
 }
   if (clicks == 2) {
      document.getElementById("mns").value = "1:";
  }
   if (clicks == 3) {
      document.getElementById("hrs").value = "1:";
  }
  
    
};

function go2() {
    clicks ++;
    if (clicks == 1) {
        document.getElementById("scs").value= 2;
 }
   if (clicks == 2) {
      document.getElementById("mns").value = "2:";
  }
   if (clicks == 3) {
      document.getElementById("hrs").value = "2:";
  }
  
  
};

function go3() {
    clicks ++;
    if (clicks == 1) {
        document.getElementById("scs").value = "3";
 }
   if (clicks == 2) {
      document.getElementById("mns").value = "3:";
  }
   if (clicks == 3) {
      document.getElementById("hrs").value = "3:";
  }
  
   
};

function go4() {
    clicks ++;
    if (clicks == 1) {
        document.getElementById("scs").value= 4;
 }
   if (clicks == 2) {
      document.getElementById("mns").value = "4:";
  }
   if (clicks == 3) {
      document.getElementById("hrs").value = "4:";
  }
  
    
};
function go5() {
    clicks ++;
    if (clicks == 1) {
        document.getElementById("scs").value = 5;
 }
   if (clicks == 2) {
      document.getElementById("mns").value = "5:";
  }
   if (clicks == 3) {
      document.getElementById("hrs").value = "5:";
  }
  
  
};

function go6() {
    clicks ++;
    if (clicks == 1) {
        document.getElementById("scs").value = 6;
 }
   if (clicks == 2) {
      document.getElementById("mns").value = "6:";
  }
   if (clicks == 3) {
      document.getElementById("hrs").value = "6:";
  }

};

function go7() {
    clicks ++;
    if (clicks == 1) {
        document.getElementById("scs").value = 7;
 }
   if (clicks == 2) {
      document.getElementById("mns").value = "7:";
  }
   if (clicks == 3) {
      document.getElementById("hrs").value = "7:";
  }
  
 
};

function go8() {
    clicks ++;
    if (clicks == 1) {
        document.getElementById("scs").value = 8;
 }
   if (clicks == 2) {
      document.getElementById("mns").value = "8:";
  }
   if (clicks == 3) {
      document.getElementById("hrs").value = "8:";
  }
  
  
};
function go9() {
    clicks ++;
    if (clicks == 1) {
        document.getElementById("scs").value = 9;
 }
   if (clicks == 2) {
      document.getElementById("mns").value = "9:";
  }
   if (clicks == 3) {
      document.getElementById("hrs").value = "9:";
  }
  
};

function go0() {
    clicks ++;
    if (clicks == 1) {
        document.getElementById("scs").value = 0;
 }
   if (clicks == 2) {
      document.getElementById("mns").value = "0:";
  }
   if (clicks == 3) {
      document.getElementById("hrs").value = "0:";
  }
  

};


function goclear(){
	document.getElementById("scs").value = "0";
	document.getElementById("mns").value = "0:"
	document.getElementById("hrs").value = "0:";
	
   
};


    
function set(){
  document.getElementById("hidden-p").style.display = "block";
  document.getElementById("start-clear").style.display = "block";
	 document.getElementById("buttons").style.display = "none";
	 document.getElementById("buttons_2").style.display = "none";
     document.getElementById("btnct").style.display = "block";
     document.getElementById("clear-2").style.display = "block";

    
 }
 function goreturn(){
    document.getElementById("buttons").style.display = "" ;
   document.getElementById("buttons_2").style.display = "";
   document.getElementById("btnct").style.display = "none";
     document.getElementById("clear-2").style.display = "none";
     document.getElementById("hidden-p").style.display = "none";
     document.getElementById("start-clear").style.display = "none";
      
  }
function CountdownTimer(obnm){
 
  var endct =0;
  var cthrs =0;  
  var ctmnts =0; 
  var ctsecs =0;  
  var startchr =0;  
  var ctpause =-1; 

  //get html elms.
  var el_showmns = document.getElementById('showmns');
  var el_showscs = document.getElementById('showscs');
  var el_showhrs = document.getElementById('showhrs');
  var el_hrs = document.getElementById('hrs');
  var el_mns = document.getElementById('mns');
  var el_scs = document.getElementById('scs');
  var el_btnct = document.getElementById('btnct');
  var el_btnct_res = document.getElementById('btnct_res');
  var el_btnct_end = document.getElementById('btnct_end');


  function startPauseCT(){

    document.getElementById('hrmnt').style.display = "none";
    document.getElementById('cont2').style.display = "block";
    if(parseInt(el_mns.value) >0 || parseInt(el_scs.value)>0 || endct ==1){
      ctpause *=-1;
      if(ctpause ==1){
        el_btnct.value ='PAUSE';
        window[obnm].countdownTimer();
      }
      else el_btnct.value ='Continue';
     

    }
  }

 
  function endCT(){
   

    return false;
  }

  this.countdownTimer = function(){
    
    if(startchr == 0 && el_hrs && el_mns && el_scs) {
      
      cthrs = parseInt(el_hrs.value);
      ctmnts = parseInt(el_mns.value);
      ctsecs = parseInt(el_scs.value);

    
      if(isNaN(cthrs)) cthrs = 0;
      if(isNaN(ctmnts)) ctmnts = 0;
      if(isNaN(ctsecs)) ctsecs = 0;

      
      el_hrs.value = cthrs;
      el_mns.value = ctmnts;
      el_scs.value = ctsecs;
      startchr = 1;
    }

    if(ctmnts >0 || ctsecs >0) endct =1; 

    if(cthrs==0 && ctmnts==0 && ctsecs==0 && endct ==1){
      startchr =0;
      ctpause =-1;
      endct =0;
      el_btnct.value ='START';
      endCT();
    }
    else if(startchr ==1 && ctpause ==1){
   
      ctsecs--;
      if(ctsecs < 0){
        if(ctmnts > 0) {
          ctsecs = 59;
          ctmnts--;
        }
        else {
          ctsecs = 0;
          ctmnts = 0;
        }
      }
      setTimeout(obnm +'.countdownTimer()', 1000); 
    }

    
    el_showhrs.innerHTML = cthrs;
    el_showmns.innerHTML = ctmnts;
    el_showscs.innerHTML = ctsecs;
  }

  
  if(el_btnct) el_btnct.addEventListener('click', startPauseCT);

  
  if(el_btnct_res) el_btnct_res.addEventListener('click', function(){ startchr =0; if(ctpause ==-1) startPauseCT(); });


  if(el_btnct_end) el_btnct_end.addEventListener('click', function(){ el_mns.value =0; el_scs.value =0; startchr =0; startPauseCT(); });
}


var obCT = new CountdownTimer('obCT');


function mytest(){
  jQuery(function($){
 
    var seconds = $('#seconds');
    var milliseconds = $('#milliseconds');
 
    var s = 10;
    var ms = 1000;
    var i = 1;
 
    setDate();
 
    function setDate(){
 
        is_int(i);
        seconds.html('<strong>' + Math.floor(s) +'</strong> Seconde' + (s>1 ?'s' : ''));
 
        isZero(ms);
        milliseconds.html('<strong>' + ms +'</strong> ' + (ms>1 ?'' : ''));
 
        setTimeout(setDate,10);
    }
 
    function is_int(value){
        if((parseFloat(value/100) == parseInt(value/100)) && !isNaN(value)){
            i++;
            s-= 1;
        } else {
            i++;
        }
    };
 
    function isZero(value){
        if(value == 0){
            ms = 1000;
        }
        else{
            ms -= 10;
        }
    };
});
}