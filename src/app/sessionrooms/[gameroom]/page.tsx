import React from "react";

import SessionCharacterCard from "@/components/Cards/SessionCharacterCard";
import FormAddCharacterToSession from "@/components/Forms/FormAddCharacterToSession";

const GameRoom = () => {
	return (
		<div className="pt-10 pb-5 px-2 h-screen">
			{/* Room Details */}
			<div className="flex flex-row text-white justify-between ">
				<p>Palacio de la Moneda</p>
				<div className="flex">
					<p>Ronda: (dasd)</p>
					<FormAddCharacterToSession />
				</div>
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
