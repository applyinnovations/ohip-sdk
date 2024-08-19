# InvoiceAppliedPayments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Details** | Pointer to [**[]ARAppliedPaymentType**](ARAppliedPaymentType.md) | Applied Payment record. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewInvoiceAppliedPayments

`func NewInvoiceAppliedPayments() *InvoiceAppliedPayments`

NewInvoiceAppliedPayments instantiates a new InvoiceAppliedPayments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoiceAppliedPaymentsWithDefaults

`func NewInvoiceAppliedPaymentsWithDefaults() *InvoiceAppliedPayments`

NewInvoiceAppliedPaymentsWithDefaults instantiates a new InvoiceAppliedPayments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetails

`func (o *InvoiceAppliedPayments) GetDetails() []ARAppliedPaymentType`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *InvoiceAppliedPayments) GetDetailsOk() (*[]ARAppliedPaymentType, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *InvoiceAppliedPayments) SetDetails(v []ARAppliedPaymentType)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *InvoiceAppliedPayments) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetLinks

`func (o *InvoiceAppliedPayments) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InvoiceAppliedPayments) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InvoiceAppliedPayments) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InvoiceAppliedPayments) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *InvoiceAppliedPayments) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *InvoiceAppliedPayments) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *InvoiceAppliedPayments) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *InvoiceAppliedPayments) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *InvoiceAppliedPayments) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *InvoiceAppliedPayments) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *InvoiceAppliedPayments) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *InvoiceAppliedPayments) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


