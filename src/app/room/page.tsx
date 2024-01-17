import React from "react";

import SessionCharacterCard from "@/components/Cards/SessionCharacterCard";
import FormAddCharacter from "@/components/Forms/FormAddCharacter";
import BattleRoomDesk from "@/components/BattleRoomDesk";

const GameRoom = () => {
	return (
		<div className="pt-10 pb-5 px-2 h-screen">
			{/* Room Details */}
			<BattleRoomDesk />
		</div>
	);
};

export default GameRoom;
