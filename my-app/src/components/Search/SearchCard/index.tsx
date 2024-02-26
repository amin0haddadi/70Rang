import { FC } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

interface ISearchCardProps {
	src: string;
	title: string;
}

const SearchCard: FC<ISearchCardProps> = ({ src, title }) => {
	return (
		<Button
			sx={{ ml: "auto" }}
			component={Link}
			href="/"
			size="large"
			aria-label="product-search-item"
			color="inherit"
			fullWidth
		>
			<Image
				src={src}
				alt="product-search-image"
				width={50}
				height={50}
				style={{
					display: "block",
					objectFit: "cover",
					borderRadius: 5,
					margin: 7,
					aspectRatio: 3 / 2,
				}}
			></Image>
			<Typography fontWeight={600} fontSize={14} color={"black"}>
				{title}
			</Typography>
		</Button>
	);
};

export default SearchCard;
