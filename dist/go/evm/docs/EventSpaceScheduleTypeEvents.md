# EventSpaceScheduleTypeEvents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RelatedEvents** | Pointer to **string** | Collection of the Refernced event ids for the Function Space | [optional] 
**Event** | Pointer to [**[]CalendarEventInfoType**](CalendarEventInfoType.md) | Collection of the Events Booked/Scheduled for the function space/functionSpaceDetails for the particular time period. | [optional] 

## Methods

### NewEventSpaceScheduleTypeEvents

`func NewEventSpaceScheduleTypeEvents() *EventSpaceScheduleTypeEvents`

NewEventSpaceScheduleTypeEvents instantiates a new EventSpaceScheduleTypeEvents object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventSpaceScheduleTypeEventsWithDefaults

`func NewEventSpaceScheduleTypeEventsWithDefaults() *EventSpaceScheduleTypeEvents`

NewEventSpaceScheduleTypeEventsWithDefaults instantiates a new EventSpaceScheduleTypeEvents object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRelatedEvents

`func (o *EventSpaceScheduleTypeEvents) GetRelatedEvents() string`

GetRelatedEvents returns the RelatedEvents field if non-nil, zero value otherwise.

### GetRelatedEventsOk

`func (o *EventSpaceScheduleTypeEvents) GetRelatedEventsOk() (*string, bool)`

GetRelatedEventsOk returns a tuple with the RelatedEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedEvents

`func (o *EventSpaceScheduleTypeEvents) SetRelatedEvents(v string)`

SetRelatedEvents sets RelatedEvents field to given value.

### HasRelatedEvents

`func (o *EventSpaceScheduleTypeEvents) HasRelatedEvents() bool`

HasRelatedEvents returns a boolean if a field has been set.

### GetEvent

`func (o *EventSpaceScheduleTypeEvents) GetEvent() []CalendarEventInfoType`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *EventSpaceScheduleTypeEvents) GetEventOk() (*[]CalendarEventInfoType, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *EventSpaceScheduleTypeEvents) SetEvent(v []CalendarEventInfoType)`

SetEvent sets Event field to given value.

### HasEvent

`func (o *EventSpaceScheduleTypeEvents) HasEvent() bool`

HasEvent returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


