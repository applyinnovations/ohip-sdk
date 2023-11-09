# SplitAndTransferTransactionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**TrxSplitAndTransferCriteriaType**](TrxSplitAndTransferCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewSplitAndTransferTransactionRequest

`func NewSplitAndTransferTransactionRequest() *SplitAndTransferTransactionRequest`

NewSplitAndTransferTransactionRequest instantiates a new SplitAndTransferTransactionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitAndTransferTransactionRequestWithDefaults

`func NewSplitAndTransferTransactionRequestWithDefaults() *SplitAndTransferTransactionRequest`

NewSplitAndTransferTransactionRequestWithDefaults instantiates a new SplitAndTransferTransactionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *SplitAndTransferTransactionRequest) GetCriteria() TrxSplitAndTransferCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *SplitAndTransferTransactionRequest) GetCriteriaOk() (*TrxSplitAndTransferCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *SplitAndTransferTransactionRequest) SetCriteria(v TrxSplitAndTransferCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *SplitAndTransferTransactionRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *SplitAndTransferTransactionRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SplitAndTransferTransactionRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SplitAndTransferTransactionRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SplitAndTransferTransactionRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SplitAndTransferTransactionRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SplitAndTransferTransactionRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SplitAndTransferTransactionRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SplitAndTransferTransactionRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


