# TaxBracketType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code where tax bracket belongs to. | [optional] 
**TaxPercentage** | Pointer to **float32** | Tax Percentage for which this Tax Bracket applies. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Threshold** | Pointer to **float32** | The threshold(max) amount for which Tax Brackets are defined for this percentage. | [optional] 
**TaxBracketAmounts** | Pointer to [**[]TaxBracketAmountType**](TaxBracketAmountType.md) | Details used for storing information about a tax bracket amount. | [optional] 

## Methods

### NewTaxBracketType

`func NewTaxBracketType() *TaxBracketType`

NewTaxBracketType instantiates a new TaxBracketType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxBracketTypeWithDefaults

`func NewTaxBracketTypeWithDefaults() *TaxBracketType`

NewTaxBracketTypeWithDefaults instantiates a new TaxBracketType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TaxBracketType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TaxBracketType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TaxBracketType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TaxBracketType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTaxPercentage

`func (o *TaxBracketType) GetTaxPercentage() float32`

GetTaxPercentage returns the TaxPercentage field if non-nil, zero value otherwise.

### GetTaxPercentageOk

`func (o *TaxBracketType) GetTaxPercentageOk() (*float32, bool)`

GetTaxPercentageOk returns a tuple with the TaxPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxPercentage

`func (o *TaxBracketType) SetTaxPercentage(v float32)`

SetTaxPercentage sets TaxPercentage field to given value.

### HasTaxPercentage

`func (o *TaxBracketType) HasTaxPercentage() bool`

HasTaxPercentage returns a boolean if a field has been set.

### GetDescription

`func (o *TaxBracketType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TaxBracketType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TaxBracketType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TaxBracketType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetThreshold

`func (o *TaxBracketType) GetThreshold() float32`

GetThreshold returns the Threshold field if non-nil, zero value otherwise.

### GetThresholdOk

`func (o *TaxBracketType) GetThresholdOk() (*float32, bool)`

GetThresholdOk returns a tuple with the Threshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreshold

`func (o *TaxBracketType) SetThreshold(v float32)`

SetThreshold sets Threshold field to given value.

### HasThreshold

`func (o *TaxBracketType) HasThreshold() bool`

HasThreshold returns a boolean if a field has been set.

### GetTaxBracketAmounts

`func (o *TaxBracketType) GetTaxBracketAmounts() []TaxBracketAmountType`

GetTaxBracketAmounts returns the TaxBracketAmounts field if non-nil, zero value otherwise.

### GetTaxBracketAmountsOk

`func (o *TaxBracketType) GetTaxBracketAmountsOk() (*[]TaxBracketAmountType, bool)`

GetTaxBracketAmountsOk returns a tuple with the TaxBracketAmounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxBracketAmounts

`func (o *TaxBracketType) SetTaxBracketAmounts(v []TaxBracketAmountType)`

SetTaxBracketAmounts sets TaxBracketAmounts field to given value.

### HasTaxBracketAmounts

`func (o *TaxBracketType) HasTaxBracketAmounts() bool`

HasTaxBracketAmounts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


