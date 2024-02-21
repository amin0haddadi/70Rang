import type { Metadata } from "next";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Rtl from "@/ui/rtl.config";
import globalStyle from "@/ui/globalStyle";
import theme from "@/ui/theme";

export const metadata: Metadata = {
	title: "",
	description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="fa" dir="rtl">
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<Rtl>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							<GlobalStyles styles={globalStyle} />
							{children}
						</ThemeProvider>
					</Rtl>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
};

export default RootLayout;