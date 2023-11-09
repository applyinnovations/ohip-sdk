# TransferTransactionToWindowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**TrxTransferCriteriaType**](TrxTransferCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewTransferTransactionToWindowRequest

`func NewTransferTransactionToWindowRequest() *TransferTransactionToWindowRequest`

NewTransferTransactionToWindowRequest instantiates a new TransferTransactionToWindowRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferTransactionToWindowRequestWithDefaults

`func NewTransferTransactionToWindowRequestWithDefaults() *TransferTransactionToWindowRequest`

NewTransferTransactionToWindowRequestWithDefaults instantiates a new TransferTransactionToWindowRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *TransferTransactionToWindowRequest) GetCriteria() TrxTransferCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *TransferTransactionToWindowRequest) GetCriteriaOk() (*TrxTransferCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *TransferTransactionToWindowRequest) SetCriteria(v TrxTransferCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *TransferTransactionToWindowRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *TransferTransactionToWindowRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransferTransactionToWindowRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransferTransactionToWindowRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransferTransactionToWindowRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TransferTransactionToWindowRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransferTransactionToWindowRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransferTransactionToWindowRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransferTransactionToWindowRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


