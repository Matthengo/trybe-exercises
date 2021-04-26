function changeBackground(element, color) {
    const elements = document.querySelectorAll(element);
    for (let values of elements) {
        values.style.backgroundColor = color
    }
}

changeBackground('#header-container', '#00b16f');

changeBackground('.emergency-tasks div', '#ff9a88');
changeBackground('.emergency-tasks div h3', '#a71cec');

changeBackground('.no-emergency-tasks div', '#fbd66e');
changeBackground('.no-emergency-tasks div h3', '#222424');

changeBackground('#footer-container', '#003633');