# MarketCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 
**Code** | Pointer to **string** | Code for the code type. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the code type is inactive or not. | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the code type. | [optional] 
**GroupCode** | Pointer to **string** | Group code to which this code type belongs. | [optional] 
**DisplayColor** | Pointer to [**MarketCodeColorsType**](MarketCodeColorsType.md) |  | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code to map Market Code. | [optional] 
**PrintGroup** | Pointer to [**MarketCodePrintGroupType**](MarketCodePrintGroupType.md) |  | [optional] 
**Central** | Pointer to **bool** | Indicates if market code is originated from Central. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewMarketCodeType

`func NewMarketCodeType() *MarketCodeType`

NewMarketCodeType instantiates a new MarketCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketCodeTypeWithDefaults

`func NewMarketCodeTypeWithDefaults() *MarketCodeType`

NewMarketCodeTypeWithDefaults instantiates a new MarketCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *MarketCodeType) GetDescription() TranslationTextType50`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MarketCodeType) GetDescriptionOk() (*TranslationTextType50, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MarketCodeType) SetDescription(v TranslationTextType50)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MarketCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *MarketCodeType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *MarketCodeType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *MarketCodeType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *MarketCodeType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCode

`func (o *MarketCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MarketCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MarketCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *MarketCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetInactive

`func (o *MarketCodeType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *MarketCodeType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *MarketCodeType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *MarketCodeType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetHotelId

`func (o *MarketCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MarketCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MarketCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MarketCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetGroupCode

`func (o *MarketCodeType) GetGroupCode() string`

GetGroupCode returns the GroupCode field if non-nil, zero value otherwise.

### GetGroupCodeOk

`func (o *MarketCodeType) GetGroupCodeOk() (*string, bool)`

GetGroupCodeOk returns a tuple with the GroupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupCode

`func (o *MarketCodeType) SetGroupCode(v string)`

SetGroupCode sets GroupCode field to given value.

### HasGroupCode

`func (o *MarketCodeType) HasGroupCode() bool`

HasGroupCode returns a boolean if a field has been set.

### GetDisplayColor

`func (o *MarketCodeType) GetDisplayColor() MarketCodeColorsType`

GetDisplayColor returns the DisplayColor field if non-nil, zero value otherwise.

### GetDisplayColorOk

`func (o *MarketCodeType) GetDisplayColorOk() (*MarketCodeColorsType, bool)`

GetDisplayColorOk returns a tuple with the DisplayColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayColor

`func (o *MarketCodeType) SetDisplayColor(v MarketCodeColorsType)`

SetDisplayColor sets DisplayColor field to given value.

### HasDisplayColor

`func (o *MarketCodeType) HasDisplayColor() bool`

HasDisplayColor returns a boolean if a field has been set.

### GetTransactionCode

`func (o *MarketCodeType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *MarketCodeType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *MarketCodeType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *MarketCodeType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetPrintGroup

`func (o *MarketCodeType) GetPrintGroup() MarketCodePrintGroupType`

GetPrintGroup returns the PrintGroup field if non-nil, zero value otherwise.

### GetPrintGroupOk

`func (o *MarketCodeType) GetPrintGroupOk() (*MarketCodePrintGroupType, bool)`

GetPrintGroupOk returns a tuple with the PrintGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintGroup

`func (o *MarketCodeType) SetPrintGroup(v MarketCodePrintGroupType)`

SetPrintGroup sets PrintGroup field to given value.

### HasPrintGroup

`func (o *MarketCodeType) HasPrintGroup() bool`

HasPrintGroup returns a boolean if a field has been set.

### GetCentral

`func (o *MarketCodeType) GetCentral() bool`

GetCentral returns the Central field if non-nil, zero value otherwise.

### GetCentralOk

`func (o *MarketCodeType) GetCentralOk() (*bool, bool)`

GetCentralOk returns a tuple with the Central field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentral

`func (o *MarketCodeType) SetCentral(v bool)`

SetCentral sets Central field to given value.

### HasCentral

`func (o *MarketCodeType) HasCentral() bool`

HasCentral returns a boolean if a field has been set.

### GetManagedBy

`func (o *MarketCodeType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *MarketCodeType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *MarketCodeType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *MarketCodeType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


