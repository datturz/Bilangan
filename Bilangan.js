
let check = (angka1)=>{
    arrKos = angka1 
    if(angka1 % 2 == 0 && angka1>= 0 && angka1> 0 ){
          arrKos = ['bulat','cacah','asli','genap']
        }else if(angka1 == 1){
        arrKos = ['bulat', 'cacah', 'asli', 'ganjil']
        }else if(angka1 ==  0){
        arrKos = ['bulat','cacah','nol']
        }else if(angka1 < 0 && angka1 % 2 ==0 ){
        arrKos = ['negatif', 'genap','bulat']
        }else if(angka1 <0  && angka1 % 2 !==0){
        arrKos = ['negatif','ganjil','bulat']    
        }else if(angka1.length){
            for(i=0;i<angka1.length;i++){
               if(angka1.lengt%i==i){
        arrKos = ['bulat','cacah','prima']
               }
            }
        }
          
    return arrKos  
}

console.log(check(2))
