# BlockInventoryStatisticType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockSummaryStatistics** | Pointer to [**[]BlockSummaryStatisticType**](BlockSummaryStatisticType.md) | Statistic units group by status, booking and daily targets. | [optional] 
**BlockDetailStatistics** | Pointer to [**[]BlockDetailStatisticType**](BlockDetailStatisticType.md) | Compose of block information and statistic summary for a particular block. | [optional] 
**SellMessages** | Pointer to [**SellMessagesType**](SellMessagesType.md) |  | [optional] 

## Methods

### NewBlockInventoryStatisticType

`func NewBlockInventoryStatisticType() *BlockInventoryStatisticType`

NewBlockInventoryStatisticType instantiates a new BlockInventoryStatisticType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockInventoryStatisticTypeWithDefaults

`func NewBlockInventoryStatisticTypeWithDefaults() *BlockInventoryStatisticType`

NewBlockInventoryStatisticTypeWithDefaults instantiates a new BlockInventoryStatisticType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockSummaryStatistics

`func (o *BlockInventoryStatisticType) GetBlockSummaryStatistics() []BlockSummaryStatisticType`

GetBlockSummaryStatistics returns the BlockSummaryStatistics field if non-nil, zero value otherwise.

### GetBlockSummaryStatisticsOk

`func (o *BlockInventoryStatisticType) GetBlockSummaryStatisticsOk() (*[]BlockSummaryStatisticType, bool)`

GetBlockSummaryStatisticsOk returns a tuple with the BlockSummaryStatistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockSummaryStatistics

`func (o *BlockInventoryStatisticType) SetBlockSummaryStatistics(v []BlockSummaryStatisticType)`

SetBlockSummaryStatistics sets BlockSummaryStatistics field to given value.

### HasBlockSummaryStatistics

`func (o *BlockInventoryStatisticType) HasBlockSummaryStatistics() bool`

HasBlockSummaryStatistics returns a boolean if a field has been set.

### GetBlockDetailStatistics

`func (o *BlockInventoryStatisticType) GetBlockDetailStatistics() []BlockDetailStatisticType`

GetBlockDetailStatistics returns the BlockDetailStatistics field if non-nil, zero value otherwise.

### GetBlockDetailStatisticsOk

`func (o *BlockInventoryStatisticType) GetBlockDetailStatisticsOk() (*[]BlockDetailStatisticType, bool)`

GetBlockDetailStatisticsOk returns a tuple with the BlockDetailStatistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockDetailStatistics

`func (o *BlockInventoryStatisticType) SetBlockDetailStatistics(v []BlockDetailStatisticType)`

SetBlockDetailStatistics sets BlockDetailStatistics field to given value.

### HasBlockDetailStatistics

`func (o *BlockInventoryStatisticType) HasBlockDetailStatistics() bool`

HasBlockDetailStatistics returns a boolean if a field has been set.

### GetSellMessages

`func (o *BlockInventoryStatisticType) GetSellMessages() SellMessagesType`

GetSellMessages returns the SellMessages field if non-nil, zero value otherwise.

### GetSellMessagesOk

`func (o *BlockInventoryStatisticType) GetSellMessagesOk() (*SellMessagesType, bool)`

GetSellMessagesOk returns a tuple with the SellMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellMessages

`func (o *BlockInventoryStatisticType) SetSellMessages(v SellMessagesType)`

SetSellMessages sets SellMessages field to given value.

### HasSellMessages

`func (o *BlockInventoryStatisticType) HasSellMessages() bool`

HasSellMessages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


