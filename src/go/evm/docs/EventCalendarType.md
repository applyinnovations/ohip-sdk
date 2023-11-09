# EventCalendarType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventCodes** | Pointer to [**EventCodeDetailListType**](EventCodeDetailListType.md) |  | [optional] 
**EventSpace** | Pointer to [**[]EventSpaceScheduleType**](EventSpaceScheduleType.md) | Collection of the Events Booked/Scheduled for the function space/functionSpaceDetails for the particular time period. | [optional] 
**PageIndex** | Pointer to **int32** | Current Page the group of Rooms is included in. | [optional] 
**RecordsPerPage** | Pointer to **int32** | Number of records per page. | [optional] 
**SellMessages** | Pointer to [**SellMessagesType**](SellMessagesType.md) |  | [optional] 
**TotalRooms** | Pointer to **int32** | Total Number of Rooms. | [optional] 

## Methods

### NewEventCalendarType

`func NewEventCalendarType() *EventCalendarType`

NewEventCalendarType instantiates a new EventCalendarType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventCalendarTypeWithDefaults

`func NewEventCalendarTypeWithDefaults() *EventCalendarType`

NewEventCalendarTypeWithDefaults instantiates a new EventCalendarType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventCodes

`func (o *EventCalendarType) GetEventCodes() EventCodeDetailListType`

GetEventCodes returns the EventCodes field if non-nil, zero value otherwise.

### GetEventCodesOk

`func (o *EventCalendarType) GetEventCodesOk() (*EventCodeDetailListType, bool)`

GetEventCodesOk returns a tuple with the EventCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventCodes

`func (o *EventCalendarType) SetEventCodes(v EventCodeDetailListType)`

SetEventCodes sets EventCodes field to given value.

### HasEventCodes

`func (o *EventCalendarType) HasEventCodes() bool`

HasEventCodes returns a boolean if a field has been set.

### GetEventSpace

`func (o *EventCalendarType) GetEventSpace() []EventSpaceScheduleType`

GetEventSpace returns the EventSpace field if non-nil, zero value otherwise.

### GetEventSpaceOk

`func (o *EventCalendarType) GetEventSpaceOk() (*[]EventSpaceScheduleType, bool)`

GetEventSpaceOk returns a tuple with the EventSpace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventSpace

`func (o *EventCalendarType) SetEventSpace(v []EventSpaceScheduleType)`

SetEventSpace sets EventSpace field to given value.

### HasEventSpace

`func (o *EventCalendarType) HasEventSpace() bool`

HasEventSpace returns a boolean if a field has been set.

### GetPageIndex

`func (o *EventCalendarType) GetPageIndex() int32`

GetPageIndex returns the PageIndex field if non-nil, zero value otherwise.

### GetPageIndexOk

`func (o *EventCalendarType) GetPageIndexOk() (*int32, bool)`

GetPageIndexOk returns a tuple with the PageIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageIndex

`func (o *EventCalendarType) SetPageIndex(v int32)`

SetPageIndex sets PageIndex field to given value.

### HasPageIndex

`func (o *EventCalendarType) HasPageIndex() bool`

HasPageIndex returns a boolean if a field has been set.

### GetRecordsPerPage

`func (o *EventCalendarType) GetRecordsPerPage() int32`

GetRecordsPerPage returns the RecordsPerPage field if non-nil, zero value otherwise.

### GetRecordsPerPageOk

`func (o *EventCalendarType) GetRecordsPerPageOk() (*int32, bool)`

GetRecordsPerPageOk returns a tuple with the RecordsPerPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordsPerPage

`func (o *EventCalendarType) SetRecordsPerPage(v int32)`

SetRecordsPerPage sets RecordsPerPage field to given value.

### HasRecordsPerPage

`func (o *EventCalendarType) HasRecordsPerPage() bool`

HasRecordsPerPage returns a boolean if a field has been set.

### GetSellMessages

`func (o *EventCalendarType) GetSellMessages() SellMessagesType`

GetSellMessages returns the SellMessages field if non-nil, zero value otherwise.

### GetSellMessagesOk

`func (o *EventCalendarType) GetSellMessagesOk() (*SellMessagesType, bool)`

GetSellMessagesOk returns a tuple with the SellMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellMessages

`func (o *EventCalendarType) SetSellMessages(v SellMessagesType)`

SetSellMessages sets SellMessages field to given value.

### HasSellMessages

`func (o *EventCalendarType) HasSellMessages() bool`

HasSellMessages returns a boolean if a field has been set.

### GetTotalRooms

`func (o *EventCalendarType) GetTotalRooms() int32`

GetTotalRooms returns the TotalRooms field if non-nil, zero value otherwise.

### GetTotalRoomsOk

`func (o *EventCalendarType) GetTotalRoomsOk() (*int32, bool)`

GetTotalRoomsOk returns a tuple with the TotalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRooms

`func (o *EventCalendarType) SetTotalRooms(v int32)`

SetTotalRooms sets TotalRooms field to given value.

### HasTotalRooms

`func (o *EventCalendarType) HasTotalRooms() bool`

HasTotalRooms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


