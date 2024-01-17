import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import FormModalNewSessionRoom from "@/components/Forms/FormModalNewSessionRoom";
import Link from "next/link";
import DotsMenu from "@/components/DotsMenu";

const SesionRooms = () => {
	return (
		<>
			<div className="pt-16 pb-5 px-5 h-screen w-screen">
				<div className="bg-gradient-to-r  from-indigo-600 to-sky-700 h-full rounded-lg p-1">
					<div className="bg-slate-700  h-full rounded-lg p-4  place-content-start overflow-scroll flex flex-col">
						{/* Comienzo Card */}
						<Link href="/sessionrooms/123">
							<div className="bg-white rounded-lg flex justify-between items-center mb-4">
								<GlobeAltIcon className="w-12 h-12 text-gray-500 grow-0" />
								<p className="ml-2 grow">Palacio de La Moneda</p>
								<div className="grow-0">
									<DotsMenu />
								</div>
							</div>
						</Link>
						<Link href="/sessionrooms/123">
							<div className="bg-white rounded-lg flex justify-between items-center mb-4">
								<GlobeAltIcon className="w-12 h-12 text-gray-500 grow-0" />
								<p className="ml-2 grow">Isla de Pascua</p>
								<div className="grow-0">
									<DotsMenu />
								</div>
							</div>
						</Link>
						<Link href="/sessionrooms/123">
							<div className="bg-white rounded-lg flex justify-between items-center mb-4">
								<GlobeAltIcon className="w-12 h-12 text-gray-500 grow-0" />
								<p className="ml-2 grow">Valparaiso</p>
								<div className="grow-0">
									<DotsMenu />
								</div>
							</div>
						</Link>
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
