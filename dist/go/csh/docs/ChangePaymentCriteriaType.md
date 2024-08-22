# ChangePaymentCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**CheckNumber** | Pointer to **string** | Corrected Cheque number. | [optional] 
**Covers** | Pointer to **string** | Corrected POS covers - number of copies of receipts that got printed for that particular receipt. | [optional] 
**DepositTransactionId** | Pointer to **string** | Tax Service Accounting Codes used. | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**Reference** | Pointer to **string** | Corrected user-defined posting reference. | [optional] 
**Remark** | Pointer to **string** | Corrected user-defined posting remark. | [optional] 
**TransactionNo** | Pointer to **float32** | Transaction number of the payment being corrected. | [optional] 

## Methods

### NewChangePaymentCriteriaType

`func NewChangePaymentCriteriaType() *ChangePaymentCriteriaType`

NewChangePaymentCriteriaType instantiates a new ChangePaymentCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangePaymentCriteriaTypeWithDefaults

`func NewChangePaymentCriteriaTypeWithDefaults() *ChangePaymentCriteriaType`

NewChangePaymentCriteriaTypeWithDefaults instantiates a new ChangePaymentCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *ChangePaymentCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ChangePaymentCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ChangePaymentCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ChangePaymentCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCheckNumber

`func (o *ChangePaymentCriteriaType) GetCheckNumber() string`

GetCheckNumber returns the CheckNumber field if non-nil, zero value otherwise.

### GetCheckNumberOk

`func (o *ChangePaymentCriteriaType) GetCheckNumberOk() (*string, bool)`

GetCheckNumberOk returns a tuple with the CheckNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNumber

`func (o *ChangePaymentCriteriaType) SetCheckNumber(v string)`

SetCheckNumber sets CheckNumber field to given value.

### HasCheckNumber

`func (o *ChangePaymentCriteriaType) HasCheckNumber() bool`

HasCheckNumber returns a boolean if a field has been set.

### GetCovers

`func (o *ChangePaymentCriteriaType) GetCovers() string`

GetCovers returns the Covers field if non-nil, zero value otherwise.

### GetCoversOk

`func (o *ChangePaymentCriteriaType) GetCoversOk() (*string, bool)`

GetCoversOk returns a tuple with the Covers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCovers

`func (o *ChangePaymentCriteriaType) SetCovers(v string)`

SetCovers sets Covers field to given value.

### HasCovers

`func (o *ChangePaymentCriteriaType) HasCovers() bool`

HasCovers returns a boolean if a field has been set.

### GetDepositTransactionId

`func (o *ChangePaymentCriteriaType) GetDepositTransactionId() string`

GetDepositTransactionId returns the DepositTransactionId field if non-nil, zero value otherwise.

### GetDepositTransactionIdOk

`func (o *ChangePaymentCriteriaType) GetDepositTransactionIdOk() (*string, bool)`

GetDepositTransactionIdOk returns a tuple with the DepositTransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositTransactionId

`func (o *ChangePaymentCriteriaType) SetDepositTransactionId(v string)`

SetDepositTransactionId sets DepositTransactionId field to given value.

### HasDepositTransactionId

`func (o *ChangePaymentCriteriaType) HasDepositTransactionId() bool`

HasDepositTransactionId returns a boolean if a field has been set.

### GetHotelId

`func (o *ChangePaymentCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangePaymentCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangePaymentCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangePaymentCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReference

`func (o *ChangePaymentCriteriaType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ChangePaymentCriteriaType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ChangePaymentCriteriaType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *ChangePaymentCriteriaType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *ChangePaymentCriteriaType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *ChangePaymentCriteriaType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *ChangePaymentCriteriaType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *ChangePaymentCriteriaType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetTransactionNo

`func (o *ChangePaymentCriteriaType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *ChangePaymentCriteriaType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *ChangePaymentCriteriaType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *ChangePaymentCriteriaType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


