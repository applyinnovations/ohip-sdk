# EventsResources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventsResourcesList** | Pointer to [**[]EventInfoType**](EventInfoType.md) | Event resource information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewEventsResources

`func NewEventsResources() *EventsResources`

NewEventsResources instantiates a new EventsResources object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventsResourcesWithDefaults

`func NewEventsResourcesWithDefaults() *EventsResources`

NewEventsResourcesWithDefaults instantiates a new EventsResources object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventsResourcesList

`func (o *EventsResources) GetEventsResourcesList() []EventInfoType`

GetEventsResourcesList returns the EventsResourcesList field if non-nil, zero value otherwise.

### GetEventsResourcesListOk

`func (o *EventsResources) GetEventsResourcesListOk() (*[]EventInfoType, bool)`

GetEventsResourcesListOk returns a tuple with the EventsResourcesList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsResourcesList

`func (o *EventsResources) SetEventsResourcesList(v []EventInfoType)`

SetEventsResourcesList sets EventsResourcesList field to given value.

### HasEventsResourcesList

`func (o *EventsResources) HasEventsResourcesList() bool`

HasEventsResourcesList returns a boolean if a field has been set.

### GetLinks

`func (o *EventsResources) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EventsResources) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EventsResources) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EventsResources) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *EventsResources) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EventsResources) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EventsResources) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EventsResources) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


