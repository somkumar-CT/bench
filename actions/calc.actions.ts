'use server';
import { withServerActionAsyncCatcher } from '@/lib/async-catch';
import { ErrorHandler } from '@/lib/error';
import { SuccessResponse } from '@/lib/success';
import {
  MultiplySchema,
  MultiplySchemaType,
} from '@/lib/validator/calc.validator';
import { ServerActionReturnType } from '@/types/api.types';

export const multiply = withServerActionAsyncCatcher<
  MultiplySchemaType,
  ServerActionReturnType<number>
>(async (data) => {
  const validatedData = MultiplySchema.safeParse(data);
  if (!validatedData.success) {
    console.log({ zodError: validatedData.error });
    throw new ErrorHandler('Multiplication failed', 'BAD_REQUEST');
  }
  const { num1, num2 } = validatedData.data;
  const product = num1 * num2;
  console.log({ product });
  return new SuccessResponse(
    'Multiplication was successful',
    200,
    product
  ).serialize();

  // const result = MultiplySchema.parse(data);
  // const { id } = result;
  // if (id > 10) {
  //   const message = 'Number is less than 10';
  //   return new SuccessResponse(message, 201, { product: id }).serialize();
  // }
  // const message = 'Number is greater than 10';
  // return new SuccessResponse(message, 201, { product: id * 10 }).serialize();
});

// export const divide = withServerActionAsyncCatcher<
//   MultiplySchemaType,
//   ServerActionReturnType<MultiplyAdditionalType>
// >(async (data) => {
//   return new SuccessResponse('fka', 201, {
//     product: data?.id ? data.id * 10 : 0,
//   }).serialize();
// });
