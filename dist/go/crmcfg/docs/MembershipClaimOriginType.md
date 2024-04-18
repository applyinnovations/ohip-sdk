# MembershipClaimOriginType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Common Master unique code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplayOrder** | Pointer to **float32** | Common Master record sequence number. | [optional] 

## Methods

### NewMembershipClaimOriginType

`func NewMembershipClaimOriginType() *MembershipClaimOriginType`

NewMembershipClaimOriginType instantiates a new MembershipClaimOriginType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipClaimOriginTypeWithDefaults

`func NewMembershipClaimOriginTypeWithDefaults() *MembershipClaimOriginType`

NewMembershipClaimOriginTypeWithDefaults instantiates a new MembershipClaimOriginType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *MembershipClaimOriginType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MembershipClaimOriginType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MembershipClaimOriginType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *MembershipClaimOriginType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *MembershipClaimOriginType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MembershipClaimOriginType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MembershipClaimOriginType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MembershipClaimOriginType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *MembershipClaimOriginType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *MembershipClaimOriginType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *MembershipClaimOriginType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *MembershipClaimOriginType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

