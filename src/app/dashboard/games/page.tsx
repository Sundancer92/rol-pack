import React from "react";
import FormModalNewGame from "@/components/Forms/FormModalNewGame";
import GameCard from "@/components/Cards/GameCard";
import BackGroundContainer from "@/components/BackGroundContainer";

const Characters = () => {
	return (
		<BackGroundContainer>
			<GameCard
				gameName={"Hombre Lobo"}
				url={"/123"}
			/>
			<div className="absolute inset-x-20 bottom-2 bg-gradient-to-r from-indigo-500 to-sky-500 text-center rounded-full ">
				<FormModalNewGame />
			</div>
		</BackGroundContainer>
	);
};

export default Characters;
