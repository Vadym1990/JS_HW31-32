// --------------------- Marking ------------------ //

const body = document.querySelector('body');

const container1 = document.createElement('div');
container1.classList.add('container');
const container2 = document.createElement('div');
container2.classList.add('container');

const hr = document.createElement('div')
hr.classList.add('hr')

body.append(container1);

for (let i = 0; i < 3; i++) {
    let box = document.createElement('div');
    box.classList = 'box';
    container1.append(box);

    for (let k = 0; k < 3; k++) {
        let boxItem = document.createElement('div');
        boxItem.classList.add('box-item');
        boxItem.innerHTML = `${k + 1}`
        box.append(boxItem);
    }
}

body.append(hr)
body.append(container2)

for (let i = 0; i < 3; i++) {
    let box = document.createElement('div');
    box.classList.add('box2');

    let boxTitle = document.createElement('div');
    boxTitle.classList.add('box2__title');
    boxTitle.innerHTML = 'Title';

    let boxContent = document.createElement('div');
    boxContent.classList.add('box2__content');
    boxContent.innerHTML = 'CONTENT'

    container2.append(box);
    box.append(boxTitle, boxContent);
}

// ----------------------- Main Lohic -------------------------- //

const boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(function (el) {
    el.onclick = function () {
        const parent = this.parentElement;
        const children = parent.childNodes;
        this.classList.toggle('active');
        let anyChildActive = false;

        children.forEach(function (el) {
            if (el.classList.contains('active')) {
                anyChildActive = true;
            }
        });

        if (anyChildActive) {
            parent.classList.add('active');
        } else {
            parent.classList.remove('active');
        }
    }
});

const box2Content = document.querySelectorAll('.box2__content');
const box2 = document.querySelectorAll('.box2');

box2.forEach(function (el) {

    el.onclick = function () {

        const box2ChildContent = this.childNodes[1];

        box2Content.forEach(function (el) {

            if (el !== box2ChildContent) {
                el.classList.remove('active-opacity')
            }

        })

        box2ChildContent.classList.toggle('active-opacity');

    };
});

