# SuspendedStaySummariesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SuspendedStaySummaries** | Pointer to [**[]SuspendedStaySummaryType**](SuspendedStaySummaryType.md) | A collection of Suspended Stay Summaries. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewSuspendedStaySummariesType

`func NewSuspendedStaySummariesType() *SuspendedStaySummariesType`

NewSuspendedStaySummariesType instantiates a new SuspendedStaySummariesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSuspendedStaySummariesTypeWithDefaults

`func NewSuspendedStaySummariesTypeWithDefaults() *SuspendedStaySummariesType`

NewSuspendedStaySummariesTypeWithDefaults instantiates a new SuspendedStaySummariesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuspendedStaySummaries

`func (o *SuspendedStaySummariesType) GetSuspendedStaySummaries() []SuspendedStaySummaryType`

GetSuspendedStaySummaries returns the SuspendedStaySummaries field if non-nil, zero value otherwise.

### GetSuspendedStaySummariesOk

`func (o *SuspendedStaySummariesType) GetSuspendedStaySummariesOk() (*[]SuspendedStaySummaryType, bool)`

GetSuspendedStaySummariesOk returns a tuple with the SuspendedStaySummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuspendedStaySummaries

`func (o *SuspendedStaySummariesType) SetSuspendedStaySummaries(v []SuspendedStaySummaryType)`

SetSuspendedStaySummaries sets SuspendedStaySummaries field to given value.

### HasSuspendedStaySummaries

`func (o *SuspendedStaySummariesType) HasSuspendedStaySummaries() bool`

HasSuspendedStaySummaries returns a boolean if a field has been set.

### GetTotalPages

`func (o *SuspendedStaySummariesType) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *SuspendedStaySummariesType) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *SuspendedStaySummariesType) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *SuspendedStaySummariesType) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *SuspendedStaySummariesType) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *SuspendedStaySummariesType) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *SuspendedStaySummariesType) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *SuspendedStaySummariesType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *SuspendedStaySummariesType) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *SuspendedStaySummariesType) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *SuspendedStaySummariesType) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *SuspendedStaySummariesType) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *SuspendedStaySummariesType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *SuspendedStaySummariesType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *SuspendedStaySummariesType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *SuspendedStaySummariesType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *SuspendedStaySummariesType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *SuspendedStaySummariesType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *SuspendedStaySummariesType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *SuspendedStaySummariesType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *SuspendedStaySummariesType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SuspendedStaySummariesType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SuspendedStaySummariesType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *SuspendedStaySummariesType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


