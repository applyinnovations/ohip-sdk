# MarketGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 
**Code** | Pointer to **string** | Code for the code type. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the code type is inactive or not. | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the code type. | [optional] 
**MarketCodes** | Pointer to [**[]MarketCodeType**](MarketCodeType.md) | Collection of Market Codes. | [optional] 
**Ranking** | Pointer to **int32** |  | [optional] 
**Upgradable** | Pointer to **bool** | Defines if the Market Group is eligible for auto upgrade for Room Assignment Optimization | [optional] 
**Central** | Pointer to **bool** | Indicates if market code is originated from Central. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewMarketGroupType

`func NewMarketGroupType() *MarketGroupType`

NewMarketGroupType instantiates a new MarketGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketGroupTypeWithDefaults

`func NewMarketGroupTypeWithDefaults() *MarketGroupType`

NewMarketGroupTypeWithDefaults instantiates a new MarketGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *MarketGroupType) GetDescription() TranslationTextType50`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MarketGroupType) GetDescriptionOk() (*TranslationTextType50, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MarketGroupType) SetDescription(v TranslationTextType50)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MarketGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *MarketGroupType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *MarketGroupType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *MarketGroupType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *MarketGroupType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCode

`func (o *MarketGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MarketGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MarketGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *MarketGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetInactive

`func (o *MarketGroupType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *MarketGroupType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *MarketGroupType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *MarketGroupType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetHotelId

`func (o *MarketGroupType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MarketGroupType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MarketGroupType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MarketGroupType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMarketCodes

`func (o *MarketGroupType) GetMarketCodes() []MarketCodeType`

GetMarketCodes returns the MarketCodes field if non-nil, zero value otherwise.

### GetMarketCodesOk

`func (o *MarketGroupType) GetMarketCodesOk() (*[]MarketCodeType, bool)`

GetMarketCodesOk returns a tuple with the MarketCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCodes

`func (o *MarketGroupType) SetMarketCodes(v []MarketCodeType)`

SetMarketCodes sets MarketCodes field to given value.

### HasMarketCodes

`func (o *MarketGroupType) HasMarketCodes() bool`

HasMarketCodes returns a boolean if a field has been set.

### GetRanking

`func (o *MarketGroupType) GetRanking() int32`

GetRanking returns the Ranking field if non-nil, zero value otherwise.

### GetRankingOk

`func (o *MarketGroupType) GetRankingOk() (*int32, bool)`

GetRankingOk returns a tuple with the Ranking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRanking

`func (o *MarketGroupType) SetRanking(v int32)`

SetRanking sets Ranking field to given value.

### HasRanking

`func (o *MarketGroupType) HasRanking() bool`

HasRanking returns a boolean if a field has been set.

### GetUpgradable

`func (o *MarketGroupType) GetUpgradable() bool`

GetUpgradable returns the Upgradable field if non-nil, zero value otherwise.

### GetUpgradableOk

`func (o *MarketGroupType) GetUpgradableOk() (*bool, bool)`

GetUpgradableOk returns a tuple with the Upgradable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradable

`func (o *MarketGroupType) SetUpgradable(v bool)`

SetUpgradable sets Upgradable field to given value.

### HasUpgradable

`func (o *MarketGroupType) HasUpgradable() bool`

HasUpgradable returns a boolean if a field has been set.

### GetCentral

`func (o *MarketGroupType) GetCentral() bool`

GetCentral returns the Central field if non-nil, zero value otherwise.

### GetCentralOk

`func (o *MarketGroupType) GetCentralOk() (*bool, bool)`

GetCentralOk returns a tuple with the Central field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentral

`func (o *MarketGroupType) SetCentral(v bool)`

SetCentral sets Central field to given value.

### HasCentral

`func (o *MarketGroupType) HasCentral() bool`

HasCentral returns a boolean if a field has been set.

### GetManagedBy

`func (o *MarketGroupType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *MarketGroupType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *MarketGroupType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *MarketGroupType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


