var iz = 50;
var monschet = 0;
var dobav = 1;
let bayBita = false;
let bayLom = false;
let bayNoj = false;
let bayGan = false;
let damage = 1;
var lvl = 1;
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var count = 50;
var foto = document.getElementById("fotoGus");
var disp = document.getElementById("displayText");
var tebos = document.getElementById("textBoss");
var mon = document.getElementById("money");
var sh = document.getElementById("shop");


function kulackFunction() {
        sh.src = 'img/kulack.png';
        damage = 1;
        
        };

function bitaFunction() {
        if(bayBita == true){
                sh.src = 'img/bita.png';
                damage = 2; 
        }
        else if(monschet>=100){
                sh.src = 'img/bita.png';
                damage = 2;
                monschet = monschet - 100;
                mon.innerHTML ='Денег: ' + monschet;
                bayBita = true;
                var cebit = document.getElementById('cenaBita');
                cebit.innerHTML =' ';

        }else{
                alert('Недостаточно средств')
        }
        };

function lomFunction() {
        if(bayLom == true){
                sh.src = 'img/lom.png';
                damage = 3; 
        }
        else if(monschet>=300){
                sh.src = 'img/lom.png';
                damage = 3;
                monschet = monschet - 300;
                mon.innerHTML ='Денег: ' + monschet;
                bayLom = true;
                var celom = document.getElementById('cenaLom');
                celom.innerHTML =' ';

                }else{
                        alert('Недостаточно средств')
                }

        };

function nojFunction() {
        if(bayNoj == true){
                sh.src = 'img/noj.png';
                damage = 4; 
        }
        else if(monschet>=500){
                sh.src = 'img/noj.png';
                damage = 4;
                monschet = monschet - 500;
                mon.innerHTML ='Денег: ' + monschet;
                bayNoj = true;
                var cenoj = document.getElementById('cenaNoj');
                cenoj.innerHTML =' ';
                }else{
                        alert('Недостаточно средств')
                }
        };
function ganFunction() {
        if(bayGan == true){
                sh.src = 'img/gan.png';
                damage = 5; 
        }
        else if(monschet>=800){
                sh.src = 'img/gan.png';
                damage = 5;
                monschet = monschet - 800;
                mon.innerHTML ='Денег: ' + monschet;
                bayGan = true;
                var cegan = document.getElementById('cenaGan');
                cegan.innerHTML =' ';
                }else{
                        alert('Недостаточно средств')
                }
        };


foto.onclick = function () {
    count = count - damage;
    disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
    monschet = monschet + damage;
    mon.innerHTML ='Денег: ' + monschet;
    

    if(count > 0 && lvl == 1){
        iz = 50;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        lvl = arr[2];
} else if(count <= 0 && lvl == 2){
        foto.src = 'img/dub.png';
        count = 120;
        iz = 120;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        monschet = monschet + 30;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[3];
} else if(count <= 0 && lvl == 3){
        foto.src = 'img/ananas.png';
        count = 210;
        iz = 210;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        monschet = monschet + 72;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[4];
} else if(count <= 0 && lvl == 4){
        foto.src = 'img/burat.png';
        count = 320;
        iz = 320;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        monschet = monschet + 126;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[5];
} else if(count <= 0 && lvl == 5){
        foto.src = 'img/boss.png';
        tebos.innerHTML = 'БОСС!!';
        count = 1000;
        iz = 1000;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;;
        monschet = monschet + 192;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[6];
} else if(count <= 0 && lvl == 6){
        disp.innerHTML = 'Здоровье 0 из 500';
        monschet = monschet + 600;
        mon.innerHTML ='Денег: ' + monschet;
        alert("ПОБЕДА!!!")

};
}

function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
    
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
}
}
};



