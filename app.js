var iz = 50;
var monschet = 0;
var sec = 40;
let bayBita = false;
let bayLom = false;
let bayNoj = false;
let bayGan = false;
let damage = 1;
let ti;
var lvl = 1;
var ur = 1;
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var count = 50;
var foto = document.getElementById("fotoGus");
var disp = document.getElementById("displayText");
var tebos = document.getElementById("textBoss");
var mon = document.getElementById("money");
var sh = document.getElementById("shop");
var ur = document.getElementById('urov')
var time = document.getElementById('time')


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

function timer(){
       
        sec--;       
        if(sec >= 10){
                time.innerHTML = '00:' + sec;
        }
        else if(sec < 10 && sec !=0){
                time.innerHTML = '00:0' + sec;
        }
        else{
                alert('Поражение:(');
               // location.reload(); 
                foto.src = 'img/gus.png';
                ur.innerHTML = 'Уровень 1: Злой гусь';
                lvl = 1;
                count = 50;
                iz = 50;
                disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
                lvl = arr[2];
                tebos.innerHTML = ' ';
                time.innerHTML = ' ';
                clearInterval(ti);

        }
        }

foto.onclick = function () {
    count = count - damage;
    disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
    monschet = monschet + damage;
    mon.innerHTML ='Денег: ' + monschet;
    

    if(count > 0 && lvl == 1){
        iz = 50;
        ur.innerHTML = 'Уровень 1: Злой гусь'
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        lvl = arr[2];
} else if(count <= 0 && lvl == 2){
        foto.src = 'img/dub.png';
        count = 120;
        iz = 120;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        monschet = monschet + 30;
        mon.innerHTML ='Денег: ' + monschet;
        ur.innerHTML = 'Уровень 2: Кефирный дуб';
        lvl = arr[3];
} else if(count <= 0 && lvl == 3){
        foto.src = 'img/ananas.png';
        count = 210;
        iz = 210;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        monschet = monschet + 72;
        mon.innerHTML ='Денег: ' + monschet;
        ur.innerHTML = 'Уровень 3: Вредный ананас';
        lvl = arr[4];
} else if(count <= 0 && lvl == 4){
        foto.src = 'img/burat.png';
        count = 320;
        iz = 320;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;
        monschet = monschet + 126;
        mon.innerHTML ='Денег: ' + monschet;
        ur.innerHTML = 'Уровень 4: Похотливый бурят';
        lvl = arr[5];
} else if(count <= 0 && lvl == 5){
        foto.src = 'img/boss2.png';
        tebos.innerHTML = 'БОСС!!';
        sec = 40;
        ti = setInterval("timer()", 1000);
       
        count = 1000;
        iz = 1000;
        disp.innerHTML = 'Здоровье ' + count + ' из ' + iz;;
        monschet = monschet + 192;
        mon.innerHTML ='Денег: ' + monschet;
        ur.innerHTML = 'Голодный таракан';
        lvl = arr[6];
} else if(count <= 0 && lvl == 6){
        alert("ПОБЕДА!!!");
        disp.innerHTML = 'Здоровье 0 из 1000';
        ur.innerHTML = 'Босс: Голодный таракан';
        monschet = monschet + 600;
        mon.innerHTML ='Денег: ' + monschet;
        clearInterval(ti);
        time.innerHTML = ' ';
        tebos.innerHTML = ' ';
        lvl = arr[7];
} else if(count <= 0 && lvl == 7){
        alert("ПОБЕДА!!!");
        disp.innerHTML = 'Здоровье 0 из 1000';
        ur.innerHTML = 'Босс: Голодный таракан';
        /*clearInterval(ti);
        time.innerHTML = ' ';
        tebos.innerHTML = ' '; */
}
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






