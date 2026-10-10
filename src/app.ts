import express from "express";
import cors from "cors";
import { healthRouter } from "./routes/health.js";
import { citiesRouter } from "./routes/cities.js";
import { airQualityRouter } from "./routes/air-quality.js";
import { climateRouter } from "./routes/climate.js";
import { chatRouter } from "./routes/chat.js";
import { droughtRouter } from "./routes/drought.js";

function corsOrigins(): boolean | string[] {
  const raw = process.env.CORS_ORIGIN?.trim();
  if (!raw) return true;
  const origins = raw.split(",").map((o) => o.trim()).filter(Boolean);
  return origins.length ? origins : true;
}

export function createApp() {
  const app = express();
  app.use(cors({ origin: corsOrigins() }));
  app.use(express.json());
  app.use(healthRouter);
  app.use(citiesRouter);
  app.use(airQualityRouter);
  app.use(climateRouter);
  app.use(chatRouter);
  app.use(droughtRouter);
  return app;
}
