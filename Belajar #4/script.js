var penumpang = [];
var hapusPenumpang = function(namaPenumpang, penumpang) {
if (penumpang.length == 0) {
    console.log("angkot masih kosong");
    return penumpang;
}else{
    for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            }else if(i == penumpang.length - 1 ){
                console.log("tidak ada di dalam");
                return penumpang;
            }
        }
    }
}