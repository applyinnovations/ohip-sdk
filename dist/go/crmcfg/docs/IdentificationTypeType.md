# IdentificationTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Common Master unique code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplayOrder** | Pointer to **float32** | Common Master record sequence number. | [optional] 
**IdentificationRole** | Pointer to [**IdentificationRoleType**](IdentificationRoleType.md) |  | [optional] 

## Methods

### NewIdentificationTypeType

`func NewIdentificationTypeType() *IdentificationTypeType`

NewIdentificationTypeType instantiates a new IdentificationTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentificationTypeTypeWithDefaults

`func NewIdentificationTypeTypeWithDefaults() *IdentificationTypeType`

NewIdentificationTypeTypeWithDefaults instantiates a new IdentificationTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *IdentificationTypeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *IdentificationTypeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *IdentificationTypeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *IdentificationTypeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *IdentificationTypeType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *IdentificationTypeType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *IdentificationTypeType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *IdentificationTypeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *IdentificationTypeType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *IdentificationTypeType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *IdentificationTypeType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *IdentificationTypeType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetIdentificationRole

`func (o *IdentificationTypeType) GetIdentificationRole() IdentificationRoleType`

GetIdentificationRole returns the IdentificationRole field if non-nil, zero value otherwise.

### GetIdentificationRoleOk

`func (o *IdentificationTypeType) GetIdentificationRoleOk() (*IdentificationRoleType, bool)`

GetIdentificationRoleOk returns a tuple with the IdentificationRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentificationRole

`func (o *IdentificationTypeType) SetIdentificationRole(v IdentificationRoleType)`

SetIdentificationRole sets IdentificationRole field to given value.

### HasIdentificationRole

`func (o *IdentificationTypeType) HasIdentificationRole() bool`

HasIdentificationRole returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


