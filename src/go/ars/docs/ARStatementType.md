# ARStatementType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property where the Account belongs. | [optional] 
**InclFolios** | Pointer to **bool** | Flag to indicate if Folios are to be printed along with the Statement. | [optional] 
**Invoices** | Pointer to [**ARInvoicesType**](ARInvoicesType.md) |  | [optional] 
**ReportFileName** | Pointer to **string** | The Statement Report name which should be used for printing. | [optional] 
**ReportSeqNo** | Pointer to **int32** | Internal Report Sequence Number for the which is used to mark statement invoices | [optional] 
**StatementName** | Pointer to **string** | The Statement Report name which should be used for printing. | [optional] 
**StatementNo** | Pointer to **int32** | Statement Number for the Statement, when the functionality for Numbering is ON. | [optional] 
**Type** | Pointer to [**StatementType**](StatementType.md) |  | [optional] 

## Methods

### NewARStatementType

`func NewARStatementType() *ARStatementType`

NewARStatementType instantiates a new ARStatementType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARStatementTypeWithDefaults

`func NewARStatementTypeWithDefaults() *ARStatementType`

NewARStatementTypeWithDefaults instantiates a new ARStatementType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *ARStatementType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ARStatementType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ARStatementType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ARStatementType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetBalance

`func (o *ARStatementType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *ARStatementType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *ARStatementType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *ARStatementType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetHotelId

`func (o *ARStatementType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARStatementType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARStatementType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARStatementType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInclFolios

`func (o *ARStatementType) GetInclFolios() bool`

GetInclFolios returns the InclFolios field if non-nil, zero value otherwise.

### GetInclFoliosOk

`func (o *ARStatementType) GetInclFoliosOk() (*bool, bool)`

GetInclFoliosOk returns a tuple with the InclFolios field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclFolios

`func (o *ARStatementType) SetInclFolios(v bool)`

SetInclFolios sets InclFolios field to given value.

### HasInclFolios

`func (o *ARStatementType) HasInclFolios() bool`

HasInclFolios returns a boolean if a field has been set.

### GetInvoices

`func (o *ARStatementType) GetInvoices() ARInvoicesType`

GetInvoices returns the Invoices field if non-nil, zero value otherwise.

### GetInvoicesOk

`func (o *ARStatementType) GetInvoicesOk() (*ARInvoicesType, bool)`

GetInvoicesOk returns a tuple with the Invoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoices

`func (o *ARStatementType) SetInvoices(v ARInvoicesType)`

SetInvoices sets Invoices field to given value.

### HasInvoices

`func (o *ARStatementType) HasInvoices() bool`

HasInvoices returns a boolean if a field has been set.

### GetReportFileName

`func (o *ARStatementType) GetReportFileName() string`

GetReportFileName returns the ReportFileName field if non-nil, zero value otherwise.

### GetReportFileNameOk

`func (o *ARStatementType) GetReportFileNameOk() (*string, bool)`

GetReportFileNameOk returns a tuple with the ReportFileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportFileName

`func (o *ARStatementType) SetReportFileName(v string)`

SetReportFileName sets ReportFileName field to given value.

### HasReportFileName

`func (o *ARStatementType) HasReportFileName() bool`

HasReportFileName returns a boolean if a field has been set.

### GetReportSeqNo

`func (o *ARStatementType) GetReportSeqNo() int32`

GetReportSeqNo returns the ReportSeqNo field if non-nil, zero value otherwise.

### GetReportSeqNoOk

`func (o *ARStatementType) GetReportSeqNoOk() (*int32, bool)`

GetReportSeqNoOk returns a tuple with the ReportSeqNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportSeqNo

`func (o *ARStatementType) SetReportSeqNo(v int32)`

SetReportSeqNo sets ReportSeqNo field to given value.

### HasReportSeqNo

`func (o *ARStatementType) HasReportSeqNo() bool`

HasReportSeqNo returns a boolean if a field has been set.

### GetStatementName

`func (o *ARStatementType) GetStatementName() string`

GetStatementName returns the StatementName field if non-nil, zero value otherwise.

### GetStatementNameOk

`func (o *ARStatementType) GetStatementNameOk() (*string, bool)`

GetStatementNameOk returns a tuple with the StatementName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementName

`func (o *ARStatementType) SetStatementName(v string)`

SetStatementName sets StatementName field to given value.

### HasStatementName

`func (o *ARStatementType) HasStatementName() bool`

HasStatementName returns a boolean if a field has been set.

### GetStatementNo

`func (o *ARStatementType) GetStatementNo() int32`

GetStatementNo returns the StatementNo field if non-nil, zero value otherwise.

### GetStatementNoOk

`func (o *ARStatementType) GetStatementNoOk() (*int32, bool)`

GetStatementNoOk returns a tuple with the StatementNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementNo

`func (o *ARStatementType) SetStatementNo(v int32)`

SetStatementNo sets StatementNo field to given value.

### HasStatementNo

`func (o *ARStatementType) HasStatementNo() bool`

HasStatementNo returns a boolean if a field has been set.

### GetType

`func (o *ARStatementType) GetType() StatementType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ARStatementType) GetTypeOk() (*StatementType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ARStatementType) SetType(v StatementType)`

SetType sets Type field to given value.

### HasType

`func (o *ARStatementType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


