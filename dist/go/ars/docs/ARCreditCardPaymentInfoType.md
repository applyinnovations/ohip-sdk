# ARCreditCardPaymentInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**FiscalFolioNo** | Pointer to **float32** | Bill Number returned by the Fiscal Printer. | [optional] 
**FolioNo** | Pointer to **float32** | The Folio number of this posting, if there was a Folio already generated. | [optional] 
**GuestName** | Pointer to **string** | Guest Name . | [optional] 
**PostingDate** | Pointer to **string** | Date of posting. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Reference** | Pointer to **string** | Reference Text for the payment. | [optional] 
**Remark** | Pointer to **string** | Remarks for payment. | [optional] 
**TransactionDate** | Pointer to **string** | Transaction Date of the payment. | [optional] 
**TransactionNo** | Pointer to **float32** | Transaction number of the payment. | [optional] 

## Methods

### NewARCreditCardPaymentInfoType

`func NewARCreditCardPaymentInfoType() *ARCreditCardPaymentInfoType`

NewARCreditCardPaymentInfoType instantiates a new ARCreditCardPaymentInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARCreditCardPaymentInfoTypeWithDefaults

`func NewARCreditCardPaymentInfoTypeWithDefaults() *ARCreditCardPaymentInfoType`

NewARCreditCardPaymentInfoTypeWithDefaults instantiates a new ARCreditCardPaymentInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *ARCreditCardPaymentInfoType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ARCreditCardPaymentInfoType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ARCreditCardPaymentInfoType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ARCreditCardPaymentInfoType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetFiscalFolioNo

`func (o *ARCreditCardPaymentInfoType) GetFiscalFolioNo() float32`

GetFiscalFolioNo returns the FiscalFolioNo field if non-nil, zero value otherwise.

### GetFiscalFolioNoOk

`func (o *ARCreditCardPaymentInfoType) GetFiscalFolioNoOk() (*float32, bool)`

GetFiscalFolioNoOk returns a tuple with the FiscalFolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioNo

`func (o *ARCreditCardPaymentInfoType) SetFiscalFolioNo(v float32)`

SetFiscalFolioNo sets FiscalFolioNo field to given value.

### HasFiscalFolioNo

`func (o *ARCreditCardPaymentInfoType) HasFiscalFolioNo() bool`

HasFiscalFolioNo returns a boolean if a field has been set.

### GetFolioNo

`func (o *ARCreditCardPaymentInfoType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *ARCreditCardPaymentInfoType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *ARCreditCardPaymentInfoType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *ARCreditCardPaymentInfoType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetGuestName

`func (o *ARCreditCardPaymentInfoType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *ARCreditCardPaymentInfoType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *ARCreditCardPaymentInfoType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *ARCreditCardPaymentInfoType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetPostingDate

`func (o *ARCreditCardPaymentInfoType) GetPostingDate() string`

GetPostingDate returns the PostingDate field if non-nil, zero value otherwise.

### GetPostingDateOk

`func (o *ARCreditCardPaymentInfoType) GetPostingDateOk() (*string, bool)`

GetPostingDateOk returns a tuple with the PostingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingDate

`func (o *ARCreditCardPaymentInfoType) SetPostingDate(v string)`

SetPostingDate sets PostingDate field to given value.

### HasPostingDate

`func (o *ARCreditCardPaymentInfoType) HasPostingDate() bool`

HasPostingDate returns a boolean if a field has been set.

### GetProfileId

`func (o *ARCreditCardPaymentInfoType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ARCreditCardPaymentInfoType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ARCreditCardPaymentInfoType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ARCreditCardPaymentInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReference

`func (o *ARCreditCardPaymentInfoType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ARCreditCardPaymentInfoType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ARCreditCardPaymentInfoType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *ARCreditCardPaymentInfoType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *ARCreditCardPaymentInfoType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *ARCreditCardPaymentInfoType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *ARCreditCardPaymentInfoType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *ARCreditCardPaymentInfoType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetTransactionDate

`func (o *ARCreditCardPaymentInfoType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ARCreditCardPaymentInfoType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ARCreditCardPaymentInfoType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *ARCreditCardPaymentInfoType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetTransactionNo

`func (o *ARCreditCardPaymentInfoType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *ARCreditCardPaymentInfoType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *ARCreditCardPaymentInfoType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *ARCreditCardPaymentInfoType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


