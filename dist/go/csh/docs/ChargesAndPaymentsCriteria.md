# ChargesAndPaymentsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Charges** | Pointer to [**[]ChargeCriteriaType**](ChargeCriteriaType.md) | Information regarding the charges which have to be posted. | [optional] 
**Payments** | Pointer to [**[]PaymentCriteriaType**](PaymentCriteriaType.md) | The payment information to be posted. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewChargesAndPaymentsCriteria

`func NewChargesAndPaymentsCriteria() *ChargesAndPaymentsCriteria`

NewChargesAndPaymentsCriteria instantiates a new ChargesAndPaymentsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargesAndPaymentsCriteriaWithDefaults

`func NewChargesAndPaymentsCriteriaWithDefaults() *ChargesAndPaymentsCriteria`

NewChargesAndPaymentsCriteriaWithDefaults instantiates a new ChargesAndPaymentsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCharges

`func (o *ChargesAndPaymentsCriteria) GetCharges() []ChargeCriteriaType`

GetCharges returns the Charges field if non-nil, zero value otherwise.

### GetChargesOk

`func (o *ChargesAndPaymentsCriteria) GetChargesOk() (*[]ChargeCriteriaType, bool)`

GetChargesOk returns a tuple with the Charges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharges

`func (o *ChargesAndPaymentsCriteria) SetCharges(v []ChargeCriteriaType)`

SetCharges sets Charges field to given value.

### HasCharges

`func (o *ChargesAndPaymentsCriteria) HasCharges() bool`

HasCharges returns a boolean if a field has been set.

### GetPayments

`func (o *ChargesAndPaymentsCriteria) GetPayments() []PaymentCriteriaType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *ChargesAndPaymentsCriteria) GetPaymentsOk() (*[]PaymentCriteriaType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *ChargesAndPaymentsCriteria) SetPayments(v []PaymentCriteriaType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *ChargesAndPaymentsCriteria) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetCashierId

`func (o *ChargesAndPaymentsCriteria) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ChargesAndPaymentsCriteria) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ChargesAndPaymentsCriteria) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ChargesAndPaymentsCriteria) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


