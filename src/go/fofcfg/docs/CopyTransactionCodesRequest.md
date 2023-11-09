# CopyTransactionCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TransactionCodes** | Pointer to [**CopyTransactionCodesType**](CopyTransactionCodesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCopyTransactionCodesRequest

`func NewCopyTransactionCodesRequest() *CopyTransactionCodesRequest`

NewCopyTransactionCodesRequest instantiates a new CopyTransactionCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTransactionCodesRequestWithDefaults

`func NewCopyTransactionCodesRequestWithDefaults() *CopyTransactionCodesRequest`

NewCopyTransactionCodesRequestWithDefaults instantiates a new CopyTransactionCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyTransactionCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyTransactionCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyTransactionCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyTransactionCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *CopyTransactionCodesRequest) GetTransactionCodes() CopyTransactionCodesType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *CopyTransactionCodesRequest) GetTransactionCodesOk() (*CopyTransactionCodesType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *CopyTransactionCodesRequest) SetTransactionCodes(v CopyTransactionCodesType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *CopyTransactionCodesRequest) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyTransactionCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyTransactionCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyTransactionCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyTransactionCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


