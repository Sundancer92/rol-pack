import React from "react";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import FormModalNewGame from "@/components/FormModalNewGame";
import DotsMenu from "@/components/DotsMenu";
import Link from "next/link";

const Characters = () => {
	return (
		<>
			<div className="pt-16 pb-5 px-5 h-screen">
				<div className="bg-gradient-to-r  from-indigo-600 to-sky-700 h-full rounded-lg p-1">
					<div className="bg-slate-700 w-full h-full rounded-lg p-4 grid gap-5 place-content-start overflow-scroll">
						{/* Comienzo Card */}
						<div className="bg-white rounded-lg h-fit flex justify-between">
							<Link
								href="/dashboard/games/123"
								className="flex items-center "
							>
								<CubeTransparentIcon className="h-20 w-20 text-gray-500 flex-none" />
								<p className="ml-2">Hombre Lobo: Salvaje Oeste</p>
							</Link>
							<div className="self-start m-0.5 z-9">
								{/* <EllipsisVerticalIcon className="h-6 w-6 text-gray-500" /> */}
								<DotsMenu />
							</div>
						</div>
						{/* Comienzo Card */}
						<div className="bg-white rounded-lg h-fit flex justify-between ">
							<Link
								href="/dashboard/games/123"
								className="flex items-center "
							>
								<CubeTransparentIcon className="h-20 w-20 text-gray-500 flex-none" />
								<p className="ml-2">Pokemon</p>
							</Link>
							<div className="self-start m-0.5 z-9">
								<DotsMenu />
							</div>
						</div>
					</div>
				</div>
				<div className="absolute inset-x-20 bottom-2 bg-gradient-to-r from-indigo-500 to-sky-500 text-center rounded-full ">
					<FormModalNewGame />
				</div>
			</div>
		</>
	);
};

export default Characters;
