"use client";
//Dependencies
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

//Type
import { DatePickerProps } from "@/types";

const DatePicker: React.FC<DatePickerProps> = ({
	value,
	onChange,
	disabledDates,
}) => {
	return (
		<DateRange
			rangeColors={["#262626"]}
			ranges={[value]}
			date={new Date()}
			onChange={onChange}
			direction="vertical"
			showDateDisplay={false}
			minDate={new Date()}
			disabledDates={disabledDates}
		/>
	);
};

export default DatePicker;
