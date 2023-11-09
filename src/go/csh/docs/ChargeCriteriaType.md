# ChargeCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplyRoutingInstructions** | Pointer to **bool** | Apply room routing when making this posting. | [optional] 
**ArrangementCode** | Pointer to **string** | Corrected arrangement code from the package associated to this transaction. | [optional] 
**ArticleCode** | Pointer to **string** | Article ID. | [optional] 
**AutoPosting** | Pointer to **bool** | True indicates the Transaction Code is allowed to be posted automatically. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**CheckNumber** | Pointer to **string** | Indicates the Cheque number. | [optional] 
**FinancialTransactionIdList** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**PostingQuantity** | Pointer to **int32** | Quantity to post to the folio. | [optional] 
**PostingReference** | Pointer to **string** | User-defined posting reference. | [optional] 
**PostingRemark** | Pointer to **string** | User-defined posting remark. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TransactionCode** | Pointer to **string** | Transaction Code to post. | [optional] 
**UsePackageAllowance** | Pointer to **bool** | Use the applicable package allowance when making this posting. | [optional] 

## Methods

### NewChargeCriteriaType

`func NewChargeCriteriaType() *ChargeCriteriaType`

NewChargeCriteriaType instantiates a new ChargeCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeCriteriaTypeWithDefaults

`func NewChargeCriteriaTypeWithDefaults() *ChargeCriteriaType`

NewChargeCriteriaTypeWithDefaults instantiates a new ChargeCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplyRoutingInstructions

`func (o *ChargeCriteriaType) GetApplyRoutingInstructions() bool`

GetApplyRoutingInstructions returns the ApplyRoutingInstructions field if non-nil, zero value otherwise.

### GetApplyRoutingInstructionsOk

`func (o *ChargeCriteriaType) GetApplyRoutingInstructionsOk() (*bool, bool)`

GetApplyRoutingInstructionsOk returns a tuple with the ApplyRoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyRoutingInstructions

`func (o *ChargeCriteriaType) SetApplyRoutingInstructions(v bool)`

SetApplyRoutingInstructions sets ApplyRoutingInstructions field to given value.

### HasApplyRoutingInstructions

`func (o *ChargeCriteriaType) HasApplyRoutingInstructions() bool`

HasApplyRoutingInstructions returns a boolean if a field has been set.

### GetArrangementCode

`func (o *ChargeCriteriaType) GetArrangementCode() string`

GetArrangementCode returns the ArrangementCode field if non-nil, zero value otherwise.

### GetArrangementCodeOk

`func (o *ChargeCriteriaType) GetArrangementCodeOk() (*string, bool)`

GetArrangementCodeOk returns a tuple with the ArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrangementCode

`func (o *ChargeCriteriaType) SetArrangementCode(v string)`

SetArrangementCode sets ArrangementCode field to given value.

### HasArrangementCode

`func (o *ChargeCriteriaType) HasArrangementCode() bool`

HasArrangementCode returns a boolean if a field has been set.

### GetArticleCode

`func (o *ChargeCriteriaType) GetArticleCode() string`

GetArticleCode returns the ArticleCode field if non-nil, zero value otherwise.

### GetArticleCodeOk

`func (o *ChargeCriteriaType) GetArticleCodeOk() (*string, bool)`

GetArticleCodeOk returns a tuple with the ArticleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticleCode

`func (o *ChargeCriteriaType) SetArticleCode(v string)`

SetArticleCode sets ArticleCode field to given value.

### HasArticleCode

`func (o *ChargeCriteriaType) HasArticleCode() bool`

HasArticleCode returns a boolean if a field has been set.

### GetAutoPosting

`func (o *ChargeCriteriaType) GetAutoPosting() bool`

GetAutoPosting returns the AutoPosting field if non-nil, zero value otherwise.

### GetAutoPostingOk

`func (o *ChargeCriteriaType) GetAutoPostingOk() (*bool, bool)`

GetAutoPostingOk returns a tuple with the AutoPosting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoPosting

`func (o *ChargeCriteriaType) SetAutoPosting(v bool)`

SetAutoPosting sets AutoPosting field to given value.

### HasAutoPosting

`func (o *ChargeCriteriaType) HasAutoPosting() bool`

HasAutoPosting returns a boolean if a field has been set.

### GetCashierId

`func (o *ChargeCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ChargeCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ChargeCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ChargeCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCheckNumber

`func (o *ChargeCriteriaType) GetCheckNumber() string`

GetCheckNumber returns the CheckNumber field if non-nil, zero value otherwise.

### GetCheckNumberOk

`func (o *ChargeCriteriaType) GetCheckNumberOk() (*string, bool)`

GetCheckNumberOk returns a tuple with the CheckNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNumber

`func (o *ChargeCriteriaType) SetCheckNumber(v string)`

SetCheckNumber sets CheckNumber field to given value.

### HasCheckNumber

`func (o *ChargeCriteriaType) HasCheckNumber() bool`

HasCheckNumber returns a boolean if a field has been set.

### GetFinancialTransactionIdList

`func (o *ChargeCriteriaType) GetFinancialTransactionIdList() UniqueIDListType`

GetFinancialTransactionIdList returns the FinancialTransactionIdList field if non-nil, zero value otherwise.

### GetFinancialTransactionIdListOk

`func (o *ChargeCriteriaType) GetFinancialTransactionIdListOk() (*UniqueIDListType, bool)`

GetFinancialTransactionIdListOk returns a tuple with the FinancialTransactionIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinancialTransactionIdList

`func (o *ChargeCriteriaType) SetFinancialTransactionIdList(v UniqueIDListType)`

SetFinancialTransactionIdList sets FinancialTransactionIdList field to given value.

### HasFinancialTransactionIdList

`func (o *ChargeCriteriaType) HasFinancialTransactionIdList() bool`

HasFinancialTransactionIdList returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *ChargeCriteriaType) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *ChargeCriteriaType) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *ChargeCriteriaType) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *ChargeCriteriaType) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetPostingQuantity

`func (o *ChargeCriteriaType) GetPostingQuantity() int32`

GetPostingQuantity returns the PostingQuantity field if non-nil, zero value otherwise.

### GetPostingQuantityOk

`func (o *ChargeCriteriaType) GetPostingQuantityOk() (*int32, bool)`

GetPostingQuantityOk returns a tuple with the PostingQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingQuantity

`func (o *ChargeCriteriaType) SetPostingQuantity(v int32)`

SetPostingQuantity sets PostingQuantity field to given value.

### HasPostingQuantity

`func (o *ChargeCriteriaType) HasPostingQuantity() bool`

HasPostingQuantity returns a boolean if a field has been set.

### GetPostingReference

`func (o *ChargeCriteriaType) GetPostingReference() string`

GetPostingReference returns the PostingReference field if non-nil, zero value otherwise.

### GetPostingReferenceOk

`func (o *ChargeCriteriaType) GetPostingReferenceOk() (*string, bool)`

GetPostingReferenceOk returns a tuple with the PostingReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingReference

`func (o *ChargeCriteriaType) SetPostingReference(v string)`

SetPostingReference sets PostingReference field to given value.

### HasPostingReference

`func (o *ChargeCriteriaType) HasPostingReference() bool`

HasPostingReference returns a boolean if a field has been set.

### GetPostingRemark

`func (o *ChargeCriteriaType) GetPostingRemark() string`

GetPostingRemark returns the PostingRemark field if non-nil, zero value otherwise.

### GetPostingRemarkOk

`func (o *ChargeCriteriaType) GetPostingRemarkOk() (*string, bool)`

GetPostingRemarkOk returns a tuple with the PostingRemark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRemark

`func (o *ChargeCriteriaType) SetPostingRemark(v string)`

SetPostingRemark sets PostingRemark field to given value.

### HasPostingRemark

`func (o *ChargeCriteriaType) HasPostingRemark() bool`

HasPostingRemark returns a boolean if a field has been set.

### GetPrice

`func (o *ChargeCriteriaType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ChargeCriteriaType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ChargeCriteriaType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *ChargeCriteriaType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetTransactionCode

`func (o *ChargeCriteriaType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *ChargeCriteriaType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *ChargeCriteriaType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *ChargeCriteriaType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetUsePackageAllowance

`func (o *ChargeCriteriaType) GetUsePackageAllowance() bool`

GetUsePackageAllowance returns the UsePackageAllowance field if non-nil, zero value otherwise.

### GetUsePackageAllowanceOk

`func (o *ChargeCriteriaType) GetUsePackageAllowanceOk() (*bool, bool)`

GetUsePackageAllowanceOk returns a tuple with the UsePackageAllowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsePackageAllowance

`func (o *ChargeCriteriaType) SetUsePackageAllowance(v bool)`

SetUsePackageAllowance sets UsePackageAllowance field to given value.

### HasUsePackageAllowance

`func (o *ChargeCriteriaType) HasUsePackageAllowance() bool`

HasUsePackageAllowance returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


