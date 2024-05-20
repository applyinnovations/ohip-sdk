# ReceiptSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomNumbers** | Pointer to **[]string** | Custom Number. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 
**ReceiptAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ReceiptNo** | Pointer to **float32** | Receipt Number. | [optional] 
**ReceiptType** | Pointer to [**ReceiptType**](ReceiptType.md) |  | [optional] 
**ReceiptTypeDescription** | Pointer to **string** | Receipt Type Description. | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**TaxInvoice** | Pointer to **string** | Tax Invoice Number of the Receipt. | [optional] 
**TransactionNo** | Pointer to **string** | Transaction Number. | [optional] 

## Methods

### NewReceiptSummaryType

`func NewReceiptSummaryType() *ReceiptSummaryType`

NewReceiptSummaryType instantiates a new ReceiptSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReceiptSummaryTypeWithDefaults

`func NewReceiptSummaryTypeWithDefaults() *ReceiptSummaryType`

NewReceiptSummaryTypeWithDefaults instantiates a new ReceiptSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomNumbers

`func (o *ReceiptSummaryType) GetCustomNumbers() []string`

GetCustomNumbers returns the CustomNumbers field if non-nil, zero value otherwise.

### GetCustomNumbersOk

`func (o *ReceiptSummaryType) GetCustomNumbersOk() (*[]string, bool)`

GetCustomNumbersOk returns a tuple with the CustomNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomNumbers

`func (o *ReceiptSummaryType) SetCustomNumbers(v []string)`

SetCustomNumbers sets CustomNumbers field to given value.

### HasCustomNumbers

`func (o *ReceiptSummaryType) HasCustomNumbers() bool`

HasCustomNumbers returns a boolean if a field has been set.

### GetEnd

`func (o *ReceiptSummaryType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *ReceiptSummaryType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *ReceiptSummaryType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *ReceiptSummaryType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetPayeeInfo

`func (o *ReceiptSummaryType) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *ReceiptSummaryType) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *ReceiptSummaryType) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *ReceiptSummaryType) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetReceiptAmount

`func (o *ReceiptSummaryType) GetReceiptAmount() CurrencyAmountType`

GetReceiptAmount returns the ReceiptAmount field if non-nil, zero value otherwise.

### GetReceiptAmountOk

`func (o *ReceiptSummaryType) GetReceiptAmountOk() (*CurrencyAmountType, bool)`

GetReceiptAmountOk returns a tuple with the ReceiptAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptAmount

`func (o *ReceiptSummaryType) SetReceiptAmount(v CurrencyAmountType)`

SetReceiptAmount sets ReceiptAmount field to given value.

### HasReceiptAmount

`func (o *ReceiptSummaryType) HasReceiptAmount() bool`

HasReceiptAmount returns a boolean if a field has been set.

### GetReceiptNo

`func (o *ReceiptSummaryType) GetReceiptNo() float32`

GetReceiptNo returns the ReceiptNo field if non-nil, zero value otherwise.

### GetReceiptNoOk

`func (o *ReceiptSummaryType) GetReceiptNoOk() (*float32, bool)`

GetReceiptNoOk returns a tuple with the ReceiptNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptNo

`func (o *ReceiptSummaryType) SetReceiptNo(v float32)`

SetReceiptNo sets ReceiptNo field to given value.

### HasReceiptNo

`func (o *ReceiptSummaryType) HasReceiptNo() bool`

HasReceiptNo returns a boolean if a field has been set.

### GetReceiptType

`func (o *ReceiptSummaryType) GetReceiptType() ReceiptType`

GetReceiptType returns the ReceiptType field if non-nil, zero value otherwise.

### GetReceiptTypeOk

`func (o *ReceiptSummaryType) GetReceiptTypeOk() (*ReceiptType, bool)`

GetReceiptTypeOk returns a tuple with the ReceiptType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptType

`func (o *ReceiptSummaryType) SetReceiptType(v ReceiptType)`

SetReceiptType sets ReceiptType field to given value.

### HasReceiptType

`func (o *ReceiptSummaryType) HasReceiptType() bool`

HasReceiptType returns a boolean if a field has been set.

### GetReceiptTypeDescription

`func (o *ReceiptSummaryType) GetReceiptTypeDescription() string`

GetReceiptTypeDescription returns the ReceiptTypeDescription field if non-nil, zero value otherwise.

### GetReceiptTypeDescriptionOk

`func (o *ReceiptSummaryType) GetReceiptTypeDescriptionOk() (*string, bool)`

GetReceiptTypeDescriptionOk returns a tuple with the ReceiptTypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptTypeDescription

`func (o *ReceiptSummaryType) SetReceiptTypeDescription(v string)`

SetReceiptTypeDescription sets ReceiptTypeDescription field to given value.

### HasReceiptTypeDescription

`func (o *ReceiptSummaryType) HasReceiptTypeDescription() bool`

HasReceiptTypeDescription returns a boolean if a field has been set.

### GetStart

`func (o *ReceiptSummaryType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *ReceiptSummaryType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *ReceiptSummaryType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *ReceiptSummaryType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetTaxInvoice

`func (o *ReceiptSummaryType) GetTaxInvoice() string`

GetTaxInvoice returns the TaxInvoice field if non-nil, zero value otherwise.

### GetTaxInvoiceOk

`func (o *ReceiptSummaryType) GetTaxInvoiceOk() (*string, bool)`

GetTaxInvoiceOk returns a tuple with the TaxInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInvoice

`func (o *ReceiptSummaryType) SetTaxInvoice(v string)`

SetTaxInvoice sets TaxInvoice field to given value.

### HasTaxInvoice

`func (o *ReceiptSummaryType) HasTaxInvoice() bool`

HasTaxInvoice returns a boolean if a field has been set.

### GetTransactionNo

`func (o *ReceiptSummaryType) GetTransactionNo() string`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *ReceiptSummaryType) GetTransactionNoOk() (*string, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *ReceiptSummaryType) SetTransactionNo(v string)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *ReceiptSummaryType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


