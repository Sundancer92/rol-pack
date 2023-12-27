"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
	ArrowPathIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	PencilSquareIcon,
	TrashIcon,
} from "@heroicons/react/24/outline";

const solutions = [
	{
		name: "Edit",
		description: "Get a better understanding of your traffic",
		href: "#",
		icon: PencilSquareIcon,
	},
	{
		name: "Delete",
		description: "Speak directly to your customers",
		href: "#",
		icon: TrashIcon,
	},
];
const callsToAction = [
	{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
	{ name: "Contact sales", href: "#", icon: PhoneIcon },
];
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

import React from "react";

const DotsMenu = () => {
	return (
		<Popover className="">
			<Popover.Button className="grid place-items-center">
				<EllipsisVerticalIcon className="h-6 w-6 text-gray-500 aria-hidden:true" />
			</Popover.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel className="absolute  z-10 flex w-screen max-w-max -translate-x-32 px-2 h-fit">
					<div className="rounded-3xl bg-gradient-to-b from-blue-500 to-red-500 p-0.5">
						<div className="overflow-auto h-min rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
							<div className="">
								{solutions.map((item) => (
									<div
										key={item.name}
										className="group relative flex  rounded-lg px-3 hover:bg-gray-50 items-center"
									>
										<div className=" flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
											<item.icon
												className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
												aria-hidden="true"
											/>
										</div>
										<div>
											<a
												href={item.href}
												className="font-semibold text-gray-900"
											>
												{item.name}
												<span className="absolute inset-0" />
											</a>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export default DotsMenu;
