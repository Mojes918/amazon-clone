import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="admin" source="admin" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Order" target="userId" label="orders">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="paymentintent" source="paymentintent" />
            <BooleanField label="paymentstatus" source="paymentstatus" />
            <TextField label="price" source="price" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Review" target="userId" label="reviews">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="rating" source="rating" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
