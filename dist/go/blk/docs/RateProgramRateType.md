# RateProgramRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Commissionable** | Pointer to **bool** | Rate Program Commissionable Indicator. | [optional] 
**EndDate** | Pointer to **string** | End date of the Room Pool Rate Program. | [optional] 
**MobileCheckout** | Pointer to **bool** | Rate Program Mobile Checkout Allowed Indicator. | [optional] 
**Primary** | Pointer to **bool** | Rate Program Primary Rate Code Indicator. | [optional] 
**RateAmounts** | Pointer to [**BlockGridRatesType**](BlockGridRatesType.md) |  | [optional] 
**RateCode** | Pointer to **string** | Rate Program Code. | [optional] 
**RateMarketCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**RoomTypes** | Pointer to **[]string** | Room type for which Rate Program Rate Applies. | [optional] 
**Sequence** | Pointer to **int32** | Sequence Number of the Rate Program. | [optional] 
**StartDate** | Pointer to **string** | Start date of the Room Pool Rate Program. | [optional] 

## Methods

### NewRateProgramRateType

`func NewRateProgramRateType() *RateProgramRateType`

NewRateProgramRateType instantiates a new RateProgramRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateProgramRateTypeWithDefaults

`func NewRateProgramRateTypeWithDefaults() *RateProgramRateType`

NewRateProgramRateTypeWithDefaults instantiates a new RateProgramRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionable

`func (o *RateProgramRateType) GetCommissionable() bool`

GetCommissionable returns the Commissionable field if non-nil, zero value otherwise.

### GetCommissionableOk

`func (o *RateProgramRateType) GetCommissionableOk() (*bool, bool)`

GetCommissionableOk returns a tuple with the Commissionable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionable

`func (o *RateProgramRateType) SetCommissionable(v bool)`

SetCommissionable sets Commissionable field to given value.

### HasCommissionable

`func (o *RateProgramRateType) HasCommissionable() bool`

HasCommissionable returns a boolean if a field has been set.

### GetEndDate

`func (o *RateProgramRateType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *RateProgramRateType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *RateProgramRateType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *RateProgramRateType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetMobileCheckout

`func (o *RateProgramRateType) GetMobileCheckout() bool`

GetMobileCheckout returns the MobileCheckout field if non-nil, zero value otherwise.

### GetMobileCheckoutOk

`func (o *RateProgramRateType) GetMobileCheckoutOk() (*bool, bool)`

GetMobileCheckoutOk returns a tuple with the MobileCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileCheckout

`func (o *RateProgramRateType) SetMobileCheckout(v bool)`

SetMobileCheckout sets MobileCheckout field to given value.

### HasMobileCheckout

`func (o *RateProgramRateType) HasMobileCheckout() bool`

HasMobileCheckout returns a boolean if a field has been set.

### GetPrimary

`func (o *RateProgramRateType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *RateProgramRateType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *RateProgramRateType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *RateProgramRateType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetRateAmounts

`func (o *RateProgramRateType) GetRateAmounts() BlockGridRatesType`

GetRateAmounts returns the RateAmounts field if non-nil, zero value otherwise.

### GetRateAmountsOk

`func (o *RateProgramRateType) GetRateAmountsOk() (*BlockGridRatesType, bool)`

GetRateAmountsOk returns a tuple with the RateAmounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmounts

`func (o *RateProgramRateType) SetRateAmounts(v BlockGridRatesType)`

SetRateAmounts sets RateAmounts field to given value.

### HasRateAmounts

`func (o *RateProgramRateType) HasRateAmounts() bool`

HasRateAmounts returns a boolean if a field has been set.

### GetRateCode

`func (o *RateProgramRateType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *RateProgramRateType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *RateProgramRateType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *RateProgramRateType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRateMarketCode

`func (o *RateProgramRateType) GetRateMarketCode() CodeDescriptionType`

GetRateMarketCode returns the RateMarketCode field if non-nil, zero value otherwise.

### GetRateMarketCodeOk

`func (o *RateProgramRateType) GetRateMarketCodeOk() (*CodeDescriptionType, bool)`

GetRateMarketCodeOk returns a tuple with the RateMarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateMarketCode

`func (o *RateProgramRateType) SetRateMarketCode(v CodeDescriptionType)`

SetRateMarketCode sets RateMarketCode field to given value.

### HasRateMarketCode

`func (o *RateProgramRateType) HasRateMarketCode() bool`

HasRateMarketCode returns a boolean if a field has been set.

### GetRoomTypes

`func (o *RateProgramRateType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *RateProgramRateType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *RateProgramRateType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *RateProgramRateType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetSequence

`func (o *RateProgramRateType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *RateProgramRateType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *RateProgramRateType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *RateProgramRateType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetStartDate

`func (o *RateProgramRateType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *RateProgramRateType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *RateProgramRateType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *RateProgramRateType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


