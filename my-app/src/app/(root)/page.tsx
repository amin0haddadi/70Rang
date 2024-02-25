import Slider from "@/components/Slider";
import { GridView } from "@mui/icons-material";
import { Grid } from "@mui/material";
import Image from "next/image";

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: { rate: number; count: number };
}

const Home = async () => {
	const res = await fetch("https://fakestoreapi.com/products", {
		cache: "no-cache",
	});
	if (!res.ok) {
		throw new Error("HTTP error! status:");
	}
	const p = await res.json();
	return (
		<>
			<Slider>
				{p?.map((pro: Product, i: number) => (
					<Image key={i} src={pro.image} width={200} height={200} alt="prod" />
				))}
			</Slider>
			{p.map((pro: Product, i: number) => (
				<Image key={i} src={pro.image} width={200} height={200} alt="prod" />
			))}
			{/* <GridView>
				{p.map((pro: Product, i: number) => (
					<Grid item key={i} xs={1}>
						<Image
							key={i}
							src={pro.image}
							width={200}
							height={200}
							alt="prod"
						/>
					</Grid>
				))}
			</GridView> */}
		</>
	);
};

export default Home;
