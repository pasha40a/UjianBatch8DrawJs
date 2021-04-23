

function kotak(panjang) {
    let cetak = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++) {
            cetak += '* ';
        }
        cetak += '\n';
    }
    return cetak;
}
console.log('Gambar Kotak :');
console.log(kotak(5));

function segitiga(baris){
    let cetak ='';
    for (let i = 0; i <=baris; i++){
        for(let j = 0; j < i; j++){
            cetak += '*';
        }
        cetak += '\n';
    }
    return cetak;
}
console.log('Segitiga :');
console.log(segitiga(5))

function segitigaTerbalik(baris) {
    let cetak ='';
    for (let i = 0; i <baris; i++){
        for(let j = i; j <baris; j++){
            cetak += '*';
        }
        cetak += '\n';
    }
    return cetak;
}
console.log('Gambar Segitiga Terbalik :');
console.log(segitigaTerbalik(5))


function selangSeling(baris,kolom) {
    let cetak ='';
    for (let i = 0; i <baris; i++){
        for(let j = 0; j <kolom; j++){
            if((i %2==1 || j %2==0)&&(j %2==1 || i %2==0)){
            cetak += '*';
        }else {
            cetak += '!';   
        }
        }cetak += '\n';
    }
    return cetak;
}
console.log('Gambar Selang Seling :');
console.log(selangSeling(5,5));

function kotakPola(baris,kolom) {
    let cetak ='';
    for (let i = 0; i <baris; i++){
        for(let j = 0; j <kolom; j++){
            if((i%2==0 || j!==1) && (i%2==1 || j!==2)) {
            cetak += '*';
        }else{
            cetak += '!';
        } 
        }cetak += '\n';
    }
    return cetak;
}
console.log('Gambar KotakPola :');
console.log(kotakPola(5,5));
