"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";
import MenuItem from "@/components/Navbar/MenuItem";
import Avatar from "@/components/Navbar/Avatar";

interface UserMenuProps {
	currentUser?: null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={toggleOpen}
					className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
				>
					<AiOutlineMenu />
					<div className="hidden md:block">
						<Avatar
							src={"https://i.ibb.co/xfSWg5K/placeholder.jpg"}
						/>
					</div>
				</div>
			</div>
			{isOpen && (
				<div
					className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
				>
					<div className="flex flex-col cursor-pointer">
						{currentUser ? (
							<>
								<MenuItem
									label="My trips"
									onClick={() => router.push("/trips")}
								/>
								<MenuItem
									label="My favorites"
									onClick={() => router.push("/favorites")}
								/>
								<MenuItem
									label="My reservations"
									onClick={() => router.push("/reservations")}
								/>
								<MenuItem
									label="My properties"
									onClick={() => router.push("/properties")}
								/>
								<MenuItem
									label="Airbnb your home"
									onClick={() => {}}
								/>
								<hr />
								<MenuItem label="Logout" onClick={() => {}} />
							</>
						) : (
							<>
								<MenuItem label="Login" onClick={() => {}} />
								<MenuItem label="Sign up" onClick={() => {}} />
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
