# TransactionToWindow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**TrxTransferCriteriaType**](TrxTransferCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewTransactionToWindow

`func NewTransactionToWindow() *TransactionToWindow`

NewTransactionToWindow instantiates a new TransactionToWindow object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionToWindowWithDefaults

`func NewTransactionToWindowWithDefaults() *TransactionToWindow`

NewTransactionToWindowWithDefaults instantiates a new TransactionToWindow object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *TransactionToWindow) GetCriteria() TrxTransferCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *TransactionToWindow) GetCriteriaOk() (*TrxTransferCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *TransactionToWindow) SetCriteria(v TrxTransferCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *TransactionToWindow) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *TransactionToWindow) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionToWindow) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionToWindow) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionToWindow) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionToWindow) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionToWindow) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionToWindow) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionToWindow) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


