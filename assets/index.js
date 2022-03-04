import '@cds/core/button/register.js';
import '@cds/core/card/register.js';
import '@cds/core/tag/register.js';
import '@cds/core/navigation/register.js';
import '@cds/core/icon/register.js';
import '@cds/core/toggle/register.js';
import '@cds/core/pagination/register.js';
import '@cds/core/modal/register.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { infoStandardIcon } from '@cds/core/icon/shapes/info-standard.js';  
import { searchIcon } from '@cds/core/icon/shapes/search.js';
import { cogIcon } from '@cds/core/icon/shapes/cog.js';
import { codeIcon } from '@cds/core/icon/shapes/code.js';

ClarityIcons.addIcons(infoStandardIcon, searchIcon, cogIcon, codeIcon);

// Navigation
const nav = document.querySelector('cds-navigation');
const main = document.querySelector('main');
setNavSize();

nav.addEventListener('expandedChange', () => {
  nav.expanded = !nav.expanded;
  nav.expanded && document.documentElement.clientWidth > 1024 ? main.setAttribute('expanded', '') : main.removeAttribute('expanded');
});

window.addEventListener('resize', () => setNavSize());

function setNavSize() {
  if (document.documentElement.clientWidth > 1024) {
    main.setAttribute('expanded', '');
    nav.expanded = true;
  } else {
    main.removeAttribute('expanded');
    nav.expanded = false;
  }
}

// Settings Modal
const modal = document.querySelector('cds-modal');
const themeToggle = document.querySelector('#dark-theme-toggle');
const button = document.querySelector('#settings-button');

button.addEventListener('click', () => modal.removeAttribute('hidden'));
modal.addEventListener('closeChange', () => modal.setAttribute('hidden', ''));

themeToggle.addEventListener('change', () => {
  if (localStorage.getItem('cds-theme') === 'dark') {
    localStorage.setItem('cds-theme', 'light');
  } else {
    localStorage.setItem('cds-theme', 'dark');
  }

  setTheme();
});

setTheme();

function setTheme() {
  const theme = localStorage.getItem('cds-theme') ?? 'dark';
  themeToggle.checked = theme === 'dark';
  document.body.setAttribute('cds-theme', theme);
}