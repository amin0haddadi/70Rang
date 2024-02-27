"use client";
import { FC, useLayoutEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchCard from "./SearchCard";

interface ISearchProps {}

const SearchDialog: FC<ISearchProps> = (): JSX.Element => {
	const [searchTerm, setSearchTerm] = useState("");
	const [open, setOpen] = useState(false);
	const [first, setfirst] = useState<any>([]);
	useLayoutEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setfirst(data));
	}, []);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleSearchTermChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSearchTerm(event.target.value);
	};

	return (
		<>
			<IconButton
				size="large"
				aria-label="search"
				color="inherit"
				onClick={handleClickOpen}
			>
				<SearchIcon />
			</IconButton>
			<Dialog open={open} onClose={handleClose} fullWidth maxWidth={"xs"}>
				<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
					<Paper
						component="form"
						sx={{
							p: "2px 10px",
							display: "flex",
							alignItems: "center",
						}}
					>
						<InputBase
							fullWidth
							autoFocus
							placeholder="Search Products"
							inputProps={{ "aria-label": "search google maps" }}
							onChange={handleSearchTermChange}
							margin="dense"
						/>
						<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
							<SearchIcon />
						</IconButton>
					</Paper>
				</DialogTitle>
				<DialogContent dividers sx={{ maxHeight: "50%" }}>
					{searchTerm &&
						first
							?.filter((y: any) =>
								y.title.toLowerCase().includes(searchTerm.toLowerCase())
							)
							.map((x: any, i: number) => (
								<SearchCard key={i} src={x.image} title={x.title} />
							))}
				</DialogContent>
			</Dialog>
		</>
	);
};

const SearchField = () => {
	const [first, setfirst] = useState<any>([]);
	useLayoutEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setfirst(data));
	}, []);

	return (
		<Autocomplete
			id="country-select-demo"
			disablePortal
			sx={{ width: 300, "& .MuiInputBase-root": { color: "white" } }}
			options={countries}
			renderOption={(props, option) => (
				<Box
					component="li"
					sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
					{...props}
				>
					<Image
						loading="lazy"
						width="20"
						height={20}
						src={first[0]?.image || ""}
						alt=""
					/>
					{option.label} ({option.code}) +{option.phone}
				</Box>
			)}
			renderInput={(params) => (
				<TextField
					{...params}
					label="Movie"
					sx={{ input: { color: "white" }, lable: { color: "white" } }}
				/>
			)}
		/>
	);
};

export { SearchDialog, SearchField };
