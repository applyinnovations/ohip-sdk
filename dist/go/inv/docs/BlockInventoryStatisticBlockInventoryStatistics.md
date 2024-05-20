# BlockInventoryStatisticBlockInventoryStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**BlockInventoryStatistic** | Pointer to [**[]BlockInventoryStatisticType**](BlockInventoryStatisticType.md) | Summary and Detail statistic for block inventory that is group by statistic date. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewBlockInventoryStatisticBlockInventoryStatistics

`func NewBlockInventoryStatisticBlockInventoryStatistics() *BlockInventoryStatisticBlockInventoryStatistics`

NewBlockInventoryStatisticBlockInventoryStatistics instantiates a new BlockInventoryStatisticBlockInventoryStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockInventoryStatisticBlockInventoryStatisticsWithDefaults

`func NewBlockInventoryStatisticBlockInventoryStatisticsWithDefaults() *BlockInventoryStatisticBlockInventoryStatistics`

NewBlockInventoryStatisticBlockInventoryStatisticsWithDefaults instantiates a new BlockInventoryStatisticBlockInventoryStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllRowsFetched

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *BlockInventoryStatisticBlockInventoryStatistics) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *BlockInventoryStatisticBlockInventoryStatistics) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetBlockInventoryStatistic

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetBlockInventoryStatistic() []BlockInventoryStatisticType`

GetBlockInventoryStatistic returns the BlockInventoryStatistic field if non-nil, zero value otherwise.

### GetBlockInventoryStatisticOk

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetBlockInventoryStatisticOk() (*[]BlockInventoryStatisticType, bool)`

GetBlockInventoryStatisticOk returns a tuple with the BlockInventoryStatistic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockInventoryStatistic

`func (o *BlockInventoryStatisticBlockInventoryStatistics) SetBlockInventoryStatistic(v []BlockInventoryStatisticType)`

SetBlockInventoryStatistic sets BlockInventoryStatistic field to given value.

### HasBlockInventoryStatistic

`func (o *BlockInventoryStatisticBlockInventoryStatistics) HasBlockInventoryStatistic() bool`

HasBlockInventoryStatistic returns a boolean if a field has been set.

### GetLimit

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *BlockInventoryStatisticBlockInventoryStatistics) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *BlockInventoryStatisticBlockInventoryStatistics) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *BlockInventoryStatisticBlockInventoryStatistics) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *BlockInventoryStatisticBlockInventoryStatistics) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *BlockInventoryStatisticBlockInventoryStatistics) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *BlockInventoryStatisticBlockInventoryStatistics) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalRows

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *BlockInventoryStatisticBlockInventoryStatistics) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *BlockInventoryStatisticBlockInventoryStatistics) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *BlockInventoryStatisticBlockInventoryStatistics) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


