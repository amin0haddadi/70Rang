import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

const options = [
	["لباس", "تیشرت", "شلوار", "کاپشن"],
	["اکسسوری", "کلاه", "کمربند"],
	["کفش", "اسپرت", "مجلسی"],
];

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 1 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</Box>
	);
};

const a11yProps = (index: number) => {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
};

const VerticalTabs = () => {
	const [value, setValue] = useState<number>(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	const handleHover = (
		event: React.MouseEvent<HTMLElement>,
		newValue: number
	) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: "background.paper",
				display: "flex",
				height: 400,
				minWidth: 650,
			}}
		>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				sx={{ borderRight: 1, borderColor: "divider" }}
			>
				{options?.map((x, i) => (
					<Tab
						label={x[0]}
						{...a11yProps(i)}
						key={i}
						onMouseEnter={(e) => handleHover(e, i)}
						sx={{ fontSize: 17, fontWeight: 900, paddingX: 4 }}
					/>
				))}
			</Tabs>
			{options?.map((x, i) => (
				<TabPanel value={value} index={i} key={i}>
					{x[1]}
					<br />
					{x[2]}
				</TabPanel>
			))}
		</Box>
	);
};
export default VerticalTabs;
