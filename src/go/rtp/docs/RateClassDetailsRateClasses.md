# RateClassDetailsRateClasses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**RateClasses** | Pointer to [**RateClassesType**](RateClassesType.md) |  | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewRateClassDetailsRateClasses

`func NewRateClassDetailsRateClasses() *RateClassDetailsRateClasses`

NewRateClassDetailsRateClasses instantiates a new RateClassDetailsRateClasses object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateClassDetailsRateClassesWithDefaults

`func NewRateClassDetailsRateClassesWithDefaults() *RateClassDetailsRateClasses`

NewRateClassDetailsRateClassesWithDefaults instantiates a new RateClassDetailsRateClasses object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *RateClassDetailsRateClasses) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RateClassDetailsRateClasses) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RateClassDetailsRateClasses) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RateClassDetailsRateClasses) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *RateClassDetailsRateClasses) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RateClassDetailsRateClasses) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RateClassDetailsRateClasses) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RateClassDetailsRateClasses) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *RateClassDetailsRateClasses) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RateClassDetailsRateClasses) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RateClassDetailsRateClasses) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RateClassDetailsRateClasses) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *RateClassDetailsRateClasses) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RateClassDetailsRateClasses) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RateClassDetailsRateClasses) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RateClassDetailsRateClasses) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetRateClasses

`func (o *RateClassDetailsRateClasses) GetRateClasses() RateClassesType`

GetRateClasses returns the RateClasses field if non-nil, zero value otherwise.

### GetRateClassesOk

`func (o *RateClassDetailsRateClasses) GetRateClassesOk() (*RateClassesType, bool)`

GetRateClassesOk returns a tuple with the RateClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateClasses

`func (o *RateClassDetailsRateClasses) SetRateClasses(v RateClassesType)`

SetRateClasses sets RateClasses field to given value.

### HasRateClasses

`func (o *RateClassDetailsRateClasses) HasRateClasses() bool`

HasRateClasses returns a boolean if a field has been set.

### GetTotalPages

`func (o *RateClassDetailsRateClasses) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *RateClassDetailsRateClasses) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *RateClassDetailsRateClasses) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *RateClassDetailsRateClasses) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *RateClassDetailsRateClasses) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RateClassDetailsRateClasses) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RateClassDetailsRateClasses) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RateClassDetailsRateClasses) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


