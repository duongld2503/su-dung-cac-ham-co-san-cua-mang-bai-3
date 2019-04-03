let sentence = prompt("nhap vao: ")
let array = sentence.toString();
let show = document.getElementById('show');
let result = new Array();


for (i=0;i<array.length;i++) {

    function kiemTraChuDayLaChuThuongHayHoa() {
        if (array[i] == array[i].toUpperCase()) {
            return 0;
        }
        return 1;
    }

    switch (kiemTraChuDayLaChuThuongHayHoa()) {
        case 0:
            result[i] = array[i].toLowerCase();
            break;
        case 1:
            result[i] = array[i].toUpperCase();
            break;
            result = result.concat(result[i]);
    }
}
    show = document.write(result);



