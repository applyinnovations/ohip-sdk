# StagedProfileKeywordType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KeywordDetail** | Pointer to [**KeywordDetailType**](KeywordDetailType.md) |  | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Keyword** | Pointer to **string** | The keyword value. | [optional] 
**ErrorDescription** | Pointer to **string** | The error in keyword information in a staged profile with an invalid status | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 

## Methods

### NewStagedProfileKeywordType

`func NewStagedProfileKeywordType() *StagedProfileKeywordType`

NewStagedProfileKeywordType instantiates a new StagedProfileKeywordType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileKeywordTypeWithDefaults

`func NewStagedProfileKeywordTypeWithDefaults() *StagedProfileKeywordType`

NewStagedProfileKeywordTypeWithDefaults instantiates a new StagedProfileKeywordType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeywordDetail

`func (o *StagedProfileKeywordType) GetKeywordDetail() KeywordDetailType`

GetKeywordDetail returns the KeywordDetail field if non-nil, zero value otherwise.

### GetKeywordDetailOk

`func (o *StagedProfileKeywordType) GetKeywordDetailOk() (*KeywordDetailType, bool)`

GetKeywordDetailOk returns a tuple with the KeywordDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywordDetail

`func (o *StagedProfileKeywordType) SetKeywordDetail(v KeywordDetailType)`

SetKeywordDetail sets KeywordDetail field to given value.

### HasKeywordDetail

`func (o *StagedProfileKeywordType) HasKeywordDetail() bool`

HasKeywordDetail returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileKeywordType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileKeywordType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileKeywordType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileKeywordType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetKeyword

`func (o *StagedProfileKeywordType) GetKeyword() string`

GetKeyword returns the Keyword field if non-nil, zero value otherwise.

### GetKeywordOk

`func (o *StagedProfileKeywordType) GetKeywordOk() (*string, bool)`

GetKeywordOk returns a tuple with the Keyword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyword

`func (o *StagedProfileKeywordType) SetKeyword(v string)`

SetKeyword sets Keyword field to given value.

### HasKeyword

`func (o *StagedProfileKeywordType) HasKeyword() bool`

HasKeyword returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileKeywordType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileKeywordType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileKeywordType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileKeywordType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileKeywordType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileKeywordType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileKeywordType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileKeywordType) HasId() bool`

HasId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


