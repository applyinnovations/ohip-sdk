# RatePlanRatings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**RatePlanRatingsInfo** | Pointer to [**RatePlanRatingsInfoType**](RatePlanRatingsInfoType.md) |  | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRatePlanRatings

`func NewRatePlanRatings() *RatePlanRatings`

NewRatePlanRatings instantiates a new RatePlanRatings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanRatingsWithDefaults

`func NewRatePlanRatingsWithDefaults() *RatePlanRatings`

NewRatePlanRatingsWithDefaults instantiates a new RatePlanRatings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHasMore

`func (o *RatePlanRatings) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RatePlanRatings) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RatePlanRatings) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RatePlanRatings) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *RatePlanRatings) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RatePlanRatings) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RatePlanRatings) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RatePlanRatings) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *RatePlanRatings) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RatePlanRatings) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RatePlanRatings) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RatePlanRatings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *RatePlanRatings) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RatePlanRatings) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RatePlanRatings) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RatePlanRatings) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetRatePlanRatingsInfo

`func (o *RatePlanRatings) GetRatePlanRatingsInfo() RatePlanRatingsInfoType`

GetRatePlanRatingsInfo returns the RatePlanRatingsInfo field if non-nil, zero value otherwise.

### GetRatePlanRatingsInfoOk

`func (o *RatePlanRatings) GetRatePlanRatingsInfoOk() (*RatePlanRatingsInfoType, bool)`

GetRatePlanRatingsInfoOk returns a tuple with the RatePlanRatingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanRatingsInfo

`func (o *RatePlanRatings) SetRatePlanRatingsInfo(v RatePlanRatingsInfoType)`

SetRatePlanRatingsInfo sets RatePlanRatingsInfo field to given value.

### HasRatePlanRatingsInfo

`func (o *RatePlanRatings) HasRatePlanRatingsInfo() bool`

HasRatePlanRatingsInfo returns a boolean if a field has been set.

### GetTotalPages

`func (o *RatePlanRatings) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RatePlanRatings) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RatePlanRatings) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RatePlanRatings) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *RatePlanRatings) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RatePlanRatings) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RatePlanRatings) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RatePlanRatings) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *RatePlanRatings) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RatePlanRatings) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RatePlanRatings) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RatePlanRatings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


