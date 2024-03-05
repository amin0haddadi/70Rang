import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import Link from "next/link";
import AuthDialog from "../AuthDialog";
import BasketButton from "../Basket";
import CategoryMenu from "../Category";
import { SearchDialog } from "../Search";

const pages = [
	{ title: "ست‌ها", href: "/sets" },
	{ title: "خرید حضوری", href: "/shop" },
];

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				position: "sticky",
				top: 0,
				mb: 8,
				zIndex: 1000,
			}}
		>
			<AppBar>
				<Container>
					<Toolbar disableGutters>
						<Typography
							variant="h6"
							noWrap
							component={Link}
							href="/"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							TurkStyle
						</Typography>
						<Typography
							variant="h5"
							component={Link}
							href="/"
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
								justifyContent: "center",
							}}
						>
							TurkStyle
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								gap: 2,
								display: { xs: "none", md: "flex", fontSize: 50 },
							}}
						>
							<CategoryMenu />
							{pages.map((page, i) => (
								<Button
									key={i}
									component={Link}
									href={page.href}
									sx={{
										my: 2,
										color: "white",
										display: "block",
										fontSize: 16,
										fontWeight: 900,
									}}
								>
									{page.title}
								</Button>
							))}
						</Box>
						<Box sx={{ display: { xs: "none", md: "flex" } }}>
							<AuthDialog />
							<SearchDialog />
							<BasketButton />
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Header;
