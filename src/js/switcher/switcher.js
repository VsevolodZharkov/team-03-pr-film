
const svgLight = document.querySelector('[data-theme="light"]');
const svgDark = document.querySelector('[data-theme="dark"]');

const body = document.querySelector("body");
const keyLight = "light";
const keyDark = "dark";
let theme = localStorage.getItem('theme');

function currentTheme(theme) {
    if(theme === 'light' || theme === null) {
        changeThemeLight()
    }  else{
        changeThemeDark()
    }
}
currentTheme(theme)

 svgLight.addEventListener('click', changeThemeLight);
 svgDark.addEventListener('click', changeThemeDark);

function changeThemeLight() {
    body.classList.add("light")
    body.classList.remove("dark")
    svgLight.classList.add("is-hidden")
    svgDark.classList.remove("is-hidden")
    switchTheme(keyLight)
}

function changeThemeDark() {
    body.classList.add("dark")
    body.classList.remove("light")
    svgLight.classList.remove("is-hidden")
    svgDark.classList.add("is-hidden")
    switchTheme(keyDark)
}

function switchTheme(nameTheme) {
    localStorage.setItem('theme', nameTheme)
}







// function switchTheme(evt) {
//   console.dir(evt.target.checked);

//   const currentTheme = evt.target.checked ? 'light' : 'darck';
//   console.log(currentTheme);
//   localStorage.setItem('theme', currentTheme);
//   if (evt.target.checked) {
//     let activeTheme = localStorage.getItem('theme');
//     console.log(activeTheme);
//     // activeTheme
//     //   ? (document.body.style.backgroundColor = activeTheme)
//     //   : (document.body.style.backgroundColor = !activeTheme);

//     document.body.style.backgroundColor = 'white';
//   } else {
//     document.body.style.backgroundColor = 'black';
//   }
// }
