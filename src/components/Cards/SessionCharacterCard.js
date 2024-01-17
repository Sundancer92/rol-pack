"use client";
import React, { useEffect, useState } from "react";
import DotsMenu from "../DotsMenu";

const SessionCharacterCard = ({
	formInfo,
	setFormInfo,
	charData,
	sessionInfo,
	setSessionInfo,
}) => {
	const [myInfo, setMyInfo] = useState(charData);

	// useEffect(() => {}, [myInfo]);

	useEffect(() => {
		let imActiveActionList = sessionInfo.actionOrder[0] === myInfo.initiative;
		let imActiveUsers = sessionInfo.activeUsers.includes(myInfo.id);
		if (
			sessionInfo.activeUsers.length === 0 &&
			sessionInfo.actionOrder.length === 0
		) {
			setMyInfo({
				...myInfo,
				active: false,
				done: false,
			});
		}
		if (
			myInfo.active === false &&
			imActiveActionList === true &&
			imActiveUsers === false &&
			myInfo.done === false
		) {
			setMyInfo({
				...myInfo,
				active: true,
				actions: 1,
			});
			setSessionInfo((prevSessionInfo) => ({
				...sessionInfo,
				activeUsers: [...prevSessionInfo.activeUsers, myInfo.id],
			}));
		}
	}, [sessionInfo]);

	useEffect(() => {
		if (myInfo.actions === 0 && myInfo.active) {
			setMyInfo({
				...myInfo,
				active: false,
				done: true,
			});

			const initiativeToRemove = sessionInfo.actionOrder.indexOf(
				myInfo.initiative
			);
			const newActionOrder = sessionInfo.actionOrder;
			if (initiativeToRemove !== -1) {
				newActionOrder.splice(initiativeToRemove, 1);
			}

			const idToRemove = sessionInfo.activeUsers.indexOf(myInfo.id);

			const newActiveUsers = sessionInfo.activeUsers;
			if (idToRemove !== -1) {
				newActiveUsers.splice(idToRemove, 1);
			}

			setSessionInfo({
				...sessionInfo,
				actionOrder: newActionOrder,
				activeUsers: newActiveUsers,
			});

			if (
				sessionInfo.activeUsers.length === 0 &&
				sessionInfo.actionOrder.length === 0
			) {
				setSessionInfo((prevSessionInfo) => ({
					...sessionInfo,
					round: prevSessionInfo.round + 1,
				}));
			}
		}
	}, [myInfo.actions]);

	// useEffect(() => {
	// 	if (myInfo.active === true) {
	// 		console.log("Agregandome a activeUsers", myInfo.name);
	// 		setSessionInfo({
	// 			...sessionInfo,
	// 			activeUsers: [...sessionInfo.activeUsers, myInfo.id],
	// 		});
	// 	}
	// }, []);

	// useEffect(() => {
	// 	if (
	// 		myInfo.initiative === sessionInfo.actionOrder[0] &&
	// 		sessionInfo.activeUsers.length === 0
	// 	) {
	// 		setMyInfo({
	// 			...myInfo,
	// 			actions: 1,
	// 			active: true,
	// 		});
	// 	}
	// }, [sessionInfo.actionOrder]);

	// useEffect(() => {
	// 	const isUserActive = sessionInfo.activeUsers.includes(myInfo.id);
	// 	const isUserWaiting = sessionInfo.waitingUsers.includes(myInfo.id);

	// 	// Agrega el ID del personaje a la lista de Usuarios Activos
	// 	if (
	// 		myInfo.active === true &&
	// 		myInfo.actions > 0 &&
	// 		isUserActive === false
	// 	) {
	// 		console.log(
	// 			"Agrega el ID del personaje a la lista de Usuarios Activos"
	// 		);
	// 		setSessionInfo((prevSessionInfo) => ({
	// 			...sessionInfo,
	// 			activeUsers: [...prevSessionInfo.activeUsers, myInfo.id],
	// 		}));
	// 	}
	// 	// Agrega el ID del personaje a la lista de Usuarios en Espera.
	// 	if (myInfo.active === true && myInfo.waiting === true) {
	// 		let removedActiveId = sessionInfo.activeUsers;
	// 		removedActiveId = removedActiveId.filter(
	// 			(element) => element !== myInfo.id
	// 		);
	// 		setSessionInfo((prevSessionInfo) => ({
	// 			...sessionInfo,
	// 			waitingUsers: [...prevSessionInfo.waitingUsers, myInfo.id],
	// 			activeUsers: removedActiveId,
	// 		}));
	// 	}
	// 	// Remueve el estado "activo" de la tarjeta y de la sesion.
	// 	if (myInfo.actions === 0 && isUserActive === true) {
	// 		let removedActiveId = sessionInfo.activeUsers;
	// 		removedActiveId = removedActiveId.filter(
	// 			(element) => element !== myInfo.id
	// 		);
	// 		setSessionInfo({
	// 			...sessionInfo,
	// 			activeUsers: removedActiveId,
	// 		});
	// 		setMyInfo({
	// 			...myInfo,
	// 			active: false,
	// 		});

	// 		const oldOrder = sessionInfo.actionOrder;
	// 		const newOrder = oldOrder.filter(
	// 			(element, index) => index !== oldOrder.indexOf(myInfo.initiative)
	// 		);
	// 		setSessionInfo({
	// 			...sessionInfo,
	// 			actionOrder: newOrder,
	// 		});
	// 	}
	// 	//Remueve el estado "waiting" de la tarjeta y de la sesion.
	// 	if (
	// 		(myInfo.actions === 0 && myInfo.waiting === true) ||
	// 		isUserWaiting === true
	// 	) {
	// 		setMyInfo({
	// 			...myInfo,
	// 			waiting: false,
	// 		});

	// 		let removedWaitingId = sessionInfo.waitingUsers;
	// 		removedWaitingId = removedWaitingId.filter(
	// 			(element) => element !== myInfo.id
	// 		);

	// 		setSessionInfo(() => ({
	// 			...sessionInfo,
	// 			waitingUsers: removedWaitingId,
	// 		}));
	// 	}
	// }, [myInfo.actions, myInfo.waiting]);

	const startRounds = () => {
		if (sessionInfo.round === 0) {
			setSessionInfo({
				...sessionInfo,
				round: 1,
			});
		}
	};

	const handleActionBtn = () => {
		setMyInfo({
			...myInfo,
			active: true,
			actions: myInfo.actions + 1,
		});
	};
	const handleWaitBtn = () => {
		setMyInfo({
			...myInfo,
			waiting: true,
		});
	};
	const handleIncapacitateBtn = () => {
		setMyInfo({
			...myInfo,
			actions: 0,
			waiting: false,
			incapacitated: true,
		});
	};
	const handleEndTurnBtn = () => {
		setMyInfo({
			...myInfo,
			actions: myInfo.actions - 1,
		});
	};

	return (
		<div className=" bg-gradient-to-r from-red-500 to-sky-500 rounded-2xl">
			<div
				className={`${
					myInfo.active
						? "bg-gradient-to-r from-green-700 to-sky-500"
						: "bg-slate-400"
				} rounded-2xl m-0.5`}
			>
				<div className="flex">
					{/* Imagen */}
					{/* <div className="border-r-2 border-white w-fit ">
						<div className="mx-2">
							<PhotoIcon className="h-12 w-12 text-gray-500" />
						</div>
					</div> */}
					{/* Descripcion y acciones */}
					<div className="w-full">
						<div className="flex flex-row text-white justify-between ml-4 mt-1 text-sm">
							<div>
								<p>{myInfo.name}</p>
								{myInfo.actions > 0 && (
									<p className="px-1  mx-auto bg-yellow-400 rounded-lg">
										Acciones: {myInfo.actions}
									</p>
								)}
							</div>
							<div className="flex">
								<p>{myInfo.initiative}</p>
								<DotsMenu
									setFormInfo={setFormInfo}
									formInfo={formInfo}
									charData={charData}
								/>
							</div>
						</div>
						<hr className="my-0.5 h-0.5 bg-neutral-100 opacity-100 dark:opacity-50" />
						{/* <div className="text-xs text-white mx-2">
							<p>El nombre del Equipo</p>
						</div> */}
						{/* BOTONES */}
						<div className="flex flex-wrap mt-2 text-xs text-center mb-2">
							<div className="bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl mx-auto ">
								<button
									onClick={() => handleActionBtn()}
									className="m-0.5 bg-slate-50 rounded-2xl px-1"
								>
									ACTUAR
								</button>
							</div>
							<div className="bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl mx-auto ">
								<button
									onClick={() => handleWaitBtn()}
									className="m-0.5 bg-slate-50 rounded-2xl px-1"
									disabled={!myInfo.active}
								>
									ESPERAR
								</button>
							</div>
							<div className="bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl mx-auto ">
								<button
									onClick={() => handleIncapacitateBtn()}
									className="m-0.5 bg-slate-50 rounded-2xl px-1"
								>
									INCAPACITAR
								</button>
							</div>
							<div className="bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl mx-auto ">
								<button
									onClick={() => handleEndTurnBtn()}
									className="m-0.5 bg-slate-50 rounded-2xl px-1"
									disabled={!myInfo.active}
								>
									TERMINAR
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SessionCharacterCard;
