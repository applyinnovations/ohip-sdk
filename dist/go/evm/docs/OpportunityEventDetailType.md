# OpportunityEventDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attendees** | Pointer to [**CateringEventsAttendeesType**](CateringEventsAttendeesType.md) |  | [optional] 
**Day** | Pointer to **string** | Identifies the days for which catering events will be added to the Opportunity Block. | [optional] 
**Doorcard** | Pointer to **string** | It is the group details to display on the outside of a meeting functionSpace Details. | [optional] 
**EventName** | Pointer to [**TranslationTextType60**](TranslationTextType60.md) |  | [optional] 
**EventStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**EventTimeSpan** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**EventType** | Pointer to **string** | Type of event. | [optional] 
**Quantity** | Pointer to **float32** | Identifies the quantity of the event type needed for the particular day, time and space time. | [optional] 

## Methods

### NewOpportunityEventDetailType

`func NewOpportunityEventDetailType() *OpportunityEventDetailType`

NewOpportunityEventDetailType instantiates a new OpportunityEventDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOpportunityEventDetailTypeWithDefaults

`func NewOpportunityEventDetailTypeWithDefaults() *OpportunityEventDetailType`

NewOpportunityEventDetailTypeWithDefaults instantiates a new OpportunityEventDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttendees

`func (o *OpportunityEventDetailType) GetAttendees() CateringEventsAttendeesType`

GetAttendees returns the Attendees field if non-nil, zero value otherwise.

### GetAttendeesOk

`func (o *OpportunityEventDetailType) GetAttendeesOk() (*CateringEventsAttendeesType, bool)`

GetAttendeesOk returns a tuple with the Attendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendees

`func (o *OpportunityEventDetailType) SetAttendees(v CateringEventsAttendeesType)`

SetAttendees sets Attendees field to given value.

### HasAttendees

`func (o *OpportunityEventDetailType) HasAttendees() bool`

HasAttendees returns a boolean if a field has been set.

### GetDay

`func (o *OpportunityEventDetailType) GetDay() string`

GetDay returns the Day field if non-nil, zero value otherwise.

### GetDayOk

`func (o *OpportunityEventDetailType) GetDayOk() (*string, bool)`

GetDayOk returns a tuple with the Day field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDay

`func (o *OpportunityEventDetailType) SetDay(v string)`

SetDay sets Day field to given value.

### HasDay

`func (o *OpportunityEventDetailType) HasDay() bool`

HasDay returns a boolean if a field has been set.

### GetDoorcard

`func (o *OpportunityEventDetailType) GetDoorcard() string`

GetDoorcard returns the Doorcard field if non-nil, zero value otherwise.

### GetDoorcardOk

`func (o *OpportunityEventDetailType) GetDoorcardOk() (*string, bool)`

GetDoorcardOk returns a tuple with the Doorcard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDoorcard

`func (o *OpportunityEventDetailType) SetDoorcard(v string)`

SetDoorcard sets Doorcard field to given value.

### HasDoorcard

`func (o *OpportunityEventDetailType) HasDoorcard() bool`

HasDoorcard returns a boolean if a field has been set.

### GetEventName

`func (o *OpportunityEventDetailType) GetEventName() TranslationTextType60`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *OpportunityEventDetailType) GetEventNameOk() (*TranslationTextType60, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *OpportunityEventDetailType) SetEventName(v TranslationTextType60)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *OpportunityEventDetailType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetEventStatus

`func (o *OpportunityEventDetailType) GetEventStatus() BookingStatusType`

GetEventStatus returns the EventStatus field if non-nil, zero value otherwise.

### GetEventStatusOk

`func (o *OpportunityEventDetailType) GetEventStatusOk() (*BookingStatusType, bool)`

GetEventStatusOk returns a tuple with the EventStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStatus

`func (o *OpportunityEventDetailType) SetEventStatus(v BookingStatusType)`

SetEventStatus sets EventStatus field to given value.

### HasEventStatus

`func (o *OpportunityEventDetailType) HasEventStatus() bool`

HasEventStatus returns a boolean if a field has been set.

### GetEventTimeSpan

`func (o *OpportunityEventDetailType) GetEventTimeSpan() DateTimeSpanType`

GetEventTimeSpan returns the EventTimeSpan field if non-nil, zero value otherwise.

### GetEventTimeSpanOk

`func (o *OpportunityEventDetailType) GetEventTimeSpanOk() (*DateTimeSpanType, bool)`

GetEventTimeSpanOk returns a tuple with the EventTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTimeSpan

`func (o *OpportunityEventDetailType) SetEventTimeSpan(v DateTimeSpanType)`

SetEventTimeSpan sets EventTimeSpan field to given value.

### HasEventTimeSpan

`func (o *OpportunityEventDetailType) HasEventTimeSpan() bool`

HasEventTimeSpan returns a boolean if a field has been set.

### GetEventType

`func (o *OpportunityEventDetailType) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *OpportunityEventDetailType) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *OpportunityEventDetailType) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *OpportunityEventDetailType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetQuantity

`func (o *OpportunityEventDetailType) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *OpportunityEventDetailType) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *OpportunityEventDetailType) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *OpportunityEventDetailType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


