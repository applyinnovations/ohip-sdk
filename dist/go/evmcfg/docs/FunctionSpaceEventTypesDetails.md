# FunctionSpaceEventTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventTypes** | Pointer to [**[]EventTypeConfigType**](EventTypeConfigType.md) | Collection of Event Type | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFunctionSpaceEventTypesDetails

`func NewFunctionSpaceEventTypesDetails() *FunctionSpaceEventTypesDetails`

NewFunctionSpaceEventTypesDetails instantiates a new FunctionSpaceEventTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceEventTypesDetailsWithDefaults

`func NewFunctionSpaceEventTypesDetailsWithDefaults() *FunctionSpaceEventTypesDetails`

NewFunctionSpaceEventTypesDetailsWithDefaults instantiates a new FunctionSpaceEventTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventTypes

`func (o *FunctionSpaceEventTypesDetails) GetEventTypes() []EventTypeConfigType`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *FunctionSpaceEventTypesDetails) GetEventTypesOk() (*[]EventTypeConfigType, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *FunctionSpaceEventTypesDetails) SetEventTypes(v []EventTypeConfigType)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *FunctionSpaceEventTypesDetails) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetLinks

`func (o *FunctionSpaceEventTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FunctionSpaceEventTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FunctionSpaceEventTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FunctionSpaceEventTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FunctionSpaceEventTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FunctionSpaceEventTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FunctionSpaceEventTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FunctionSpaceEventTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


