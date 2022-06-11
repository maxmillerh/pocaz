var iz = 20;
var monschet = 0;
var dobav = 1;
var lvl = 1;
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var count = 0;
var foto = document.getElementById("fotoGus");
var disp = document.getElementById("displayText");
var tebos = document.getElementById("textBoss");
var mon = document.getElementById("money");

foto.onclick = function () {
    count++;
    disp.innerHTML = 'Ударов ' + count + ' из ' + iz;
    monschet = monschet + dobav;
    mon.innerHTML ='Денег: ' + monschet;

    if(count <3 && lvl == 1){
        iz = 20;
        disp.innerHTML = 'Ударов ' + count + ' из ' + iz;
        lvl = arr[2];
} else if(count ==3 && lvl == 2){
        foto.src = 'img/dub.png';
        count = 0;
        iz = 50;
        disp.innerHTML = 'Ударов ' + count + ' из ' + iz;
        dobav = 2;
        monschet = monschet + 50;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[3];
} else if(count == 3 && lvl == 3){
        foto.src = 'img/ananas.png';
        count = 0;
        iz = 100;
        disp.innerHTML = 'Ударов ' + count + ' из ' + iz;
        dobav = 3;
        monschet = monschet + 100;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[4];
} else if(count == 3 && lvl == 4){
        foto.src = 'img/burat.png';
        count = 0;
        iz = 250;
        disp.innerHTML = 'Ударов ' + count + ' из ' + iz;
        dobav = 4;
        monschet = monschet + 300;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[5];
} else if(count == 3 && lvl == 5){
        foto.src = 'img/boss.png';
        tebos.innerHTML = 'БОСС!!';
        count = 0;
        iz = 500;
        disp.innerHTML = 'Ударов ' + count + ' из ' + iz;
        dobav = 5;
        monschet = monschet + 550;
        mon.innerHTML ='Денег: ' + monschet;
        lvl = arr[6];
} else if(count == 3 && lvl == 6){
        disp.innerHTML = 'Ударов ' + count + ' из ' + iz;
        monschet = monschet + 1200;
        mon.innerHTML ='Денег: ' + monschet;
        alert("ПОБЕДА!!!")

};



};