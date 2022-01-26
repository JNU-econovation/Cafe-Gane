const onClickHandler1 = function() {
    console.log('clicked1');
    window.sessionStorage.setItem('isCaffeine', '1'); location.href='/Menu?IsCaffeine=1'; 
}

const onClickHandler2 = function() {
    console.log('clicked2')
    window.sessionStorage.setItem('isCaffeine', '0'); location.href='/Menu?IsCaffeine=0'; 
}