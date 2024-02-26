"use client";
import { FC, useLayoutEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDebounce } from "use-debounce";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import Image from "next/image";

interface ISearchProps {}

const countries = [
	{ code: "AD", label: "Andorra", phone: "376" },
	{
		code: "AE",
		label: "United Arab Emirates",
		phone: "971",
	},
	{ code: "AF", label: "Afghanistan", phone: "93" },
	{
		code: "AG",
		label: "Antigua and Barbuda",
		phone: "1-268",
	},
];

const SearchDialog: FC<ISearchProps> = (): JSX.Element => {
	const [searchTerm, setSearchTerm] = useState("");
	const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
	const [open, setOpen] = useState(false);

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
			<Dialog
				open={open}
				onClose={handleClose}
				sx={{
					position: "absolute",
					left: 10,
					top: -700,
				}}
			>
				<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
					<TextField
						autoFocus
						margin="dense"
						id="search-term"
						label="Search Term"
						type="text"
						fullWidth
						value={searchTerm}
						onChange={handleSearchTermChange}
					/>
				</DialogTitle>
				<DialogContent dividers>
					<TextField
						autoFocus
						margin="dense"
						id="search-term"
						label="Search Term"
						type="text"
						fullWidth
						value={searchTerm}
						onChange={handleSearchTermChange}
					/>
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
