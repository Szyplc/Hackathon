import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const tutaj = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Szyplo and Volper!");
});

export const witaj = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Rosin i Czarek!");
});
