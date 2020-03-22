
let dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
let tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
let tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];


module.exports = function toReadable (number) {
    let str = '';
    if (number === 0) str = 'zero';
    number = number.toString();
    let x = number.length;
    let n = number.split(''); 
    let sk = 0;
    for (let i = 0;   i < x;  i++) {
        if ((x-i)%3==0) {
            str += dg[n[i]] + ' ' + 'hundred ';
        } else if ((x-i)%2==0) {
            if (n[i]=='1') {
               str += tn[n[i+1]] + ' ';
               sk=1;
            } else if ((sk==0)&&(n[i]!=0)) {
                str += tw[n[i]-2] + ' '; 
            } else if ((n[i]!=0)&&(sk==0)) {
                str += dg[n[i]];
            }
        } else if ((n[i]==n[x-1])&&(n[i]!=0)&&(sk==0)) str += dg[n[i]];
    }   
    return str.trim();
}

