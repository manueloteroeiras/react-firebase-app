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


export const SupliersList = (props: any) => (
  <List {...props} title={'Invitados'} style={{alignItems: 'center', jusifyContent:'center'}}>
    <Datagrid>
      <TextField source="name" />
      <ReferenceField label="Rubro" source="rubro_id" reference="product-type">
            <TextField source="name" />
        </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

export const SupliersEdit = (props: any) => (
  <Edit {...props} title={'Editando Invitado'}>
    <SimpleForm>
      <TextInput fullWidth source="name" /> 
      <ReferenceInput label="Rubro" source="rubro_id" reference="product-type">
            <SelectInput optionText="name" />
        </ReferenceInput>
      <NumberInput fullWidth step={10} max={100} source="discount" />     
    </SimpleForm>
  </Edit>
);

export const SupliersCreate = (props: any) => (
  <Create {...props} title={'Nueva Usuario'}>
    <SimpleForm>
      <TextInput fullWidth source="name" /> 
        <ReferenceInput label="Rubro" source="rubro_id" reference="product-type">
            <SelectInput optionText="name" />
        </ReferenceInput>
      <NumberInput fullWidth step={10} max={100} source="discount" /> 
    </SimpleForm>
  </Create>
);
