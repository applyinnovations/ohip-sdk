# TravelAgentTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TravelAgentTypes** | Pointer to [**[]TravelAgentTypeType**](TravelAgentTypeType.md) | List of Travel Agent Types. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTravelAgentTypesDetails

`func NewTravelAgentTypesDetails() *TravelAgentTypesDetails`

NewTravelAgentTypesDetails instantiates a new TravelAgentTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTravelAgentTypesDetailsWithDefaults

`func NewTravelAgentTypesDetailsWithDefaults() *TravelAgentTypesDetails`

NewTravelAgentTypesDetailsWithDefaults instantiates a new TravelAgentTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TravelAgentTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TravelAgentTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TravelAgentTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TravelAgentTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTravelAgentTypes

`func (o *TravelAgentTypesDetails) GetTravelAgentTypes() []TravelAgentTypeType`

GetTravelAgentTypes returns the TravelAgentTypes field if non-nil, zero value otherwise.

### GetTravelAgentTypesOk

`func (o *TravelAgentTypesDetails) GetTravelAgentTypesOk() (*[]TravelAgentTypeType, bool)`

GetTravelAgentTypesOk returns a tuple with the TravelAgentTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTravelAgentTypes

`func (o *TravelAgentTypesDetails) SetTravelAgentTypes(v []TravelAgentTypeType)`

SetTravelAgentTypes sets TravelAgentTypes field to given value.

### HasTravelAgentTypes

`func (o *TravelAgentTypesDetails) HasTravelAgentTypes() bool`

HasTravelAgentTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *TravelAgentTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TravelAgentTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TravelAgentTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TravelAgentTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


