# RateSeasonsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**RateSeasons** | Pointer to [**RateSeasonsType**](RateSeasonsType.md) |  | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRateSeasonsDetails

`func NewRateSeasonsDetails() *RateSeasonsDetails`

NewRateSeasonsDetails instantiates a new RateSeasonsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateSeasonsDetailsWithDefaults

`func NewRateSeasonsDetailsWithDefaults() *RateSeasonsDetails`

NewRateSeasonsDetailsWithDefaults instantiates a new RateSeasonsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *RateSeasonsDetails) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RateSeasonsDetails) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RateSeasonsDetails) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RateSeasonsDetails) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *RateSeasonsDetails) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RateSeasonsDetails) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RateSeasonsDetails) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RateSeasonsDetails) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *RateSeasonsDetails) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RateSeasonsDetails) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RateSeasonsDetails) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RateSeasonsDetails) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *RateSeasonsDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateSeasonsDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateSeasonsDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateSeasonsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *RateSeasonsDetails) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RateSeasonsDetails) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RateSeasonsDetails) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RateSeasonsDetails) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetRateSeasons

`func (o *RateSeasonsDetails) GetRateSeasons() RateSeasonsType`

GetRateSeasons returns the RateSeasons field if non-nil, zero value otherwise.

### GetRateSeasonsOk

`func (o *RateSeasonsDetails) GetRateSeasonsOk() (*RateSeasonsType, bool)`

GetRateSeasonsOk returns a tuple with the RateSeasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateSeasons

`func (o *RateSeasonsDetails) SetRateSeasons(v RateSeasonsType)`

SetRateSeasons sets RateSeasons field to given value.

### HasRateSeasons

`func (o *RateSeasonsDetails) HasRateSeasons() bool`

HasRateSeasons returns a boolean if a field has been set.

### GetTotalPages

`func (o *RateSeasonsDetails) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RateSeasonsDetails) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RateSeasonsDetails) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RateSeasonsDetails) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *RateSeasonsDetails) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RateSeasonsDetails) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RateSeasonsDetails) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RateSeasonsDetails) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *RateSeasonsDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateSeasonsDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateSeasonsDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateSeasonsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


