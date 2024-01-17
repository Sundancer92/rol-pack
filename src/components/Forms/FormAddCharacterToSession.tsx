"use client";
import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition, Switch } from "@headlessui/react";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import FormSelectField from "./FormSelectField";

const games = [
	{ id: 1, name: "Hombre Lobo: Apocalipsis", unavailable: false },
	{ id: 2, name: "Pokemon", unavailable: false },
	{ id: 3, name: "Avatar", unavailable: false },
	{ id: 5, name: "Cyberpunk: 2077", unavailable: false },
];
const characters = [
	{ id: 1, name: "Nuevo Amanecer", unavailable: false },
	{ id: 2, name: "Velkan", unavailable: false },
	{ id: 3, name: "Eterno Acompanante", unavailable: false },
	{ id: 5, name: "May", unavailable: false },
];

const FormAddCharacterToSession = () => {
	const [toggle, setToggle] = useState(false);
	const [open, setOpen] = useState(true);
	const [selectedGame, setSelectedGame] = useState(games[0]);
	const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
	const [newCharacter, setNewCharacter] = useState({
		newName: "",
		newInitiativeOne: 0,
		newInitiativeTwo: 0,
		newInitiativeThree: 0,
		game: selectedGame.id,
	});

	const cancelButtonRef = useRef(null);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setNewCharacter({
			...newCharacter,
			[name]: value,
		});
	};

	const handleCreateNewCharacter = () => {
		setNewCharacter({
			...newCharacter,
			game: selectedGame.id,
		});
		console.log(newCharacter);
		setOpen(!open);
	};

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="mt-1"
			>
				<PlusCircleIcon className="h-6 w-6 text-white" />
			</button>
			<Transition.Root
				show={open}
				as={Fragment}
			>
				<Dialog
					as="div"
					className=" z-10 h-screen "
					initialFocus={cancelButtonRef}
					onClose={setOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
					</Transition.Child>

					<div className="fixed top-5 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
									<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
										<div className="sm:flex ">
											<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left justify-center ">
												<div className="flex w-full justify-between">
													<Dialog.Title
														as="h3"
														className="text-base font-semibold leading-6 text-gray-900
														"
													>
														Add
														{toggle ? " NPC" : " Character"}
													</Dialog.Title>
													<Switch
														checked={toggle}
														onChange={setToggle}
														className={`${
															toggle
																? "bg-blue-600"
																: "bg-green-600"
														} relative inline-flex h-6 w-11 items-center rounded-full ml-2 `}
													>
														<span className="sr-only">
															PC or NPC
														</span>
														<span
															className={`${
																toggle
																	? "translate-x-6"
																	: "translate-x-1"
															} inline-block h-4 w-4 transform rounded-full bg-white transition`}
														/>
													</Switch>
												</div>
												<div className="mt-2">
													<form action="">
														<div className="grid grid-rows-2 gap-2">
															<div className="grid grid-cols-1 text-start">
																<p>Game:</p>
																<FormSelectField
																	selectedItem={selectedGame}
																	setSelectedItem={
																		setSelectedGame
																	}
																	list={games}
																/>
															</div>
															<div className="grid grid-cols-1  text-start">
																<p>Character:</p>
																<FormSelectField
																	selectedItem={
																		selectedCharacter
																	}
																	setSelectedItem={
																		setSelectedCharacter
																	}
																	list={games}
																/>
															</div>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
									<div className="bg-gray-50 px-4 py-3 flex">
										<button
											type="button"
											className="w-full justify-center rounded-md bg-gradient-to-r from-indigo-500 to-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm"
											onClick={() => handleCreateNewCharacter()}
										>
											Add
										</button>
										<button
											type="button"
											className="w-full justify-center rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
											onClick={() => setOpen(false)}
											ref={cancelButtonRef}
										>
											Cancel
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};

export default FormAddCharacterToSession;
