"use client";
import React, { useEffect, useState } from "react";
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

	useEffect(() => {
		// console.log(sessionInfo);
	}, [sessionInfo]);

	useEffect(() => {
		const initiatives = roster.map((character) => character.initiative);
		setSessionInfo({
			...sessionInfo,
			actionOrder: initiatives,
		});
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

	// useEffect(() => {
	// 	console.log("Funicono bien Effect actionOrder");
	// 	if (sessionInfo.actionOrder.length === 0) {
	// 		console.log("ActionOrder Length", sessionInfo.actionOrder.length);
	// 		setSessionInfo({
	// 			...sessionInfo,
	// 			round: sessionInfo.round + 1,
	// 		});
	// 	}
	// }, [sessionInfo.actionOrder]);

	// useEffect(() => {
	// 	let storedData = localStorage.getItem("rolpack");
	// 	if (storedData === null) {
	// 		return;
	// 	} else if (sessionInfo.round === 0) {
	// 		// Cargo los jugadores del localStorage.
	// 		const rolpackPlayers = JSON.parse(storedData);
	// 		// Ordeno a los jugadores de mayor a menos iniciativa.
	// 		const sortedCharacters = [...rolpackPlayers].sort(
	// 			(a, b) => b.initiative - a.initiative
	// 		);
	// 		// Consigo el valor de la iniciativa más alta.
	// 		// const highestInitiative = sortedCharacters.reduce(
	// 		// 	(maxInitiative, character) =>
	// 		// 		Math.max(maxInitiative, character.initiative),
	// 		// 	0
	// 		// );
	// 		// Entrego el atributo actions:1 a los jugadores con mayor iniciativa.
	// 		// const activePlayers = sortedCharacters.map((character) => {
	// 		// 	if (character.initiative == highestInitiative) {
	// 		// 		return {
	// 		// 			...character,
	// 		// 			active: true,
	// 		// 			actions: 1,
	// 		// 		};
	// 		// 	} else {
	// 		// 		return { ...character, active: false, actions: 0 };
	// 		// 	}
	// 		// });

	// 		setRoster(sortedCharacters);
	// 		const uniqueInitiatives = sortedCharacters.map(
	// 			(character) => character.initiative
	// 		);
	// 		const sortedUniqueInitiatives = uniqueInitiatives.sort(
	// 			(a, b) => b - a
	// 		);
	// 		setSessionInfo({
	// 			...sessionInfo,
	// 			initiativeList: sortedUniqueInitiatives,
	// 			actionOrder: sortedUniqueInitiatives,
	// 		});
	// 	} else {
	// 		// Cargo los jugadores del localStorage.
	// 		const rolpackPlayers = JSON.parse(storedData);
	// 		setRoster(rolpackPlayers);

	// 		const uniqueInitiatives = sortedCharacters.map(
	// 			(character) => character.initiative
	// 		);
	// 		const sortedUniqueInitiatives = uniqueInitiatives.sort(
	// 			(a, b) => b - a
	// 		);
	// 		setSessionInfo({
	// 			...sessionInfo,
	// 			initiativeList: sortedUniqueInitiatives,
	// 		});
	// 	}
	// }, [formInfo.refreshRosterTrigger]);

	// useEffect(() => {
	// 	console.log("Informacion de la SESION", sessionInfo);
	// }, [sessionInfo]);

	// useEffect(() => {
	// 	console.log("Modificando activeUsers");
	// }, [sessionInfo.activeUsers]);

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
