# DateUDFType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. | [optional] 
**Value** | Pointer to **string** | Value of user defined field. | [optional] 
**AlternateName** | Pointer to **string** | Label of user defined field used by vendors or customers. | [optional] 

## Methods

### NewDateUDFType

`func NewDateUDFType() *DateUDFType`

NewDateUDFType instantiates a new DateUDFType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDateUDFTypeWithDefaults

`func NewDateUDFTypeWithDefaults() *DateUDFType`

NewDateUDFTypeWithDefaults instantiates a new DateUDFType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DateUDFType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DateUDFType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DateUDFType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DateUDFType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *DateUDFType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *DateUDFType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *DateUDFType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *DateUDFType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetAlternateName

`func (o *DateUDFType) GetAlternateName() string`

GetAlternateName returns the AlternateName field if non-nil, zero value otherwise.

### GetAlternateNameOk

`func (o *DateUDFType) GetAlternateNameOk() (*string, bool)`

GetAlternateNameOk returns a tuple with the AlternateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateName

`func (o *DateUDFType) SetAlternateName(v string)`

SetAlternateName sets AlternateName field to given value.

### HasAlternateName

`func (o *DateUDFType) HasAlternateName() bool`

HasAlternateName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


