"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Welcome = () => {
	const [gameOn, setGameOn] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem("rolpack")) {
			setGameOn(true);
		} else {
			setGameOn(false);
		}
	}, []);

	const handleStartBtn = () => {
		if (gameOn) {
			localStorage.removeItem("rolpack");
		}
		router.push("/room");
	};
	return (
		<div className="grid place-items-center content-center h-screen">
			<Link href={"/room"}>
				{gameOn && (
					<div className="bg-gradient-to-r from-green-500 via-sky-500 to-yellow-500  mb-5 p-1 rounded-xl">
						<button className="bg-white rounded-lg px-1">
							CONTINUAR
						</button>
					</div>
				)}
			</Link>
			<div className="bg-gradient-to-r from-indigo-500 via-red-500 to-sky-500 p-1 rounded-xl">
				<button
					onClick={() => handleStartBtn()}
					className="bg-white rounded-lg px-1"
				>
					EMPEZAR {gameOn && "NUEVA SESIÓN"}
				</button>
			</div>
		</div>
	);
};

export default Welcome;
