# SubAllocationsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubAllocationInfo** | Pointer to [**[]SubAllocationsTypeSubAllocationInfoInner**](SubAllocationsTypeSubAllocationInfoInner.md) | A collection of Sub Allocations or Unique IDs of Sub Allocations. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewSubAllocationsType

`func NewSubAllocationsType() *SubAllocationsType`

NewSubAllocationsType instantiates a new SubAllocationsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubAllocationsTypeWithDefaults

`func NewSubAllocationsTypeWithDefaults() *SubAllocationsType`

NewSubAllocationsTypeWithDefaults instantiates a new SubAllocationsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubAllocationInfo

`func (o *SubAllocationsType) GetSubAllocationInfo() []SubAllocationsTypeSubAllocationInfoInner`

GetSubAllocationInfo returns the SubAllocationInfo field if non-nil, zero value otherwise.

### GetSubAllocationInfoOk

`func (o *SubAllocationsType) GetSubAllocationInfoOk() (*[]SubAllocationsTypeSubAllocationInfoInner, bool)`

GetSubAllocationInfoOk returns a tuple with the SubAllocationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubAllocationInfo

`func (o *SubAllocationsType) SetSubAllocationInfo(v []SubAllocationsTypeSubAllocationInfoInner)`

SetSubAllocationInfo sets SubAllocationInfo field to given value.

### HasSubAllocationInfo

`func (o *SubAllocationsType) HasSubAllocationInfo() bool`

HasSubAllocationInfo returns a boolean if a field has been set.

### GetHasMore

`func (o *SubAllocationsType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *SubAllocationsType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *SubAllocationsType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *SubAllocationsType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *SubAllocationsType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *SubAllocationsType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *SubAllocationsType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *SubAllocationsType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *SubAllocationsType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SubAllocationsType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SubAllocationsType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *SubAllocationsType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


