# AdjustedTransactions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ServiceRecoveryAdjustments** | Pointer to [**[]SummaryPostingType**](SummaryPostingType.md) | List of postings. | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAdjustedTransactions

`func NewAdjustedTransactions() *AdjustedTransactions`

NewAdjustedTransactions instantiates a new AdjustedTransactions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdjustedTransactionsWithDefaults

`func NewAdjustedTransactionsWithDefaults() *AdjustedTransactions`

NewAdjustedTransactionsWithDefaults instantiates a new AdjustedTransactions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *AdjustedTransactions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AdjustedTransactions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AdjustedTransactions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AdjustedTransactions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetServiceRecoveryAdjustments

`func (o *AdjustedTransactions) GetServiceRecoveryAdjustments() []SummaryPostingType`

GetServiceRecoveryAdjustments returns the ServiceRecoveryAdjustments field if non-nil, zero value otherwise.

### GetServiceRecoveryAdjustmentsOk

`func (o *AdjustedTransactions) GetServiceRecoveryAdjustmentsOk() (*[]SummaryPostingType, bool)`

GetServiceRecoveryAdjustmentsOk returns a tuple with the ServiceRecoveryAdjustments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRecoveryAdjustments

`func (o *AdjustedTransactions) SetServiceRecoveryAdjustments(v []SummaryPostingType)`

SetServiceRecoveryAdjustments sets ServiceRecoveryAdjustments field to given value.

### HasServiceRecoveryAdjustments

`func (o *AdjustedTransactions) HasServiceRecoveryAdjustments() bool`

HasServiceRecoveryAdjustments returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *AdjustedTransactions) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *AdjustedTransactions) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *AdjustedTransactions) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *AdjustedTransactions) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *AdjustedTransactions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AdjustedTransactions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AdjustedTransactions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AdjustedTransactions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

