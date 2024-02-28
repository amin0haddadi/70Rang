import { FC } from "react";
import { Box, Paper } from "@mui/material";
import Image from "next/image";

interface TableItemProps {
	product: ProductBase;
}
const TableItem: FC<TableItemProps> = ({ product }) => {
	return (
		<Box component={Paper} elevation={5} py={1} px={2}>
			<Image
				src={product.image}
				alt="product-search-image"
				width={70}
				height={70}
				style={{
					display: "block",
					objectFit: "cover",
					borderRadius: 5,

					aspectRatio: 3 / 2,
				}}
			></Image>
		</Box>
	);
};

export default TableItem;
