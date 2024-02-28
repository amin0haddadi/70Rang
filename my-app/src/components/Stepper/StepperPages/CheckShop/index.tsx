import { FC } from "react";
import {
	Typography,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
} from "@mui/material";
import TableItem from "./TableItem";

interface ICheckShopProps {}
const CheckShop: FC<ICheckShopProps> = async () => {
	const res = await fetch("https://fakestoreapi.com/products", {
		cache: "no-cache",
	});
	if (!res.ok) {
		throw new Error("HTTP error! status:");
	}
	const p = await res.json();

	return (
		<TableContainer sx={{ my: 8 }}>
			<Table sx={{ minWidth: 600 }} aria-label="simple table">
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
					{p.map((pro: ProductBase) => (
						<TableRow key={pro.id} sx={{ " td,  th": { border: 0 } }}>
							<TableCell colSpan={4}>
								<TableItem product={pro} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CheckShop;
