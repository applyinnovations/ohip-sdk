# HotelTurnAwayCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | TurnAway code | [optional] 
**Description** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**DisplaySequence** | Pointer to **float32** | Sequence of TurnAway code. | [optional] 
**TurnAwayType** | Pointer to [**TurnAwayTypeType**](TurnAwayTypeType.md) |  | [optional] 
**Inactive** | Pointer to **bool** | Inactive flag for a TurnAway code. | [optional] 
**CanDelete** | Pointer to **bool** | Determines whether this TurnAway code can be deleted. | [optional] 
**HotelId** | Pointer to **string** | Hotel code that the turnaway code belongs to. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewHotelTurnAwayCodeType

`func NewHotelTurnAwayCodeType() *HotelTurnAwayCodeType`

NewHotelTurnAwayCodeType instantiates a new HotelTurnAwayCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelTurnAwayCodeTypeWithDefaults

`func NewHotelTurnAwayCodeTypeWithDefaults() *HotelTurnAwayCodeType`

NewHotelTurnAwayCodeTypeWithDefaults instantiates a new HotelTurnAwayCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *HotelTurnAwayCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HotelTurnAwayCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HotelTurnAwayCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *HotelTurnAwayCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *HotelTurnAwayCodeType) GetDescription() TranslationTextType50`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HotelTurnAwayCodeType) GetDescriptionOk() (*TranslationTextType50, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HotelTurnAwayCodeType) SetDescription(v TranslationTextType50)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HotelTurnAwayCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *HotelTurnAwayCodeType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *HotelTurnAwayCodeType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *HotelTurnAwayCodeType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *HotelTurnAwayCodeType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetTurnAwayType

`func (o *HotelTurnAwayCodeType) GetTurnAwayType() TurnAwayTypeType`

GetTurnAwayType returns the TurnAwayType field if non-nil, zero value otherwise.

### GetTurnAwayTypeOk

`func (o *HotelTurnAwayCodeType) GetTurnAwayTypeOk() (*TurnAwayTypeType, bool)`

GetTurnAwayTypeOk returns a tuple with the TurnAwayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurnAwayType

`func (o *HotelTurnAwayCodeType) SetTurnAwayType(v TurnAwayTypeType)`

SetTurnAwayType sets TurnAwayType field to given value.

### HasTurnAwayType

`func (o *HotelTurnAwayCodeType) HasTurnAwayType() bool`

HasTurnAwayType returns a boolean if a field has been set.

### GetInactive

`func (o *HotelTurnAwayCodeType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *HotelTurnAwayCodeType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *HotelTurnAwayCodeType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *HotelTurnAwayCodeType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetCanDelete

`func (o *HotelTurnAwayCodeType) GetCanDelete() bool`

GetCanDelete returns the CanDelete field if non-nil, zero value otherwise.

### GetCanDeleteOk

`func (o *HotelTurnAwayCodeType) GetCanDeleteOk() (*bool, bool)`

GetCanDeleteOk returns a tuple with the CanDelete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanDelete

`func (o *HotelTurnAwayCodeType) SetCanDelete(v bool)`

SetCanDelete sets CanDelete field to given value.

### HasCanDelete

`func (o *HotelTurnAwayCodeType) HasCanDelete() bool`

HasCanDelete returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelTurnAwayCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelTurnAwayCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelTurnAwayCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelTurnAwayCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetManagedBy

`func (o *HotelTurnAwayCodeType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *HotelTurnAwayCodeType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *HotelTurnAwayCodeType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *HotelTurnAwayCodeType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


