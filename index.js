function multiply(a, b)
{
if (parseInt(a) == 0 || parseInt(b) == 0) {
    return '0';
}

if(a.charAt(0) === '0') {
    a = parseInt(a, 10).toString();
}
if(b.charAt(0) === '0') {
    b = parseInt(b, 10).toString();
};



console.log('a', a);
console.log('b', b);
a = [...a].reverse();
b = [...b].reverse();
var result = [];


for (var i = 0; a[i] >= 0; i++) {
    for (var j = 0; b[j] >= 0; j++) {
        if (!result[i + j]) {
            result[i + j] = 0;
        }

        result[i + j] += a[i] * b[j];
    }
}

for (var i = 0; result[i] >= 0; i++) {
    if (result[i] >= 10) {
        if (!result[i + 1]) {
            result[i + 1] = 0;
        }

        result[i + 1] += parseInt(result[i] / 10);
        result[i] %= 10;
    }
}
    console.log(result);
    console.log('result', result.reverse().join(''));
    return result.reverse().join('');
}

const answer1 = multiply('0000001', '3');
console.log(answer1);
