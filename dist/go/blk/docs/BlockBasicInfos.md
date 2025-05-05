# BlockBasicInfos

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Blocks** | Pointer to [**[]BlockBasicInfo**](BlockBasicInfo.md) | Contains a collection of basic block information | [optional] 

## Methods

### NewBlockBasicInfos

`func NewBlockBasicInfos() *BlockBasicInfos`

NewBlockBasicInfos instantiates a new BlockBasicInfos object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockBasicInfosWithDefaults

`func NewBlockBasicInfosWithDefaults() *BlockBasicInfos`

NewBlockBasicInfosWithDefaults instantiates a new BlockBasicInfos object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlocks

`func (o *BlockBasicInfos) GetBlocks() []BlockBasicInfo`

GetBlocks returns the Blocks field if non-nil, zero value otherwise.

### GetBlocksOk

`func (o *BlockBasicInfos) GetBlocksOk() (*[]BlockBasicInfo, bool)`

GetBlocksOk returns a tuple with the Blocks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlocks

`func (o *BlockBasicInfos) SetBlocks(v []BlockBasicInfo)`

SetBlocks sets Blocks field to given value.

### HasBlocks

`func (o *BlockBasicInfos) HasBlocks() bool`

HasBlocks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


