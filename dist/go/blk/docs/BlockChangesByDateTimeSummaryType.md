# BlockChangesByDateTimeSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The hotel code for changed block by date time. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**BlockCode** | Pointer to **string** | The block code for changed block by date time. | [optional] 
**ExternalIdList** | Pointer to [**[]ExternalIdType**](ExternalIdType.md) | List of external references. | [optional] 
**StartDate** | Pointer to **string** | The start date for changed block by date time. | [optional] 
**EndDate** | Pointer to **string** | The end date for changed block by date time. | [optional] 
**RoomStatus** | Pointer to **string** | The booking status of the block. | [optional] 
**CateringStatus** | Pointer to **string** | Status of the block and all its events. | [optional] 
**LastChangeDateTime** | Pointer to **string** | Last change date and time for this block. | [optional] 
**ActionType** | Pointer to [**TransactionActionEnumType**](TransactionActionEnumType.md) |  | [optional] 
**EventsChanged** | Pointer to **bool** | Indicates whether there are any catering events, linked to the business block, that have been changed, deleted, or created within the timeframe. | [optional] 

## Methods

### NewBlockChangesByDateTimeSummaryType

`func NewBlockChangesByDateTimeSummaryType() *BlockChangesByDateTimeSummaryType`

NewBlockChangesByDateTimeSummaryType instantiates a new BlockChangesByDateTimeSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockChangesByDateTimeSummaryTypeWithDefaults

`func NewBlockChangesByDateTimeSummaryTypeWithDefaults() *BlockChangesByDateTimeSummaryType`

NewBlockChangesByDateTimeSummaryTypeWithDefaults instantiates a new BlockChangesByDateTimeSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BlockChangesByDateTimeSummaryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockChangesByDateTimeSummaryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockChangesByDateTimeSummaryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockChangesByDateTimeSummaryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockId

`func (o *BlockChangesByDateTimeSummaryType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BlockChangesByDateTimeSummaryType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BlockChangesByDateTimeSummaryType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BlockChangesByDateTimeSummaryType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetBlockCode

`func (o *BlockChangesByDateTimeSummaryType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *BlockChangesByDateTimeSummaryType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *BlockChangesByDateTimeSummaryType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *BlockChangesByDateTimeSummaryType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetExternalIdList

`func (o *BlockChangesByDateTimeSummaryType) GetExternalIdList() []ExternalIdType`

GetExternalIdList returns the ExternalIdList field if non-nil, zero value otherwise.

### GetExternalIdListOk

`func (o *BlockChangesByDateTimeSummaryType) GetExternalIdListOk() (*[]ExternalIdType, bool)`

GetExternalIdListOk returns a tuple with the ExternalIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalIdList

`func (o *BlockChangesByDateTimeSummaryType) SetExternalIdList(v []ExternalIdType)`

SetExternalIdList sets ExternalIdList field to given value.

### HasExternalIdList

`func (o *BlockChangesByDateTimeSummaryType) HasExternalIdList() bool`

HasExternalIdList returns a boolean if a field has been set.

### GetStartDate

`func (o *BlockChangesByDateTimeSummaryType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *BlockChangesByDateTimeSummaryType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *BlockChangesByDateTimeSummaryType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *BlockChangesByDateTimeSummaryType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *BlockChangesByDateTimeSummaryType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *BlockChangesByDateTimeSummaryType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *BlockChangesByDateTimeSummaryType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *BlockChangesByDateTimeSummaryType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetRoomStatus

`func (o *BlockChangesByDateTimeSummaryType) GetRoomStatus() string`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *BlockChangesByDateTimeSummaryType) GetRoomStatusOk() (*string, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *BlockChangesByDateTimeSummaryType) SetRoomStatus(v string)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *BlockChangesByDateTimeSummaryType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetCateringStatus

`func (o *BlockChangesByDateTimeSummaryType) GetCateringStatus() string`

GetCateringStatus returns the CateringStatus field if non-nil, zero value otherwise.

### GetCateringStatusOk

`func (o *BlockChangesByDateTimeSummaryType) GetCateringStatusOk() (*string, bool)`

GetCateringStatusOk returns a tuple with the CateringStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatus

`func (o *BlockChangesByDateTimeSummaryType) SetCateringStatus(v string)`

SetCateringStatus sets CateringStatus field to given value.

### HasCateringStatus

`func (o *BlockChangesByDateTimeSummaryType) HasCateringStatus() bool`

HasCateringStatus returns a boolean if a field has been set.

### GetLastChangeDateTime

`func (o *BlockChangesByDateTimeSummaryType) GetLastChangeDateTime() string`

GetLastChangeDateTime returns the LastChangeDateTime field if non-nil, zero value otherwise.

### GetLastChangeDateTimeOk

`func (o *BlockChangesByDateTimeSummaryType) GetLastChangeDateTimeOk() (*string, bool)`

GetLastChangeDateTimeOk returns a tuple with the LastChangeDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastChangeDateTime

`func (o *BlockChangesByDateTimeSummaryType) SetLastChangeDateTime(v string)`

SetLastChangeDateTime sets LastChangeDateTime field to given value.

### HasLastChangeDateTime

`func (o *BlockChangesByDateTimeSummaryType) HasLastChangeDateTime() bool`

HasLastChangeDateTime returns a boolean if a field has been set.

### GetActionType

`func (o *BlockChangesByDateTimeSummaryType) GetActionType() TransactionActionEnumType`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *BlockChangesByDateTimeSummaryType) GetActionTypeOk() (*TransactionActionEnumType, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *BlockChangesByDateTimeSummaryType) SetActionType(v TransactionActionEnumType)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *BlockChangesByDateTimeSummaryType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetEventsChanged

`func (o *BlockChangesByDateTimeSummaryType) GetEventsChanged() bool`

GetEventsChanged returns the EventsChanged field if non-nil, zero value otherwise.

### GetEventsChangedOk

`func (o *BlockChangesByDateTimeSummaryType) GetEventsChangedOk() (*bool, bool)`

GetEventsChangedOk returns a tuple with the EventsChanged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsChanged

`func (o *BlockChangesByDateTimeSummaryType) SetEventsChanged(v bool)`

SetEventsChanged sets EventsChanged field to given value.

### HasEventsChanged

`func (o *BlockChangesByDateTimeSummaryType) HasEventsChanged() bool`

HasEventsChanged returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


