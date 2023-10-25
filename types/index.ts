import { IconType } from "react-icons";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

export interface ListingClientProps {
	listing: any;
}

export interface IParams {
	listingId?: string;
}

export interface ButtonProps {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon?: IconType;
}
export interface HeartButtonProps {
	listingId: string;
	currentUser?: null;
}

export interface ContainerProps {
	children: React.ReactNode;
}

export interface HeadingProps {
	title: string;
	subtitle?: string;
	center?: boolean;
}
export interface DatePickerProps {
	value: Range;
	onChange: (value: RangeKeyDict) => void;
	disabledDates?: Date[];
}
export interface CounterProps {
	title: string;
	subtitle: string;
	value: number;
	onChange: (value: number) => void;
}
export type CountrySelectValue = {
	flag: string;
	label: string;
	latlng: number[];
	region: string;
	value: string;
};

export interface CountrySelectProps {
	value?: CountrySelectValue;
	onChange: (value: CountrySelectValue) => void;
}

export interface ListingCardProps {
	data: any;
	reservation?: any;
	onAction?: (id: string) => void;
	disabled?: boolean;
	actionLabel?: string;
	actionId?: string;
	currentUser?: null;
}

export interface ListingHeadProps {
	title: string;
	locationValue: string;
	imageSrc: string;
	id: string;
	currentUser?: null;
}

export interface ListingInfoProps {
	user: any;
	description: string;
	guestCount: number;
	roomCount: number;
	bathroomCount: number;
	locationValue: string;
}

export interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
}

export interface MenuItemProps {
	onClick: () => void;
	label: string;
}

export interface SearchModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}