import Image1 from './img/project-1.jpg';
import Image2 from './img/project-2.jpg';
import Image3 from './img/project-3.jpg';
import Image4 from './img/project-4.jpg';
import Image5 from './img/project-5.jpg';
import Image6 from './img/project-6.jpg';
import Image7 from './img/project-7.jpg';
import Image8 from './img/project-8.jpg';
import Image9 from './img/project-9.jpg';

const PortfolioData = [
	{
		id: 1,
		type: 'mockup project',
		title: 'image project',
		image: Image1,
		tag: ['mockup'],
		modalDetails: [
			{
				project: 'Website',
				client: 'Envato',
				language: 'HTML, CSS, Javascript',
				preview: 'https.envato.com',
			},
		],
	},
	{
		id: 2,
		type: 'youtube project',
		title: 'youtube project',
		image: Image2,
		tag: ['video'],
		modalDetails: [
			{
				project: 'video',
				client: 'Videohive',
				language: ' Adobe After Effects',
				preview: 'www.videohive.net',
			},
		],
	},
	{
		id: 3,
		type: 'slider project',
		title: 'slider project',
		image: Image3,
		tag: [],
		modalDetails: [
			{
				project: 'Website',
				client: 'Themeforest',
				language: ' HTML, CSS, Javascript',
				preview: 'www.envato.com',
			},
		],
	},
	{
		id: 4,
		type: 'local project',
		title: 'LOCAL VIDEO PROJECT',
		image: Image4,
		tag: ['logo', 'video'],
		modalDetails: [
			{
				project: 'video',
				client: 'Videohive',
				language: ' Adobe After Effects',
				preview: 'www.videohive.net',
			},
		],
	},
	{
		id: 5,
		type: 'saas project',
		title: 'SAAS APP project',
		image: Image5,
		tag: ['logo'],
		modalDetails: [
			{
				project: 'Website',
				client: 'Themeforest',
				language: 'HTML, CSS, Javascript',
				preview: 'www.envato.com',
			},
		],
	},
	{
		id: 6,
		type: 'mockup project',
		title: 'image project',
		image: Image6,
		tag: ['logo', 'mockup'],
		modalDetails: [
			{
				project: 'Website',
				client: 'Themeforest',
				language: 'HTML, CSS, Javascript',
				preview: ' www.pexels.com',
			},
		],
	},
	{
		id: 7,
		type: 'facebook project',
		title: 'facebook project',
		image: Image7,
		tag: ['logo'],
		modalDetails: [
			{
				project: 'Website',
				client: 'Facebook',
				language: 'HTML, CSS, Javascript',
				preview: 'www.facebook.com',
			},
		],
	},
	{
		id: 8,
		type: 'dribble project',
		title: 'dribble profile',
		image: Image8,
		tag: ['graphic design'],
		modalDetails: [
			{
				project: 'Website',
				client: 'Dribbble',
				language: 'HTML, CSS, Javascript',
				preview: 'www.dribbble.com',
			},
		],
	},
	{
		id: 9,
		type: 'behence project',
		title: 'behence profile',
		image: Image9,
		tag: ['graphic design', 'mockup'],
		modalDetails: [
			{
				project: 'Website',
				client: 'Behance',
				language: 'HTML, CSS, Javascript',
				preview: 'www.behance.com',
			},
		],
	},
];

export default PortfolioData;
