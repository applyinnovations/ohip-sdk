# PropertyTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PropertyTypes** | Pointer to [**[]PropertyTypeType**](PropertyTypeType.md) | List of Property Types. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPropertyTypesDetails

`func NewPropertyTypesDetails() *PropertyTypesDetails`

NewPropertyTypesDetails instantiates a new PropertyTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyTypesDetailsWithDefaults

`func NewPropertyTypesDetailsWithDefaults() *PropertyTypesDetails`

NewPropertyTypesDetailsWithDefaults instantiates a new PropertyTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PropertyTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PropertyTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PropertyTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PropertyTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPropertyTypes

`func (o *PropertyTypesDetails) GetPropertyTypes() []PropertyTypeType`

GetPropertyTypes returns the PropertyTypes field if non-nil, zero value otherwise.

### GetPropertyTypesOk

`func (o *PropertyTypesDetails) GetPropertyTypesOk() (*[]PropertyTypeType, bool)`

GetPropertyTypesOk returns a tuple with the PropertyTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyTypes

`func (o *PropertyTypesDetails) SetPropertyTypes(v []PropertyTypeType)`

SetPropertyTypes sets PropertyTypes field to given value.

### HasPropertyTypes

`func (o *PropertyTypesDetails) HasPropertyTypes() bool`

HasPropertyTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *PropertyTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PropertyTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PropertyTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PropertyTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


