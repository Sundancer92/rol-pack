"use client";
import React, { use, useEffect, useState } from "react";
import FormAddCharacter from "./Forms/FormAddCharacter";
import SessionCharacterCard from "./Cards/SessionCharacterCard";

const BattleRoomDesk = () => {
	const [roster, setRoster] = useState([]);
	const [sessionInfo, setSessionInfo] = useState({
		started: false,
		round: 0,
		activeUsers: [],
		waitingUsers: [],
		incapacitatedUsers: [],
		initiativeList: [],
		actionOrder: [],
	});
	const [formInfo, setFormInfo] = useState({
		isOpen: false,
		type: "",
		id: "",
		count: 0,
	});

	useEffect(() => {}, [sessionInfo]);

	useEffect(() => {
		const initiatives = roster.map((character) => character.initiative);

		if (sessionInfo.incapacitatedUsers.length > 0) {
			sessionInfo.incapacitatedUsers.map((user) => {
				console.log("Jugadores incapacitados", user);
				const userData = roster.filter((element) => element.id === user);
				console.log("DETALLE Jugadores incapacitados", userData);
				const initiativeToRemove = initiatives.indexOf(
					userData[0].initiative
				);
				console.log("initiativeToRemove", initiativeToRemove);
				const newActionOrder = initiatives;
				// Si initiativeToRemove encontró el valor y el personaje
				// es el primero en actuar, lo remueve del arreglo que sera el nuevo orden.
				if (initiativeToRemove !== -1) {
					newActionOrder.splice(initiativeToRemove, 1);
				}
				console.log("newActionOrder", newActionOrder);
				setSessionInfo({
					...sessionInfo,
					actionOrder: newActionOrder,
				});
			});
		} else {
			setSessionInfo({
				...sessionInfo,
				actionOrder: initiatives,
			});
		}
		console.log(sessionInfo);
	}, [sessionInfo.round]);

	useEffect(() => {
		let sortedCharacters = [];
		let rolpackData = JSON.parse(localStorage.getItem("rolpack"));
		if (sessionInfo.round === 0) {
			// Ordeno a los jugadores de mayor a menos iniciativa.
			if (rolpackData?.length > 0) {
				sortedCharacters = [...rolpackData].sort(
					(a, b) => b.initiative - a.initiative
				);
				setRoster(sortedCharacters);
				localStorage.setItem("rolpack", JSON.stringify(sortedCharacters));
			} else {
				setRoster(rolpackData);
			}
		} else if (sessionInfo.round > 0) {
			rolpackData = JSON.parse(localStorage.getItem("rolpack"));
			setRoster(rolpackData);
		}
		console.log(formInfo);
	}, [formInfo]);

	const handleStartBtn = () => {
		const rolpackStorage = JSON.parse(localStorage.getItem("rolpack"));
		if (rolpackStorage === null) {
			setFormInfo({
				...formInfo,
				type: "Agregar",
				isOpen: true,
			});
		} else {
			setSessionInfo({
				...sessionInfo,
				started: true,
				round: sessionInfo.round + 1,
			});
		}
	};

	return (
		<>
			<div className="flex flex-row text-white justify-between ">
				<div className="flex">
					<p>Ronda: {sessionInfo.round}</p>
				</div>
				{/* Si la sesion es 0 se muestra el boton.
					El boton solo estara habilitado si se agrego algun personaje
				*/}
				{sessionInfo.round === 0 ? (
					<button
						onClick={() => handleStartBtn()}
						disabled={formInfo.type === "" && roster === ""}
					>
						Empezar
					</button>
				) : (
					""
				)}
				<FormAddCharacter
					formInfo={formInfo}
					setFormInfo={setFormInfo}
				/>
			</div>
			<hr className="my-1 h-0.5 bg-neutral-100 opacity-100 " />
			{/* Character Card */}
			{roster?.map((item, index) => (
				<div key={item.id + item.name + item.initiative}>
					<SessionCharacterCard
						sessionInfo={sessionInfo}
						setSessionInfo={setSessionInfo}
						charData={item}
						formInfo={formInfo}
						setFormInfo={setFormInfo}
					/>
				</div>
			))}
		</>
	);
};

export default BattleRoomDesk;
