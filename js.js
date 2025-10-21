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

//NOTE: Temp Display Toggle Section function (REMOVE ON PROJECT COMPLETE)
const hideSection = (section) => {
	section.style.display = 'none';
};

const heroSection = getById('hero-section');
const servicesSection = getById('services-section');
const patientCenterSection = getById('patient-center-section');

hideSection(heroSection);
hideSection(servicesSection);
// hideSection(patientCenterSection);

//NOTE: HTML SECTIONs ^

//Global Project Vars
const click = 'click';
const keyup = 'keyup';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

//Mobile Menu Vars and Functions

//``Main Nav Vars
const menuToggler = getById('menu-toggler');
const mobileMenu = getById('mobile-menu');
const activeMenu = 'mobile-menu-active';
const mobileLinks = selectAll('.mobile-nav-links');

//``Patient Center Mobile Menu Vars
const patientMenuToggler = getById('patient-mobile-menu-toggle');
const patientMenu = getById('patient-mobile-menu');
const mobilePatientToggles = selectAll('.mobile-patient-toggle');

const menuToggle = (toggler, menu, arr) => {
	toggler.addEventListener(click, () => {
		if (!menu.classList.contains(activeMenu)) {
			toggleClass(menu, activeMenu);
			for (let elms of arr) {
				setTimeout(() => {
					toggleClass(elms, flexActive);
				}, 200);
			}
		} else {
			for (let elms of arr) {
				toggleClass(elms, flexActive);
			}
			toggleClass(menu, activeMenu);
		}
	});

	menu.addEventListener(click, () => {
		if (menu.classList.contains(activeMenu)) {
			toggleClass(menu, activeMenu);
			for (let elms of arr) {
				toggleClass(elms, flexActive);
			}
		}
	});

	window.addEventListener(keyup, (e) => {
		if (e.key === 'Escape' && menu.classList.contains(activeMenu)) {
			toggleClass(menu, activeMenu);

			for (let elms of arr) {
				toggleClass(elms, flexActive);
			}
		}
	});
};

menuToggle(menuToggler, mobileMenu, mobileLinks);
menuToggle(patientMenuToggler, patientMenu, mobilePatientToggles);

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

const portalToggles = [formToggles[0], formToggles[3]];
const billToggles = [formToggles[1], formToggles[4]];
const scheduleToggles = [formToggles[2], formToggles[5]];
const coverActive = 'form-cover-active';
const formCovers = selectAll('.form-cover-container');
const [portalCover, billCover, scheduleCover] = formCovers;

console.log(formCovers);

const toggleForms = (arrOfToggles, cover, form) => {
	for (let toggler of arrOfToggles) {
		toggler.addEventListener(click, () => {
			if (!cover.classList.contains(coverActive)) {
				toggleClass(cover, coverActive);
				form.style.visibility = 'visible';
			} else {
				toggleClass(cover, coverActive);
				form.style.visibility = 'hidden';
			}
		});
	}
};

toggleForms(portalToggles, portalCover, portalForm);
toggleForms(billToggles, billCover, billForm);
toggleForms(scheduleToggles, scheduleCover, scheduleForm);
