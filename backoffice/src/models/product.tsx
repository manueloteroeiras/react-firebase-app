import React from "react";
import {
  Create,
  Edit,
  List,
  SimpleForm,
  TextInput,
  LongTextInput,
  required,
  SelectInput,
  ReferenceInput,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton, 
  ShowButton, 
  BooleanField, 
  BooleanInput, 
  Filter,
  NumberInput
} from "react-admin";


export const ProductList = (props: any) => (
  <List {...props} title={'Invitados'} style={{alignItems: 'center', jusifyContent:'center'}}>
    <Datagrid>
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ProductEdit = (props: any) => (
  <Edit {...props} title={'Editando Invitado'}>
    <SimpleForm>
      <TextInput fullWidth source="name" /> 
      <ReferenceInput label="Rubro" source="rubro_id" reference="product-type">
            <SelectInput optionText="name" />
        </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const ProductCreate = (props: any) => (
  <Create {...props} title={'Nueva Usuario'}>
    <SimpleForm>
      <TextInput fullWidth source="name" /> 
      <NumberInput fullWidth source="price" /> 
      <ReferenceInput label="Rubro" source="rubro_id" reference="product-type">
            <SelectInput optionText="name" />
        </ReferenceInput>
    </SimpleForm>
  </Create>
);
