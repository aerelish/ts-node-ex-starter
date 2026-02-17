/**
 * these are the .env variables,
 * just getting them from process.env and providing defaults if they are not set
 * this makes it easier as well, just do ENV instead of process.env
 */

interface ENVType {
	devFrontendUrl: string;
	frontendUrl: string;
	nodeEnv: string;
	port: number;
}

export const ENV: ENVType = {
	devFrontendUrl: process.env.DEV_FRONTEND_URL ?? 'http://localhost:5173',
	frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:5173',
	nodeEnv: process.env.NODE_ENV ?? 'development',
	port: process.env.PORT ? Number(process.env.PORT) : 9001,
};
