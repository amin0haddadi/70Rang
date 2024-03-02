import { FC, useLayoutEffect, useState } from "react";
import {
	Typography,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	Paper,
} from "@mui/material";
import TableItem from "./TableItem";

const DesktopCheckShop = () => {
	const [p, setP] = useState<any>();

	useLayoutEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setP(data));
	});

	return (
		<TableContainer sx={{ my: 8 }}>
			<Table
				sx={{
					minWidth: 600,
					borderSpacing: "5px 15px",
					borderCollapse: "separate",
				}}
				aria-label="simple table"
			>
				<TableHead>
					<TableRow sx={{ " td,  th": { border: 0 } }}>
						<TableCell>
							<Typography color="grey" px={5}>
								محصول
							</Typography>
						</TableCell>
						<TableCell>
							<Typography color="grey">قیمت</Typography>
						</TableCell>
						<TableCell>
							<Typography color="grey">تعداد</Typography>
						</TableCell>
						<TableCell>
							<Typography color="grey">جمع قیمت</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{p?.map((pro: any) => (
						<TableRow
							key={pro.id}
							sx={{ " td,  th": { border: 0 }, p: 5 }}
							component={Paper}
							elevation={5}
						>
							<TableItem product={pro} />
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DesktopCheckShop;
