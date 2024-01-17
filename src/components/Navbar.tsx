import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className="bg-gradient-to-r from-indigo-600 to-sky-700 fixed w-screen py-2 px-5 text-center">
			<Link href="/">
				<p className="font-semibold text-white tracking-widest">ROL/PACK</p>
			</Link>
		</div>
	);
};

export default Navbar;
