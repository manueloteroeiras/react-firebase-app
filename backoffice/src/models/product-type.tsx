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
  Filter
} from "react-admin";


export const ProdTypeList = (props: any) => (
  <List {...props} title={'Invitados'} style={{alignItems: 'center', jusifyContent:'center'}}>
    <Datagrid>
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ProdTypeEdit = (props: any) => (
  <Edit {...props} title={'Editando Invitado'}>
    <SimpleForm>
      <TextInput fullWidth source="name" /> 
    </SimpleForm>
  </Edit>
);

export const ProdTypeCreate = (props: any) => (
  <Create {...props} title={'Nueva Usuario'}>
    <SimpleForm>
      <TextInput fullWidth source="name" /> 
    </SimpleForm>
  </Create>
);
