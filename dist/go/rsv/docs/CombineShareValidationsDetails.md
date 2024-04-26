# CombineShareValidationsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReturnedValidations** | Pointer to [**[]ValidationReturnType**](ValidationReturnType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCombineShareValidationsDetails

`func NewCombineShareValidationsDetails() *CombineShareValidationsDetails`

NewCombineShareValidationsDetails instantiates a new CombineShareValidationsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCombineShareValidationsDetailsWithDefaults

`func NewCombineShareValidationsDetailsWithDefaults() *CombineShareValidationsDetails`

NewCombineShareValidationsDetailsWithDefaults instantiates a new CombineShareValidationsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CombineShareValidationsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CombineShareValidationsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CombineShareValidationsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CombineShareValidationsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReturnedValidations

`func (o *CombineShareValidationsDetails) GetReturnedValidations() []ValidationReturnType`

GetReturnedValidations returns the ReturnedValidations field if non-nil, zero value otherwise.

### GetReturnedValidationsOk

`func (o *CombineShareValidationsDetails) GetReturnedValidationsOk() (*[]ValidationReturnType, bool)`

GetReturnedValidationsOk returns a tuple with the ReturnedValidations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnedValidations

`func (o *CombineShareValidationsDetails) SetReturnedValidations(v []ValidationReturnType)`

SetReturnedValidations sets ReturnedValidations field to given value.

### HasReturnedValidations

`func (o *CombineShareValidationsDetails) HasReturnedValidations() bool`

HasReturnedValidations returns a boolean if a field has been set.

### GetWarnings

`func (o *CombineShareValidationsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CombineShareValidationsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CombineShareValidationsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CombineShareValidationsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


