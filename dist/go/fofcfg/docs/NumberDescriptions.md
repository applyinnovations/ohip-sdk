# NumberDescriptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NumberDescriptions** | Pointer to [**[]NumberDescriptionType**](NumberDescriptionType.md) | Individual number and description. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewNumberDescriptions

`func NewNumberDescriptions() *NumberDescriptions`

NewNumberDescriptions instantiates a new NumberDescriptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNumberDescriptionsWithDefaults

`func NewNumberDescriptionsWithDefaults() *NumberDescriptions`

NewNumberDescriptionsWithDefaults instantiates a new NumberDescriptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNumberDescriptions

`func (o *NumberDescriptions) GetNumberDescriptions() []NumberDescriptionType`

GetNumberDescriptions returns the NumberDescriptions field if non-nil, zero value otherwise.

### GetNumberDescriptionsOk

`func (o *NumberDescriptions) GetNumberDescriptionsOk() (*[]NumberDescriptionType, bool)`

GetNumberDescriptionsOk returns a tuple with the NumberDescriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberDescriptions

`func (o *NumberDescriptions) SetNumberDescriptions(v []NumberDescriptionType)`

SetNumberDescriptions sets NumberDescriptions field to given value.

### HasNumberDescriptions

`func (o *NumberDescriptions) HasNumberDescriptions() bool`

HasNumberDescriptions returns a boolean if a field has been set.

### GetLinks

`func (o *NumberDescriptions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *NumberDescriptions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *NumberDescriptions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *NumberDescriptions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *NumberDescriptions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *NumberDescriptions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *NumberDescriptions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *NumberDescriptions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


