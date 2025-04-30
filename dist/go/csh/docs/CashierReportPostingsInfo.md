# CashierReportPostingsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Postings** | Pointer to [**[]DetailPostingType**](DetailPostingType.md) | Details of the transaction(Posting). | [optional] 
**TransactionCodes** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCashierReportPostingsInfo

`func NewCashierReportPostingsInfo() *CashierReportPostingsInfo`

NewCashierReportPostingsInfo instantiates a new CashierReportPostingsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashierReportPostingsInfoWithDefaults

`func NewCashierReportPostingsInfoWithDefaults() *CashierReportPostingsInfo`

NewCashierReportPostingsInfoWithDefaults instantiates a new CashierReportPostingsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPostings

`func (o *CashierReportPostingsInfo) GetPostings() []DetailPostingType`

GetPostings returns the Postings field if non-nil, zero value otherwise.

### GetPostingsOk

`func (o *CashierReportPostingsInfo) GetPostingsOk() (*[]DetailPostingType, bool)`

GetPostingsOk returns a tuple with the Postings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostings

`func (o *CashierReportPostingsInfo) SetPostings(v []DetailPostingType)`

SetPostings sets Postings field to given value.

### HasPostings

`func (o *CashierReportPostingsInfo) HasPostings() bool`

HasPostings returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *CashierReportPostingsInfo) GetTransactionCodes() []TrxInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *CashierReportPostingsInfo) GetTransactionCodesOk() (*[]TrxInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *CashierReportPostingsInfo) SetTransactionCodes(v []TrxInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *CashierReportPostingsInfo) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CashierReportPostingsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CashierReportPostingsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CashierReportPostingsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CashierReportPostingsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CashierReportPostingsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CashierReportPostingsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CashierReportPostingsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CashierReportPostingsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


