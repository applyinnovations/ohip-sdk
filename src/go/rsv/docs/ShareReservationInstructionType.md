# ShareReservationInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EffectiveRates** | Pointer to [**EffectiveRatesType**](EffectiveRatesType.md) |  | [optional] 
**FixedRate** | Pointer to **bool** | Indicates whether fixed rate will be applied to all shares. | [optional] 
**PaymentMethod** | Pointer to [**ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**RateAmountShare** | Pointer to [**ShareDistributionInstructionType**](ShareDistributionInstructionType.md) |  | [optional] 
**ShareType** | Pointer to [**ShareTypeType**](ShareTypeType.md) |  | [optional] 

## Methods

### NewShareReservationInstructionType

`func NewShareReservationInstructionType() *ShareReservationInstructionType`

NewShareReservationInstructionType instantiates a new ShareReservationInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewShareReservationInstructionTypeWithDefaults

`func NewShareReservationInstructionTypeWithDefaults() *ShareReservationInstructionType`

NewShareReservationInstructionTypeWithDefaults instantiates a new ShareReservationInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEffectiveRates

`func (o *ShareReservationInstructionType) GetEffectiveRates() EffectiveRatesType`

GetEffectiveRates returns the EffectiveRates field if non-nil, zero value otherwise.

### GetEffectiveRatesOk

`func (o *ShareReservationInstructionType) GetEffectiveRatesOk() (*EffectiveRatesType, bool)`

GetEffectiveRatesOk returns a tuple with the EffectiveRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveRates

`func (o *ShareReservationInstructionType) SetEffectiveRates(v EffectiveRatesType)`

SetEffectiveRates sets EffectiveRates field to given value.

### HasEffectiveRates

`func (o *ShareReservationInstructionType) HasEffectiveRates() bool`

HasEffectiveRates returns a boolean if a field has been set.

### GetFixedRate

`func (o *ShareReservationInstructionType) GetFixedRate() bool`

GetFixedRate returns the FixedRate field if non-nil, zero value otherwise.

### GetFixedRateOk

`func (o *ShareReservationInstructionType) GetFixedRateOk() (*bool, bool)`

GetFixedRateOk returns a tuple with the FixedRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedRate

`func (o *ShareReservationInstructionType) SetFixedRate(v bool)`

SetFixedRate sets FixedRate field to given value.

### HasFixedRate

`func (o *ShareReservationInstructionType) HasFixedRate() bool`

HasFixedRate returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *ShareReservationInstructionType) GetPaymentMethod() ReservationPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *ShareReservationInstructionType) GetPaymentMethodOk() (*ReservationPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *ShareReservationInstructionType) SetPaymentMethod(v ReservationPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *ShareReservationInstructionType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetRateAmountShare

`func (o *ShareReservationInstructionType) GetRateAmountShare() ShareDistributionInstructionType`

GetRateAmountShare returns the RateAmountShare field if non-nil, zero value otherwise.

### GetRateAmountShareOk

`func (o *ShareReservationInstructionType) GetRateAmountShareOk() (*ShareDistributionInstructionType, bool)`

GetRateAmountShareOk returns a tuple with the RateAmountShare field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAmountShare

`func (o *ShareReservationInstructionType) SetRateAmountShare(v ShareDistributionInstructionType)`

SetRateAmountShare sets RateAmountShare field to given value.

### HasRateAmountShare

`func (o *ShareReservationInstructionType) HasRateAmountShare() bool`

HasRateAmountShare returns a boolean if a field has been set.

### GetShareType

`func (o *ShareReservationInstructionType) GetShareType() ShareTypeType`

GetShareType returns the ShareType field if non-nil, zero value otherwise.

### GetShareTypeOk

`func (o *ShareReservationInstructionType) GetShareTypeOk() (*ShareTypeType, bool)`

GetShareTypeOk returns a tuple with the ShareType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareType

`func (o *ShareReservationInstructionType) SetShareType(v ShareTypeType)`

SetShareType sets ShareType field to given value.

### HasShareType

`func (o *ShareReservationInstructionType) HasShareType() bool`

HasShareType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


