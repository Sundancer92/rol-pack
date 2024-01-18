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

	useEffect(() => {
		console.log(myInfo);
	}, [myInfo]);

	useEffect(() => {
		let imActiveActionList = sessionInfo.actionOrder[0] === myInfo.initiative;
		let imActiveUsers = sessionInfo.activeUsers.includes(myInfo.id);
		// Reviso los arreglos de actionOrder y activeUsers, si están vacios, seteo a todos en false para administrar
		// la nueva ronda.
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
		// Como el estado en sessionInfo cambió, reviso el estado del personaje para que se enceuntra activo y
		// pueda actuar.
		if (
			myInfo.active === false &&
			imActiveActionList === true &&
			imActiveUsers === false &&
			myInfo.done === false &&
			myInfo.incapacitated === false
		) {
			setMyInfo({
				...myInfo,
				active: true,
				actions: 1,
				waiting: false,
			});
			setSessionInfo((prevSessionInfo) => ({
				...sessionInfo,
				activeUsers: [...prevSessionInfo.activeUsers, myInfo.id],
			}));
		}
	}, [sessionInfo]);

	useEffect(() => {
		let imActiveActionList = sessionInfo.actionOrder[0] === myInfo.initiative;
		if (myInfo.actions === 0 && myInfo.active) {
			if (imActiveActionList) {
				setMyInfo({
					...myInfo,
					active: false,
					done: true,
				});
			} else {
				setMyInfo({
					...myInfo,
					active: false,
					done: false,
				});
			}

			// Bloque para remover la iniciativa de actionOder
			const initiativeToRemove = sessionInfo.actionOrder.indexOf(
				myInfo.initiative
			);
			const newActionOrder = sessionInfo.actionOrder;
			// Si initiativeToRemove encontró el valor y el personaje
			// es el primero en actuar, lo remueve del arreglo que sera el nuevo orden.
			if (initiativeToRemove !== -1 && imActiveActionList) {
				newActionOrder.splice(initiativeToRemove, 1);
			}
			// Bloque para remover el ID del personaje de la lista de jugadores activos.
			const idToRemove = sessionInfo.activeUsers.indexOf(myInfo.id);
			const newActiveUsers = sessionInfo.activeUsers;
			// Si initiativeToRemove encontró el valor y el personaje, lo remueve del arreglo.
			if (idToRemove !== -1) {
				newActiveUsers.splice(idToRemove, 1);
			}

			// Se actualizará la data de sessionInfo
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
		if (myInfo.incapacitated === false) {
			console.log("entro al if");
			setMyInfo({
				...myInfo,
				actions: 0,
				waiting: false,
				incapacitated: true,
			});

			const initiativeToRemove = sessionInfo.actionOrder.indexOf(
				myInfo.initiative
			);
			const newActionOrder = sessionInfo.actionOrder;
			// Si initiativeToRemove encontró el valor y el personaje
			// es el primero en actuar, lo remueve del arreglo que sera el nuevo orden.
			if (initiativeToRemove !== -1) {
				newActionOrder.splice(initiativeToRemove, 1);
			}

			setSessionInfo((prevSessionInfo) => ({
				...sessionInfo,
				incapacitatedUsers: [
					...prevSessionInfo.incapacitatedUsers,
					myInfo.id,
				],
				actionOrder: newActionOrder,
			}));

			// Insertar logica para remover de la lista de incapacitados.
		} else if (myInfo.incapacitated) {
			console.log("entro al false");
			setMyInfo({
				...myInfo,
				incapacitated: false,
			});

			// Bloque para remover el ID del personaje de la lista de jugadores activos.
			const idToRemove = sessionInfo.incapacitatedUsers.indexOf(myInfo.id);
			const newIncapacitatedUsers = sessionInfo.incapacitatedUsers;
			// Si initiativeToRemove encontró el valor y el personaje, lo remueve del arreglo.
			if (idToRemove !== -1) {
				newIncapacitatedUsers.splice(idToRemove, 1);
			}

			setSessionInfo({
				...sessionInfo,
				incapacitatedUsers: newIncapacitatedUsers,
			});
		}
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
									disabled={sessionInfo.round === 0}
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
									disabled={sessionInfo.round === 0}
								>
									{myInfo.incapacitated ? "DESPERTAR" : "INCAPACITAR"}
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
