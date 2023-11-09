# EventCalendar

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventCalendarDetails** | Pointer to [**EventCalendarType**](EventCalendarType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewEventCalendar

`func NewEventCalendar() *EventCalendar`

NewEventCalendar instantiates a new EventCalendar object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventCalendarWithDefaults

`func NewEventCalendarWithDefaults() *EventCalendar`

NewEventCalendarWithDefaults instantiates a new EventCalendar object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventCalendarDetails

`func (o *EventCalendar) GetEventCalendarDetails() EventCalendarType`

GetEventCalendarDetails returns the EventCalendarDetails field if non-nil, zero value otherwise.

### GetEventCalendarDetailsOk

`func (o *EventCalendar) GetEventCalendarDetailsOk() (*EventCalendarType, bool)`

GetEventCalendarDetailsOk returns a tuple with the EventCalendarDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventCalendarDetails

`func (o *EventCalendar) SetEventCalendarDetails(v EventCalendarType)`

SetEventCalendarDetails sets EventCalendarDetails field to given value.

### HasEventCalendarDetails

`func (o *EventCalendar) HasEventCalendarDetails() bool`

HasEventCalendarDetails returns a boolean if a field has been set.

### GetLinks

`func (o *EventCalendar) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EventCalendar) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EventCalendar) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EventCalendar) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *EventCalendar) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EventCalendar) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EventCalendar) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EventCalendar) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


