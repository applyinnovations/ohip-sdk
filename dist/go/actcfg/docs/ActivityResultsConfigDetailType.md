# ActivityResultsConfigDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Common Master unique code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplayOrder** | Pointer to **float32** | Common Master record sequence number. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the Activity Results is inactive or not. | [optional] 

## Methods

### NewActivityResultsConfigDetailType

`func NewActivityResultsConfigDetailType() *ActivityResultsConfigDetailType`

NewActivityResultsConfigDetailType instantiates a new ActivityResultsConfigDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityResultsConfigDetailTypeWithDefaults

`func NewActivityResultsConfigDetailTypeWithDefaults() *ActivityResultsConfigDetailType`

NewActivityResultsConfigDetailTypeWithDefaults instantiates a new ActivityResultsConfigDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ActivityResultsConfigDetailType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ActivityResultsConfigDetailType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ActivityResultsConfigDetailType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ActivityResultsConfigDetailType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *ActivityResultsConfigDetailType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ActivityResultsConfigDetailType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ActivityResultsConfigDetailType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ActivityResultsConfigDetailType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *ActivityResultsConfigDetailType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *ActivityResultsConfigDetailType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *ActivityResultsConfigDetailType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *ActivityResultsConfigDetailType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetInactive

`func (o *ActivityResultsConfigDetailType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ActivityResultsConfigDetailType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ActivityResultsConfigDetailType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ActivityResultsConfigDetailType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


