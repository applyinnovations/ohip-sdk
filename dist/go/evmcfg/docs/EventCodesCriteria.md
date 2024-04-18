# EventCodesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventCodes** | Pointer to [**[]EventCodeType**](EventCodeType.md) | Details for Event Code at hotel level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewEventCodesCriteria

`func NewEventCodesCriteria() *EventCodesCriteria`

NewEventCodesCriteria instantiates a new EventCodesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventCodesCriteriaWithDefaults

`func NewEventCodesCriteriaWithDefaults() *EventCodesCriteria`

NewEventCodesCriteriaWithDefaults instantiates a new EventCodesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventCodes

`func (o *EventCodesCriteria) GetEventCodes() []EventCodeType`

GetEventCodes returns the EventCodes field if non-nil, zero value otherwise.

### GetEventCodesOk

`func (o *EventCodesCriteria) GetEventCodesOk() (*[]EventCodeType, bool)`

GetEventCodesOk returns a tuple with the EventCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventCodes

`func (o *EventCodesCriteria) SetEventCodes(v []EventCodeType)`

SetEventCodes sets EventCodes field to given value.

### HasEventCodes

`func (o *EventCodesCriteria) HasEventCodes() bool`

HasEventCodes returns a boolean if a field has been set.

### GetLinks

`func (o *EventCodesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EventCodesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EventCodesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EventCodesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *EventCodesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EventCodesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EventCodesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EventCodesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


