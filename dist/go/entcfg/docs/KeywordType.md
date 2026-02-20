# KeywordType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KeywordDetail** | Pointer to [**KeywordDetailType**](KeywordDetailType.md) |  | [optional] 
**Type** | Pointer to **string** | The type of keyword | [optional] 
**Keyword** | Pointer to **string** | The keyword value. | [optional] 

## Methods

### NewKeywordType

`func NewKeywordType() *KeywordType`

NewKeywordType instantiates a new KeywordType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKeywordTypeWithDefaults

`func NewKeywordTypeWithDefaults() *KeywordType`

NewKeywordTypeWithDefaults instantiates a new KeywordType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeywordDetail

`func (o *KeywordType) GetKeywordDetail() KeywordDetailType`

GetKeywordDetail returns the KeywordDetail field if non-nil, zero value otherwise.

### GetKeywordDetailOk

`func (o *KeywordType) GetKeywordDetailOk() (*KeywordDetailType, bool)`

GetKeywordDetailOk returns a tuple with the KeywordDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywordDetail

`func (o *KeywordType) SetKeywordDetail(v KeywordDetailType)`

SetKeywordDetail sets KeywordDetail field to given value.

### HasKeywordDetail

`func (o *KeywordType) HasKeywordDetail() bool`

HasKeywordDetail returns a boolean if a field has been set.

### GetType

`func (o *KeywordType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *KeywordType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *KeywordType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *KeywordType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetKeyword

`func (o *KeywordType) GetKeyword() string`

GetKeyword returns the Keyword field if non-nil, zero value otherwise.

### GetKeywordOk

`func (o *KeywordType) GetKeywordOk() (*string, bool)`

GetKeywordOk returns a tuple with the Keyword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyword

`func (o *KeywordType) SetKeyword(v string)`

SetKeyword sets Keyword field to given value.

### HasKeyword

`func (o *KeywordType) HasKeyword() bool`

HasKeyword returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


