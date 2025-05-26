// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

export type AppBaseParams = Record<string, any>;

export type AppParams = {
	// URL of the app's main HTML file.
	src: string;
	// Requested duration of the app in seconds.
	duration: number;
} & AppBaseParams;

