import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PortfolioData from '../data';
import Modal from './model/Modal';

import 'react-tabs/style/react-tabs.css';

const Postfolio = () => {
	const [getModal, setGetModal] = useState(false);
	const [modalId, setModalId] = useState(1);

	const handleModal = (id) => {
		// console.log(id);
		setGetModal(true);
		setModalId(id);
	};
	return (
		<div className="portfolio">
			<div className="custom-container">
				<div className="portfolio__header">
					<h1 className="heading">works</h1>
					<h2 className="heading">
						<span className="white">my</span> portfolio
					</h2>
				</div>
				<Tabs>
					<TabList>
						<Tab>all</Tab>
						<Tab>logo</Tab>
						<Tab>video</Tab>
						<Tab>graphic design</Tab>
						<Tab>mockup</Tab>
					</TabList>

					<TabPanel>
						<div className="tab-container">
							{PortfolioData.map((item) => {
								const { id, type, image } = item;

								return (
									<div key={id}>
										<div className="tab-content" onClick={() => handleModal(id)}>
											<img src={image} alt="" />
											<h3>{type}</h3>
										</div>
									</div>
								);
							})}
						</div>
					</TabPanel>

					<TabPanel>
						<div className="tab-container">
							{PortfolioData.filter((item) => item.tag.includes('logo')).map((item) => {
								const { id, type, image } = item;
								// console.log(id);
								return (
									<div key={id}>
										<div className="tab-content" onClick={() => handleModal(id)}>
											<img src={image} alt="" />
											<h3>{type}</h3>
										</div>
										{/* {getModal && <Modal props={modalId} />} */}
									</div>
								);
							})}
						</div>
					</TabPanel>

					<TabPanel>
						<div className="tab-container">
							{PortfolioData.filter((item) => item.tag.includes('video')).map((item) => {
								const { id, type, image } = item;
								// console.log(id);
								return (
									<div key={id}>
										<div className="tab-content" onClick={() => handleModal(id)}>
											<img src={image} alt="" />
											<h3>{type}</h3>
										</div>
										{/* {getModal && <Modal props={modalId} />} */}
									</div>
								);
							})}
						</div>
					</TabPanel>

					<TabPanel>
						<div className="tab-container">
							{PortfolioData.filter((item) => item.tag.includes('graphic design')).map((item) => {
								const { id, type, image } = item;
								// console.log(id);
								return (
									<div key={id}>
										<div className="tab-content" onClick={() => handleModal(id)}>
											<img src={image} alt="" />
											<h3>{type}</h3>
										</div>
										{/* {getModal && <Modal props={modalId} />} */}
									</div>
								);
							})}
						</div>
					</TabPanel>

					<TabPanel>
						<div className="tab-container">
							{PortfolioData.filter((item) => item.tag.includes('mockup')).map((item) => {
								const { id, type, image } = item;
								// console.log(id);
								return (
									<div key={id}>
										<div className="tab-content" onClick={() => handleModal(id)}>
											<img src={image} alt="" />
											<h3>{type}</h3>
										</div>
										{/* {getModal && <Modal props={modalId} />} */}
									</div>
								);
							})}
						</div>
					</TabPanel>
				</Tabs>
			</div>

			{getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}
		</div>
	);
};

export default Postfolio;
