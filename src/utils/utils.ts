
export const formatSecToDate = (s:number) => {
    if(s == '')return
    let t:number;
        if (s > -1) {
            var hour = Math.floor(s / 3600);
            var min = Math.floor(s / 60) % 60;
            var sec = s % 60;
            if (hour < 10) {
                t = '0' + hour + ":";
            } else {
                t = hour + ":";
            }
            if (min < 10) {
                t += "0";
            }
            t += min + ":";
            if (sec < 10) {
                t += "0";
            }
            t += sec.toFixed(0);
        }
        return t;
}


export const numberFormat =  (value :number):object =>{
    
    var param = {
        value:0,
        unit:""
    };
        var k = 10000,
            sizes = ['', '万', '亿', '万亿'],
            i;
            if(value < k){
                param.value =value
                param.unit=''
            }else{
                i = Math.floor(Math.log(value) / Math.log(k)); 
                param.value = Number(((value / Math.pow(k, i))).toFixed(2));
                param.unit = sizes[i];
            }
    return param;
}