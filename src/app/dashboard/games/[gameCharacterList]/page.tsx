import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import FormModalNewCharacter from "@/components/Forms/FormModalNewCharacter";
import DotsMenu from "@/components/DotsMenu";

const GamePage = () => {
	return (
		<div className="pt-16 pb-5 px-5 h-screen w-screen">
			<div className="bg-gradient-to-r  from-indigo-600 to-sky-700 h-full rounded-lg p-1">
				<div className="bg-slate-700  h-full rounded-lg p-4  place-content-start overflow-scroll flex flex-col">
					{/* Comienzo Card */}

					<div className="bg-white rounded-lg flex justify-between items-center mb-4">
						<UserCircleIcon className="w-12 h-12 text-gray-500 grow-0" />
						<p className="ml-2 grow">Nuevo Amanecer</p>
						<div className="grow-0">
							<DotsMenu />
						</div>
					</div>
					<div className="bg-white rounded-lg flex justify-between items-center">
						<UserCircleIcon className="w-12 h-12 text-gray-500 " />
						<p className="ml-2 grow">Eterno Acompañante</p>
						<div className="grow-0">
							<DotsMenu />
						</div>
					</div>
				</div>

				<div className="absolute inset-x-20 bottom-2 bg-gradient-to-r from-indigo-500 to-sky-500 text-center rounded-full ">
					<FormModalNewCharacter />
				</div>
			</div>
		</div>
	);
};

export default GamePage;
