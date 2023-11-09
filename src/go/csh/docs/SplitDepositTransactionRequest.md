# SplitDepositTransactionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepositTransaction** | Pointer to [**DepositTransactionType**](DepositTransactionType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewSplitDepositTransactionRequest

`func NewSplitDepositTransactionRequest() *SplitDepositTransactionRequest`

NewSplitDepositTransactionRequest instantiates a new SplitDepositTransactionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitDepositTransactionRequestWithDefaults

`func NewSplitDepositTransactionRequestWithDefaults() *SplitDepositTransactionRequest`

NewSplitDepositTransactionRequestWithDefaults instantiates a new SplitDepositTransactionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepositTransaction

`func (o *SplitDepositTransactionRequest) GetDepositTransaction() DepositTransactionType`

GetDepositTransaction returns the DepositTransaction field if non-nil, zero value otherwise.

### GetDepositTransactionOk

`func (o *SplitDepositTransactionRequest) GetDepositTransactionOk() (*DepositTransactionType, bool)`

GetDepositTransactionOk returns a tuple with the DepositTransaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositTransaction

`func (o *SplitDepositTransactionRequest) SetDepositTransaction(v DepositTransactionType)`

SetDepositTransaction sets DepositTransaction field to given value.

### HasDepositTransaction

`func (o *SplitDepositTransactionRequest) HasDepositTransaction() bool`

HasDepositTransaction returns a boolean if a field has been set.

### GetLinks

`func (o *SplitDepositTransactionRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SplitDepositTransactionRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SplitDepositTransactionRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SplitDepositTransactionRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SplitDepositTransactionRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SplitDepositTransactionRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SplitDepositTransactionRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SplitDepositTransactionRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


