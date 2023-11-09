# DepositFolioTransactionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Transactions** | Pointer to [**DepositDetailPostingsType**](DepositDetailPostingsType.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**TrxCodesInfoType**](TrxCodesInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDepositFolioTransactionDetails

`func NewDepositFolioTransactionDetails() *DepositFolioTransactionDetails`

NewDepositFolioTransactionDetails instantiates a new DepositFolioTransactionDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositFolioTransactionDetailsWithDefaults

`func NewDepositFolioTransactionDetailsWithDefaults() *DepositFolioTransactionDetails`

NewDepositFolioTransactionDetailsWithDefaults instantiates a new DepositFolioTransactionDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *DepositFolioTransactionDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DepositFolioTransactionDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DepositFolioTransactionDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DepositFolioTransactionDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactions

`func (o *DepositFolioTransactionDetails) GetTransactions() DepositDetailPostingsType`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *DepositFolioTransactionDetails) GetTransactionsOk() (*DepositDetailPostingsType, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *DepositFolioTransactionDetails) SetTransactions(v DepositDetailPostingsType)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *DepositFolioTransactionDetails) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *DepositFolioTransactionDetails) GetTrxCodesInfo() TrxCodesInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *DepositFolioTransactionDetails) GetTrxCodesInfoOk() (*TrxCodesInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *DepositFolioTransactionDetails) SetTrxCodesInfo(v TrxCodesInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *DepositFolioTransactionDetails) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *DepositFolioTransactionDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DepositFolioTransactionDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DepositFolioTransactionDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DepositFolioTransactionDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


