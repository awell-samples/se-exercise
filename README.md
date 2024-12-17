# Take home exercise

## Brief

A customer is using Awell to automate the closure of care gaps, specifically ensuring that women over the age of 50 undergo breast cancer screenings. To achieve this, a care flow is initiated to guide the completion of the necessary tasks.

At the beginning of each day, the customer uploads a CSV file to a file bucket. Each row in the file represents a patient who requires a "Breast Screening" care flow to be started. Your task is to build a solution that processes the file and triggers the corresponding care flow for each row/patient.

### Modalities

This take-home exercise will be followed by a 60-minute call to discuss your solution. You will receive the assignment via email 24 to 48 hours before the scheduled call. It is expected that you will spend 2 to 3 hours on this exercise and that you will be able to discuss and potentially expand or improve your solution with Nick during the 60-minute call.

### Resources

Here's a list of resources that you might find useful to complete this exercise:

- [Awell API Reference](https://developers.awellhealth.com/awell-orchestration/api-reference/overview/graphql-api)
- [Awell SDK](https://www.npmjs.com/package/@awell-health/awell-sdk)
- [Awell Studio*](https://studio.sandbox.awellhealth.com/): Awell's UI for creating care flows (=Design).
- [Awell Care*](https://care.sandbox.awellhealth.com/): Awell's UI to Operate/Orchestrate care flows and manage patients (=Orchestration).
- [Awell's Help Center](https://help.awellhealth.com/en/)
- The `constants.ts` file contains some constants that you might find useful.

\* You will receive an invite to Awell Studio and Awell Care.

> Note: In Awell's documentation, "Pathway" and "Care flow" are synonymous and refer to the same concept.

### Requirements

1. Trigger a care flow for each row in the CSV file.
2. Create a corresponding patient in Awell for each row, ensuring the following:
   - The patient's first name, last name, and email are correctly set in the Awell patient profile.
   - The patient is created with the correct Elation patient ID as their business identifier (Elation is the customer's EHR).
3. Extract the last breast screening date from the CSV file and ingest it as a baseline data point into the care flow.

### Assumptions and constraints

- The CSV file will be processed by triggering a Google Cloud Function (serverless function). All the boilerplate code is already provided in the repository.
- The CSV file contains only unique rows.
- You can work directly with the example data provided in `csvData.ts` and disregard the actual CSV file upload.
- There will be no more than 20 rows in the file, so performance optimizations are not required.
- You do not need to build the care flow in Awell Studio. An existing care flow is already available. However, logging into Awell Studio and Awell Care might help you better understand how the solution ties together and verify that your script works (Tip: this verification happens in Awell Care).
- The Elation identifier system is already set up and ready to use.

## Getting started

1. Duplicate this repository to your own GitHub account.
2. Invite Nick as a collaborator (`nckhell` or nickhellemans93@gmail.com).
3. Run the following steps to test the cloud function locally:
   - Install dependencies: `npm install`
   - Run the cloud function locally: `npm run start`
