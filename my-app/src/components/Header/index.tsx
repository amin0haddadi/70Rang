import {
	AppBar,
	Badge,
	Box,
	Button,
	Container,
	Toolbar,
	Typography,
} from "@mui/material";
import Link from "next/link";
import BasketButton from "../Basket";
import LongMenu from "../Category";
import AuthDialog from "../AuthDialog";
import { SearchDialog } from "../Search";

const pages = [
	{ title: "فروش ویژه", href: "/special" },
	{ title: "آدرس حضوری", href: "/shop" },
];

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (): JSX.Element => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
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
							70Rang
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
							70Rang
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								gap: 2,
								display: { xs: "none", md: "flex", fontSize: 50 },
							}}
						>
							<LongMenu />
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
