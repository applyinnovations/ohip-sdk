# StagedProfileCommentInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to [**CommentType**](CommentType.md) |  | [optional] 
**CreateDateTime** | Pointer to **time.Time** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **time.Time** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LineNo** | Pointer to **int32** | The line number of the comment. | [optional] 
**InActiveDate** | Pointer to **string** | Indicates comment inactive date. | [optional] 
**ErrorDescription** | Pointer to **string** | The error in a user defined field in a staged profile with an invalid status. | [optional] 
**Valid** | Pointer to **bool** | Indicates whether the comment information is valid. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewStagedProfileCommentInfoType

`func NewStagedProfileCommentInfoType() *StagedProfileCommentInfoType`

NewStagedProfileCommentInfoType instantiates a new StagedProfileCommentInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileCommentInfoTypeWithDefaults

`func NewStagedProfileCommentInfoTypeWithDefaults() *StagedProfileCommentInfoType`

NewStagedProfileCommentInfoTypeWithDefaults instantiates a new StagedProfileCommentInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *StagedProfileCommentInfoType) GetComment() CommentType`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *StagedProfileCommentInfoType) GetCommentOk() (*CommentType, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *StagedProfileCommentInfoType) SetComment(v CommentType)`

SetComment sets Comment field to given value.

### HasComment

`func (o *StagedProfileCommentInfoType) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *StagedProfileCommentInfoType) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *StagedProfileCommentInfoType) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *StagedProfileCommentInfoType) SetCreateDateTime(v time.Time)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *StagedProfileCommentInfoType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *StagedProfileCommentInfoType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *StagedProfileCommentInfoType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *StagedProfileCommentInfoType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *StagedProfileCommentInfoType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *StagedProfileCommentInfoType) GetLastModifyDateTime() time.Time`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *StagedProfileCommentInfoType) GetLastModifyDateTimeOk() (*time.Time, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *StagedProfileCommentInfoType) SetLastModifyDateTime(v time.Time)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *StagedProfileCommentInfoType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *StagedProfileCommentInfoType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *StagedProfileCommentInfoType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *StagedProfileCommentInfoType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *StagedProfileCommentInfoType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLineNo

`func (o *StagedProfileCommentInfoType) GetLineNo() int32`

GetLineNo returns the LineNo field if non-nil, zero value otherwise.

### GetLineNoOk

`func (o *StagedProfileCommentInfoType) GetLineNoOk() (*int32, bool)`

GetLineNoOk returns a tuple with the LineNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineNo

`func (o *StagedProfileCommentInfoType) SetLineNo(v int32)`

SetLineNo sets LineNo field to given value.

### HasLineNo

`func (o *StagedProfileCommentInfoType) HasLineNo() bool`

HasLineNo returns a boolean if a field has been set.

### GetInActiveDate

`func (o *StagedProfileCommentInfoType) GetInActiveDate() string`

GetInActiveDate returns the InActiveDate field if non-nil, zero value otherwise.

### GetInActiveDateOk

`func (o *StagedProfileCommentInfoType) GetInActiveDateOk() (*string, bool)`

GetInActiveDateOk returns a tuple with the InActiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInActiveDate

`func (o *StagedProfileCommentInfoType) SetInActiveDate(v string)`

SetInActiveDate sets InActiveDate field to given value.

### HasInActiveDate

`func (o *StagedProfileCommentInfoType) HasInActiveDate() bool`

HasInActiveDate returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileCommentInfoType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileCommentInfoType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileCommentInfoType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileCommentInfoType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetValid

`func (o *StagedProfileCommentInfoType) GetValid() bool`

GetValid returns the Valid field if non-nil, zero value otherwise.

### GetValidOk

`func (o *StagedProfileCommentInfoType) GetValidOk() (*bool, bool)`

GetValidOk returns a tuple with the Valid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValid

`func (o *StagedProfileCommentInfoType) SetValid(v bool)`

SetValid sets Valid field to given value.

### HasValid

`func (o *StagedProfileCommentInfoType) HasValid() bool`

HasValid returns a boolean if a field has been set.

### GetAllRowsFetched

`func (o *StagedProfileCommentInfoType) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *StagedProfileCommentInfoType) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *StagedProfileCommentInfoType) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *StagedProfileCommentInfoType) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *StagedProfileCommentInfoType) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *StagedProfileCommentInfoType) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *StagedProfileCommentInfoType) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *StagedProfileCommentInfoType) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileCommentInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileCommentInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileCommentInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileCommentInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileCommentInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileCommentInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileCommentInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileCommentInfoType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


