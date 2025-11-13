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

//++Chief Search Vars and Functions
const chiefs = [
	{
		id: 'neurology',
		name: 'Dr. Elijah Williams- MD/PhD',
		title: 'Chief of Neurology',
		src: './assets/people/chiefs/chief_of_neurology.png',
		statement: 'Your health journey matters to us—every step, every moment, every day.',
	},

	{
		id: 'oncology',
		name: 'Dr. Parker Hayes- MD',
		title: 'Chief of Oncology',
		src: './assets/people/chiefs/chief_of_oncology.png',
		statement: 'We treat every patient like family, with compassion and respect at every visit.',
	},
	{
		id: 'dermatology',
		name: 'Dr. Nia Carter- MD',
		title: 'Chief of Dermatology',
		src: './assets/people/chiefs/chief_of_dermatology.png',
		statement: 'Dedicated to listening, understanding, and delivering the care you truly deserve.',
	},
	{
		id: 'psychiatry',
		name: 'Dr. Marco Bellini- MD',
		title: 'Chief of Psychiatry',
		src: './assets/people/chiefs/chief_of_psychiatry.png',
		statement: 'Where medical expertise meets genuine human care—your wellness is our mission.',
	},
	{
		id: 'orthopedics',
		name: 'Dr. Owen Matthews- MD',
		title: 'Chief of Orthopedics',
		src: './assets/people/chiefs/chief_of_orthopedics.png',
		statement: 'Your comfort, confidence, and care come first—always.',
	},
	{
		id: 'cardiology',
		name: 'Dr. Darius Johnson- MD',
		title: 'Chief of Cardiology',
		src: './assets/people/chiefs/chief_of_cardiology.jpg',
		statement: 'Excellence in medicine begins with compassion and a patient-first mindset.',
	},
	{
		id: 'surgery',
		name: 'Dr. Skye Patel- MD/MBChB',
		title: 'Chief of Surgery',
		src: './assets/people/chiefs/chief_of_surgery.jpg',
		statement: 'We’re here to heal, to guide, and to care beyond expectations.',
	},
	{
		id: 'geriatrics',
		name: 'Dr. Zoe Mitchell- MD/MPH',
		title: 'Chief of Geriatrics',
		src: './assets/people/chiefs/chief_of_geriatrics.jpg',
		statement: 'Every patient’s story matters—we’re honored to be part of yours.',
	},
	{
		id: 'pain management',
		name: 'Dr. Linh Tran - MD',
		title: 'Chief of Pain Management',
		src: './assets/people/chiefs/chief_of_pain_management.jpg',
		statement:
			'Trusted care built on empathy, innovation, and unwavering commitment to your well-being.',
	},
	{
		id: 'anesthesiology',
		name: 'Dr. Kieth Johnson - MD/PhD',
		title: 'Chief of Anesthesiology',
		src: './assets/people/chiefs/chief_of_anesthesiology.jpg',
		statement: 'Compassion drives our care—your trust inspires our excellence.',
	},
	{
		id: 'emergency medicine',
		name: 'Dr. Zane Moore - MD/PhD',
		title: 'Chief of Emergency Medicine',
		src: './assets/people/chiefs/chief_of_emergency_medicine.jpg',
		statement: 'Our focus is simple: better health, better experiences, better lives.',
	},
	{
		id: 'pediatrics',
		name: 'Dr. Jada Davis - MD',
		title: 'Chief of Pediatrics',
		src: './assets/people/chiefs/chief_of_pediatrics.jpg',
		statement: 'Together, we’ll create a healthier, happier future for you and your family.',
	},
	{
		id: 'ob/gyn',
		name: 'Dr. Deja Williamson - MD',
		title: 'Chief of OB/GYN',
		src: './assets/people/chiefs/chief_of_ob_gyn.jpg',
		statement: 'Medicine with heart—personalized, compassionate, and centered around you.',
	},
	{
		id: 'radiology',
		name: 'Dr. Samar Veer - MD',
		title: 'Chief of Radiology',
		src: './assets/people/chiefs/chief_of_radiology.jpg',
		statement: 'We listen first, care deeply, and act with purpose for your health.',
	},
	{
		id: 'pathology',
		name: 'Dr. Juan Rivera - MD/MPH',
		title: 'Chief of Pathology',
		src: './assets/people/chiefs/chief_of_pathology.jpg',
		statement: 'Delivering expert care that feels personal, thoughtful, and reassuring.',
	},
	{
		id: 'rehab services',
		name: 'Dr. Amina Khalil - MD',
		title: 'Chief of Rehab Services',
		src: './assets/people/chiefs/chief_of_rehab_services.jpg',
		statement: 'From diagnosis to recovery, we’re here for you—every step of the way.',
	},
	{
		id: 'infectious disease',
		name: 'Dr. Greg Sanders - MD/PhD',
		title: 'Chief of Infectious Disease',
		src: './assets/people/chiefs/chief_of_infectious_disease.jpg',
		statement: 'Because you deserve care that treats more than symptoms—it treats you.',
	},
	{
		id: 'urology',
		name: 'Dr. Malique Taylor - MD',
		title: 'Chief of Urology',
		src: './assets/people/chiefs/chief_of_urology.jpg',
		statement: 'Our mission is to make every visit meaningful, comfortable, and effective.',
	},
	{
		id: 'endocrinology',
		name: 'Dr. A`nika Banks - MD/MBA',
		title: 'Chief of Endocrinology',
		src: './assets/people/chiefs/chief_of_endocrinology.jpg',
		statement: 'We’re committed to providing the best care, with kindness leading the way.',
	},
	{
		id: 'pulmonology',
		name: 'Dr. Maya Brooks- MD',
		title: 'Chief of Pulmonology',
		src: './assets/people/chiefs/chief_of_pharmacy.jpg',
		statement: 'Your care is our calling—where compassion and expertise come together for you.',
	},
];

function toggleChiefCurtin() {
	const chiefSelectCurtin = getById('chief-select-curtin');
	const chiefSelectHeader = getById('chief-select-header');
	const chiefSelectText = getById('chief-select-text');
	const chiefCurtinToggle = getById('chief-curtin-toggle');
	const chiefCurtinUp = 'chief-select-curtin-up';

	chiefCurtinToggle.addEventListener(click, () => {
		if (!chiefSelectCurtin.classList.contains(chiefCurtinUp)) {
			toggleClass(chiefSelectCurtin, chiefCurtinUp);
			toggleClass(chiefSelectHeader, flexInactive);
			toggleClass(chiefSelectText, flexInactive);
			toggleClass(chiefCurtinToggle, flexInactive);
		} else {
			toggleClass(chiefSelectCurtin, chiefCurtinUp);
			setTimeout(() => {
				toggleClass(chiefSelectHeader, flexInactive);
				toggleClass(chiefSelectText, flexInactive);
				toggleClass(chiefCurtinToggle, flexInactive);
				console.log('Time out works');
			}, 600);
		}
	});

	window.addEventListener(keyup, (e) => {
		if (e.key === 'Escape' && chiefSelectCurtin.classList.contains(chiefCurtinUp)) {
			toggleClass(chiefSelectCurtin, chiefCurtinUp);

			setTimeout(() => {
				toggleClass(chiefSelectHeader, flexInactive);
				toggleClass(chiefSelectText, flexInactive);
				toggleClass(chiefCurtinToggle, flexInactive);
				console.log('Time out works');
			}, 500);
		}
	});
}

toggleChiefCurtin();
//!!Chief Cards Update vars and func()
const chiefSelectSpans = selectAll('.chief-select-span');
const chiefSelectInput = getById('chief-select');

//Empty Array to catch the option once they are created and pushed.
const optionsArr = [];

//creating new array for all chiefs  arr[obj{id:}]ids
chiefs
	.map((id) => {
		//extracting all ids
		return id.id;
	})
	.forEach((op) => {
		//creating options element for each ID
		const options = createElement('option');
		//setting ID for each ID
		options.id = op;
		//setting text content to display the options names for each ID
		textContent(options, op);
		//appending our newly created and options to the select input
		appendChild(chiefSelectInput, options);
		//pushing all the options to the optionsArr
		optionsArr.push(options);
	});

//New set array to remove all the duplicates in the optionsArr for the update func(arg)
const options = new Set(optionsArr);

//Function for the click -> span and change -> select(options)
function updateChiefCards(arr, arr2, arr3) {
	const chiefName = getById('chief-name');
	const chiefTitle = getById('chief-title');
	const chiefStatement = getById('chief-statement');
	const chiefImg = getById('chief-image');
	const departmentLabel = getById('department-label');

	for (let obj of arr) {
		for (let toggle of arr2) {
			toggle.addEventListener(click, () => {
				if (toggle.id == obj.id) {
					textContent(chiefName, obj.name);
					textContent(chiefTitle, obj.title);
					textContent(chiefStatement, obj.statement);
					textContent(departmentLabel, obj.id);
					chiefImg.src = obj.src;
					console.log('Card Updated!');
				}
			});
		}

		for (let select of arr3) {
			chiefSelectInput.addEventListener('change', () => {
				if (chiefSelectInput.value == select.id && select.id == obj.id) {
					textContent(chiefName, obj.name);
					textContent(chiefTitle, obj.title);
					textContent(chiefStatement, obj.statement);
					textContent(departmentLabel, obj.id);
					chiefImg.src = obj.src;
					console.log('Card Updated!');
				}
			});
		}
	}
}

updateChiefCards(chiefs, chiefSelectSpans, options);

//!!Patient Center Vars and Functions

const portalForm = getById('portal-form');
const billForm = getById('bill-form');
const scheduleForm = getById('schedule-form');

const formToggles = selectAll('.patient-toggle');
const coverText = selectAll('.cover-text');
const formCovers = selectAll('.form-cover-container');
const formCoverHeader = selectAll('.form-cover-header');
const patientFormContainer = selectAll('.patient-form-container');
const coverIconContainers = selectAll('.cover-icon-container');

const formsObj = {
	portal: {
		toggles: [formToggles[0], formToggles[1]],
		cover: formCovers[0],
		coverText: coverText[0],
		form: portalForm,
		formCoverHeader: formCoverHeader[0],
		headerText: ['Log In', 'Portal'],
		formContainer: patientFormContainer[0],
		coverIconContainer: coverIconContainers[0],
	},

	bill: {
		toggles: [formToggles[2], formToggles[3]],
		cover: formCovers[1],
		coverText: coverText[1],
		form: billForm,
		formCoverHeader: formCoverHeader[1],
		headerText: ['Pay Bill', 'Payments'],
		formContainer: patientFormContainer[1],
		coverIconContainer: coverIconContainers[1],
	},

	schedule: {
		toggles: [formToggles[4], formToggles[5]],
		cover: formCovers[2],
		coverText: coverText[2],
		form: scheduleForm,
		formCoverHeader: formCoverHeader[2],
		headerText: ['Schedule Now', 'Appointments'],
		formContainer: patientFormContainer[2],
		coverIconContainer: coverIconContainers[2],
	},
};

const { portal, bill, schedule } = formsObj;

const coverActive = 'form-cover-active';
const iconContainerActive = 'cover-icon-container-active';

const toggleForms = (obj) => {
	for (let toggle of obj.toggles) {
		toggle.addEventListener(click, () => {
			if (!obj.cover.classList.contains(coverActive)) {
				toggleClass(obj.cover, coverActive);
				obj.form.style.visibility = 'visible';
				toggleClass(obj.toggles[0], flexActive);
				toggleClass(obj.toggles[1], flexInactive);
				toggleClass(obj.coverText, flexInactive);
				toggleClass(obj.coverIconContainer, iconContainerActive);
				textContent(obj.formCoverHeader, obj.headerText[0]);

				if (window.innerWidth < 467) {
					textContent(schedule.formCoverHeader, 'Schedule');
				}
			} else {
				toggleClass(obj.cover, coverActive);
				obj.form.style.visibility = 'hidden';
				toggleClass(obj.toggles[0], flexActive);
				toggleClass(obj.toggles[1], flexInactive);
				toggleClass(obj.coverText, flexInactive);
				toggleClass(obj.coverIconContainer, iconContainerActive);

				textContent(obj.formCoverHeader, obj.headerText[1]);
			}
		});
	}
};

toggleForms(portal);
toggleForms(bill);
toggleForms(schedule);
