# ChangeShareRateAmountTypeChangeShareRateInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EffectiveRates** | Pointer to [**[]EffectiveRateType**](EffectiveRateType.md) | Collection of effective rate amount per guest on specific dates. | [optional] 
**ReturnShareReservations** | Pointer to **bool** | After the change rate operation, return the new list of Sharer Reservaitions. | [optional] 

## Methods

### NewChangeShareRateAmountTypeChangeShareRateInstructions

`func NewChangeShareRateAmountTypeChangeShareRateInstructions() *ChangeShareRateAmountTypeChangeShareRateInstructions`

NewChangeShareRateAmountTypeChangeShareRateInstructions instantiates a new ChangeShareRateAmountTypeChangeShareRateInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeShareRateAmountTypeChangeShareRateInstructionsWithDefaults

`func NewChangeShareRateAmountTypeChangeShareRateInstructionsWithDefaults() *ChangeShareRateAmountTypeChangeShareRateInstructions`

NewChangeShareRateAmountTypeChangeShareRateInstructionsWithDefaults instantiates a new ChangeShareRateAmountTypeChangeShareRateInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEffectiveRates

`func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) GetEffectiveRates() []EffectiveRateType`

GetEffectiveRates returns the EffectiveRates field if non-nil, zero value otherwise.

### GetEffectiveRatesOk

`func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) GetEffectiveRatesOk() (*[]EffectiveRateType, bool)`

GetEffectiveRatesOk returns a tuple with the EffectiveRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveRates

`func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) SetEffectiveRates(v []EffectiveRateType)`

SetEffectiveRates sets EffectiveRates field to given value.

### HasEffectiveRates

`func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) HasEffectiveRates() bool`

HasEffectiveRates returns a boolean if a field has been set.

### GetReturnShareReservations

`func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) GetReturnShareReservations() bool`

GetReturnShareReservations returns the ReturnShareReservations field if non-nil, zero value otherwise.

### GetReturnShareReservationsOk

`func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) GetReturnShareReservationsOk() (*bool, bool)`

GetReturnShareReservationsOk returns a tuple with the ReturnShareReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnShareReservations

`func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) SetReturnShareReservations(v bool)`

SetReturnShareReservations sets ReturnShareReservations field to given value.

### HasReturnShareReservations

`func (o *ChangeShareRateAmountTypeChangeShareRateInstructions) HasReturnShareReservations() bool`

HasReturnShareReservations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


