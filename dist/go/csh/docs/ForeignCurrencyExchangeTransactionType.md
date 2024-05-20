# ForeignCurrencyExchangeTransactionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Folio** | Pointer to [**FolioType**](FolioType.md) |  | [optional] 
**Posting** | Pointer to [**SummaryPostingType**](SummaryPostingType.md) |  | [optional] 

## Methods

### NewForeignCurrencyExchangeTransactionType

`func NewForeignCurrencyExchangeTransactionType() *ForeignCurrencyExchangeTransactionType`

NewForeignCurrencyExchangeTransactionType instantiates a new ForeignCurrencyExchangeTransactionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForeignCurrencyExchangeTransactionTypeWithDefaults

`func NewForeignCurrencyExchangeTransactionTypeWithDefaults() *ForeignCurrencyExchangeTransactionType`

NewForeignCurrencyExchangeTransactionTypeWithDefaults instantiates a new ForeignCurrencyExchangeTransactionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolio

`func (o *ForeignCurrencyExchangeTransactionType) GetFolio() FolioType`

GetFolio returns the Folio field if non-nil, zero value otherwise.

### GetFolioOk

`func (o *ForeignCurrencyExchangeTransactionType) GetFolioOk() (*FolioType, bool)`

GetFolioOk returns a tuple with the Folio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolio

`func (o *ForeignCurrencyExchangeTransactionType) SetFolio(v FolioType)`

SetFolio sets Folio field to given value.

### HasFolio

`func (o *ForeignCurrencyExchangeTransactionType) HasFolio() bool`

HasFolio returns a boolean if a field has been set.

### GetPosting

`func (o *ForeignCurrencyExchangeTransactionType) GetPosting() SummaryPostingType`

GetPosting returns the Posting field if non-nil, zero value otherwise.

### GetPostingOk

`func (o *ForeignCurrencyExchangeTransactionType) GetPostingOk() (*SummaryPostingType, bool)`

GetPostingOk returns a tuple with the Posting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosting

`func (o *ForeignCurrencyExchangeTransactionType) SetPosting(v SummaryPostingType)`

SetPosting sets Posting field to given value.

### HasPosting

`func (o *ForeignCurrencyExchangeTransactionType) HasPosting() bool`

HasPosting returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


