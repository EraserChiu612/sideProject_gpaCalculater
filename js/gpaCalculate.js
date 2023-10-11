//計算GPA

let credits = document.querySelectorAll('.class_credit')
credits.forEach(credit => {
	credit.addEventListener('change', e => {
		setGPA()
	})
})

function setGPA() {
	let formLength = document.querySelectorAll('form').length
	let credits = document.querySelectorAll('.class_credit')
	let selects = document.querySelectorAll('.select')
	let sum = 0 //計算用分子
	let creditsSum = 0 //計算用分母

	for (let i = 0; i < credits.length; i++) {
		if (isNaN(credits[i].valueAsNumber)) credits[i].valueAsNumber = 0
		else creditsSum += credits[i].valueAsNumber
	}
	for (let i = 0; i < formLength; i++) {
		sum += credits[i].valueAsNumber * convertor(selects[i].value)
	}
	let gpa = 0
	creditsSum == 0 ? (gpa = 0) : (gpa = sum / creditsSum)
	document.querySelector('#result_gpa').innerText = gpa.toFixed(2)
}

function convertor(grade) {
	switch (grade) {
		case 'A':
			return 4.0
		case 'A-':
			return 3.7
		case 'B+':
			return 3.4
		case 'B':
			return 3.0
		case 'B-':
			return 2.7
		case 'C+':
			return 2.4
		case 'C':
			return 2.0
		case 'C-':
			return 1.7
		case 'D+':
			return 1.4
		case 'D':
			return 1.0
		case 'D-':
			return 0.7
		case 'F':
			return 0.0
		default:
			return 0
	}
}
