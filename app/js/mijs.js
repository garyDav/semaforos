$(document).ready(function(){
    swal({
        title: "¡Muy bien!",
        text: "Continuemos...",
        imageUrl: "app/img/thumbs-up.jpg"
    });
    var interval;
    $('#btnAceptar').click(function(){
        var h=parseInt($("#h").val());
        var m=parseInt($("#m").val());
        var s=parseInt($("#s").val());
        var uno=true,dos=true,tres=true;
        setInterval(function() {

            if(s > 0 && s <= 60) { 
                s--;
            }
            else if (m > 0 && m <= 60) {
                m--;
                s = 59;
            }
            else if (h > 0) {
                h--;
                m = 59;
                s = 59;
            }                            
            else {
                h = 0;
                m = 0;
                s = 0;                           
                clearInterval(interval);
            }

            if( (m>2 || (m==2 && s>0) || (h>0 && m>0 && s>0) ) ){
                document.body.style.backgroundColor="green";
                if(uno) {
                    swal({
                      title: "¡Bien!",
                      text: "Ahora cambió de fondo a verde.",
                      timer: 2000,
                      showConfirmButton: false
                    });
                    uno = false;
                }
            }else if(m==2 && s==0 && h==0){
                document.body.style.backgroundColor="yellow";
                if(dos) {
                    swal({
                      title: "¡Bien!",
                      text: "Ahora cambió de fondo a amarillo.",
                      timer: 2000,
                      showConfirmButton: false
                    });
                    dos = false;
                }
            }else if(h==0 && m ==0 && s==0){
                document.body.style.backgroundColor="red";
                if(tres) {
                    swal({
                      title: "¡Bien!",
                      text: "Ahora cambió de fondo a rojo.",
                      timer: 2000,
                      showConfirmButton: false
                    });         
                    tres = false;
                }
            }
            innerHTML(h,m,s);
            console.log(h+'-'+m+'-'+s);

        },1000);
    });
    $('#btnRecet').click(function() {
        location.reload();
    });

    function innerHTML(h,m,s){
        document.getElementById("demo").innerHTML = h+":"+m+":"+s;
    }

    

});
