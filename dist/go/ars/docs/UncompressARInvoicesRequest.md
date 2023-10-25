# UncompressARInvoicesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InvoiceDetails** | Pointer to [**ARInvoiceCriteriaType**](ARInvoiceCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewUncompressARInvoicesRequest

`func NewUncompressARInvoicesRequest() *UncompressARInvoicesRequest`

NewUncompressARInvoicesRequest instantiates a new UncompressARInvoicesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUncompressARInvoicesRequestWithDefaults

`func NewUncompressARInvoicesRequestWithDefaults() *UncompressARInvoicesRequest`

NewUncompressARInvoicesRequestWithDefaults instantiates a new UncompressARInvoicesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvoiceDetails

`func (o *UncompressARInvoicesRequest) GetInvoiceDetails() ARInvoiceCriteriaType`

GetInvoiceDetails returns the InvoiceDetails field if non-nil, zero value otherwise.

### GetInvoiceDetailsOk

`func (o *UncompressARInvoicesRequest) GetInvoiceDetailsOk() (*ARInvoiceCriteriaType, bool)`

GetInvoiceDetailsOk returns a tuple with the InvoiceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceDetails

`func (o *UncompressARInvoicesRequest) SetInvoiceDetails(v ARInvoiceCriteriaType)`

SetInvoiceDetails sets InvoiceDetails field to given value.

### HasInvoiceDetails

`func (o *UncompressARInvoicesRequest) HasInvoiceDetails() bool`

HasInvoiceDetails returns a boolean if a field has been set.

### GetLinks

`func (o *UncompressARInvoicesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UncompressARInvoicesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UncompressARInvoicesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UncompressARInvoicesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *UncompressARInvoicesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UncompressARInvoicesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UncompressARInvoicesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UncompressARInvoicesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


