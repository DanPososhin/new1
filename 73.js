function mult(a, b){
    if (b === 0) {
        return 0;
    } else {
        return (a + b) + mult(--b)
    }
}
 
mult(2, 8); 