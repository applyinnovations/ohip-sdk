# TrxSplitCriteriaTypeSplitDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Percentage** | Pointer to **float32** | The percentage by which the transaction has to be split. | [optional] 
**Quantity** | Pointer to **int32** | The quantity to split. This can be used only if the original quantity of the transaction(s) was &gt; 1. | [optional] 

## Methods

### NewTrxSplitCriteriaTypeSplitDetails

`func NewTrxSplitCriteriaTypeSplitDetails() *TrxSplitCriteriaTypeSplitDetails`

NewTrxSplitCriteriaTypeSplitDetails instantiates a new TrxSplitCriteriaTypeSplitDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrxSplitCriteriaTypeSplitDetailsWithDefaults

`func NewTrxSplitCriteriaTypeSplitDetailsWithDefaults() *TrxSplitCriteriaTypeSplitDetails`

NewTrxSplitCriteriaTypeSplitDetailsWithDefaults instantiates a new TrxSplitCriteriaTypeSplitDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *TrxSplitCriteriaTypeSplitDetails) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TrxSplitCriteriaTypeSplitDetails) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TrxSplitCriteriaTypeSplitDetails) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *TrxSplitCriteriaTypeSplitDetails) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPercentage

`func (o *TrxSplitCriteriaTypeSplitDetails) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *TrxSplitCriteriaTypeSplitDetails) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *TrxSplitCriteriaTypeSplitDetails) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *TrxSplitCriteriaTypeSplitDetails) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetQuantity

`func (o *TrxSplitCriteriaTypeSplitDetails) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *TrxSplitCriteriaTypeSplitDetails) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *TrxSplitCriteriaTypeSplitDetails) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *TrxSplitCriteriaTypeSplitDetails) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


