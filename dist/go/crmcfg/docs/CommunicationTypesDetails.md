# CommunicationTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommunicationTypes** | Pointer to [**[]CommunicationTypeType**](CommunicationTypeType.md) | Communication Type details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCommunicationTypesDetails

`func NewCommunicationTypesDetails() *CommunicationTypesDetails`

NewCommunicationTypesDetails instantiates a new CommunicationTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunicationTypesDetailsWithDefaults

`func NewCommunicationTypesDetailsWithDefaults() *CommunicationTypesDetails`

NewCommunicationTypesDetailsWithDefaults instantiates a new CommunicationTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommunicationTypes

`func (o *CommunicationTypesDetails) GetCommunicationTypes() []CommunicationTypeType`

GetCommunicationTypes returns the CommunicationTypes field if non-nil, zero value otherwise.

### GetCommunicationTypesOk

`func (o *CommunicationTypesDetails) GetCommunicationTypesOk() (*[]CommunicationTypeType, bool)`

GetCommunicationTypesOk returns a tuple with the CommunicationTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationTypes

`func (o *CommunicationTypesDetails) SetCommunicationTypes(v []CommunicationTypeType)`

SetCommunicationTypes sets CommunicationTypes field to given value.

### HasCommunicationTypes

`func (o *CommunicationTypesDetails) HasCommunicationTypes() bool`

HasCommunicationTypes returns a boolean if a field has been set.

### GetLinks

`func (o *CommunicationTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CommunicationTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CommunicationTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CommunicationTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CommunicationTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CommunicationTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CommunicationTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CommunicationTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


