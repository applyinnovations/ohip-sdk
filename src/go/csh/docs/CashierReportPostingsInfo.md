# CashierReportPostingsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Postings** | Pointer to [**DetailPostingsType**](DetailPostingsType.md) |  | [optional] 
**TransactionCodes** | Pointer to [**TrxCodesInfoType**](TrxCodesInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

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

### GetLinks

`func (o *CashierReportPostingsInfo) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CashierReportPostingsInfo) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CashierReportPostingsInfo) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CashierReportPostingsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPostings

`func (o *CashierReportPostingsInfo) GetPostings() DetailPostingsType`

GetPostings returns the Postings field if non-nil, zero value otherwise.

### GetPostingsOk

`func (o *CashierReportPostingsInfo) GetPostingsOk() (*DetailPostingsType, bool)`

GetPostingsOk returns a tuple with the Postings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostings

`func (o *CashierReportPostingsInfo) SetPostings(v DetailPostingsType)`

SetPostings sets Postings field to given value.

### HasPostings

`func (o *CashierReportPostingsInfo) HasPostings() bool`

HasPostings returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *CashierReportPostingsInfo) GetTransactionCodes() TrxCodesInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *CashierReportPostingsInfo) GetTransactionCodesOk() (*TrxCodesInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *CashierReportPostingsInfo) SetTransactionCodes(v TrxCodesInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *CashierReportPostingsInfo) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *CashierReportPostingsInfo) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CashierReportPostingsInfo) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CashierReportPostingsInfo) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CashierReportPostingsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


