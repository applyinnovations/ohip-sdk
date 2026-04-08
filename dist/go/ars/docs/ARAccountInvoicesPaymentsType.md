# ARAccountInvoicesPaymentsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where the Account exists. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AccountName** | Pointer to **string** | Name of the AR Account. | [optional] 
**AccountNo** | Pointer to **string** | The Account Number for the Account. | [optional] 
**PaymentDueDays** | Pointer to **string** | Number of days on which person can make payment. | [optional] 
**MonthEndCalcYN** | Pointer to **bool** | Month End Calculation. | [optional] 
**Summary** | Pointer to [**ARBalanceType**](ARBalanceType.md) |  | [optional] 
**Invoices** | Pointer to [**[]ARInvoiceType**](ARInvoiceType.md) | A collection of AR Invoices. | [optional] 
**Payments** | Pointer to [**[]ARPaymentType**](ARPaymentType.md) | A collection of AR Payments. | [optional] 

## Methods

### NewARAccountInvoicesPaymentsType

`func NewARAccountInvoicesPaymentsType() *ARAccountInvoicesPaymentsType`

NewARAccountInvoicesPaymentsType instantiates a new ARAccountInvoicesPaymentsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAccountInvoicesPaymentsTypeWithDefaults

`func NewARAccountInvoicesPaymentsTypeWithDefaults() *ARAccountInvoicesPaymentsType`

NewARAccountInvoicesPaymentsTypeWithDefaults instantiates a new ARAccountInvoicesPaymentsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ARAccountInvoicesPaymentsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARAccountInvoicesPaymentsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARAccountInvoicesPaymentsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARAccountInvoicesPaymentsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetProfileId

`func (o *ARAccountInvoicesPaymentsType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ARAccountInvoicesPaymentsType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ARAccountInvoicesPaymentsType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ARAccountInvoicesPaymentsType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetAccountId

`func (o *ARAccountInvoicesPaymentsType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ARAccountInvoicesPaymentsType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ARAccountInvoicesPaymentsType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ARAccountInvoicesPaymentsType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountName

`func (o *ARAccountInvoicesPaymentsType) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *ARAccountInvoicesPaymentsType) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *ARAccountInvoicesPaymentsType) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *ARAccountInvoicesPaymentsType) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetAccountNo

`func (o *ARAccountInvoicesPaymentsType) GetAccountNo() string`

GetAccountNo returns the AccountNo field if non-nil, zero value otherwise.

### GetAccountNoOk

`func (o *ARAccountInvoicesPaymentsType) GetAccountNoOk() (*string, bool)`

GetAccountNoOk returns a tuple with the AccountNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNo

`func (o *ARAccountInvoicesPaymentsType) SetAccountNo(v string)`

SetAccountNo sets AccountNo field to given value.

### HasAccountNo

`func (o *ARAccountInvoicesPaymentsType) HasAccountNo() bool`

HasAccountNo returns a boolean if a field has been set.

### GetPaymentDueDays

`func (o *ARAccountInvoicesPaymentsType) GetPaymentDueDays() string`

GetPaymentDueDays returns the PaymentDueDays field if non-nil, zero value otherwise.

### GetPaymentDueDaysOk

`func (o *ARAccountInvoicesPaymentsType) GetPaymentDueDaysOk() (*string, bool)`

GetPaymentDueDaysOk returns a tuple with the PaymentDueDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDueDays

`func (o *ARAccountInvoicesPaymentsType) SetPaymentDueDays(v string)`

SetPaymentDueDays sets PaymentDueDays field to given value.

### HasPaymentDueDays

`func (o *ARAccountInvoicesPaymentsType) HasPaymentDueDays() bool`

HasPaymentDueDays returns a boolean if a field has been set.

### GetMonthEndCalcYN

`func (o *ARAccountInvoicesPaymentsType) GetMonthEndCalcYN() bool`

GetMonthEndCalcYN returns the MonthEndCalcYN field if non-nil, zero value otherwise.

### GetMonthEndCalcYNOk

`func (o *ARAccountInvoicesPaymentsType) GetMonthEndCalcYNOk() (*bool, bool)`

GetMonthEndCalcYNOk returns a tuple with the MonthEndCalcYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonthEndCalcYN

`func (o *ARAccountInvoicesPaymentsType) SetMonthEndCalcYN(v bool)`

SetMonthEndCalcYN sets MonthEndCalcYN field to given value.

### HasMonthEndCalcYN

`func (o *ARAccountInvoicesPaymentsType) HasMonthEndCalcYN() bool`

HasMonthEndCalcYN returns a boolean if a field has been set.

### GetSummary

`func (o *ARAccountInvoicesPaymentsType) GetSummary() ARBalanceType`

GetSummary returns the Summary field if non-nil, zero value otherwise.

### GetSummaryOk

`func (o *ARAccountInvoicesPaymentsType) GetSummaryOk() (*ARBalanceType, bool)`

GetSummaryOk returns a tuple with the Summary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummary

`func (o *ARAccountInvoicesPaymentsType) SetSummary(v ARBalanceType)`

SetSummary sets Summary field to given value.

### HasSummary

`func (o *ARAccountInvoicesPaymentsType) HasSummary() bool`

HasSummary returns a boolean if a field has been set.

### GetInvoices

`func (o *ARAccountInvoicesPaymentsType) GetInvoices() []ARInvoiceType`

GetInvoices returns the Invoices field if non-nil, zero value otherwise.

### GetInvoicesOk

`func (o *ARAccountInvoicesPaymentsType) GetInvoicesOk() (*[]ARInvoiceType, bool)`

GetInvoicesOk returns a tuple with the Invoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoices

`func (o *ARAccountInvoicesPaymentsType) SetInvoices(v []ARInvoiceType)`

SetInvoices sets Invoices field to given value.

### HasInvoices

`func (o *ARAccountInvoicesPaymentsType) HasInvoices() bool`

HasInvoices returns a boolean if a field has been set.

### GetPayments

`func (o *ARAccountInvoicesPaymentsType) GetPayments() []ARPaymentType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *ARAccountInvoicesPaymentsType) GetPaymentsOk() (*[]ARPaymentType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *ARAccountInvoicesPaymentsType) SetPayments(v []ARPaymentType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *ARAccountInvoicesPaymentsType) HasPayments() bool`

HasPayments returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


