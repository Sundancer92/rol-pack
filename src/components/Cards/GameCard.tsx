import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import DotsMenu from "../DotsMenu";

interface Props {
	gameName: string;
	url: string;
}

const GameCard = ({ gameName, url }: Props) => {
	return (
		<Link
			href={`/dashboard/games/${url}`}
			className=" bg-white rounded-lg flex justify-between items-center mb-4"
		>
			<CubeTransparentIcon className="h-20 w-20 text-gray-500 grow-0" />
			<p className="ml-2 grow">{gameName}</p>
			<div className="grow-0">
				<DotsMenu />
			</div>
		</Link>
	);
};

export default GameCard;
