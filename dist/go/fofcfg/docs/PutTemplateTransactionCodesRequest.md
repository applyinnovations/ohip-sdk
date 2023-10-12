# PutTemplateTransactionCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCodes** | Pointer to [**[]TemplateTransactionCodeType**](TemplateTransactionCodeType.md) | Template transaction code configuration details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutTemplateTransactionCodesRequest

`func NewPutTemplateTransactionCodesRequest() *PutTemplateTransactionCodesRequest`

NewPutTemplateTransactionCodesRequest instantiates a new PutTemplateTransactionCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTemplateTransactionCodesRequestWithDefaults

`func NewPutTemplateTransactionCodesRequestWithDefaults() *PutTemplateTransactionCodesRequest`

NewPutTemplateTransactionCodesRequestWithDefaults instantiates a new PutTemplateTransactionCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCodes

`func (o *PutTemplateTransactionCodesRequest) GetTransactionCodes() []TemplateTransactionCodeType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *PutTemplateTransactionCodesRequest) GetTransactionCodesOk() (*[]TemplateTransactionCodeType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *PutTemplateTransactionCodesRequest) SetTransactionCodes(v []TemplateTransactionCodeType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *PutTemplateTransactionCodesRequest) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PutTemplateTransactionCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTemplateTransactionCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTemplateTransactionCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTemplateTransactionCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTemplateTransactionCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTemplateTransactionCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTemplateTransactionCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTemplateTransactionCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


