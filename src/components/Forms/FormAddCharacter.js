"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition, Switch } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";

import { PlusCircleIcon } from "@heroicons/react/24/outline";

const FormAddCharacter = ({ formInfo, setFormInfo }) => {
	const [toggle, setToggle] = useState(false);
	const [newCharacter, setNewCharacter] = useState({
		id: uuidv4(),
		name: "",
		done: "",
		initiative: "",
		actions: 0,
		active: false,
		incapacitated: false,
		waiting: false,
		enemy: toggle,
	});

	// Me aseguro de que el formulario reconozca que el tipo es "Editar".
	useEffect(() => {
		if (formInfo.type === "Editar") {
			let storedData = JSON.parse(localStorage.getItem("rolpack"));
			let data = storedData.find((element) => element.id === formInfo.id);
			setNewCharacter(data);
		}
	}, [formInfo.type]);

	// Actualiza el objeto newCharacter con el nuevo valor de toggle
	useEffect(() => {
		setNewCharacter((prevCharacter) => ({
			...prevCharacter,
			enemy: toggle,
		}));
	}, [toggle]);

	// Le indica al formulario que será de tipo "Agregar" y no "Editar".
	const handleFormActions = () => {
		setFormInfo({
			...formInfo,
			isOpen: !formInfo.isOpen,
			type: "Agregar",
			id: "",
		});

		// console.log(formInfo);
	};

	// Limpio los campos luegos de crear un nuevo personaje.
	const handleReset = () => {
		setNewCharacter({
			id: uuidv4(),
			name: "",
			done: false,
			initiative: "",
			actions: 0,
			active: false,
			incapacitated: false,
			waiting: false,
			enemy: toggle,
		});
	};

	// Edito los campos de "newCharacter" para que reflejen los agregados por el usuario.
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewCharacter({
			...newCharacter,
			[name]: value,
		});
	};

	const handleCreateNewCharacter = () => {
		let storedData = localStorage.getItem("rolpack");
		let rolpackPlayers = [];
		setNewCharacter({
			...newCharacter,
			enemy: toggle,
		});

		if (storedData === null) {
			console.log("no hay data");
			rolpackPlayers = [newCharacter];
			localStorage.setItem("rolpack", JSON.stringify(rolpackPlayers));
		} else if (formInfo.type === "Agregar") {
			console.log("Agregando nuevo personaje....");
			rolpackPlayers = [...JSON.parse(storedData), newCharacter];
			localStorage.setItem("rolpack", JSON.stringify(rolpackPlayers));
		} else if (formInfo.type === "Editar") {
			console.log("Editando personaje....");
			rolpackPlayers = JSON.parse(storedData).filter(
				(element) => element.id !== formInfo.id
			);
			rolpackPlayers = [...rolpackPlayers, newCharacter];
			localStorage.setItem("rolpack", JSON.stringify(rolpackPlayers));
		}
		setFormInfo((prevFormInfo) => ({
			...formInfo,
			count: prevFormInfo.count + 1,
		}));

		handleReset();
	};

	const cancelButtonRef = useRef(null);
	return (
		<>
			<button
				type="button"
				onClick={() => handleFormActions()}
				className="mt-1"
			>
				<PlusCircleIcon className="h-6 w-6 text-white" />
			</button>
			<Transition.Root
				show={formInfo.isOpen}
				as={Fragment}
			>
				<Dialog
					as="div"
					className=" z-10 h-screen "
					initialFocus={cancelButtonRef}
					onClose={() => handleFormActions()}
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
														{formInfo.type}
														{toggle ? " Enemigo" : " Personaje"}
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
															PC or Enemy
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
															{/* Campos creación de personajes. */}
															<>
																<div className="grid grid-cols-1 text-start">
																	<p>Nombre:</p>
																	<input
																		name="name"
																		className="border-2 border-slate-600 rounded-md px-1"
																		type="text"
																		onChange={(e) =>
																			handleChange(e)
																		}
																		placeholder={
																			toggle
																				? "Ingresa un Enemigo."
																				: "Ingresa tu Aliado."
																		}
																		value={newCharacter.name}
																	/>
																</div>
																<div className="grid grid-cols-1  text-start">
																	<p>Iniciativa:</p>
																	<input
																		name="initiative"
																		className="border-2 border-slate-600 rounded-md px-1"
																		type="text"
																		onChange={(e) =>
																			handleChange(e)
																		}
																		placeholder="00"
																		value={
																			newCharacter.initiative
																		}
																	/>
																</div>
															</>
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
											{formInfo.type === "Agregar"
												? "Agregar"
												: "Editar"}
										</button>
										<button
											type="button"
											className="w-full justify-center rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
											onClick={() => handleFormActions()}
											ref={cancelButtonRef}
										>
											Cerrar
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

export default FormAddCharacter;
