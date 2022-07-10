const darkTheme = {
  accent: '#007acc',
  main: '#fff',
  bgd: '#0E161C',
  btn: '#007acc42',
};

const lightTheme = {
  accent: '#ff6b01',
  main: '#15141D',
  bgd: '#EBEBEB',
  btn: '#ff6b014c',
};
const element = document.documentElement;
const svgLight = document.querySelector('[data-theme="light"]');
const svgDark = document.querySelector('[data-theme="dark"]');
const keyLight = 'light';
const keyDark = 'dark';
let theme = localStorage.getItem('theme');


function currentTheme() {
  if (theme === 'light' || !theme ) {
    changeThemeLight();
  } else {
    changeThemeDark();
  }
}
svgLight.addEventListener('click', changeThemeLight);
svgDark.addEventListener('click', changeThemeDark);

function changeThemeLight() {
	element.style.setProperty('--accent', lightTheme.accent);
  element.style.setProperty('--text', lightTheme.main);
  element.style.setProperty('--bg', lightTheme.bgd);
  element.style.setProperty('--btn', lightTheme.btn);

  svgLight.classList.add('is-hidden');
  svgDark.classList.remove('is-hidden');
  switchTheme(keyLight);

}

function changeThemeDark() {
  element.style.setProperty('--accent', darkTheme.accent);
  element.style.setProperty('--text', darkTheme.main);
  element.style.setProperty('--bg', darkTheme.bgd);
  element.style.setProperty('--btn', darkTheme.btn);
  svgLight.classList.remove('is-hidden');
  svgDark.classList.add('is-hidden');
  switchTheme(keyDark);
}

function switchTheme(nameTheme) {
  localStorage.setItem('theme', nameTheme);
}

export { theme, currentTheme };