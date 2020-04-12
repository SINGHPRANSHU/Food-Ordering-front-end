function total()
  {
    var parameters = location.search.substring(1).split("&");

    var temp = parameters[0].split("=");
    l = unescape(temp[1]);
    temp = parameters[1].split("=");
    p = unescape(temp[1]);
    temp = parameters[2].split("=");
    q = unescape(temp[1]);
    temp = parameters[3].split("=");
    r = unescape(temp[1]);
    document.getElementById("span1").innerHTML="coffee  -  "+l;
    document.getElementById("span2").innerHTML="coffee  -  "+p;
    document.getElementById("span3").innerHTML="coffee  -  "+q;
    document.getElementById("span4").innerHTML="coffee  -  "+r;
    result=(parseInt(l)*121)+(parseInt(p)*121)+(parseInt(q)*121)+(parseInt(r)*121);
    document.getElementById("result").innerHTML="result  =   "+result+"RS";
    if(result>0){
        document.getElementById("btn2").style.visibility="visible";
    }
    
  }