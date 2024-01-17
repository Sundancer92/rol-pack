"use client";

import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

const FormSelectField = ({ selectedItem, setSelectedItem, list }) => {
	// const [selectedPerson, setSelectedPerson] = useState(people[0]);

	return (
		<div className="border-2 border-slate-600 rounded-md px-1 ">
			<Listbox
				value={selectedItem}
				onChange={setSelectedItem}
			>
				<Listbox.Button>{selectedItem.name}</Listbox.Button>
				<div className="absolute z-10 bg-gradient-to-r from-indigo-500 to-green-500  rounded-b-lg">
					<Listbox.Options className="px-1 w-full ">
						{list.map((item) => (
							<Listbox.Option
								key={item.id}
								value={item}
								disabled={item.unavailable}
								className=""
							>
								{item.name}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</div>
			</Listbox>
		</div>
	);
};

export default FormSelectField;
