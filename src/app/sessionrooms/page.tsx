import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import FormModalNewSessionRoom from "@/components/FormModalNewSessionRoom";

const SesionRooms = () => {
	return (
		<>
			<div className="pt-16 pb-5 px-5 h-screen">
				<div className="bg-gradient-to-r  from-indigo-600 to-sky-700 h-full rounded-lg p-1">
					<div className="bg-slate-700 w-full h-full rounded-lg p-4 grid grid-cols-3 gap-5 place-content-start  overflow-scroll">
						<div className="bg-white rounded-lg h-fit text-center flex flex-col items-center">
							<GlobeAltIcon className="h-20 w-20 text-gray-500 " />
							<p>NOMBRE JUEGO</p>
						</div>
						<div className="bg-white rounded-lg h-fit text-center flex flex-col items-center">
							<GlobeAltIcon className="h-20 w-20 text-gray-500" />
							<p>NOMBRE JUEGO</p>
						</div>
						<div className="bg-white rounded-lg h-fit text-center flex flex-col items-center">
							<GlobeAltIcon className="h-20 w-20 text-gray-500" />
							<p>NOMBRE JUEGO</p>
						</div>
						<div className="bg-white rounded-lg h-fit text-center flex flex-col items-center">
							<GlobeAltIcon className="h-20 w-20 text-gray-500" />
							<p>NOMBRE JUEGO</p>
						</div>
						<div className="bg-white rounded-lg h-fit text-center flex flex-col items-center">
							<GlobeAltIcon className="h-20 w-20 text-gray-500" />
							<p>NOMBRE JUEGO</p>
						</div>
						<div className="bg-white rounded-lg h-fit text-center flex flex-col items-center">
							<GlobeAltIcon className="h-20 w-20 text-gray-500" />
							<p>NOMBRE JUEGO</p>
						</div>
						<div className="bg-white rounded-lg h-fit text-center flex flex-col items-center">
							<GlobeAltIcon className="h-20 w-20 text-gray-500" />
							<p>NOMBRE JUEGO</p>
						</div>
						<div className="bg-white rounded-lg h-fit text-center flex flex-col items-center">
							<GlobeAltIcon className="h-20 w-20 text-gray-500" />
							<p>NOMBRE JUEGO</p>
						</div>
						<div className="bg-white rounded-lg h-fit text-center flex flex-col items-center">
							<GlobeAltIcon className="h-20 w-20 text-gray-500" />
							<p>NOMBRE JUEGO</p>
						</div>
					</div>
				</div>
				<div className="absolute inset-x-20 bottom-2 bg-gradient-to-r from-indigo-500 to-sky-500 text-center rounded-full ">
					<FormModalNewSessionRoom />
				</div>
			</div>
		</>
	);
};

export default SesionRooms;
