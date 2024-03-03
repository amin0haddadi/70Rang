import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { FC, useState } from "react";

interface IStepperButton {
	activeStep: number;
	setActiveStep: React.Dispatch<React.SetStateAction<number>>;
	length: number;
}
const StepperButton: FC<IStepperButton> = ({
	activeStep,
	setActiveStep,
	length,
}): JSX.Element => {
	const [skipped, setSkipped] = useState(new Set<number>());
	const isMobile = useMediaQuery("(max-width:700px)");

	const isStepOptional = (step: number) => {
		return step === 1;
	};

	const isStepSkipped = (step: number) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<>
			<Box display={isMobile ? "none" : "flex"} flexDirection={"row"} pt={2}>
				<Button
					type="button"
					LinkComponent={Link}
					href={activeStep === 0 ? "/" : ""}
					onClick={handleBack}
					color="primary"
					sx={{
						mr: 1,
						width: "25%",
						boxShadow: 7,
					}}
				>
					<NavigateNextIcon />
					<Typography m={1} flexGrow={1} textAlign={"center"}>
						{activeStep === 1 ? "بررسی سبد خرید" : "برگشت"}
					</Typography>
				</Button>
				<Box sx={{ flex: "1 1 auto" }} />
				<Button
					onClick={handleNext}
					variant="contained"
					color="primary"
					sx={{
						mr: 1,
						width: "30%",
						boxShadow: 7,
						display: `${activeStep !== 1 && !isMobile ? "flex" : "none"}`,
					}}
				>
					<Typography m={1} flexGrow={1} textAlign={"center"}>
						{activeStep === length - 1 ? "Finish" : "ثبت سفارش"}
					</Typography>
					<NavigateBeforeIcon />
				</Button>
			</Box>
			<Box display={isMobile ? "flex" : "none"} flexDirection={"row"} pt={2}>
				<Button
					type="button"
					LinkComponent={Link}
					href={activeStep === 0 ? "/" : ""}
					onClick={handleBack}
					color="primary"
					fullWidth
					sx={{
						mr: 1,
						boxShadow: 7,
					}}
				>
					<NavigateNextIcon />
					<Typography m={1} flexGrow={1} textAlign={"center"}>
						بازگشت
					</Typography>
				</Button>
			</Box>
			<Box
				display={activeStep !== 1 && isMobile ? "flex" : "none"}
				flexDirection={"row"}
				pt={2}
			>
				<Button
					onClick={handleNext}
					variant="contained"
					color="primary"
					fullWidth
					sx={{ mr: 1, boxShadow: 7 }}
				>
					<Typography m={1} flexGrow={1} textAlign={"center"}>
						{activeStep === length - 1 ? "Finish" : "ثبت سفارش"}
					</Typography>
					<NavigateBeforeIcon />
				</Button>
			</Box>
		</>
	);
};

export default StepperButton;
