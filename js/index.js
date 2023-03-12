document.getElementById('btnBai1').onclick = function(){
    //input diem 3 mon + diem chuan ---- (optional) khu vuc vs doi tuong 
    var diem1 = +document.getElementById('diem1').value;
    var diem2 = +document.getElementById('diem2').value;
    var diem3 = +document.getElementById('diem3').value;
    var khuVuc = +document.getElementById('khuVuc').value;
    var doiTuong = +document.getElementById('doiTuong').value;
    var diemChuan =+document.getElementById('diemChuan').value;
    //output = string 
    var output = '';
    // process
    var tong = 0;
    if(diem1 === 0 || diem2 ===0 || diem3 ===0){
        output = 'bạn rớt vì có môn 0 điểm';
    }else{
        tong = diem1 + diem2 + diem3 + doiTuong + khuVuc;
        if(tong < diemChuan){
            output = `bạn rớt vì tổng chỉ có ${tong}`;
        }else{
            output =` bạn đậu vì tổng là ${tong}`;
        }
    }

    document.getElementById('ket-qua-bai-1').innerHTML = output;
    
}


document.getElementById('btnBai2').onclick = function(){
    //input diem 3 mon + diem chuan ---- (optional) khu vuc vs doi tuong 
    var hoTen = document.getElementById('hoTen').value;
    var soKW = +document.getElementById('soKW').value;
    //output = string gồm ho ten + tong tien
    var output = '';
    
    // process
    var tong = 0;  
    if(soKW <= 50){
        tong = 500 * soKW;
    }
    else if(soKW > 50 && soKW <= 100){
        tong = 50*500 + (soKW - 50)*650;
    }
    else if (soKW > 100 && soKW <= 200){
        tong = 50*500 + 50*650 + (soKW-100)*850;
    }
    else if (soKW > 200 && soKW <= 350){
        tong = 50*500 + 50*650 + 100*850 + (soKW - 200) *1100;
    }else{
        tong = 50*500 + 50*650 + 100*850 + 150 *1100 + (soKW - 350)*1300;
    }
    output = ` bạn ${hoTen} tộng tiền điện là ${new Intl.NumberFormat("en-US").format(tong)} `
    document.getElementById('ket-qua-bai-2').innerHTML = output;
    
}


document.getElementById('btnBai3').onclick = function(){
    //input diem 3 mon + diem chuan ---- (optional) khu vuc vs doi tuong 
    var hoTen2 = document.getElementById('hoTen2').value;
    var tongThuNhap = +document.getElementById('tongThuNhap').value;
    var nguoiPhuThuoc = +document.getElementById('nguoiPhuThuoc').value;
    //output = string gồm ho ten + tong tien
    var output = '';
    
    // process
    var tong = 0;
    var tax = 0;
    var tongchiu = (tongThuNhap  -4e+6-(nguoiPhuThuoc*1600000));
    if(tongchiu <= 60e+6){
        tax = 5;  
    }
    else if(tongchiu > 60e+6 && tongchiu<=120e+6){
        tax = 10;
    }
    else if(tongchiu > 120e+6 && tongchiu<=210e+6){
        tax = 15;
    }
    else if(tongchiu > 210e+6 && tongchiu<=384e+6){
        tax = 20;
    }
    else if(tongchiu > 384e+6 && tongchiu<=624e+6){
        tax = 25;
    }
    else if(tongchiu > 624e+6 && tongchiu<=960e+6){
        tax = 30;
    }
    else if(tongchiu > 960e+6) {
        tax = 35;
    }




    tong = tongchiu *tax/100;

    
    output = ` bạn ${hoTen2} Tiền thuế thu nhập cá nhân là ${new Intl.NumberFormat("en-US").format(tong)} VND `
    document.getElementById('ket-qua-bai-3').innerHTML = output;
    
}

document.getElementById('loaiKhachHang').onchange = function(){
    if(this.value == 2){
        document.getElementById('soKetNoi').disabled = false;
    }else{
        document.getElementById('soKetNoi').value ='';
        document.getElementById('soKetNoi').disabled = true;
    }
}

document.getElementById('btnBai4').onclick = function(){
    //input diem 3 mon + diem chuan ---- (optional) khu vuc vs doi tuong 
    var MKH = document.getElementById('MKH').value;
    var loaiKhachHang = +document.getElementById('loaiKhachHang').value;
    var KenhCaoCap = +document.getElementById('KenhCaoCap').value;
    //output = string gồm ho ten + tong tien
    var output = '';
    
    // process
    var tong = 0;
    if(loaiKhachHang === 0 ){
        tong = 0;
    }
    else if(loaiKhachHang === 1){
        tong = 4.5 + 20.5 + KenhCaoCap * 7.5;
    }else{
        var soKetNoi = +document.getElementById('soKetNoi').value;
        if (soKetNoi <= 10){
            tong = 75 +15+50*KenhCaoCap;
        }else{
            tong = 75 + (soKetNoi-10)*5 +15+50*KenhCaoCap;
        }
    }
    

    
    output = ` Mã khách hàng: ${MKH}; Tiền cáp: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(tong)}`
    document.getElementById('ket-qua-bai-4').innerHTML = output;
    
}