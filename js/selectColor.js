//讓整個網站的enter按鈕都失效

window.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		e.preventDefault()
	}
})

//防止form內部button按鈕提交表單

let allButtons = document.querySelectorAll('button')
allButtons.forEach(button => {
	button.addEventListener('click', e => {
		e.preventDefault()
	})
})

//1.選擇select內的option,改變相應背景顏色
let allSelects = document.querySelectorAll('.select')
allSelects.forEach(select => {
	select.addEventListener('change', e => {
		setGPA()
		changeColor(e.target)
	})
})

//2.使用switch case改變背景顏色
//(知識點:  case 'A' || 'A-' 並不起作用)

function changeColor(target) {
	switch (target.value) {
		case 'A':
		case 'A-':
			target.style.backgroundColor = 'lightgreen'
			target.style.color = 'black'
			break
		case 'B':
		case 'B+':
		case 'B-':
			target.style.backgroundColor = 'yellow'
			target.style.color = 'black'
			break
		case 'C+':
		case 'C':
		case 'C-':
			target.style.backgroundColor = 'orange'
			target.style.color = 'black'
			break
		case 'D+':
		case 'D':
		case 'D-':
			target.style.backgroundColor = 'red'
			target.style.color = 'black'
			break
		case 'F':
			target.style.backgroundColor = 'grey'
			target.style.color = 'white'
			break
	}
}
