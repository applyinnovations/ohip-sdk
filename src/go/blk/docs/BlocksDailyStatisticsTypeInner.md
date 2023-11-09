# BlocksDailyStatisticsTypeInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockCode** | Pointer to **string** | Block code for the block. | [optional] 
**BlockIdList** | Pointer to [**BlockIdList**](BlockIdList.md) |  | [optional] 
**BlockName** | Pointer to **string** | Name of the block. | [optional] 
**HotelId** | Pointer to **string** | The Hotel Code the block belongs to. | [optional] 
**StayDates** | Pointer to [**[]BlockDailyStatisticsDatesType**](BlockDailyStatisticsDatesType.md) | Collection of daily statistics per allotment date. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewBlocksDailyStatisticsTypeInner

`func NewBlocksDailyStatisticsTypeInner() *BlocksDailyStatisticsTypeInner`

NewBlocksDailyStatisticsTypeInner instantiates a new BlocksDailyStatisticsTypeInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlocksDailyStatisticsTypeInnerWithDefaults

`func NewBlocksDailyStatisticsTypeInnerWithDefaults() *BlocksDailyStatisticsTypeInner`

NewBlocksDailyStatisticsTypeInnerWithDefaults instantiates a new BlocksDailyStatisticsTypeInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockCode

`func (o *BlocksDailyStatisticsTypeInner) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *BlocksDailyStatisticsTypeInner) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *BlocksDailyStatisticsTypeInner) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *BlocksDailyStatisticsTypeInner) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetBlockIdList

`func (o *BlocksDailyStatisticsTypeInner) GetBlockIdList() BlockIdList`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *BlocksDailyStatisticsTypeInner) GetBlockIdListOk() (*BlockIdList, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *BlocksDailyStatisticsTypeInner) SetBlockIdList(v BlockIdList)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *BlocksDailyStatisticsTypeInner) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetBlockName

`func (o *BlocksDailyStatisticsTypeInner) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *BlocksDailyStatisticsTypeInner) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *BlocksDailyStatisticsTypeInner) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *BlocksDailyStatisticsTypeInner) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetHotelId

`func (o *BlocksDailyStatisticsTypeInner) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlocksDailyStatisticsTypeInner) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlocksDailyStatisticsTypeInner) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlocksDailyStatisticsTypeInner) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetStayDates

`func (o *BlocksDailyStatisticsTypeInner) GetStayDates() []BlockDailyStatisticsDatesType`

GetStayDates returns the StayDates field if non-nil, zero value otherwise.

### GetStayDatesOk

`func (o *BlocksDailyStatisticsTypeInner) GetStayDatesOk() (*[]BlockDailyStatisticsDatesType, bool)`

GetStayDatesOk returns a tuple with the StayDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDates

`func (o *BlocksDailyStatisticsTypeInner) SetStayDates(v []BlockDailyStatisticsDatesType)`

SetStayDates sets StayDates field to given value.

### HasStayDates

`func (o *BlocksDailyStatisticsTypeInner) HasStayDates() bool`

HasStayDates returns a boolean if a field has been set.

### GetTimeSpan

`func (o *BlocksDailyStatisticsTypeInner) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *BlocksDailyStatisticsTypeInner) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *BlocksDailyStatisticsTypeInner) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *BlocksDailyStatisticsTypeInner) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


