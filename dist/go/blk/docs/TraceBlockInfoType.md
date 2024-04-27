# TraceBlockInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**BlockName** | Pointer to **string** | Name of the block. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code where trace is set. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewTraceBlockInfoType

`func NewTraceBlockInfoType() *TraceBlockInfoType`

NewTraceBlockInfoType instantiates a new TraceBlockInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTraceBlockInfoTypeWithDefaults

`func NewTraceBlockInfoTypeWithDefaults() *TraceBlockInfoType`

NewTraceBlockInfoTypeWithDefaults instantiates a new TraceBlockInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *TraceBlockInfoType) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *TraceBlockInfoType) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *TraceBlockInfoType) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *TraceBlockInfoType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetBlockName

`func (o *TraceBlockInfoType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *TraceBlockInfoType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *TraceBlockInfoType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *TraceBlockInfoType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetHotelId

`func (o *TraceBlockInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TraceBlockInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TraceBlockInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TraceBlockInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTimeSpan

`func (o *TraceBlockInfoType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *TraceBlockInfoType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *TraceBlockInfoType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *TraceBlockInfoType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


