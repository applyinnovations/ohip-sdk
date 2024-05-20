# RatePlansSummaryRatePlanShortInfoList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**RatePlanShortInfo** | Pointer to [**[]RatePlanShortInfoType**](RatePlanShortInfoType.md) | List of summary information for the rate plan code. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewRatePlansSummaryRatePlanShortInfoList

`func NewRatePlansSummaryRatePlanShortInfoList() *RatePlansSummaryRatePlanShortInfoList`

NewRatePlansSummaryRatePlanShortInfoList instantiates a new RatePlansSummaryRatePlanShortInfoList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlansSummaryRatePlanShortInfoListWithDefaults

`func NewRatePlansSummaryRatePlanShortInfoListWithDefaults() *RatePlansSummaryRatePlanShortInfoList`

NewRatePlansSummaryRatePlanShortInfoListWithDefaults instantiates a new RatePlansSummaryRatePlanShortInfoList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *RatePlansSummaryRatePlanShortInfoList) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RatePlansSummaryRatePlanShortInfoList) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RatePlansSummaryRatePlanShortInfoList) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RatePlansSummaryRatePlanShortInfoList) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *RatePlansSummaryRatePlanShortInfoList) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RatePlansSummaryRatePlanShortInfoList) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RatePlansSummaryRatePlanShortInfoList) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RatePlansSummaryRatePlanShortInfoList) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *RatePlansSummaryRatePlanShortInfoList) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RatePlansSummaryRatePlanShortInfoList) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RatePlansSummaryRatePlanShortInfoList) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RatePlansSummaryRatePlanShortInfoList) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *RatePlansSummaryRatePlanShortInfoList) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RatePlansSummaryRatePlanShortInfoList) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RatePlansSummaryRatePlanShortInfoList) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RatePlansSummaryRatePlanShortInfoList) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetRatePlanShortInfo

`func (o *RatePlansSummaryRatePlanShortInfoList) GetRatePlanShortInfo() []RatePlanShortInfoType`

GetRatePlanShortInfo returns the RatePlanShortInfo field if non-nil, zero value otherwise.

### GetRatePlanShortInfoOk

`func (o *RatePlansSummaryRatePlanShortInfoList) GetRatePlanShortInfoOk() (*[]RatePlanShortInfoType, bool)`

GetRatePlanShortInfoOk returns a tuple with the RatePlanShortInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanShortInfo

`func (o *RatePlansSummaryRatePlanShortInfoList) SetRatePlanShortInfo(v []RatePlanShortInfoType)`

SetRatePlanShortInfo sets RatePlanShortInfo field to given value.

### HasRatePlanShortInfo

`func (o *RatePlansSummaryRatePlanShortInfoList) HasRatePlanShortInfo() bool`

HasRatePlanShortInfo returns a boolean if a field has been set.

### GetTotalPages

`func (o *RatePlansSummaryRatePlanShortInfoList) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RatePlansSummaryRatePlanShortInfoList) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RatePlansSummaryRatePlanShortInfoList) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RatePlansSummaryRatePlanShortInfoList) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *RatePlansSummaryRatePlanShortInfoList) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RatePlansSummaryRatePlanShortInfoList) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RatePlansSummaryRatePlanShortInfoList) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RatePlansSummaryRatePlanShortInfoList) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


