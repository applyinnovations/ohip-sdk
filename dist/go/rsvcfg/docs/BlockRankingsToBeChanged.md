# BlockRankingsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRankings** | Pointer to [**[]BlockRankingType**](BlockRankingType.md) | List of Block Rankings. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockRankingsToBeChanged

`func NewBlockRankingsToBeChanged() *BlockRankingsToBeChanged`

NewBlockRankingsToBeChanged instantiates a new BlockRankingsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRankingsToBeChangedWithDefaults

`func NewBlockRankingsToBeChangedWithDefaults() *BlockRankingsToBeChanged`

NewBlockRankingsToBeChangedWithDefaults instantiates a new BlockRankingsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRankings

`func (o *BlockRankingsToBeChanged) GetBlockRankings() []BlockRankingType`

GetBlockRankings returns the BlockRankings field if non-nil, zero value otherwise.

### GetBlockRankingsOk

`func (o *BlockRankingsToBeChanged) GetBlockRankingsOk() (*[]BlockRankingType, bool)`

GetBlockRankingsOk returns a tuple with the BlockRankings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRankings

`func (o *BlockRankingsToBeChanged) SetBlockRankings(v []BlockRankingType)`

SetBlockRankings sets BlockRankings field to given value.

### HasBlockRankings

`func (o *BlockRankingsToBeChanged) HasBlockRankings() bool`

HasBlockRankings returns a boolean if a field has been set.

### GetLinks

`func (o *BlockRankingsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockRankingsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockRankingsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockRankingsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockRankingsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockRankingsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockRankingsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockRankingsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


