const codes = document.querySelectorAll('.json-code');
codes.forEach((code) => {
    code.innerText = JSON.stringify(JSON.parse(code.innerText), null, 4);
});



