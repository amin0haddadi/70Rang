"use client";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import StepperPages from "./StepperPages";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const steps = [
	{ lable: " بررسی سبد خرید", icon: ShoppingCartCheckoutIcon },
	{ lable: " اطلاعات ارسال", icon: LocalShippingIcon },
	{ lable: " نحوه پرداخت", icon: CreditCardIcon },
	{ lable: " پایان خرید", icon: DoneAllIcon },
];

export default function CheckoutStepper() {
	const [activeStep, setActiveStep] = useState(0);
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

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((step) => (
					<Step key={step.lable}>
						<StepLabel
							StepIconComponent={step.icon}
							icon
							sx={{
								"& .Mui-disabled": { color: "#bdbdbd" },
							}}
						>
							{step.lable}
						</StepLabel>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length ? (
				<>
					<Typography sx={{ mt: 2, mb: 1 }}>
						All steps completed - you&apos;re finished
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
						<Box sx={{ flex: "1 1 auto" }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</>
			) : (
				<>
					<StepperPages activeStep={activeStep} />
					<Box
						display={isMobile ? "none" : "flex"}
						flexDirection={"row"}
						pt={2}
					>
						<Button
							type="button"
							LinkComponent={Link}
							href={activeStep === 0 ? "/" : ""}
							onClick={handleBack}
							color="primary"
							sx={{
								mr: 1,
								width: "30%",
								boxShadow: 7,
							}}
						>
							<NavigateNextIcon />
							<Typography m={1} flexGrow={1} textAlign={"center"}>
								بازگشت
							</Typography>
						</Button>
						<Box sx={{ flex: "1 1 auto" }} />
						<Button
							onClick={handleNext}
							variant="contained"
							color="primary"
							sx={{ mr: 1, width: "30%", boxShadow: 7 }}
						>
							<Typography m={1} flexGrow={1} textAlign={"center"}>
								{activeStep === steps.length - 1 ? "Finish" : "ثبت سفارش"}
							</Typography>
							<NavigateBeforeIcon />
						</Button>
					</Box>
					<Box
						display={isMobile ? "flex" : "none"}
						flexDirection={"row"}
						pt={2}
					>
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
						display={isMobile ? "flex" : "none"}
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
								{activeStep === steps.length - 1 ? "Finish" : "ثبت سفارش"}
							</Typography>
							<NavigateBeforeIcon />
						</Button>
					</Box>
				</>
			)}
		</Box>
	);
}
