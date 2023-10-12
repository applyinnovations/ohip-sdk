# UserDefinedFieldsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CharacterUDFs** | Pointer to [**[]CharacterUDFType**](CharacterUDFType.md) | Used to hold collection of user defined fields of Character/String Type. | [optional] 
**NumericUDFs** | Pointer to [**[]NumericUDFType**](NumericUDFType.md) | Used to hold collection of user defined fields of Numeric Type. | [optional] 
**DateUDFs** | Pointer to [**[]DateUDFType**](DateUDFType.md) | Used to hold collection of user defined fields of Date Type. | [optional] 

## Methods

### NewUserDefinedFieldsType

`func NewUserDefinedFieldsType() *UserDefinedFieldsType`

NewUserDefinedFieldsType instantiates a new UserDefinedFieldsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserDefinedFieldsTypeWithDefaults

`func NewUserDefinedFieldsTypeWithDefaults() *UserDefinedFieldsType`

NewUserDefinedFieldsTypeWithDefaults instantiates a new UserDefinedFieldsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCharacterUDFs

`func (o *UserDefinedFieldsType) GetCharacterUDFs() []CharacterUDFType`

GetCharacterUDFs returns the CharacterUDFs field if non-nil, zero value otherwise.

### GetCharacterUDFsOk

`func (o *UserDefinedFieldsType) GetCharacterUDFsOk() (*[]CharacterUDFType, bool)`

GetCharacterUDFsOk returns a tuple with the CharacterUDFs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharacterUDFs

`func (o *UserDefinedFieldsType) SetCharacterUDFs(v []CharacterUDFType)`

SetCharacterUDFs sets CharacterUDFs field to given value.

### HasCharacterUDFs

`func (o *UserDefinedFieldsType) HasCharacterUDFs() bool`

HasCharacterUDFs returns a boolean if a field has been set.

### GetNumericUDFs

`func (o *UserDefinedFieldsType) GetNumericUDFs() []NumericUDFType`

GetNumericUDFs returns the NumericUDFs field if non-nil, zero value otherwise.

### GetNumericUDFsOk

`func (o *UserDefinedFieldsType) GetNumericUDFsOk() (*[]NumericUDFType, bool)`

GetNumericUDFsOk returns a tuple with the NumericUDFs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumericUDFs

`func (o *UserDefinedFieldsType) SetNumericUDFs(v []NumericUDFType)`

SetNumericUDFs sets NumericUDFs field to given value.

### HasNumericUDFs

`func (o *UserDefinedFieldsType) HasNumericUDFs() bool`

HasNumericUDFs returns a boolean if a field has been set.

### GetDateUDFs

`func (o *UserDefinedFieldsType) GetDateUDFs() []DateUDFType`

GetDateUDFs returns the DateUDFs field if non-nil, zero value otherwise.

### GetDateUDFsOk

`func (o *UserDefinedFieldsType) GetDateUDFsOk() (*[]DateUDFType, bool)`

GetDateUDFsOk returns a tuple with the DateUDFs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateUDFs

`func (o *UserDefinedFieldsType) SetDateUDFs(v []DateUDFType)`

SetDateUDFs sets DateUDFs field to given value.

### HasDateUDFs

`func (o *UserDefinedFieldsType) HasDateUDFs() bool`

HasDateUDFs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


