# AROldBalanceChargeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Date** | Pointer to **string** | Date of the Posting. | [optional] 
**FiscalBillNo** | Pointer to **string** | The Fiscal Bill number of this posting | [optional] 
**FolioNo** | Pointer to **float32** | The Folio number of this posting, if there was a Folio entered. | [optional] 
**Paid** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PostingReference** | Pointer to **string** | User-defined posting reference. | [optional] 
**PostingRemark** | Pointer to **string** | User-defined Supplement. | [optional] 
**TaxCodes** | Pointer to [**ARTaxCodesType**](ARTaxCodesType.md) |  | [optional] 

## Methods

### NewAROldBalanceChargeType

`func NewAROldBalanceChargeType() *AROldBalanceChargeType`

NewAROldBalanceChargeType instantiates a new AROldBalanceChargeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAROldBalanceChargeTypeWithDefaults

`func NewAROldBalanceChargeTypeWithDefaults() *AROldBalanceChargeType`

NewAROldBalanceChargeTypeWithDefaults instantiates a new AROldBalanceChargeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *AROldBalanceChargeType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *AROldBalanceChargeType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *AROldBalanceChargeType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *AROldBalanceChargeType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetDate

`func (o *AROldBalanceChargeType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *AROldBalanceChargeType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *AROldBalanceChargeType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *AROldBalanceChargeType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetFiscalBillNo

`func (o *AROldBalanceChargeType) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *AROldBalanceChargeType) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *AROldBalanceChargeType) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *AROldBalanceChargeType) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFolioNo

`func (o *AROldBalanceChargeType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *AROldBalanceChargeType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *AROldBalanceChargeType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *AROldBalanceChargeType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetPaid

`func (o *AROldBalanceChargeType) GetPaid() CurrencyAmountType`

GetPaid returns the Paid field if non-nil, zero value otherwise.

### GetPaidOk

`func (o *AROldBalanceChargeType) GetPaidOk() (*CurrencyAmountType, bool)`

GetPaidOk returns a tuple with the Paid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaid

`func (o *AROldBalanceChargeType) SetPaid(v CurrencyAmountType)`

SetPaid sets Paid field to given value.

### HasPaid

`func (o *AROldBalanceChargeType) HasPaid() bool`

HasPaid returns a boolean if a field has been set.

### GetPostingReference

`func (o *AROldBalanceChargeType) GetPostingReference() string`

GetPostingReference returns the PostingReference field if non-nil, zero value otherwise.

### GetPostingReferenceOk

`func (o *AROldBalanceChargeType) GetPostingReferenceOk() (*string, bool)`

GetPostingReferenceOk returns a tuple with the PostingReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingReference

`func (o *AROldBalanceChargeType) SetPostingReference(v string)`

SetPostingReference sets PostingReference field to given value.

### HasPostingReference

`func (o *AROldBalanceChargeType) HasPostingReference() bool`

HasPostingReference returns a boolean if a field has been set.

### GetPostingRemark

`func (o *AROldBalanceChargeType) GetPostingRemark() string`

GetPostingRemark returns the PostingRemark field if non-nil, zero value otherwise.

### GetPostingRemarkOk

`func (o *AROldBalanceChargeType) GetPostingRemarkOk() (*string, bool)`

GetPostingRemarkOk returns a tuple with the PostingRemark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRemark

`func (o *AROldBalanceChargeType) SetPostingRemark(v string)`

SetPostingRemark sets PostingRemark field to given value.

### HasPostingRemark

`func (o *AROldBalanceChargeType) HasPostingRemark() bool`

HasPostingRemark returns a boolean if a field has been set.

### GetTaxCodes

`func (o *AROldBalanceChargeType) GetTaxCodes() ARTaxCodesType`

GetTaxCodes returns the TaxCodes field if non-nil, zero value otherwise.

### GetTaxCodesOk

`func (o *AROldBalanceChargeType) GetTaxCodesOk() (*ARTaxCodesType, bool)`

GetTaxCodesOk returns a tuple with the TaxCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxCodes

`func (o *AROldBalanceChargeType) SetTaxCodes(v ARTaxCodesType)`

SetTaxCodes sets TaxCodes field to given value.

### HasTaxCodes

`func (o *AROldBalanceChargeType) HasTaxCodes() bool`

HasTaxCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


