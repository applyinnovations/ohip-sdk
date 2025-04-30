# Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventDetails** | Pointer to [**[]EventInfoType**](EventInfoType.md) | Pertain event information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewEvent

`func NewEvent() *Event`

NewEvent instantiates a new Event object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventWithDefaults

`func NewEventWithDefaults() *Event`

NewEventWithDefaults instantiates a new Event object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventDetails

`func (o *Event) GetEventDetails() []EventInfoType`

GetEventDetails returns the EventDetails field if non-nil, zero value otherwise.

### GetEventDetailsOk

`func (o *Event) GetEventDetailsOk() (*[]EventInfoType, bool)`

GetEventDetailsOk returns a tuple with the EventDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDetails

`func (o *Event) SetEventDetails(v []EventInfoType)`

SetEventDetails sets EventDetails field to given value.

### HasEventDetails

`func (o *Event) HasEventDetails() bool`

HasEventDetails returns a boolean if a field has been set.

### GetLinks

`func (o *Event) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Event) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Event) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Event) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Event) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Event) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Event) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Event) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


