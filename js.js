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

//Services Card Curtain Vars and Function
const curtainToggles = selectAll('.service-card-view-more-btn');
const serviceCurtain = selectAll('.services-card-curtain');
const activeServiceCurtain = 'services-card-curtain-active';
const curtainHeaders = selectAll('.curtain-header');
const curtainUl = selectAll('.curtain-ul');

const [facilityToggle, caresToggle, specialtiesToggle] = curtainToggles;
const [facilityCurtain, caresCurtain, specialtiesCurtain] = serviceCurtain;
const [facilityHeader, caresHeader, specialtiesHeader] = curtainHeaders;
const [facilityUl, caresUl, specialtiesUl] = curtainUl;

const toggleServiceCurtain = (toggler, curtain, header, ul) => {
	toggler.addEventListener(click, () => {
		if (!curtain.classList.contains(activeServiceCurtain)) {
			toggleClass(curtain, activeServiceCurtain);
			setTimeout(() => {
				toggleClass(header, flexActive);
				toggleClass(ul, flexActive);
			}, 200);
		} else {
			toggleClass(curtain, activeServiceCurtain);
			toggleClass(header, flexActive);
			toggleClass(ul, flexActive);
		}
	});

	curtain.addEventListener(click, () => {
		if (!curtain.classList.contains(activeServiceCurtain)) {
			toggleClass(curtain, activeServiceCurtain);
			setTimeout(() => {
				toggleClass(header, flexActive);
				toggleClass(ul, flexActive);
			}, 200);
		} else {
			toggleClass(curtain, activeServiceCurtain);
			toggleClass(header, flexActive);
			toggleClass(ul, flexActive);
		}
	});
};

toggleServiceCurtain(facilityToggle, facilityCurtain, facilityHeader, facilityUl);
toggleServiceCurtain(caresToggle, caresCurtain, caresHeader, caresUl);
toggleServiceCurtain(specialtiesToggle, specialtiesCurtain, specialtiesHeader, specialtiesUl);

//!!Patient Center Vars and Functions

const portalForm = getById('portal-form');
const billForm = getById('bill-form');
const scheduleForm = getById('schedule-form');

const formToggles = selectAll('.patient-toggle');
const [porToggle, billToggle, scheduleToggle] = formToggles;
