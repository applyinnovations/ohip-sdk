# NumericUDFType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlternateName** | Pointer to **string** | Label of user defined field used by vendors or customers. | [optional] 
**Name** | Pointer to **string** | Name of user defined field. | [optional] 
**Value** | Pointer to **float32** | Value of user defined field. | [optional] 

## Methods

### NewNumericUDFType

`func NewNumericUDFType() *NumericUDFType`

NewNumericUDFType instantiates a new NumericUDFType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNumericUDFTypeWithDefaults

`func NewNumericUDFTypeWithDefaults() *NumericUDFType`

NewNumericUDFTypeWithDefaults instantiates a new NumericUDFType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternateName

`func (o *NumericUDFType) GetAlternateName() string`

GetAlternateName returns the AlternateName field if non-nil, zero value otherwise.

### GetAlternateNameOk

`func (o *NumericUDFType) GetAlternateNameOk() (*string, bool)`

GetAlternateNameOk returns a tuple with the AlternateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateName

`func (o *NumericUDFType) SetAlternateName(v string)`

SetAlternateName sets AlternateName field to given value.

### HasAlternateName

`func (o *NumericUDFType) HasAlternateName() bool`

HasAlternateName returns a boolean if a field has been set.

### GetName

`func (o *NumericUDFType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NumericUDFType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NumericUDFType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *NumericUDFType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *NumericUDFType) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *NumericUDFType) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *NumericUDFType) SetValue(v float32)`

SetValue sets Value field to given value.

### HasValue

`func (o *NumericUDFType) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


