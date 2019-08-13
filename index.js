function multiply(a, b)
{
    const product = Array(a.length+b.length).fill(0);
    console.log('product', product);
    for (let i = a.length; i--; null) {
        console.log(i);
        let carry = 0;
        for (let j = b.length; j--; null) {
            console.log(j);
            product[1+i+j] += carry + a[i]*b[j];
            carry = Math.floor(product[1+i+j] / 10);
            product[1+i+j] = product[1+i+j] % 10;
        }
        product[i] += carry;
    }
    return product.join("").replace(/^0*(\d)/, "$1");
}

const answer1 = multiply('525', '321');
console.log(answer1);
