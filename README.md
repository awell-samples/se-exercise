# Take-Home Exercise

## Brief

A customer is using Awell to automate the closure of [care gaps](https://personifyhealth.com/resources/what-are-gaps-in-care-and-how-to-close-them-examples/#:~:text=A%20%E2%80%9Cgap%20in%20care%E2%80%9D%20is,age%20or%20other%20risk%20factors). Specifically, the customer wants to ensure that women over the age of 40 undergo breast cancer screenings every other year. 

To achieve this, a care flow is initiated to guide the coordination and completion of the necessary tasks. At the beginning of each day, the customer uploads a CSV file to a file bucket. Each row in the file represents a patient who requires a "Breast Screening" care flow to be started.

As a forward-deployed engineer, your task is to process a CSV file and enroll patients in care flows (i.e., start a care flow for each patient/row).

## Modalities

This take-home exercise will be followed by a **60-minute call** to discuss and review your solution. You will receive the assignment via email **24 to 48 hours before the scheduled call**. 

You are expected to:
1. Spend approximately **2 to 3 hours** on this exercise.
2. Be prepared to discuss and potentially expand or improve your solution with Nick during the follow-up call.

## Technical Requirements

1. Your solution should be designed to be deployed as a **Google Cloud Function** (note: actual deployment is not required for this exercise).
2. Ensure that the function can be run **locally** for testing purposes.
3. Your solution must be written in **TypeScript**.

## Business Requirements

1. Start a care flow for each row in the CSV file.
2. For each patient, ensure the following:
   - **Patient Profile:** Create a corresponding patient in Awell with:
     - First name
     - Last name
     - Email
   - **Elation Identifier:** Set the correct **Elation patient ID** as the business identifier (Elation is the customer's EHR system).
3. Extract the **last breast screening date** from the CSV file and ingest it as a **baseline data point** in the care flow.

## Resources

Here are some resources you may find helpful for completing this exercise:

- [Awell API Reference](https://developers.awellhealth.com/awell-orchestration/api-reference/overview/graphql-api)
- [Awell SDK](https://www.npmjs.com/package/@awell-health/awell-sdk)
- [Awell App*](https://careops.sandbox.awellhealth.com/): Awell's UI for creating care flows (=Design) and operating care flows (=Orchestration).
- [Awell's Help Center](https://help.awellhealth.com/en/)
- The `constants.yml` file includes variables that you might find helpful.
- Get yourself an API key from Awell, see [here](https://help.awellhealth.com/en/articles/8050459-create-and-manage-api-keys) on how to do this.

\* You will receive an invite to **Awell Studio** and **Awell Care**. Here's a [brief walkthrough of the UI](https://www.loom.com/share/71a0bf3ecc834cbd8ab16478f6507f9c).

> Note: In Awell's documentation, "Pathway" and "Care flow" are synonymous and refer to the same concept.

## Assumptions and constraints

- The CSV file contains **unique rows only**.
- Work directly with the example data provided in `testData.json` and **disregard the actual CSV file upload process**.
- The CSV file will contain **no more than 20 rows**, so performance optimizations are not required.
- You do not need to build the care flow in Awell Studio. An existing care flow is already available.
  - However, logging into **Awell Studio** and **Awell Care** might help you better understand how your solution ties together.
  - You can verify that your script works in **Awell Care**.
- The **Elation identifier system** is already set up and ready to use.
