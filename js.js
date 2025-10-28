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
const meetChiefSection = getById('meet-chiefs-section');

// hideSection(heroSection);
// hideSection(servicesSection);
// hideSection(patientCenterSection);
// hideSection(meetChiefSection);
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
const coverText = selectAll('.cover-text');
const formCovers = selectAll('.form-cover-container');
const formCoverHeader = selectAll('.form-cover-header');
const patientFormContainer = selectAll('.patient-form-container');

console.log(patientFormContainer);

const formsObj = {
	portal: {
		toggles: [formToggles[0], formToggles[1]],
		cover: formCovers[0],
		coverText: coverText[0],
		form: portalForm,
		formCoverHeader: formCoverHeader[0],
		headerText: ['Log In', 'Portal'],
		formContainer: patientFormContainer[0],
	},

	bill: {
		toggles: [formToggles[2], formToggles[3]],
		cover: formCovers[1],
		coverText: coverText[1],
		form: billForm,
		formCoverHeader: formCoverHeader[1],
		headerText: ['Pay Bill', 'Payments'],
		formContainer: patientFormContainer[1],
	},

	schedule: {
		toggles: [formToggles[4], formToggles[5]],
		cover: formCovers[2],
		coverText: coverText[2],
		form: scheduleForm,
		formCoverHeader: formCoverHeader[2],
		headerText: ['Schedule Now', 'Appointments'],
		formContainer: patientFormContainer[2],
	},
};

const { portal, bill, schedule } = formsObj;

const coverActive = 'form-cover-active';

const toggleForms = (obj) => {
	for (let toggle of obj.toggles) {
		toggle.addEventListener(click, () => {
			if (!obj.cover.classList.contains(coverActive)) {
				toggleClass(obj.cover, coverActive);
				obj.form.style.visibility = 'visible';
				toggleClass(obj.toggles[0], flexActive);
				toggleClass(obj.toggles[1], flexInactive);
				toggleClass(obj.coverText, flexInactive);
				textContent(obj.formCoverHeader, obj.headerText[0]);
				// obj.formContainer.style.height = '520';

				if (window.innerWidth < 467) {
					textContent(schedule.formCoverHeader, 'Schedule');
				}
			} else {
				toggleClass(obj.cover, coverActive);
				obj.form.style.visibility = 'hidden';
				toggleClass(obj.toggles[0], flexActive);
				toggleClass(obj.toggles[1], flexInactive);
				toggleClass(obj.coverText, flexInactive);
				textContent(obj.formCoverHeader, obj.headerText[1]);
				// obj.formContainer.style.height = '400px';
			}
		});
	}
};

toggleForms(portal);
toggleForms(bill);
toggleForms(schedule);
