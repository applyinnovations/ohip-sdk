# PaymentMethodUsageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountsReceivable** | Pointer to **bool** | Indicates if this payment method can be used for Accounts Receivables. | [optional] 
**Billing** | Pointer to **bool** | Indicates if the payment method can be used for Guest Billing | [optional] 
**Cash** | Pointer to **bool** | Indicates if this payment method is a Cash type payment method. | [optional] 
**CompAccounting** | Pointer to **bool** | Indicates if this payment method can be used for Comp Accounting. | [optional] 
**Deposit** | Pointer to **bool** | Indicates if this payment method can be used for Deposit payments. | [optional] 
**Posting** | Pointer to **bool** | Indicates if postings can be manually added to the Reservation when this payment method is used. | [optional] 
**Reservation** | Pointer to **bool** | Indicates if this payment method can be used as a Reservation payment method. | [optional] 

## Methods

### NewPaymentMethodUsageType

`func NewPaymentMethodUsageType() *PaymentMethodUsageType`

NewPaymentMethodUsageType instantiates a new PaymentMethodUsageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentMethodUsageTypeWithDefaults

`func NewPaymentMethodUsageTypeWithDefaults() *PaymentMethodUsageType`

NewPaymentMethodUsageTypeWithDefaults instantiates a new PaymentMethodUsageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountsReceivable

`func (o *PaymentMethodUsageType) GetAccountsReceivable() bool`

GetAccountsReceivable returns the AccountsReceivable field if non-nil, zero value otherwise.

### GetAccountsReceivableOk

`func (o *PaymentMethodUsageType) GetAccountsReceivableOk() (*bool, bool)`

GetAccountsReceivableOk returns a tuple with the AccountsReceivable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsReceivable

`func (o *PaymentMethodUsageType) SetAccountsReceivable(v bool)`

SetAccountsReceivable sets AccountsReceivable field to given value.

### HasAccountsReceivable

`func (o *PaymentMethodUsageType) HasAccountsReceivable() bool`

HasAccountsReceivable returns a boolean if a field has been set.

### GetBilling

`func (o *PaymentMethodUsageType) GetBilling() bool`

GetBilling returns the Billing field if non-nil, zero value otherwise.

### GetBillingOk

`func (o *PaymentMethodUsageType) GetBillingOk() (*bool, bool)`

GetBillingOk returns a tuple with the Billing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBilling

`func (o *PaymentMethodUsageType) SetBilling(v bool)`

SetBilling sets Billing field to given value.

### HasBilling

`func (o *PaymentMethodUsageType) HasBilling() bool`

HasBilling returns a boolean if a field has been set.

### GetCash

`func (o *PaymentMethodUsageType) GetCash() bool`

GetCash returns the Cash field if non-nil, zero value otherwise.

### GetCashOk

`func (o *PaymentMethodUsageType) GetCashOk() (*bool, bool)`

GetCashOk returns a tuple with the Cash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCash

`func (o *PaymentMethodUsageType) SetCash(v bool)`

SetCash sets Cash field to given value.

### HasCash

`func (o *PaymentMethodUsageType) HasCash() bool`

HasCash returns a boolean if a field has been set.

### GetCompAccounting

`func (o *PaymentMethodUsageType) GetCompAccounting() bool`

GetCompAccounting returns the CompAccounting field if non-nil, zero value otherwise.

### GetCompAccountingOk

`func (o *PaymentMethodUsageType) GetCompAccountingOk() (*bool, bool)`

GetCompAccountingOk returns a tuple with the CompAccounting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompAccounting

`func (o *PaymentMethodUsageType) SetCompAccounting(v bool)`

SetCompAccounting sets CompAccounting field to given value.

### HasCompAccounting

`func (o *PaymentMethodUsageType) HasCompAccounting() bool`

HasCompAccounting returns a boolean if a field has been set.

### GetDeposit

`func (o *PaymentMethodUsageType) GetDeposit() bool`

GetDeposit returns the Deposit field if non-nil, zero value otherwise.

### GetDepositOk

`func (o *PaymentMethodUsageType) GetDepositOk() (*bool, bool)`

GetDepositOk returns a tuple with the Deposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposit

`func (o *PaymentMethodUsageType) SetDeposit(v bool)`

SetDeposit sets Deposit field to given value.

### HasDeposit

`func (o *PaymentMethodUsageType) HasDeposit() bool`

HasDeposit returns a boolean if a field has been set.

### GetPosting

`func (o *PaymentMethodUsageType) GetPosting() bool`

GetPosting returns the Posting field if non-nil, zero value otherwise.

### GetPostingOk

`func (o *PaymentMethodUsageType) GetPostingOk() (*bool, bool)`

GetPostingOk returns a tuple with the Posting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosting

`func (o *PaymentMethodUsageType) SetPosting(v bool)`

SetPosting sets Posting field to given value.

### HasPosting

`func (o *PaymentMethodUsageType) HasPosting() bool`

HasPosting returns a boolean if a field has been set.

### GetReservation

`func (o *PaymentMethodUsageType) GetReservation() bool`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *PaymentMethodUsageType) GetReservationOk() (*bool, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *PaymentMethodUsageType) SetReservation(v bool)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *PaymentMethodUsageType) HasReservation() bool`

HasReservation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


