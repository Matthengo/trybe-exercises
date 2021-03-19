function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

function isSomeDayEqual(day, arrayOfDays) {
    let isEqual = false;
    for (let holiday of arrayOfDays) {
        if (parseInt(holiday) === parseInt(day)) {
            isEqual = true;
            break;
        }
    }

    return isEqual;
}

function createDaysOfTheMonth(holidays = null, fridays = null) {
    const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const dezDaysList = document.querySelector('#days');

    for (let index in dezDays) {
        const days = dezDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;
        dayListItem.classList.add('day');

        if (isSomeDayEqual(days, holidays)) {
            dayListItem.classList.add('holiday');
        }

        if (isSomeDayEqual(days, fridays)) {
            dayListItem.classList.add('friday');
        }

        dezDaysList.appendChild(dayListItem);
    }
}

/**
 * Creates a button
 * @param {String} buttonText   Button text. 
 * @param {String} parentButton Parent class, id or tag. Must have dot for classes and hashtag for ids.
 * @param {String} id           (Optional) Button Id. Doesn't need hashtag.
 * @returns The button itself.
 */
function createButton(buttonText, parentButton, id = null) {
    let parent = document.querySelector(parentButton);
    let button = document.createElement('button');
    button.innerHTML = buttonText;
    button.id = id;

    parent.appendChild(button);

    return button;
}

function changeBgColor(element, newColor, oldColor) {
    const elements = document.querySelectorAll(element);
    elements.forEach((value) => {
        if (value.style.backgroundColor === newColor) {
            value.style.backgroundColor = oldColor;
        } else {
            value.style.backgroundColor = newColor;
        }
    })
}

function changeText(element, newText, oldTexts) {
    const elements = document.querySelectorAll(element);

    elements.forEach((value, index) => {
        if (value.innerText !== String(oldTexts[index])) {
            value.innerText = oldTexts[index];
        } else {
            value.innerText = newText;
        }
    })
}

const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25];
const listBackgroundColor = 'rgb(238, 238, 238)';

createDaysOfTheWeek();
createDaysOfTheMonth(holidays, fridays);

const holidayButton = createButton('Feriados', '.buttons-container', 'btn-holiday');

const fridayButton = createButton('Sexta-Feira', '.buttons-container', 'btn-friday');

holidayButton.addEventListener('click', () => changeBgColor('.holiday', 'blue', listBackgroundColor));

fridayButton.addEventListener('click', () => changeText('.friday', 'Sextou!!', fridays));