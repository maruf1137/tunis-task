import React from 'react';
import img1 from '../../img/project-1.jpg';
import img2 from '../../img/project-2.jpg';
import CloseImg from '../../img/close-button.png';
import PortfolioData from '../../data';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Modal = ({ modalId, setGetModal }) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
	};
	// console.log(modalId);
	if (modalId === 1) {
		return (
			<div className="modal">
				<div className="modal__outside" onClick={() => setGetModal(false)}></div>
				<div className="modal__content">
					{PortfolioData.filter((item) => item.id === modalId).map((item) => {
						console.log(item);
						return (
							<div key={item.id}>
								<h2 className="heading mb-2">{item.title}</h2>
								<div className="modal__details">
									{item.modalDetails.map((details, index) => {
										return (
											<div key={index}>
												<p className="text">
													project : <span className="bold">{details.project}</span>
												</p>
												<p className="text">
													client : <span className="bold">{details.client}</span>
												</p>
												<p className="text">
													language : <span className="bold">{details.language}</span>
												</p>
												<p className="text">
													preview :{' '}
													<a className="preview-link" href="https://www.envato.com/">
														{details.preview}
													</a>
												</p>
											</div>
										);
									})}
								</div>
								<figure className="modal__img">
									<img src={item.image} alt="" />
								</figure>

								<button className="close-modal" onClick={() => setGetModal(false)}>
									<img src={CloseImg} alt="" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else if (modalId === 2) {
		return (
			<div className="modal">
				<div className="modal__outside" onClick={() => setGetModal(false)}></div>
				<div className="modal__content">
					{PortfolioData.filter((item) => item.id === modalId).map((item) => {
						// console.log(item);
						return (
							<div key={item.id}>
								<h2 className="heading mb-2">{item.title}</h2>
								<div className="modal__details">
									{item.modalDetails.map((details, index) => {
										return (
											<div key={index}>
												<p className="text">
													project : <span className="bold">{details.project}</span>
												</p>
												<p className="text">
													client : <span className="bold">{details.client}</span>
												</p>
												<p className="text">
													language : <span className="bold">{details.language}</span>
												</p>
												<p className="text">
													preview :{' '}
													<a className="preview-link" href="https://videohive.net/">
														{details.preview}
													</a>
												</p>
											</div>
										);
									})}
								</div>
								<figure className="modal__img">
									<iframe
										src="https://www.youtube.com/embed/7e90gBu4pas"
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								</figure>

								<button className="close-modal" onClick={() => setGetModal(false)}>
									<img src={CloseImg} alt="" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else if (modalId === 3) {
		return (
			<div className="modal">
				<div className="modal__outside" onClick={() => setGetModal(false)}></div>
				<div className="modal__content">
					{PortfolioData.filter((item) => item.id === modalId).map((item) => {
						return (
							<div key={item.id}>
								<h2 className="heading mb-2">{item.title}</h2>
								<div className="modal__details">
									{item.modalDetails.map((details, index) => {
										return (
											<div key={index}>
												<p className="text">
													project : <span className="bold">{details.project}</span>
												</p>
												<p className="text">
													client : <span className="bold">{details.client}</span>
												</p>
												<p className="text">
													language : <span className="bold">{details.language}</span>
												</p>
												<p className="text">
													preview :{' '}
													<a className="preview-link" href="https://www.envato.com">
														{details.preview}
													</a>
												</p>
											</div>
										);
									})}
								</div>
								<figure className="modal__img">
									<Slider {...settings}>
										<div>
											<img src={item.image} alt="" />
										</div>
										<div>
											<img src={img1} alt="" />
										</div>
										<div>
											<img src={img2} alt="" />
										</div>
									</Slider>
								</figure>

								<button className="close-modal" onClick={() => setGetModal(false)}>
									<img src={CloseImg} alt="" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else if (modalId === 4) {
		return (
			<div className="modal">
				<div className="modal__outside" onClick={() => setGetModal(false)}></div>
				<div className="modal__content">
					{PortfolioData.filter((item) => item.id === modalId).map((item) => {
						// console.log(item);
						return (
							<div key={item.id}>
								<h2 className="heading mb-2">{item.title}</h2>
								<div className="modal__details">
									{item.modalDetails.map((details, index) => {
										return (
											<div key={index}>
												<p className="text">
													project : <span className="bold">{details.project}</span>
												</p>
												<p className="text">
													client : <span className="bold">{details.client}</span>
												</p>
												<p className="text">
													language : <span className="bold">{details.language}</span>
												</p>
												<p className="text">
													preview :{' '}
													<a className="preview-link" href="https://videohive.net">
														{details.preview}
													</a>
												</p>
											</div>
										);
									})}
								</div>
								<figure className="modal__img">
									{/* <img src={item.image} alt="" /> */}
									<video id="video" className="responsive-video" controls poster={item.image}>
										<source
											src="https://tunis.ibthemespro.com/img/projects/video.mp4"
											type="video/mp4"
										/>
										{/* <source src="img/" type="video/mp4" /> */}
									</video>
								</figure>

								<button className="close-modal" onClick={() => setGetModal(false)}>
									<img src={CloseImg} alt="" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else if (modalId === 5) {
		return (
			<div className="modal">
				<div className="modal__outside" onClick={() => setGetModal(false)}></div>
				<div className="modal__content">
					{PortfolioData.filter((item) => item.id === modalId).map((item) => {
						// console.log(item);
						return (
							<div key={item.id}>
								<h2 className="heading mb-2">{item.title}</h2>
								<div className="modal__details">
									{item.modalDetails.map((details, index) => {
										return (
											<div key={index}>
												<p className="text">
													project : <span className="bold">{details.project}</span>
												</p>
												<p className="text">
													client : <span className="bold">{details.client}</span>
												</p>
												<p className="text">
													language : <span className="bold">{details.language}</span>
												</p>
												<p className="text">
													preview :{' '}
													<a className="preview-link" href="https://www.envato.com">
														{details.preview}
													</a>
												</p>
											</div>
										);
									})}
								</div>
								<figure className="modal__img">
									<img src={item.image} alt="" />
								</figure>

								<button className="close-modal" onClick={() => setGetModal(false)}>
									<img src={CloseImg} alt="" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else if (modalId === 6) {
		return (
			<div className="modal">
				<div className="modal__outside" onClick={() => setGetModal(false)}></div>
				<div className="modal__content">
					{PortfolioData.filter((item) => item.id === modalId).map((item) => {
						return (
							<div key={item.id}>
								<h2 className="heading mb-2">{item.title}</h2>
								<div className="modal__details">
									{item.modalDetails.map((details, index) => {
										return (
											<div key={index}>
												<p className="text">
													project : <span className="bold">{details.project}</span>
												</p>
												<p className="text">
													client : <span className="bold">{details.client}</span>
												</p>
												<p className="text">
													language : <span className="bold">{details.language}</span>
												</p>
												<p className="text">
													preview :{' '}
													<a className="preview-link" href="https://www.pexels.com">
														{details.preview}
													</a>
												</p>
											</div>
										);
									})}
								</div>
								<figure className="modal__img">
									<img src={item.image} alt="" />
								</figure>

								<button className="close-modal" onClick={() => setGetModal(false)}>
									<img src={CloseImg} alt="" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else if (modalId === 7) {
		return (
			<div className="modal">
				<div className="modal__outside" onClick={() => setGetModal(false)}></div>
				<div className="modal__content">
					{PortfolioData.filter((item) => item.id === modalId).map((item) => {
						return (
							<div key={item.id}>
								<h2 className="heading mb-2">{item.title}</h2>
								<div className="modal__details">
									{item.modalDetails.map((details, index) => {
										return (
											<div key={index}>
												<p className="text">
													project : <span className="bold">{details.project}</span>
												</p>
												<p className="text">
													client : <span className="bold">{details.client}</span>
												</p>
												<p className="text">
													language : <span className="bold">{details.language}</span>
												</p>
												<p className="text">
													preview :{' '}
													<a className="preview-link" href="https://www.facebook.com">
														{details.preview}
													</a>
												</p>
											</div>
										);
									})}
								</div>
								<figure className="modal__img">
									<img src={item.image} alt="" />
								</figure>

								<button className="close-modal" onClick={() => setGetModal(false)}>
									<img src={CloseImg} alt="" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else if (modalId === 8) {
		return (
			<div className="modal">
				<div className="modal__outside" onClick={() => setGetModal(false)}></div>
				<div className="modal__content">
					{PortfolioData.filter((item) => item.id === modalId).map((item) => {
						return (
							<div key={item.id}>
								<h2 className="heading mb-2">{item.title}</h2>
								<div className="modal__details">
									{item.modalDetails.map((details, index) => {
										return (
											<div key={index}>
												<p className="text">
													project : <span className="bold">{details.project}</span>
												</p>
												<p className="text">
													client : <span className="bold">{details.client}</span>
												</p>
												<p className="text">
													language : <span className="bold">{details.language}</span>
												</p>
												<p className="text">
													preview :{' '}
													<a className="preview-link" href="https://dribbble.com">
														{details.preview}
													</a>
												</p>
											</div>
										);
									})}
								</div>
								<figure className="modal__img">
									<img src={item.image} alt="" />
								</figure>

								<button className="close-modal" onClick={() => setGetModal(false)}>
									<img src={CloseImg} alt="" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	} else if (modalId === 9) {
		return (
			<div className="modal">
				<div className="modal__outside" onClick={() => setGetModal(false)}></div>
				<div className="modal__content">
					{PortfolioData.filter((item) => item.id === modalId).map((item) => {
						return (
							<div key={item.id}>
								<h2 className="heading mb-2">{item.title}</h2>
								<div className="modal__details">
									{item.modalDetails.map((details, index) => {
										return (
											<div key={index}>
												<p className="text">
													project : <span className="bold">{details.project}</span>
												</p>
												<p className="text">
													client : <span className="bold">{details.client}</span>
												</p>
												<p className="text">
													language : <span className="bold">{details.language}</span>
												</p>
												<p className="text">
													preview :{' '}
													<a className="preview-link" href="https://www.behance.net">
														{details.preview}
													</a>
												</p>
											</div>
										);
									})}
								</div>
								<figure className="modal__img">
									<img src={item.image} alt="" />
								</figure>

								<button className="close-modal" onClick={() => setGetModal(false)}>
									<img src={CloseImg} alt="" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};

export default Modal;
