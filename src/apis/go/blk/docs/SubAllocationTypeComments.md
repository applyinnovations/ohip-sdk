# SubAllocationTypeComments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentInfo** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) |  | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewSubAllocationTypeComments

`func NewSubAllocationTypeComments() *SubAllocationTypeComments`

NewSubAllocationTypeComments instantiates a new SubAllocationTypeComments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubAllocationTypeCommentsWithDefaults

`func NewSubAllocationTypeCommentsWithDefaults() *SubAllocationTypeComments`

NewSubAllocationTypeCommentsWithDefaults instantiates a new SubAllocationTypeComments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentInfo

`func (o *SubAllocationTypeComments) GetCommentInfo() []CommentInfoType`

GetCommentInfo returns the CommentInfo field if non-nil, zero value otherwise.

### GetCommentInfoOk

`func (o *SubAllocationTypeComments) GetCommentInfoOk() (*[]CommentInfoType, bool)`

GetCommentInfoOk returns a tuple with the CommentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentInfo

`func (o *SubAllocationTypeComments) SetCommentInfo(v []CommentInfoType)`

SetCommentInfo sets CommentInfo field to given value.

### HasCommentInfo

`func (o *SubAllocationTypeComments) HasCommentInfo() bool`

HasCommentInfo returns a boolean if a field has been set.

### GetHasMore

`func (o *SubAllocationTypeComments) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *SubAllocationTypeComments) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *SubAllocationTypeComments) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *SubAllocationTypeComments) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *SubAllocationTypeComments) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *SubAllocationTypeComments) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *SubAllocationTypeComments) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *SubAllocationTypeComments) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *SubAllocationTypeComments) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SubAllocationTypeComments) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SubAllocationTypeComments) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *SubAllocationTypeComments) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


