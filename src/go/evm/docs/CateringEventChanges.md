# CateringEventChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**EventChanges** | Pointer to [**CateringEventChangeType**](CateringEventChangeType.md) |  | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCateringEventChanges

`func NewCateringEventChanges() *CateringEventChanges`

NewCateringEventChanges instantiates a new CateringEventChanges object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventChangesWithDefaults

`func NewCateringEventChangesWithDefaults() *CateringEventChanges`

NewCateringEventChangesWithDefaults instantiates a new CateringEventChanges object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *CateringEventChanges) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CateringEventChanges) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CateringEventChanges) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CateringEventChanges) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetEventChanges

`func (o *CateringEventChanges) GetEventChanges() CateringEventChangeType`

GetEventChanges returns the EventChanges field if non-nil, zero value otherwise.

### GetEventChangesOk

`func (o *CateringEventChanges) GetEventChangesOk() (*CateringEventChangeType, bool)`

GetEventChangesOk returns a tuple with the EventChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventChanges

`func (o *CateringEventChanges) SetEventChanges(v CateringEventChangeType)`

SetEventChanges sets EventChanges field to given value.

### HasEventChanges

`func (o *CateringEventChanges) HasEventChanges() bool`

HasEventChanges returns a boolean if a field has been set.

### GetHasMore

`func (o *CateringEventChanges) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *CateringEventChanges) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *CateringEventChanges) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *CateringEventChanges) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *CateringEventChanges) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *CateringEventChanges) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *CateringEventChanges) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *CateringEventChanges) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetLinks

`func (o *CateringEventChanges) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringEventChanges) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringEventChanges) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringEventChanges) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOffset

`func (o *CateringEventChanges) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *CateringEventChanges) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *CateringEventChanges) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *CateringEventChanges) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetTotalPages

`func (o *CateringEventChanges) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *CateringEventChanges) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *CateringEventChanges) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *CateringEventChanges) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *CateringEventChanges) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CateringEventChanges) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CateringEventChanges) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CateringEventChanges) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringEventChanges) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringEventChanges) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringEventChanges) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringEventChanges) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


