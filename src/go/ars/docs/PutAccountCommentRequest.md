# PutAccountCommentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentInfo** | Pointer to [**ARAccountCommentCriteriaType**](ARAccountCommentCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutAccountCommentRequest

`func NewPutAccountCommentRequest() *PutAccountCommentRequest`

NewPutAccountCommentRequest instantiates a new PutAccountCommentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutAccountCommentRequestWithDefaults

`func NewPutAccountCommentRequestWithDefaults() *PutAccountCommentRequest`

NewPutAccountCommentRequestWithDefaults instantiates a new PutAccountCommentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentInfo

`func (o *PutAccountCommentRequest) GetCommentInfo() ARAccountCommentCriteriaType`

GetCommentInfo returns the CommentInfo field if non-nil, zero value otherwise.

### GetCommentInfoOk

`func (o *PutAccountCommentRequest) GetCommentInfoOk() (*ARAccountCommentCriteriaType, bool)`

GetCommentInfoOk returns a tuple with the CommentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentInfo

`func (o *PutAccountCommentRequest) SetCommentInfo(v ARAccountCommentCriteriaType)`

SetCommentInfo sets CommentInfo field to given value.

### HasCommentInfo

`func (o *PutAccountCommentRequest) HasCommentInfo() bool`

HasCommentInfo returns a boolean if a field has been set.

### GetLinks

`func (o *PutAccountCommentRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutAccountCommentRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutAccountCommentRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutAccountCommentRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutAccountCommentRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutAccountCommentRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutAccountCommentRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutAccountCommentRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


