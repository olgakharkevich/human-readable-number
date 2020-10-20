
let dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
let teen = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
let ty = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];


module.exports = function toReadable (number) {
    let str = '';
    if (number === 0) {
        str = 'zero';
        return str
    } 
    number = number.toString();
    let len = number.length;
    let numArr = number.split(''); 
    let isTeen = false;

    numArr.forEach((el, i) => {
        if ((len - i) % 3 == 0) {
            str += `${dg[el]} hundred `;
        } else if ((len - i) % 2 == 0) {
            if (el == '1') {
                str += `${teen[numArr[i + 1]]} `;
                isTeen = true;
            } else if (!isTeen && (el != 0)) {
                str += `${ty[el - 2]} `; 
            } 
        } else if ((el == numArr[len - 1]) && (el != 0) && !isTeen) {
            str += dg[el];
        } 
    });  
    return str.trim();
}
