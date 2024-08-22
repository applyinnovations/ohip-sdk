# BlockDailyStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockDailyStatistics** | Pointer to [**[]BlocksDailyStatisticsTypeInner**](BlocksDailyStatisticsTypeInner.md) | A collection of Blocks. | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockDailyStatistics

`func NewBlockDailyStatistics() *BlockDailyStatistics`

NewBlockDailyStatistics instantiates a new BlockDailyStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockDailyStatisticsWithDefaults

`func NewBlockDailyStatisticsWithDefaults() *BlockDailyStatistics`

NewBlockDailyStatisticsWithDefaults instantiates a new BlockDailyStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockDailyStatistics

`func (o *BlockDailyStatistics) GetBlockDailyStatistics() []BlocksDailyStatisticsTypeInner`

GetBlockDailyStatistics returns the BlockDailyStatistics field if non-nil, zero value otherwise.

### GetBlockDailyStatisticsOk

`func (o *BlockDailyStatistics) GetBlockDailyStatisticsOk() (*[]BlocksDailyStatisticsTypeInner, bool)`

GetBlockDailyStatisticsOk returns a tuple with the BlockDailyStatistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockDailyStatistics

`func (o *BlockDailyStatistics) SetBlockDailyStatistics(v []BlocksDailyStatisticsTypeInner)`

SetBlockDailyStatistics sets BlockDailyStatistics field to given value.

### HasBlockDailyStatistics

`func (o *BlockDailyStatistics) HasBlockDailyStatistics() bool`

HasBlockDailyStatistics returns a boolean if a field has been set.

### GetCount

`func (o *BlockDailyStatistics) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *BlockDailyStatistics) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *BlockDailyStatistics) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *BlockDailyStatistics) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *BlockDailyStatistics) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *BlockDailyStatistics) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *BlockDailyStatistics) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *BlockDailyStatistics) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *BlockDailyStatistics) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *BlockDailyStatistics) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *BlockDailyStatistics) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *BlockDailyStatistics) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *BlockDailyStatistics) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockDailyStatistics) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockDailyStatistics) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockDailyStatistics) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *BlockDailyStatistics) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *BlockDailyStatistics) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *BlockDailyStatistics) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *BlockDailyStatistics) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *BlockDailyStatistics) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *BlockDailyStatistics) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *BlockDailyStatistics) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *BlockDailyStatistics) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *BlockDailyStatistics) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *BlockDailyStatistics) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *BlockDailyStatistics) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *BlockDailyStatistics) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockDailyStatistics) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockDailyStatistics) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockDailyStatistics) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockDailyStatistics) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


