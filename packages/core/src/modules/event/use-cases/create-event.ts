import dayjs from 'dayjs';

import { db } from '@oyster/db';
import { type Event } from '@oyster/types';
import { id } from '@oyster/utils';

type CreateEventInput = Pick<Event, 'description' | 'name' | 'type'> & {
  endTime: string;
  startTime: string;
  timezone: string;
};

export async function createEvent({
  description,
  endTime,
  startTime,
  timezone,
  name,
  type,
}: CreateEventInput) {
  await db
    .insertInto('events')
    .values({
      description,
      endTime: dayjs.tz(endTime, timezone).toDate(),
      hidden: type === 'irl',
      id: id(),
      name,
      startTime: dayjs.tz(startTime, timezone).toDate(),
      type,
    })
    .execute();
}
