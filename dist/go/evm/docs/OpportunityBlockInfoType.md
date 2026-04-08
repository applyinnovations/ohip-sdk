# OpportunityBlockInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Unique Id that references an object uniquely in the system. | [optional] 
**BlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**BlockTimeSpan** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 

## Methods

### NewOpportunityBlockInfoType

`func NewOpportunityBlockInfoType() *OpportunityBlockInfoType`

NewOpportunityBlockInfoType instantiates a new OpportunityBlockInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOpportunityBlockInfoTypeWithDefaults

`func NewOpportunityBlockInfoTypeWithDefaults() *OpportunityBlockInfoType`

NewOpportunityBlockInfoTypeWithDefaults instantiates a new OpportunityBlockInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *OpportunityBlockInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *OpportunityBlockInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *OpportunityBlockInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *OpportunityBlockInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockId

`func (o *OpportunityBlockInfoType) GetBlockId() UniqueIDType`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *OpportunityBlockInfoType) GetBlockIdOk() (*UniqueIDType, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *OpportunityBlockInfoType) SetBlockId(v UniqueIDType)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *OpportunityBlockInfoType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetBlockTimeSpan

`func (o *OpportunityBlockInfoType) GetBlockTimeSpan() DateTimeSpanType`

GetBlockTimeSpan returns the BlockTimeSpan field if non-nil, zero value otherwise.

### GetBlockTimeSpanOk

`func (o *OpportunityBlockInfoType) GetBlockTimeSpanOk() (*DateTimeSpanType, bool)`

GetBlockTimeSpanOk returns a tuple with the BlockTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockTimeSpan

`func (o *OpportunityBlockInfoType) SetBlockTimeSpan(v DateTimeSpanType)`

SetBlockTimeSpan sets BlockTimeSpan field to given value.

### HasBlockTimeSpan

`func (o *OpportunityBlockInfoType) HasBlockTimeSpan() bool`

HasBlockTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


