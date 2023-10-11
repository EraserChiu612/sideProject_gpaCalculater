//mergeSort

let descBtn = document.querySelector('.sort_desc')
let ascBtn = document.querySelector('.sort_asc')

descBtn.addEventListener('click', () => {
	handleSorting('desc') //descending 降序
})

ascBtn.addEventListener('click', () => {
	handleSorting('asc') //ascending 升序
})

function handleSorting(order) {
	let graders = document.querySelectorAll('.grade')
	let objectArray = []

	for (let i = 0; i < graders.length; i++) {
		let class_name = graders[i].children[0].value //class category
		let class_number = graders[i].children[1].value //class number
		let class_credit = graders[i].children[2].value //class credit
		let class_grade = graders[i].children[3].value //class grade

		if (
			!(
				class_name === '' &&
				class_number === '' &&
				class_credit === '' &&
				class_grade === ''
			)
		) {
			let class_object = {
				class_name, // class_name: class_name
				class_number,
				class_credit,
				class_grade,
			}
			objectArray.push(class_object)
		}
	}

	//取得objectArray後,把成績string轉換成數字
	for (let i = 0; i < objectArray.length; i++) {
		objectArray[i].class_grade_number = convertor(objectArray[i].class_grade)
	}

	objectArray = mergeSort(objectArray)
	if (order === 'desc') objectArray = objectArray.reverse()

	//根據排序結果,來更新網頁內容
	let allInputs = document.querySelector('.all_inputs')
	allInputs.innerHTML = ''

	for (let i = 0; i < objectArray.length; i++) {
		console.log(objectArray[i])
		allInputs.innerHTML += `
    <form>
    <div class="grade">
      <input
        type="text"
        placeholder="class category"
        class="class_type"
        list="opt"
        value=${objectArray[i].class_name}
      /><!--
      --><input type="text" placeholder="class number" class="class_number" value=${objectArray[i].class_number} /><!--
      --><input
        type="number"
        name="credits"
        min="0"
        max="6"
        class="class_credit"
        placeholder="credits"
        value=${objectArray[i].class_credit}
        
      /><!--
      --><select name="select" class="select">
        <option value=""></option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="D-">D-</option>
        <option value="F">F</option></select
      ><!--
      --><button class="trash_button">
        <i class="bi bi-trash3"></i>
      </button>
    </div>
  </form>`
	}

	//因為select的option是動態生成的,所以要重新綁定事件
	graders = document.querySelectorAll('.grade')
	for (let i = 0; i < graders.length; i++) {
		graders[i].children[3].value = objectArray[i].class_grade
	}

	// select事件監聽
	let allSelects = document.querySelectorAll('.select')
	allSelects.forEach(select => {
		changeColor(select)
		select.addEventListener('change', e => {
			setGPA()
			changeColor(e.target)
		})
	})

	// credit事件監聽
	let Credits = document.querySelectorAll('.class_credit')
	Credits.forEach(credit => {
		credit.addEventListener('change', e => {
			setGPA()
		})
	})

	// trash事件監聽
	let allTrashButtons = document.querySelectorAll('.trash_button')
	allTrashButtons.forEach(trashButton => {
		trashButton.addEventListener('click', e => {
			e.preventDefault()
			e.target.parentNode.parentNode.style.animation =
				'scaleDown .5s ease forwards'
			e.target.parentNode.parentNode.addEventListener('animationend', e => {
				e.target.remove()
				setGPA()
			})
		})
	})
}

function merge(a1, a2) {
	let result = []
	let i = 0
	let j = 0

	while (i < a1.length && j < a2.length) {
		if (a1[i].class_grade_number > a2[j].class_grade_number) {
			result.push(a2[j])
			j++
		} else {
			result.push(a1[i])
			i++
		}
	}

	while (i < a1.length) {
		result.push(a1[i])
		i++
	}
	while (j < a2.length) {
		result.push(a2[j])
		j++
	}

	return result
}

function mergeSort(arr) {
	if (arr.length == 0) return
	else if (arr.length == 1) return arr
	else {
		let middle = Math.floor(arr.length / 2)
		let left = arr.slice(0, middle)
		let right = arr.slice(middle, arr.length)
		return merge(mergeSort(left), mergeSort(right))
	}
}
