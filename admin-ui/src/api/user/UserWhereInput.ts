import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type UserWhereInput = {
  admin?: BooleanNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  reviews?: ReviewListRelationFilter;
  username?: StringFilter;
};