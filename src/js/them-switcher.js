const themSwitcherFunction = () => {
  const rootElement = document.documentElement;
  let dataAtribute = rootElement.getAttribute('data-theme');
  let newTheme = dataAtribute === 'light' ? 'dark' : 'light';
  rootElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  console.log('click');
};
document
  .querySelector('.theme-switcher')
  .addEventListener('click', themSwitcherFunction);
