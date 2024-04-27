# PaymentTaxType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AvailableCredit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**NonTaxableAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PaymentDate** | Pointer to **string** | The Payment Invoice date | [optional] 
**PaymentType** | Pointer to [**PaymentTax**](PaymentTax.md) |  | [optional] 
**TaxInvoiceNo** | Pointer to **string** | The Tax Invoice for this payment. | [optional] 
**TaxableAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TransactionCode** | Pointer to **string** | Billing Transaction Code of the Payment. | [optional] 
**TransactionDate** | Pointer to **string** | Transaction Date of the Payment. | [optional] 
**TransactionDescription** | Pointer to **string** | Billing Transaction Description. | [optional] 
**TransactionNo** | Pointer to **float32** | Unique Transaction Identifier. | [optional] 

## Methods

### NewPaymentTaxType

`func NewPaymentTaxType() *PaymentTaxType`

NewPaymentTaxType instantiates a new PaymentTaxType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentTaxTypeWithDefaults

`func NewPaymentTaxTypeWithDefaults() *PaymentTaxType`

NewPaymentTaxTypeWithDefaults instantiates a new PaymentTaxType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *PaymentTaxType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PaymentTaxType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PaymentTaxType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PaymentTaxType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetAvailableCredit

`func (o *PaymentTaxType) GetAvailableCredit() CurrencyAmountType`

GetAvailableCredit returns the AvailableCredit field if non-nil, zero value otherwise.

### GetAvailableCreditOk

`func (o *PaymentTaxType) GetAvailableCreditOk() (*CurrencyAmountType, bool)`

GetAvailableCreditOk returns a tuple with the AvailableCredit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableCredit

`func (o *PaymentTaxType) SetAvailableCredit(v CurrencyAmountType)`

SetAvailableCredit sets AvailableCredit field to given value.

### HasAvailableCredit

`func (o *PaymentTaxType) HasAvailableCredit() bool`

HasAvailableCredit returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *PaymentTaxType) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *PaymentTaxType) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *PaymentTaxType) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *PaymentTaxType) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetNonTaxableAmount

`func (o *PaymentTaxType) GetNonTaxableAmount() CurrencyAmountType`

GetNonTaxableAmount returns the NonTaxableAmount field if non-nil, zero value otherwise.

### GetNonTaxableAmountOk

`func (o *PaymentTaxType) GetNonTaxableAmountOk() (*CurrencyAmountType, bool)`

GetNonTaxableAmountOk returns a tuple with the NonTaxableAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonTaxableAmount

`func (o *PaymentTaxType) SetNonTaxableAmount(v CurrencyAmountType)`

SetNonTaxableAmount sets NonTaxableAmount field to given value.

### HasNonTaxableAmount

`func (o *PaymentTaxType) HasNonTaxableAmount() bool`

HasNonTaxableAmount returns a boolean if a field has been set.

### GetPaymentDate

`func (o *PaymentTaxType) GetPaymentDate() string`

GetPaymentDate returns the PaymentDate field if non-nil, zero value otherwise.

### GetPaymentDateOk

`func (o *PaymentTaxType) GetPaymentDateOk() (*string, bool)`

GetPaymentDateOk returns a tuple with the PaymentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDate

`func (o *PaymentTaxType) SetPaymentDate(v string)`

SetPaymentDate sets PaymentDate field to given value.

### HasPaymentDate

`func (o *PaymentTaxType) HasPaymentDate() bool`

HasPaymentDate returns a boolean if a field has been set.

### GetPaymentType

`func (o *PaymentTaxType) GetPaymentType() PaymentTax`

GetPaymentType returns the PaymentType field if non-nil, zero value otherwise.

### GetPaymentTypeOk

`func (o *PaymentTaxType) GetPaymentTypeOk() (*PaymentTax, bool)`

GetPaymentTypeOk returns a tuple with the PaymentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentType

`func (o *PaymentTaxType) SetPaymentType(v PaymentTax)`

SetPaymentType sets PaymentType field to given value.

### HasPaymentType

`func (o *PaymentTaxType) HasPaymentType() bool`

HasPaymentType returns a boolean if a field has been set.

### GetTaxInvoiceNo

`func (o *PaymentTaxType) GetTaxInvoiceNo() string`

GetTaxInvoiceNo returns the TaxInvoiceNo field if non-nil, zero value otherwise.

### GetTaxInvoiceNoOk

`func (o *PaymentTaxType) GetTaxInvoiceNoOk() (*string, bool)`

GetTaxInvoiceNoOk returns a tuple with the TaxInvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInvoiceNo

`func (o *PaymentTaxType) SetTaxInvoiceNo(v string)`

SetTaxInvoiceNo sets TaxInvoiceNo field to given value.

### HasTaxInvoiceNo

`func (o *PaymentTaxType) HasTaxInvoiceNo() bool`

HasTaxInvoiceNo returns a boolean if a field has been set.

### GetTaxableAmount

`func (o *PaymentTaxType) GetTaxableAmount() CurrencyAmountType`

GetTaxableAmount returns the TaxableAmount field if non-nil, zero value otherwise.

### GetTaxableAmountOk

`func (o *PaymentTaxType) GetTaxableAmountOk() (*CurrencyAmountType, bool)`

GetTaxableAmountOk returns a tuple with the TaxableAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxableAmount

`func (o *PaymentTaxType) SetTaxableAmount(v CurrencyAmountType)`

SetTaxableAmount sets TaxableAmount field to given value.

### HasTaxableAmount

`func (o *PaymentTaxType) HasTaxableAmount() bool`

HasTaxableAmount returns a boolean if a field has been set.

### GetTransactionCode

`func (o *PaymentTaxType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *PaymentTaxType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *PaymentTaxType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *PaymentTaxType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionDate

`func (o *PaymentTaxType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *PaymentTaxType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *PaymentTaxType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *PaymentTaxType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetTransactionDescription

`func (o *PaymentTaxType) GetTransactionDescription() string`

GetTransactionDescription returns the TransactionDescription field if non-nil, zero value otherwise.

### GetTransactionDescriptionOk

`func (o *PaymentTaxType) GetTransactionDescriptionOk() (*string, bool)`

GetTransactionDescriptionOk returns a tuple with the TransactionDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDescription

`func (o *PaymentTaxType) SetTransactionDescription(v string)`

SetTransactionDescription sets TransactionDescription field to given value.

### HasTransactionDescription

`func (o *PaymentTaxType) HasTransactionDescription() bool`

HasTransactionDescription returns a boolean if a field has been set.

### GetTransactionNo

`func (o *PaymentTaxType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *PaymentTaxType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *PaymentTaxType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *PaymentTaxType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


