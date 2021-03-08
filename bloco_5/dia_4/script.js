function changeBgColor(element, color) {
    let elements = document.querySelectorAll(element);
    for (let item of elements) {
        item.style.backgroundColor = color;
    }
}

function changeColor(element, color) {
    let elements = document.querySelectorAll(element);
    for (let item of elements) {
        item.style.color = color;
    }
}

function changeFontSize(element, stringSize) {
    let elements = document.querySelectorAll(element);
    for (let item of elements) {
        item.style.fontSize = stringSize;
    }
}

function changeLineHeight(element, stringSize) {
    let elements = document.querySelectorAll(element);
    for (let item of elements) {
        item.style.lineHeight = stringSize;
    }
}

function changeFontFamily(element, stringSize) {
    let elements = document.querySelectorAll(element);
    for (let item of elements) {
        item.style.fontFamily = stringSize;
    }
}

function changing() {
    changeBgColor('body', localStorage.getItem('bodyBgColor'));
    changeColor('.paragraph', localStorage.getItem('paragraphColor'));
    changeFontSize('.paragraph', localStorage.getItem('paragraphFontSize'));
    changeLineHeight('.paragraph', localStorage.getItem('paragraphLineHeight'));
    changeFontFamily('.paragraph', localStorage.getItem('paragraphFontFamily'));

}

changing();