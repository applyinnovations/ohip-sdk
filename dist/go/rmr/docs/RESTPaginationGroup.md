# RESTPaginationGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Indicates number of records the API has returned actually as per the API request criteria. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether there are more records available to be returned as per the API request criteria or not. | [optional] 
**Limit** | Pointer to **int32** | Indicates number of records the API can return as per the API request limit sent. A maximum of 200 records can be only returned at a time. | [optional] 
**Offset** | Pointer to **int32** | Indicates the index of the next applicable set(page). | [optional] 
**TotalResults** | Pointer to **int32** | Indicates total number of records available that can be returned as per the API request criteria. | [optional] 

## Methods

### NewRESTPaginationGroup

`func NewRESTPaginationGroup() *RESTPaginationGroup`

NewRESTPaginationGroup instantiates a new RESTPaginationGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRESTPaginationGroupWithDefaults

`func NewRESTPaginationGroupWithDefaults() *RESTPaginationGroup`

NewRESTPaginationGroupWithDefaults instantiates a new RESTPaginationGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *RESTPaginationGroup) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RESTPaginationGroup) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RESTPaginationGroup) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RESTPaginationGroup) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *RESTPaginationGroup) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RESTPaginationGroup) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RESTPaginationGroup) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RESTPaginationGroup) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *RESTPaginationGroup) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *RESTPaginationGroup) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *RESTPaginationGroup) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *RESTPaginationGroup) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *RESTPaginationGroup) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RESTPaginationGroup) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RESTPaginationGroup) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RESTPaginationGroup) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalResults

`func (o *RESTPaginationGroup) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RESTPaginationGroup) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RESTPaginationGroup) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RESTPaginationGroup) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


