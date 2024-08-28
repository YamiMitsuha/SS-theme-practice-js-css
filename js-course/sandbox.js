const friends = ['toshi', 'matthew', 'angelo', 'elbert', 'mark'];

const para = document.querySelector('.pekpek');
const bod = document.querySelector('body')

friends.forEach((val, index) => {
    para.innerHTML += `<p>My friend #${index + 1}: ${val}</p>`;
});

const dark = () => {
    para.classList.add("white-font");
    bod.classList.add("darkening");
    para.classList.remove("lightmode");
};

const blue = () => {
    para.classList.add("white-font");
    bod.classList.add("bluening");
    para.classList.remove("lightmode");
};

blue();

