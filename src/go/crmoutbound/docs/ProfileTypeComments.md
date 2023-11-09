# ProfileTypeComments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentInfo** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | Collection of Detailed information on comments for the customer. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileTypeComments

`func NewProfileTypeComments() *ProfileTypeComments`

NewProfileTypeComments instantiates a new ProfileTypeComments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeCommentsWithDefaults

`func NewProfileTypeCommentsWithDefaults() *ProfileTypeComments`

NewProfileTypeCommentsWithDefaults instantiates a new ProfileTypeComments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentInfo

`func (o *ProfileTypeComments) GetCommentInfo() []CommentInfoType`

GetCommentInfo returns the CommentInfo field if non-nil, zero value otherwise.

### GetCommentInfoOk

`func (o *ProfileTypeComments) GetCommentInfoOk() (*[]CommentInfoType, bool)`

GetCommentInfoOk returns a tuple with the CommentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentInfo

`func (o *ProfileTypeComments) SetCommentInfo(v []CommentInfoType)`

SetCommentInfo sets CommentInfo field to given value.

### HasCommentInfo

`func (o *ProfileTypeComments) HasCommentInfo() bool`

HasCommentInfo returns a boolean if a field has been set.

### GetAllRowsFetched

`func (o *ProfileTypeComments) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *ProfileTypeComments) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *ProfileTypeComments) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *ProfileTypeComments) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *ProfileTypeComments) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ProfileTypeComments) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ProfileTypeComments) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ProfileTypeComments) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


