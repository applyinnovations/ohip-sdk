# PutInvoicesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Invoices** | Pointer to [**[]ARInvoiceCriteriaType**](ARInvoiceCriteriaType.md) | Criteria for searching Invoices. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutInvoicesRequest

`func NewPutInvoicesRequest() *PutInvoicesRequest`

NewPutInvoicesRequest instantiates a new PutInvoicesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutInvoicesRequestWithDefaults

`func NewPutInvoicesRequestWithDefaults() *PutInvoicesRequest`

NewPutInvoicesRequestWithDefaults instantiates a new PutInvoicesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvoices

`func (o *PutInvoicesRequest) GetInvoices() []ARInvoiceCriteriaType`

GetInvoices returns the Invoices field if non-nil, zero value otherwise.

### GetInvoicesOk

`func (o *PutInvoicesRequest) GetInvoicesOk() (*[]ARInvoiceCriteriaType, bool)`

GetInvoicesOk returns a tuple with the Invoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoices

`func (o *PutInvoicesRequest) SetInvoices(v []ARInvoiceCriteriaType)`

SetInvoices sets Invoices field to given value.

### HasInvoices

`func (o *PutInvoicesRequest) HasInvoices() bool`

HasInvoices returns a boolean if a field has been set.

### GetLinks

`func (o *PutInvoicesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutInvoicesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutInvoicesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutInvoicesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutInvoicesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutInvoicesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutInvoicesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutInvoicesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


