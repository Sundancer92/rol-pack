import React from "react";

import SessionCharacterCard from "@/components/SessionCharacterCard";

const GameRoom = () => {
	return (
		<div className="pt-10 pb-5 px-2 h-screen">
			{/* Room Details */}
			<div className="flex flex-row text-white justify-between ">
				<p>Nombre de la Sala</p>
				<p>Ronda: (dasd)</p>
			</div>
			<hr className="my-1 h-0.5 bg-neutral-100 opacity-100 " />
			{/* Character Card */}
			<SessionCharacterCard />
			<SessionCharacterCard />
			<SessionCharacterCard />
			<SessionCharacterCard />
			<SessionCharacterCard />
		</div>
	);
};

export default GameRoom;
