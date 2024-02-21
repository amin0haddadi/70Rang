import { URL } from "@/constants";
import { unstable_noStore as noStore } from "next/cache";

// Defines parameters for user registration and login
interface IRegisterUserParams {
	phoneNumber: string;
	password: string;
}
// Registers a new user with the provided username and password
export async function registerUser(
	data: IRegisterUserParams
): Promise<ServerResponse<UserResponse>> {
	noStore();
	try {
		const res = await fetch(URL.REGISTER, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (!res.ok) {
			throw new Error("HTTP error! status: " + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Logs in a user with the provided username and password
export async function loginUser(
	data: IRegisterUserParams
): Promise<ServerResponse<TokensResponse>> {
	noStore();
	try {
		const res = await fetch(URL.LOGIN, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (!res.ok) {
			throw new Error("HTTP error! status: " + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Fetches the profile of the currently authenticated user
export async function fetchProfile(): Promise<ServerResponse<UserResponse>> {
	// ! Authorization required
	noStore();
	try {
		// ! NOT FUNCTIONAL YET
		// todo : create getToken function
		// const token = await getAuthToken();
		const res = await fetch(URL.PROFILE, {
			headers: {
				// Authorization: `Bearer ${token}`,
			},
		});
		if (!res.ok) {
			throw new Error("HTTP error! status: " + res.status);
		}
		return await res.json();
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Function to logout currently authenticated user
export async function logoutUser() {
	noStore();
	try {
		// todo : create getToken function
		// const token = await getToken()
		const res = await fetch(URL.LOGOUT, {
			headers: {
				"Content-Type": "application/json",
			},
			// body: JSON.stringify({ refresh_token: token }),
		});
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Fetches new tokens for currently authenticated user
export async function refreshTokens() {
	noStore();
	try {
		// todo : create getToken function
		// const token = await getRefreshToken()
		const res = await fetch(URL.REFRESH, {
			method: "POST",
			// body: JSON.stringify({ refresh_token: token }),
		});
	} catch (e) {
		console.error(e);
		throw e;
	}
}

