# KeywordTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Common Master unique code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplayOrder** | Pointer to **float32** | Common Master record sequence number. | [optional] 
**MasterSubKeyword** | Pointer to **bool** | Indicates if the KEYWORD TYPE is to be copied from a Company Master to a Company Subsidiary. | [optional] 

## Methods

### NewKeywordTypeType

`func NewKeywordTypeType() *KeywordTypeType`

NewKeywordTypeType instantiates a new KeywordTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKeywordTypeTypeWithDefaults

`func NewKeywordTypeTypeWithDefaults() *KeywordTypeType`

NewKeywordTypeTypeWithDefaults instantiates a new KeywordTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *KeywordTypeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *KeywordTypeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *KeywordTypeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *KeywordTypeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *KeywordTypeType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *KeywordTypeType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *KeywordTypeType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *KeywordTypeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *KeywordTypeType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *KeywordTypeType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *KeywordTypeType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *KeywordTypeType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetMasterSubKeyword

`func (o *KeywordTypeType) GetMasterSubKeyword() bool`

GetMasterSubKeyword returns the MasterSubKeyword field if non-nil, zero value otherwise.

### GetMasterSubKeywordOk

`func (o *KeywordTypeType) GetMasterSubKeywordOk() (*bool, bool)`

GetMasterSubKeywordOk returns a tuple with the MasterSubKeyword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterSubKeyword

`func (o *KeywordTypeType) SetMasterSubKeyword(v bool)`

SetMasterSubKeyword sets MasterSubKeyword field to given value.

### HasMasterSubKeyword

`func (o *KeywordTypeType) HasMasterSubKeyword() bool`

HasMasterSubKeyword returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


