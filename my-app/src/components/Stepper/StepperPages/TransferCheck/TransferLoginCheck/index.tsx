import { Box, Paper, Typography, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useForm } from "react-hook-form";

const TransferLoginCheck = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<Box
			component="form"
			sx={{
				padding: "40px",
			}}
		>
			<Grid container spacing={3}>
				<Grid md={6} xs={12}>
					<TextField label="نام" variant="outlined" fullWidth />
				</Grid>
				<Grid md={6} xs={12}>
					<TextField label="نام خانوادگی" variant="outlined" fullWidth />
				</Grid>
				<Grid md={6} xs={12}>
					<TextField label="شماره موبایل" variant="outlined" fullWidth />
				</Grid>
				<Grid md={6} xs={12}>
					<TextField label="ایمیل" variant="outlined" fullWidth />
				</Grid>
				<Grid md={4} xs={12}>
					<TextField label="Outlined" variant="outlined" fullWidth />
				</Grid>
				<Grid md={4} xs={12}>
					<TextField label="Outlined" variant="outlined" fullWidth />
				</Grid>
				<Grid md={4} xs={12}>
					<TextField label="Outlined" variant="outlined" fullWidth />
				</Grid>
				<Grid md={12} xs={12}>
					<TextField label="آدرس پستی" variant="outlined" fullWidth />
				</Grid>
				<Grid md={4} xs={12}>
					<TextField label="تلفن ثابت (اختیاری)" variant="outlined" fullWidth />
				</Grid>
				<Grid md={8} xs={12}>
					<TextField label="توضیحات (اختیاری)" variant="outlined" fullWidth />
				</Grid>
			</Grid>
		</Box>
	);
};

export default TransferLoginCheck;
