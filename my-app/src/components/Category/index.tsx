"use client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCategories } from "@/lib/api/categories";
import VerticalTabs from "./Tabs";

const LongMenu = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [categories, setCategories] = useState<any[]>([]);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	useEffect(() => {
		fetchCategories().then((data) => setCategories(data.data.categories));
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Button
				sx={{
					color: "white",
					fontSize: 16,
					fontWeight: 900,
				}}
				aria-label="more"
				id="long-button"
				aria-controls={open ? "long-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onMouseOver={handleClick}
				startIcon={<MenuIcon />}
			>
				دسته‌بندی
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={open}
				sx={{ display: { xs: "none", md: "block" } }}
			>
				<MenuItem
					sx={{ padding: 0 }}
					onMouseLeave={handleClose}
					onClick={handleClose}
				>
					<VerticalTabs />
				</MenuItem>
			</Menu>
		</Box>
	);
};
export default LongMenu;
