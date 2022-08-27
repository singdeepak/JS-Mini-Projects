function dummy(str) {
    let txt = "";
    for (let i = 0; i < str.length; i++) {
        if (/[a-z]/.test(str[i]))
            txt += str[i].toUpperCase();
        else
            txt += str[i].toLowerCase();
    }
    return txt;
}

document.querySelector('#text').addEventListener('input', function () {
    let x = this.value;
    document.querySelector('#result').value = dummy(x);
});