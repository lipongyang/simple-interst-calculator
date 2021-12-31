function compute()
            {
                var p,t,r,si,ci;
                p = document.getElementById("principal").value;
                t = document.getElementById ("year").value;
                r = document.getElementById ("rate").value;
                si = parseInt((p*t*r)/100 );
                document.getElementById ('num').innerHTML ="If you deposite : "+"<span class='highlight'>"+p+"</span>";
                
                document.getElementById ('num1').innerHTML ="at the rate of: "+"<span class='highlight'>"+r+"</span>";
                document.getElementById ('num2').innerHTML ="you will receive an amount of: "+"<span class='highlight'>"+si+"</span>";
                document.getElementById ('num3').innerHTML ="in the year of "+"<span class='highlight'>"+"202"+t+"</span>";
            }
    
            