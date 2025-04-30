# InvoicePostings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InvoicePostingsDetails** | Pointer to [**[]ARInvoicePostingType**](ARInvoicePostingType.md) | Invoice posting detail. | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewInvoicePostings

`func NewInvoicePostings() *InvoicePostings`

NewInvoicePostings instantiates a new InvoicePostings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoicePostingsWithDefaults

`func NewInvoicePostingsWithDefaults() *InvoicePostings`

NewInvoicePostingsWithDefaults instantiates a new InvoicePostings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvoicePostingsDetails

`func (o *InvoicePostings) GetInvoicePostingsDetails() []ARInvoicePostingType`

GetInvoicePostingsDetails returns the InvoicePostingsDetails field if non-nil, zero value otherwise.

### GetInvoicePostingsDetailsOk

`func (o *InvoicePostings) GetInvoicePostingsDetailsOk() (*[]ARInvoicePostingType, bool)`

GetInvoicePostingsDetailsOk returns a tuple with the InvoicePostingsDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoicePostingsDetails

`func (o *InvoicePostings) SetInvoicePostingsDetails(v []ARInvoicePostingType)`

SetInvoicePostingsDetails sets InvoicePostingsDetails field to given value.

### HasInvoicePostingsDetails

`func (o *InvoicePostings) HasInvoicePostingsDetails() bool`

HasInvoicePostingsDetails returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *InvoicePostings) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *InvoicePostings) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *InvoicePostings) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *InvoicePostings) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetLinks

`func (o *InvoicePostings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InvoicePostings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InvoicePostings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InvoicePostings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *InvoicePostings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *InvoicePostings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *InvoicePostings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *InvoicePostings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


