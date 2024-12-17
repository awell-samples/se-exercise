import { faker } from "@faker-js/faker";

export interface Row {
  elation_patient_id: string;
  patient_first_name: string;
  patient_last_name: string;
  patient_email?: string;
  last_breast_screening_date?: string; // ISO8601 string
}

/**
 * Feel free to alter the data for testing purposes.
 * E.g. use fixed/deterministic data or add more rows.
 */
export const csvData: Row[] = [
  {
    elation_patient_id: faker.string.uuid(),
    patient_first_name: faker.person.firstName('female'),
    patient_last_name: faker.person.lastName('female'),
    last_breast_screening_date: faker.date.recent().toISOString(),
    patient_email: faker.internet.email(),
  },
  {
    elation_patient_id: faker.string.uuid(),
    patient_first_name: faker.person.firstName('female'),
    patient_last_name: faker.person.lastName('female'),
    last_breast_screening_date: faker.date.recent().toISOString(),
    patient_email: faker.internet.email(),
  },
];
