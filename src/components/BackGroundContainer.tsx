import React from "react";

interface Props {
	children: React.ReactNode;
}

const BackGroundContainer = ({ children }: Props) => {
	return (
		<div className="pt-16 pb-5 px-5 h-screen w-screen">
			<div className="bg-gradient-to-r  from-indigo-600 to-sky-700 h-full rounded-lg p-1">
				<div className="bg-slate-700  h-full rounded-lg p-4  place-content-start overflow-scroll flex flex-col">
					{children}
				</div>
			</div>
		</div>
	);
};

export default BackGroundContainer;
