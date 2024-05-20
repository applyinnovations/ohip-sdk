# WashCodeDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DaysPriorToArrival** | Pointer to **int32** | Number of days prior to arrival of a block or block&#39;s cutoff day. | [optional] 
**WashByPercent** | Pointer to **int32** |  | [optional] 
**WashByRoom** | Pointer to [**WashByRoomType**](WashByRoomType.md) |  | [optional] 

## Methods

### NewWashCodeDetailType

`func NewWashCodeDetailType() *WashCodeDetailType`

NewWashCodeDetailType instantiates a new WashCodeDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWashCodeDetailTypeWithDefaults

`func NewWashCodeDetailTypeWithDefaults() *WashCodeDetailType`

NewWashCodeDetailTypeWithDefaults instantiates a new WashCodeDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDaysPriorToArrival

`func (o *WashCodeDetailType) GetDaysPriorToArrival() int32`

GetDaysPriorToArrival returns the DaysPriorToArrival field if non-nil, zero value otherwise.

### GetDaysPriorToArrivalOk

`func (o *WashCodeDetailType) GetDaysPriorToArrivalOk() (*int32, bool)`

GetDaysPriorToArrivalOk returns a tuple with the DaysPriorToArrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysPriorToArrival

`func (o *WashCodeDetailType) SetDaysPriorToArrival(v int32)`

SetDaysPriorToArrival sets DaysPriorToArrival field to given value.

### HasDaysPriorToArrival

`func (o *WashCodeDetailType) HasDaysPriorToArrival() bool`

HasDaysPriorToArrival returns a boolean if a field has been set.

### GetWashByPercent

`func (o *WashCodeDetailType) GetWashByPercent() int32`

GetWashByPercent returns the WashByPercent field if non-nil, zero value otherwise.

### GetWashByPercentOk

`func (o *WashCodeDetailType) GetWashByPercentOk() (*int32, bool)`

GetWashByPercentOk returns a tuple with the WashByPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWashByPercent

`func (o *WashCodeDetailType) SetWashByPercent(v int32)`

SetWashByPercent sets WashByPercent field to given value.

### HasWashByPercent

`func (o *WashCodeDetailType) HasWashByPercent() bool`

HasWashByPercent returns a boolean if a field has been set.

### GetWashByRoom

`func (o *WashCodeDetailType) GetWashByRoom() WashByRoomType`

GetWashByRoom returns the WashByRoom field if non-nil, zero value otherwise.

### GetWashByRoomOk

`func (o *WashCodeDetailType) GetWashByRoomOk() (*WashByRoomType, bool)`

GetWashByRoomOk returns a tuple with the WashByRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWashByRoom

`func (o *WashCodeDetailType) SetWashByRoom(v WashByRoomType)`

SetWashByRoom sets WashByRoom field to given value.

### HasWashByRoom

`func (o *WashCodeDetailType) HasWashByRoom() bool`

HasWashByRoom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


