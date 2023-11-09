# BlockChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Blocks** | Pointer to [**BlocksType**](BlocksType.md) |  | [optional] 
**CateringEventsProcessedInfo** | Pointer to [**CateringEventsProcessedInfoList**](CateringEventsProcessedInfoList.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewBlockChanged

`func NewBlockChanged() *BlockChanged`

NewBlockChanged instantiates a new BlockChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockChangedWithDefaults

`func NewBlockChangedWithDefaults() *BlockChanged`

NewBlockChangedWithDefaults instantiates a new BlockChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlocks

`func (o *BlockChanged) GetBlocks() BlocksType`

GetBlocks returns the Blocks field if non-nil, zero value otherwise.

### GetBlocksOk

`func (o *BlockChanged) GetBlocksOk() (*BlocksType, bool)`

GetBlocksOk returns a tuple with the Blocks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlocks

`func (o *BlockChanged) SetBlocks(v BlocksType)`

SetBlocks sets Blocks field to given value.

### HasBlocks

`func (o *BlockChanged) HasBlocks() bool`

HasBlocks returns a boolean if a field has been set.

### GetCateringEventsProcessedInfo

`func (o *BlockChanged) GetCateringEventsProcessedInfo() CateringEventsProcessedInfoList`

GetCateringEventsProcessedInfo returns the CateringEventsProcessedInfo field if non-nil, zero value otherwise.

### GetCateringEventsProcessedInfoOk

`func (o *BlockChanged) GetCateringEventsProcessedInfoOk() (*CateringEventsProcessedInfoList, bool)`

GetCateringEventsProcessedInfoOk returns a tuple with the CateringEventsProcessedInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringEventsProcessedInfo

`func (o *BlockChanged) SetCateringEventsProcessedInfo(v CateringEventsProcessedInfoList)`

SetCateringEventsProcessedInfo sets CateringEventsProcessedInfo field to given value.

### HasCateringEventsProcessedInfo

`func (o *BlockChanged) HasCateringEventsProcessedInfo() bool`

HasCateringEventsProcessedInfo returns a boolean if a field has been set.

### GetLinks

`func (o *BlockChanged) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockChanged) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockChanged) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockChanged) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockChanged) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockChanged) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


