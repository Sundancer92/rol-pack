import Link from "next/link";
import React from "react";

const Dashboard = () => {
	return (
		<div className="grid place-content-center h-screen">
			<div className="bg-gradient-to-r from-indigo-600 to-sky-700  rounded-2xl text-center p-1">
				<div className="grid gap-5 place-items-center bg-slate-700 bg-opacity-1 p-4 rounded-2xl">
					<Link href="/dashboard/games">
						<div className="bg-sky-300 rounded-2xl w-40 p-5">
							<button>PERSONAJES</button>
						</div>
					</Link>
					<Link href="/sessionrooms">
						<div className="bg-sky-300 rounded-2xl w-40 p-5">
							<button>SALAS</button>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
