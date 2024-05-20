# UserDefinedFieldValueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Common Master unique code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplayOrder** | Pointer to **float32** | Common Master record sequence number. | [optional] 
**GroupCode** | Pointer to **string** | The group which the User Defined Field Value belongs to. | [optional] 

## Methods

### NewUserDefinedFieldValueType

`func NewUserDefinedFieldValueType() *UserDefinedFieldValueType`

NewUserDefinedFieldValueType instantiates a new UserDefinedFieldValueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserDefinedFieldValueTypeWithDefaults

`func NewUserDefinedFieldValueTypeWithDefaults() *UserDefinedFieldValueType`

NewUserDefinedFieldValueTypeWithDefaults instantiates a new UserDefinedFieldValueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *UserDefinedFieldValueType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *UserDefinedFieldValueType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *UserDefinedFieldValueType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *UserDefinedFieldValueType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *UserDefinedFieldValueType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UserDefinedFieldValueType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UserDefinedFieldValueType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UserDefinedFieldValueType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *UserDefinedFieldValueType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *UserDefinedFieldValueType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *UserDefinedFieldValueType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *UserDefinedFieldValueType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetGroupCode

`func (o *UserDefinedFieldValueType) GetGroupCode() string`

GetGroupCode returns the GroupCode field if non-nil, zero value otherwise.

### GetGroupCodeOk

`func (o *UserDefinedFieldValueType) GetGroupCodeOk() (*string, bool)`

GetGroupCodeOk returns a tuple with the GroupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupCode

`func (o *UserDefinedFieldValueType) SetGroupCode(v string)`

SetGroupCode sets GroupCode field to given value.

### HasGroupCode

`func (o *UserDefinedFieldValueType) HasGroupCode() bool`

HasGroupCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


