# BlockLostBookingCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Common Master unique code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplayOrder** | Pointer to **float32** | Common Master record sequence number. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the Block Lost Reason is inactive or not, returns TRUE when inactive | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewBlockLostBookingCodeType

`func NewBlockLostBookingCodeType() *BlockLostBookingCodeType`

NewBlockLostBookingCodeType instantiates a new BlockLostBookingCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockLostBookingCodeTypeWithDefaults

`func NewBlockLostBookingCodeTypeWithDefaults() *BlockLostBookingCodeType`

NewBlockLostBookingCodeTypeWithDefaults instantiates a new BlockLostBookingCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *BlockLostBookingCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *BlockLostBookingCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *BlockLostBookingCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *BlockLostBookingCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *BlockLostBookingCodeType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BlockLostBookingCodeType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BlockLostBookingCodeType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BlockLostBookingCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *BlockLostBookingCodeType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *BlockLostBookingCodeType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *BlockLostBookingCodeType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *BlockLostBookingCodeType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetInactive

`func (o *BlockLostBookingCodeType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *BlockLostBookingCodeType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *BlockLostBookingCodeType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *BlockLostBookingCodeType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetManagedBy

`func (o *BlockLostBookingCodeType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *BlockLostBookingCodeType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *BlockLostBookingCodeType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *BlockLostBookingCodeType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


