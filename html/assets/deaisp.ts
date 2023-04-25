'use strict';

console.log(document.documentElement);

//スマホOS判定
(() => {
	const ua = navigator.userAgent;
	let html = document.getElementsByTagName('html');
	if (/android/i.test(ua)) {
		html[0].classList.add('android');
	} else if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
		html[0].classList.add('ios');
	} else {
		html[0].classList.add('pc');
	}
})();

//webp対応のブラウザ判別
(() => {
	let webp = new Image();
	webp.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAgA0JaQAA3AA/vuUAAA=';
	webp.addEventListener('load', () => {
		let html = document.getElementsByTagName('html');
		if (webp.width == 1) {
			html[0].classList.add('webp');
		} else {
			html[0].classList.add('no-webp');
		}
	});
})();

//動画監視 画面領域内で再生
(() => {
	let videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('.video');
	let intersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		for (let value of entries) {
			let elem = value.target as HTMLVideoElement;
			if (value.isIntersecting) {
				elem.play();
			} else {
				elem.pause();
			}
		}
	};
	let observer = () => {
		let obs: IntersectionObserver, h: number, m: number | string, rm: string, video: HTMLVideoElement;
		h = (window.innerHeight - window.innerWidth) / 2;
		m = h > 50 ? h : 100;
		rm = '-' + m + 'px 0px';
		let options: IntersectionObserverInit = {
			root: null,
			rootMargin: rm,
			threshold: 0,
		};
		obs = new IntersectionObserver(intersect, options);
		for (video of videos) {
			obs.observe(video);
		}
	};
	observer();
})();

// イベント発生時にclassのtoggle
(() => {
	let targets: NodeListOf<Element> = document.querySelectorAll('.classname');
	for (let value of targets) {
		'mouseover,mouseout'.split(',').forEach((eventName: string) => {
			value.addEventListener(eventName, (e: Event) => {
				if (e.target) {
					switch (e.type) {
						case 'mouseover':
							(e.target as Element).classList.remove('fadeOut');
							(e.target as Element).classList.add('fadeIn');
							break;
						case 'mouseout':
						default:
							(e.target as Element).classList.remove('fadeIn');
							(e.target as Element).classList.add('fadeOut');
							break;
					}
				}
			});
		});
	}
})();
