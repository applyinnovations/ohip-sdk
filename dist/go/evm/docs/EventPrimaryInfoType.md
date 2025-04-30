# EventPrimaryInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventId** | Pointer to [**EventId**](EventId.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code where event will be organized. | [optional] 
**IncludeSubEvents** | Pointer to **bool** | Indicates whether to delete/inactive the sub event(s) of the master event. | [optional] 

## Methods

### NewEventPrimaryInfoType

`func NewEventPrimaryInfoType() *EventPrimaryInfoType`

NewEventPrimaryInfoType instantiates a new EventPrimaryInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventPrimaryInfoTypeWithDefaults

`func NewEventPrimaryInfoTypeWithDefaults() *EventPrimaryInfoType`

NewEventPrimaryInfoTypeWithDefaults instantiates a new EventPrimaryInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventId

`func (o *EventPrimaryInfoType) GetEventId() EventId`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *EventPrimaryInfoType) GetEventIdOk() (*EventId, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *EventPrimaryInfoType) SetEventId(v EventId)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *EventPrimaryInfoType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetHotelId

`func (o *EventPrimaryInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EventPrimaryInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EventPrimaryInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EventPrimaryInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIncludeSubEvents

`func (o *EventPrimaryInfoType) GetIncludeSubEvents() bool`

GetIncludeSubEvents returns the IncludeSubEvents field if non-nil, zero value otherwise.

### GetIncludeSubEventsOk

`func (o *EventPrimaryInfoType) GetIncludeSubEventsOk() (*bool, bool)`

GetIncludeSubEventsOk returns a tuple with the IncludeSubEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeSubEvents

`func (o *EventPrimaryInfoType) SetIncludeSubEvents(v bool)`

SetIncludeSubEvents sets IncludeSubEvents field to given value.

### HasIncludeSubEvents

`func (o *EventPrimaryInfoType) HasIncludeSubEvents() bool`

HasIncludeSubEvents returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


