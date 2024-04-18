# AccountComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentInfo** | Pointer to [**ARAccountCommentCriteriaType**](ARAccountCommentCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAccountComment

`func NewAccountComment() *AccountComment`

NewAccountComment instantiates a new AccountComment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountCommentWithDefaults

`func NewAccountCommentWithDefaults() *AccountComment`

NewAccountCommentWithDefaults instantiates a new AccountComment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentInfo

`func (o *AccountComment) GetCommentInfo() ARAccountCommentCriteriaType`

GetCommentInfo returns the CommentInfo field if non-nil, zero value otherwise.

### GetCommentInfoOk

`func (o *AccountComment) GetCommentInfoOk() (*ARAccountCommentCriteriaType, bool)`

GetCommentInfoOk returns a tuple with the CommentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentInfo

`func (o *AccountComment) SetCommentInfo(v ARAccountCommentCriteriaType)`

SetCommentInfo sets CommentInfo field to given value.

### HasCommentInfo

`func (o *AccountComment) HasCommentInfo() bool`

HasCommentInfo returns a boolean if a field has been set.

### GetLinks

`func (o *AccountComment) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AccountComment) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AccountComment) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AccountComment) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AccountComment) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountComment) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountComment) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AccountComment) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

