# EventChangesByDateTimeSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The hotel code for changed event by date time. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**EventId** | Pointer to [**EventId**](EventId.md) |  | [optional] 
**StartDate** | Pointer to **string** | The start date for changed event by date time. | [optional] 
**EndDate** | Pointer to **string** | The end date for changed event by date time. | [optional] 
**EventStatus** | Pointer to **string** | Status of the event. | [optional] 
**LastChangeDateTime** | Pointer to **string** | Last change date and time for this event. | [optional] 
**ActionType** | Pointer to [**TransactionActionEnumType**](TransactionActionEnumType.md) |  | [optional] 

## Methods

### NewEventChangesByDateTimeSummaryType

`func NewEventChangesByDateTimeSummaryType() *EventChangesByDateTimeSummaryType`

NewEventChangesByDateTimeSummaryType instantiates a new EventChangesByDateTimeSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventChangesByDateTimeSummaryTypeWithDefaults

`func NewEventChangesByDateTimeSummaryTypeWithDefaults() *EventChangesByDateTimeSummaryType`

NewEventChangesByDateTimeSummaryTypeWithDefaults instantiates a new EventChangesByDateTimeSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *EventChangesByDateTimeSummaryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EventChangesByDateTimeSummaryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EventChangesByDateTimeSummaryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EventChangesByDateTimeSummaryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockId

`func (o *EventChangesByDateTimeSummaryType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *EventChangesByDateTimeSummaryType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *EventChangesByDateTimeSummaryType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *EventChangesByDateTimeSummaryType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetEventId

`func (o *EventChangesByDateTimeSummaryType) GetEventId() EventId`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *EventChangesByDateTimeSummaryType) GetEventIdOk() (*EventId, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *EventChangesByDateTimeSummaryType) SetEventId(v EventId)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *EventChangesByDateTimeSummaryType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetStartDate

`func (o *EventChangesByDateTimeSummaryType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *EventChangesByDateTimeSummaryType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *EventChangesByDateTimeSummaryType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *EventChangesByDateTimeSummaryType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *EventChangesByDateTimeSummaryType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *EventChangesByDateTimeSummaryType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *EventChangesByDateTimeSummaryType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *EventChangesByDateTimeSummaryType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetEventStatus

`func (o *EventChangesByDateTimeSummaryType) GetEventStatus() string`

GetEventStatus returns the EventStatus field if non-nil, zero value otherwise.

### GetEventStatusOk

`func (o *EventChangesByDateTimeSummaryType) GetEventStatusOk() (*string, bool)`

GetEventStatusOk returns a tuple with the EventStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStatus

`func (o *EventChangesByDateTimeSummaryType) SetEventStatus(v string)`

SetEventStatus sets EventStatus field to given value.

### HasEventStatus

`func (o *EventChangesByDateTimeSummaryType) HasEventStatus() bool`

HasEventStatus returns a boolean if a field has been set.

### GetLastChangeDateTime

`func (o *EventChangesByDateTimeSummaryType) GetLastChangeDateTime() string`

GetLastChangeDateTime returns the LastChangeDateTime field if non-nil, zero value otherwise.

### GetLastChangeDateTimeOk

`func (o *EventChangesByDateTimeSummaryType) GetLastChangeDateTimeOk() (*string, bool)`

GetLastChangeDateTimeOk returns a tuple with the LastChangeDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastChangeDateTime

`func (o *EventChangesByDateTimeSummaryType) SetLastChangeDateTime(v string)`

SetLastChangeDateTime sets LastChangeDateTime field to given value.

### HasLastChangeDateTime

`func (o *EventChangesByDateTimeSummaryType) HasLastChangeDateTime() bool`

HasLastChangeDateTime returns a boolean if a field has been set.

### GetActionType

`func (o *EventChangesByDateTimeSummaryType) GetActionType() TransactionActionEnumType`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *EventChangesByDateTimeSummaryType) GetActionTypeOk() (*TransactionActionEnumType, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *EventChangesByDateTimeSummaryType) SetActionType(v TransactionActionEnumType)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *EventChangesByDateTimeSummaryType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


