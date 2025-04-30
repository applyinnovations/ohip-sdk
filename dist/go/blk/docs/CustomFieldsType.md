# CustomFieldsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomCharUDFs** | Pointer to [**[]CharacterUDFType**](CharacterUDFType.md) | Used to hold collection of custom user defined fields of Character/String Type. | [optional] 
**CustomNumericUDFs** | Pointer to [**[]NumericUDFType**](NumericUDFType.md) | Used to hold collection of custom user defined fields of Numeric Type. | [optional] 
**CustomDateUDFs** | Pointer to [**[]DateUDFType**](DateUDFType.md) | Used to hold collection of custom user defined fields of Date Type. | [optional] 

## Methods

### NewCustomFieldsType

`func NewCustomFieldsType() *CustomFieldsType`

NewCustomFieldsType instantiates a new CustomFieldsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomFieldsTypeWithDefaults

`func NewCustomFieldsTypeWithDefaults() *CustomFieldsType`

NewCustomFieldsTypeWithDefaults instantiates a new CustomFieldsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomCharUDFs

`func (o *CustomFieldsType) GetCustomCharUDFs() []CharacterUDFType`

GetCustomCharUDFs returns the CustomCharUDFs field if non-nil, zero value otherwise.

### GetCustomCharUDFsOk

`func (o *CustomFieldsType) GetCustomCharUDFsOk() (*[]CharacterUDFType, bool)`

GetCustomCharUDFsOk returns a tuple with the CustomCharUDFs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomCharUDFs

`func (o *CustomFieldsType) SetCustomCharUDFs(v []CharacterUDFType)`

SetCustomCharUDFs sets CustomCharUDFs field to given value.

### HasCustomCharUDFs

`func (o *CustomFieldsType) HasCustomCharUDFs() bool`

HasCustomCharUDFs returns a boolean if a field has been set.

### GetCustomNumericUDFs

`func (o *CustomFieldsType) GetCustomNumericUDFs() []NumericUDFType`

GetCustomNumericUDFs returns the CustomNumericUDFs field if non-nil, zero value otherwise.

### GetCustomNumericUDFsOk

`func (o *CustomFieldsType) GetCustomNumericUDFsOk() (*[]NumericUDFType, bool)`

GetCustomNumericUDFsOk returns a tuple with the CustomNumericUDFs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomNumericUDFs

`func (o *CustomFieldsType) SetCustomNumericUDFs(v []NumericUDFType)`

SetCustomNumericUDFs sets CustomNumericUDFs field to given value.

### HasCustomNumericUDFs

`func (o *CustomFieldsType) HasCustomNumericUDFs() bool`

HasCustomNumericUDFs returns a boolean if a field has been set.

### GetCustomDateUDFs

`func (o *CustomFieldsType) GetCustomDateUDFs() []DateUDFType`

GetCustomDateUDFs returns the CustomDateUDFs field if non-nil, zero value otherwise.

### GetCustomDateUDFsOk

`func (o *CustomFieldsType) GetCustomDateUDFsOk() (*[]DateUDFType, bool)`

GetCustomDateUDFsOk returns a tuple with the CustomDateUDFs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomDateUDFs

`func (o *CustomFieldsType) SetCustomDateUDFs(v []DateUDFType)`

SetCustomDateUDFs sets CustomDateUDFs field to given value.

### HasCustomDateUDFs

`func (o *CustomFieldsType) HasCustomDateUDFs() bool`

HasCustomDateUDFs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


