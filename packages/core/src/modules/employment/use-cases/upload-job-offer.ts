import { sql } from 'kysely';

import { db } from '@oyster/db';
import { id } from '@oyster/utils';

import { type UploadJobOfferInput } from '../employment.types';

export async function uploadJobOffer({
  baseSalary,
  bonus,
  companyId,
  compensationType,
  employmentType,
  hourlyPay,
  location,
  locationLatitude,
  locationLongitude,
  locationType,
  otherCompany,
  startDate,
  status,
  stockPerYear,
  studentId,
}: UploadJobOfferInput) {
  await db.transaction().execute(async (trx) => {
    await trx
      .insertInto('jobOffers')
      .values({
        baseSalary,
        bonus,
        companyId,
        compensationType,
        employmentType,
        hourlyPay,
        id: id(),
        location,
        locationCoordinates: sql`point(${locationLongitude}, ${locationLatitude})`,
        locationType,
        otherCompany,
        startDate,
        status,
        stockPerYear,
        studentId,
      })
      .execute();
  });
}
