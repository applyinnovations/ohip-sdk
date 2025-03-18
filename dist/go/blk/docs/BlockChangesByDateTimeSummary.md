# BlockChangesByDateTimeSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockList** | Pointer to [**[]BlockChangesByDateTimeSummaryType**](BlockChangesByDateTimeSummaryType.md) | Collection of Business Block changes by date and time. | [optional] 
**Offset** | Pointer to **int32** | Indicates the index of the next applicable set(page). | [optional] 
**Limit** | Pointer to **int32** | Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time. | [optional] 
**Count** | Pointer to **int32** | Indicates number of records the API has returned actually as per the API request criteria. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether there are more records available to be returned as per the API request criteria or not. | [optional] 
**TotalResults** | Pointer to **int32** | Indicates total number of records available that can be returned as per the API request criteria. | [optional] 

## Methods

### NewBlockChangesByDateTimeSummary

`func NewBlockChangesByDateTimeSummary() *BlockChangesByDateTimeSummary`

NewBlockChangesByDateTimeSummary instantiates a new BlockChangesByDateTimeSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockChangesByDateTimeSummaryWithDefaults

`func NewBlockChangesByDateTimeSummaryWithDefaults() *BlockChangesByDateTimeSummary`

NewBlockChangesByDateTimeSummaryWithDefaults instantiates a new BlockChangesByDateTimeSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockList

`func (o *BlockChangesByDateTimeSummary) GetBlockList() []BlockChangesByDateTimeSummaryType`

GetBlockList returns the BlockList field if non-nil, zero value otherwise.

### GetBlockListOk

`func (o *BlockChangesByDateTimeSummary) GetBlockListOk() (*[]BlockChangesByDateTimeSummaryType, bool)`

GetBlockListOk returns a tuple with the BlockList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockList

`func (o *BlockChangesByDateTimeSummary) SetBlockList(v []BlockChangesByDateTimeSummaryType)`

SetBlockList sets BlockList field to given value.

### HasBlockList

`func (o *BlockChangesByDateTimeSummary) HasBlockList() bool`

HasBlockList returns a boolean if a field has been set.

### GetOffset

`func (o *BlockChangesByDateTimeSummary) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *BlockChangesByDateTimeSummary) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *BlockChangesByDateTimeSummary) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *BlockChangesByDateTimeSummary) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *BlockChangesByDateTimeSummary) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *BlockChangesByDateTimeSummary) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *BlockChangesByDateTimeSummary) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *BlockChangesByDateTimeSummary) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetCount

`func (o *BlockChangesByDateTimeSummary) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *BlockChangesByDateTimeSummary) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *BlockChangesByDateTimeSummary) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *BlockChangesByDateTimeSummary) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *BlockChangesByDateTimeSummary) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *BlockChangesByDateTimeSummary) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *BlockChangesByDateTimeSummary) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *BlockChangesByDateTimeSummary) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *BlockChangesByDateTimeSummary) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *BlockChangesByDateTimeSummary) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *BlockChangesByDateTimeSummary) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *BlockChangesByDateTimeSummary) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


