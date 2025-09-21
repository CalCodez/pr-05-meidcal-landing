const getByClass = (className) => document.getElementsByClassName(className);
const getById = (id) => document.getElementById(id);
const createElement = (element) => document.createElement(element);
const appendChild = (parent, child) => parent.appendChild(child);
const removeChild = (parent, child) => parent.removeChild(child);
const addClass = (element, className = '') => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const textContent = (element, text) => (element.textContent = text);

const click = 'click';
const keyup = 'keyup';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

//Mobile Menu Vars and Functions

function toggleMobileMenu() {
	const menuToggler = getById('menu-toggler');
	const mobileMenu = getById('mobile-menu');
	const activeMenu = 'mobile-menu-active';
	const mobileLinks = selectAll('.mobile-nav-links');

	menuToggler.addEventListener(click, () => {
		if (!mobileMenu.classList.contains(activeMenu)) {
			toggleClass(mobileMenu, activeMenu);
			for (let link of mobileLinks) {
				setTimeout(() => {
					toggleClass(link, flexActive);
				}, 200);
			}
		} else {
			for (let link of mobileLinks) {
				toggleClass(link, flexActive);
			}
			toggleClass(mobileMenu, activeMenu);
		}
	});
}

toggleMobileMenu();
