# PostingsInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transactions** | Pointer to [**[]DetailPostingType**](DetailPostingType.md) | Details of the transaction(Posting). | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 

## Methods

### NewPostingsInfoType

`func NewPostingsInfoType() *PostingsInfoType`

NewPostingsInfoType instantiates a new PostingsInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostingsInfoTypeWithDefaults

`func NewPostingsInfoTypeWithDefaults() *PostingsInfoType`

NewPostingsInfoTypeWithDefaults instantiates a new PostingsInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactions

`func (o *PostingsInfoType) GetTransactions() []DetailPostingType`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *PostingsInfoType) GetTransactionsOk() (*[]DetailPostingType, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *PostingsInfoType) SetTransactions(v []DetailPostingType)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *PostingsInfoType) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *PostingsInfoType) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *PostingsInfoType) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *PostingsInfoType) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *PostingsInfoType) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


