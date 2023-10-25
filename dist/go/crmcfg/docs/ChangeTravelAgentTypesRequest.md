# ChangeTravelAgentTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TravelAgentTypes** | Pointer to [**[]TravelAgentTypeType**](TravelAgentTypeType.md) | List of Travel Agent Types. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTravelAgentTypesRequest

`func NewChangeTravelAgentTypesRequest() *ChangeTravelAgentTypesRequest`

NewChangeTravelAgentTypesRequest instantiates a new ChangeTravelAgentTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTravelAgentTypesRequestWithDefaults

`func NewChangeTravelAgentTypesRequestWithDefaults() *ChangeTravelAgentTypesRequest`

NewChangeTravelAgentTypesRequestWithDefaults instantiates a new ChangeTravelAgentTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTravelAgentTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTravelAgentTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTravelAgentTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTravelAgentTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTravelAgentTypes

`func (o *ChangeTravelAgentTypesRequest) GetTravelAgentTypes() []TravelAgentTypeType`

GetTravelAgentTypes returns the TravelAgentTypes field if non-nil, zero value otherwise.

### GetTravelAgentTypesOk

`func (o *ChangeTravelAgentTypesRequest) GetTravelAgentTypesOk() (*[]TravelAgentTypeType, bool)`

GetTravelAgentTypesOk returns a tuple with the TravelAgentTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTravelAgentTypes

`func (o *ChangeTravelAgentTypesRequest) SetTravelAgentTypes(v []TravelAgentTypeType)`

SetTravelAgentTypes sets TravelAgentTypes field to given value.

### HasTravelAgentTypes

`func (o *ChangeTravelAgentTypesRequest) HasTravelAgentTypes() bool`

HasTravelAgentTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTravelAgentTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTravelAgentTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTravelAgentTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTravelAgentTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


