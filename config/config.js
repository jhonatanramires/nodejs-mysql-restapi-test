import { config } from "dotenv";

config();

export const PORT = process.env.NODE_DOCKER_PORT || 8080;