# PostingGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GroupId** | Pointer to **string** | Group Id. | [optional] 
**GroupCount** | Pointer to **int32** | Number of transactions in group. | [optional] 
**GroupDescription** | Pointer to **string** | Group Description. | [optional] 
**SubGroupId** | Pointer to **string** | Indicates to which group transaction belongs. | [optional] 

## Methods

### NewPostingGroupType

`func NewPostingGroupType() *PostingGroupType`

NewPostingGroupType instantiates a new PostingGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostingGroupTypeWithDefaults

`func NewPostingGroupTypeWithDefaults() *PostingGroupType`

NewPostingGroupTypeWithDefaults instantiates a new PostingGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroupId

`func (o *PostingGroupType) GetGroupId() string`

GetGroupId returns the GroupId field if non-nil, zero value otherwise.

### GetGroupIdOk

`func (o *PostingGroupType) GetGroupIdOk() (*string, bool)`

GetGroupIdOk returns a tuple with the GroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupId

`func (o *PostingGroupType) SetGroupId(v string)`

SetGroupId sets GroupId field to given value.

### HasGroupId

`func (o *PostingGroupType) HasGroupId() bool`

HasGroupId returns a boolean if a field has been set.

### GetGroupCount

`func (o *PostingGroupType) GetGroupCount() int32`

GetGroupCount returns the GroupCount field if non-nil, zero value otherwise.

### GetGroupCountOk

`func (o *PostingGroupType) GetGroupCountOk() (*int32, bool)`

GetGroupCountOk returns a tuple with the GroupCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupCount

`func (o *PostingGroupType) SetGroupCount(v int32)`

SetGroupCount sets GroupCount field to given value.

### HasGroupCount

`func (o *PostingGroupType) HasGroupCount() bool`

HasGroupCount returns a boolean if a field has been set.

### GetGroupDescription

`func (o *PostingGroupType) GetGroupDescription() string`

GetGroupDescription returns the GroupDescription field if non-nil, zero value otherwise.

### GetGroupDescriptionOk

`func (o *PostingGroupType) GetGroupDescriptionOk() (*string, bool)`

GetGroupDescriptionOk returns a tuple with the GroupDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupDescription

`func (o *PostingGroupType) SetGroupDescription(v string)`

SetGroupDescription sets GroupDescription field to given value.

### HasGroupDescription

`func (o *PostingGroupType) HasGroupDescription() bool`

HasGroupDescription returns a boolean if a field has been set.

### GetSubGroupId

`func (o *PostingGroupType) GetSubGroupId() string`

GetSubGroupId returns the SubGroupId field if non-nil, zero value otherwise.

### GetSubGroupIdOk

`func (o *PostingGroupType) GetSubGroupIdOk() (*string, bool)`

GetSubGroupIdOk returns a tuple with the SubGroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubGroupId

`func (o *PostingGroupType) SetSubGroupId(v string)`

SetSubGroupId sets SubGroupId field to given value.

### HasSubGroupId

`func (o *PostingGroupType) HasSubGroupId() bool`

HasSubGroupId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


