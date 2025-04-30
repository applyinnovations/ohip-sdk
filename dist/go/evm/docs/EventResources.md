# EventResources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**CopyAndMoveEventResourcesType**](CopyAndMoveEventResourcesType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewEventResources

`func NewEventResources() *EventResources`

NewEventResources instantiates a new EventResources object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventResourcesWithDefaults

`func NewEventResourcesWithDefaults() *EventResources`

NewEventResourcesWithDefaults instantiates a new EventResources object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *EventResources) GetCriteria() CopyAndMoveEventResourcesType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *EventResources) GetCriteriaOk() (*CopyAndMoveEventResourcesType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *EventResources) SetCriteria(v CopyAndMoveEventResourcesType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *EventResources) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetWarnings

`func (o *EventResources) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EventResources) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EventResources) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EventResources) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


