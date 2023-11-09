# FolioTransactionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Transactions** | Pointer to [**DetailPostingsType**](DetailPostingsType.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**TrxCodesInfoType**](TrxCodesInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewFolioTransactionDetails

`func NewFolioTransactionDetails() *FolioTransactionDetails`

NewFolioTransactionDetails instantiates a new FolioTransactionDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioTransactionDetailsWithDefaults

`func NewFolioTransactionDetailsWithDefaults() *FolioTransactionDetails`

NewFolioTransactionDetailsWithDefaults instantiates a new FolioTransactionDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *FolioTransactionDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FolioTransactionDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FolioTransactionDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FolioTransactionDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactions

`func (o *FolioTransactionDetails) GetTransactions() DetailPostingsType`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *FolioTransactionDetails) GetTransactionsOk() (*DetailPostingsType, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *FolioTransactionDetails) SetTransactions(v DetailPostingsType)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *FolioTransactionDetails) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *FolioTransactionDetails) GetTrxCodesInfo() TrxCodesInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *FolioTransactionDetails) GetTrxCodesInfoOk() (*TrxCodesInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *FolioTransactionDetails) SetTrxCodesInfo(v TrxCodesInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *FolioTransactionDetails) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *FolioTransactionDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FolioTransactionDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FolioTransactionDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FolioTransactionDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


