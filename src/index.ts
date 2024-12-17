import * as functions from "@google-cloud/functions-framework";
import logger from "./logger";
import { csvData } from "./csvData";

/**
 * HTTP function that supports CORS requests.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http("take-home-exercise", async (req, res) => {
  logger.info({ message: `Received ${req.method} request` });

  /**
   * You can assume the cloud function is triggered by a GET request.
   */
  if (req.method !== "GET") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const data = csvData;
  // TODO: Implement the logic to process the CSV data

  res.status(200).send("CSV file processed successfully");
});
