# BlockSummariesTypeBlockInfoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Block** | Pointer to [**BlockSummaryType**](BlockSummaryType.md) |  | [optional] 

## Methods

### NewBlockSummariesTypeBlockInfoInner

`func NewBlockSummariesTypeBlockInfoInner() *BlockSummariesTypeBlockInfoInner`

NewBlockSummariesTypeBlockInfoInner instantiates a new BlockSummariesTypeBlockInfoInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockSummariesTypeBlockInfoInnerWithDefaults

`func NewBlockSummariesTypeBlockInfoInnerWithDefaults() *BlockSummariesTypeBlockInfoInner`

NewBlockSummariesTypeBlockInfoInnerWithDefaults instantiates a new BlockSummariesTypeBlockInfoInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *BlockSummariesTypeBlockInfoInner) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *BlockSummariesTypeBlockInfoInner) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *BlockSummariesTypeBlockInfoInner) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *BlockSummariesTypeBlockInfoInner) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetBlock

`func (o *BlockSummariesTypeBlockInfoInner) GetBlock() BlockSummaryType`

GetBlock returns the Block field if non-nil, zero value otherwise.

### GetBlockOk

`func (o *BlockSummariesTypeBlockInfoInner) GetBlockOk() (*BlockSummaryType, bool)`

GetBlockOk returns a tuple with the Block field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlock

`func (o *BlockSummariesTypeBlockInfoInner) SetBlock(v BlockSummaryType)`

SetBlock sets Block field to given value.

### HasBlock

`func (o *BlockSummariesTypeBlockInfoInner) HasBlock() bool`

HasBlock returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


