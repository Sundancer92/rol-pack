import React from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import DotsMenu from "./DotsMenu";

const SessionCharacterCard = () => {
	return (
		<div className=" bg-gradient-to-r from-red-500 to-sky-500 rounded-2xl">
			<div className="bg-slate-400 rounded-2xl m-0.5">
				<div className="flex">
					{/* Imagen */}
					<div className="border-r-2 border-white w-fit ">
						<div className="mx-2">
							<PhotoIcon className="h-12 w-12 text-gray-500" />
						</div>
					</div>
					{/* Descripcion y acciones */}
					<div className="w-full">
						<div className="flex flex-row text-white justify-between mx-2 text-sm">
							<p>Eterno Acompanante</p>
							<div className="flex">
								<p>99</p>
								<DotsMenu />
							</div>
						</div>
						<hr className="my-0.5 h-0.5 bg-neutral-100 opacity-100 dark:opacity-50" />
						<div className="text-xs text-white mx-2">
							<p>El nombre del Equipo</p>
						</div>
						{/* BOTONES */}
						<div className="flex mt-3 text-xs text-center mb-2">
							<div className="bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl mx-auto ">
								<button className="m-0.5 bg-slate-50 rounded-2xl px-1">
									ACTUAR
								</button>
							</div>
							<div className="bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl mx-auto ">
								<button className="m-0.5 bg-slate-50 rounded-2xl px-1">
									ESPERAR
								</button>
							</div>
							<div className="bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl mx-auto ">
								<button className="m-0.5 bg-slate-50 rounded-2xl px-1">
									INCAPACITAR
								</button>
							</div>
							<div className="bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl mx-auto ">
								<button className="m-0.5 bg-slate-50 rounded-2xl px-1">
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
