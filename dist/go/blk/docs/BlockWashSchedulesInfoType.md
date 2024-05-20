# BlockWashSchedulesInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**BlockWashSchedules** | Pointer to [**[]BlockWashScheduleType**](BlockWashScheduleType.md) | Wash Schedule attached to the block, which allows to release inventory based on selected wash schedule type. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code to which the block wash schedules will be created/ changed. | [optional] 

## Methods

### NewBlockWashSchedulesInfoType

`func NewBlockWashSchedulesInfoType() *BlockWashSchedulesInfoType`

NewBlockWashSchedulesInfoType instantiates a new BlockWashSchedulesInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockWashSchedulesInfoTypeWithDefaults

`func NewBlockWashSchedulesInfoTypeWithDefaults() *BlockWashSchedulesInfoType`

NewBlockWashSchedulesInfoTypeWithDefaults instantiates a new BlockWashSchedulesInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *BlockWashSchedulesInfoType) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *BlockWashSchedulesInfoType) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *BlockWashSchedulesInfoType) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *BlockWashSchedulesInfoType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetBlockWashSchedules

`func (o *BlockWashSchedulesInfoType) GetBlockWashSchedules() []BlockWashScheduleType`

GetBlockWashSchedules returns the BlockWashSchedules field if non-nil, zero value otherwise.

### GetBlockWashSchedulesOk

`func (o *BlockWashSchedulesInfoType) GetBlockWashSchedulesOk() (*[]BlockWashScheduleType, bool)`

GetBlockWashSchedulesOk returns a tuple with the BlockWashSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockWashSchedules

`func (o *BlockWashSchedulesInfoType) SetBlockWashSchedules(v []BlockWashScheduleType)`

SetBlockWashSchedules sets BlockWashSchedules field to given value.

### HasBlockWashSchedules

`func (o *BlockWashSchedulesInfoType) HasBlockWashSchedules() bool`

HasBlockWashSchedules returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockWashSchedulesInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockWashSchedulesInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockWashSchedulesInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockWashSchedulesInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


