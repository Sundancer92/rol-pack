import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div className="grid place-items-center h-screen">
				<div className="bg-gradient-to-r from-indigo-500 via-red-500 to-sky-500 p-1 rounded-xl">
					<button className="bg-white rounded-lg px-1">LOG IN</button>
				</div>
			</div>

			{/* <h1 className="text-3xl font-bold underline">hello world</h1>
			<Link href="/dashboard/games">Games</Link>
			<Link href="/dashboard/games/lala">Characters</Link>
			<Link href="/dashboard/sessionrooms">Salas</Link> */}
		</main>
	);
}
