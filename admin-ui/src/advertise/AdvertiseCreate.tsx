import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdvertiseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Sadrzaj" source="sadrzaj" />
      </SimpleForm>
    </Create>
  );
};
