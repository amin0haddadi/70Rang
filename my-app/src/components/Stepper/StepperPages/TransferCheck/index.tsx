import { Box, Paper, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import TransferLoginCheck from "./TransferLoginCheck";

const TransferCheck = () => {
	return (
		<Grid container spacing={4} my={6}>
			<Grid xs={12} md={8}>
				<Box component={Paper} elevation={5}>
					<TransferLoginCheck />
				</Box>
			</Grid>
			<Grid xs={12} md={4}>
				<Box
					component={Paper}
					elevation={5}
					p={3}
					display={"flex"}
					flexDirection={"column"}
				>
					<Box
						display={"flex"}
						justifyContent={"space-between"}
						alignItems={"center"}
						mb={2}
						mx={1}
					>
						<Typography color={"grey"}>مبلغ قابل پرداخت:</Typography>
						<Typography fontWeight={900} fontSize={18}>
							1250000 تومان
						</Typography>
					</Box>
					<Button variant="contained" fullWidth size="large">
						<Typography variant="h6">نهایی سازی سفارش</Typography>
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};

export default TransferCheck;
