# EventRevenueChangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attendees** | Pointer to **int32** | Number of attendees for this event | [optional] 
**BlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ChangeUserInfo** | Pointer to [**LogUserInfoType**](LogUserInfoType.md) |  | [optional] 
**EventChangeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EventDate** | Pointer to **string** | Date of this event | [optional] 
**EventId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EventStatus** | Pointer to **string** | Status of this event | [optional] 
**RevenueChange** | Pointer to [**EventRevenueType**](EventRevenueType.md) |  | [optional] 

## Methods

### NewEventRevenueChangeType

`func NewEventRevenueChangeType() *EventRevenueChangeType`

NewEventRevenueChangeType instantiates a new EventRevenueChangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventRevenueChangeTypeWithDefaults

`func NewEventRevenueChangeTypeWithDefaults() *EventRevenueChangeType`

NewEventRevenueChangeTypeWithDefaults instantiates a new EventRevenueChangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttendees

`func (o *EventRevenueChangeType) GetAttendees() int32`

GetAttendees returns the Attendees field if non-nil, zero value otherwise.

### GetAttendeesOk

`func (o *EventRevenueChangeType) GetAttendeesOk() (*int32, bool)`

GetAttendeesOk returns a tuple with the Attendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendees

`func (o *EventRevenueChangeType) SetAttendees(v int32)`

SetAttendees sets Attendees field to given value.

### HasAttendees

`func (o *EventRevenueChangeType) HasAttendees() bool`

HasAttendees returns a boolean if a field has been set.

### GetBlockId

`func (o *EventRevenueChangeType) GetBlockId() UniqueIDType`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *EventRevenueChangeType) GetBlockIdOk() (*UniqueIDType, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *EventRevenueChangeType) SetBlockId(v UniqueIDType)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *EventRevenueChangeType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetChangeUserInfo

`func (o *EventRevenueChangeType) GetChangeUserInfo() LogUserInfoType`

GetChangeUserInfo returns the ChangeUserInfo field if non-nil, zero value otherwise.

### GetChangeUserInfoOk

`func (o *EventRevenueChangeType) GetChangeUserInfoOk() (*LogUserInfoType, bool)`

GetChangeUserInfoOk returns a tuple with the ChangeUserInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeUserInfo

`func (o *EventRevenueChangeType) SetChangeUserInfo(v LogUserInfoType)`

SetChangeUserInfo sets ChangeUserInfo field to given value.

### HasChangeUserInfo

`func (o *EventRevenueChangeType) HasChangeUserInfo() bool`

HasChangeUserInfo returns a boolean if a field has been set.

### GetEventChangeId

`func (o *EventRevenueChangeType) GetEventChangeId() UniqueIDType`

GetEventChangeId returns the EventChangeId field if non-nil, zero value otherwise.

### GetEventChangeIdOk

`func (o *EventRevenueChangeType) GetEventChangeIdOk() (*UniqueIDType, bool)`

GetEventChangeIdOk returns a tuple with the EventChangeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventChangeId

`func (o *EventRevenueChangeType) SetEventChangeId(v UniqueIDType)`

SetEventChangeId sets EventChangeId field to given value.

### HasEventChangeId

`func (o *EventRevenueChangeType) HasEventChangeId() bool`

HasEventChangeId returns a boolean if a field has been set.

### GetEventDate

`func (o *EventRevenueChangeType) GetEventDate() string`

GetEventDate returns the EventDate field if non-nil, zero value otherwise.

### GetEventDateOk

`func (o *EventRevenueChangeType) GetEventDateOk() (*string, bool)`

GetEventDateOk returns a tuple with the EventDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDate

`func (o *EventRevenueChangeType) SetEventDate(v string)`

SetEventDate sets EventDate field to given value.

### HasEventDate

`func (o *EventRevenueChangeType) HasEventDate() bool`

HasEventDate returns a boolean if a field has been set.

### GetEventId

`func (o *EventRevenueChangeType) GetEventId() UniqueIDType`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *EventRevenueChangeType) GetEventIdOk() (*UniqueIDType, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *EventRevenueChangeType) SetEventId(v UniqueIDType)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *EventRevenueChangeType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetEventStatus

`func (o *EventRevenueChangeType) GetEventStatus() string`

GetEventStatus returns the EventStatus field if non-nil, zero value otherwise.

### GetEventStatusOk

`func (o *EventRevenueChangeType) GetEventStatusOk() (*string, bool)`

GetEventStatusOk returns a tuple with the EventStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStatus

`func (o *EventRevenueChangeType) SetEventStatus(v string)`

SetEventStatus sets EventStatus field to given value.

### HasEventStatus

`func (o *EventRevenueChangeType) HasEventStatus() bool`

HasEventStatus returns a boolean if a field has been set.

### GetRevenueChange

`func (o *EventRevenueChangeType) GetRevenueChange() EventRevenueType`

GetRevenueChange returns the RevenueChange field if non-nil, zero value otherwise.

### GetRevenueChangeOk

`func (o *EventRevenueChangeType) GetRevenueChangeOk() (*EventRevenueType, bool)`

GetRevenueChangeOk returns a tuple with the RevenueChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueChange

`func (o *EventRevenueChangeType) SetRevenueChange(v EventRevenueType)`

SetRevenueChange sets RevenueChange field to given value.

### HasRevenueChange

`func (o *EventRevenueChangeType) HasRevenueChange() bool`

HasRevenueChange returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


