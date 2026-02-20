# CompanyProfileTypeComments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentInfo** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | Collection of Detailed information on comments for the customer. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewCompanyProfileTypeComments

`func NewCompanyProfileTypeComments() *CompanyProfileTypeComments`

NewCompanyProfileTypeComments instantiates a new CompanyProfileTypeComments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyProfileTypeCommentsWithDefaults

`func NewCompanyProfileTypeCommentsWithDefaults() *CompanyProfileTypeComments`

NewCompanyProfileTypeCommentsWithDefaults instantiates a new CompanyProfileTypeComments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentInfo

`func (o *CompanyProfileTypeComments) GetCommentInfo() []CommentInfoType`

GetCommentInfo returns the CommentInfo field if non-nil, zero value otherwise.

### GetCommentInfoOk

`func (o *CompanyProfileTypeComments) GetCommentInfoOk() (*[]CommentInfoType, bool)`

GetCommentInfoOk returns a tuple with the CommentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentInfo

`func (o *CompanyProfileTypeComments) SetCommentInfo(v []CommentInfoType)`

SetCommentInfo sets CommentInfo field to given value.

### HasCommentInfo

`func (o *CompanyProfileTypeComments) HasCommentInfo() bool`

HasCommentInfo returns a boolean if a field has been set.

### GetHasMore

`func (o *CompanyProfileTypeComments) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *CompanyProfileTypeComments) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *CompanyProfileTypeComments) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *CompanyProfileTypeComments) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *CompanyProfileTypeComments) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CompanyProfileTypeComments) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CompanyProfileTypeComments) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CompanyProfileTypeComments) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *CompanyProfileTypeComments) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CompanyProfileTypeComments) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CompanyProfileTypeComments) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CompanyProfileTypeComments) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


