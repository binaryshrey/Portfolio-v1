import React from "react";
import darkTheme from "../utils/appTheme";
import { Typography } from "@mui/material";
import { SeoConfig } from "../components/seo";
import * as styles from "../styles/app.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

const NotFound = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<div className={styles.notFoundContainer}>
				<div>
					<Typography
						variant="h1"
						color="#F56843"
						style={{ textAlign: "center", fontSize: "100px" }}
					>
						404
					</Typography>
				</div>
			</div>
		</ThemeProvider>
	);
};

export default NotFound;

export const Head = () => <SeoConfig title="404 - Shreyansh Saurabh" />;
