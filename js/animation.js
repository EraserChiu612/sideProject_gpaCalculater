let spaces = document.querySelector('.spaces')
let slider = document.querySelector('.slider')
let animation = document.querySelector('.animation-wrapper')

const time_line = new TimelineMax()

//params: element(控制對象), duration, {from} (原始狀態), {to} {(結束狀態), ease(動畫效果)}, delay(延遲時間.負的則提早執行)
time_line
	.fromTo(
		spaces,
		1,
		{ height: '0%' },
		{ height: '100%', ease: Power2.easeInOut }
	)
	.fromTo(
		spaces,
		1.2,
		{ width: '80%' },
		{ width: '100%', ease: Power2.easeInOut }
	)
	.fromTo(
		slider,
		1,
		{ x: '-100%' },
		{ x: '0%', ease: Power2.easeInOut },
		'-=1.2'
	)
	.fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 })

setTimeout(() => {
	animation.style.display = 'none'
}, 2500)
