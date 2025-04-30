# BlockCancellationReasonType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Common Master unique code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplayOrder** | Pointer to **float32** | Common Master record sequence number. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the Block Cancellation Reason is inactive or not, returns TRUE when inactive | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewBlockCancellationReasonType

`func NewBlockCancellationReasonType() *BlockCancellationReasonType`

NewBlockCancellationReasonType instantiates a new BlockCancellationReasonType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockCancellationReasonTypeWithDefaults

`func NewBlockCancellationReasonTypeWithDefaults() *BlockCancellationReasonType`

NewBlockCancellationReasonTypeWithDefaults instantiates a new BlockCancellationReasonType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *BlockCancellationReasonType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *BlockCancellationReasonType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *BlockCancellationReasonType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *BlockCancellationReasonType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *BlockCancellationReasonType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BlockCancellationReasonType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BlockCancellationReasonType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BlockCancellationReasonType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *BlockCancellationReasonType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *BlockCancellationReasonType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *BlockCancellationReasonType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *BlockCancellationReasonType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetInactive

`func (o *BlockCancellationReasonType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *BlockCancellationReasonType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *BlockCancellationReasonType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *BlockCancellationReasonType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetManagedBy

`func (o *BlockCancellationReasonType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *BlockCancellationReasonType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *BlockCancellationReasonType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *BlockCancellationReasonType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


