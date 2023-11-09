# ArInvoiceDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Invoice** | Pointer to [**ARInvoicesType**](ARInvoicesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewArInvoiceDetails

`func NewArInvoiceDetails() *ArInvoiceDetails`

NewArInvoiceDetails instantiates a new ArInvoiceDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArInvoiceDetailsWithDefaults

`func NewArInvoiceDetailsWithDefaults() *ArInvoiceDetails`

NewArInvoiceDetailsWithDefaults instantiates a new ArInvoiceDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvoice

`func (o *ArInvoiceDetails) GetInvoice() ARInvoicesType`

GetInvoice returns the Invoice field if non-nil, zero value otherwise.

### GetInvoiceOk

`func (o *ArInvoiceDetails) GetInvoiceOk() (*ARInvoicesType, bool)`

GetInvoiceOk returns a tuple with the Invoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoice

`func (o *ArInvoiceDetails) SetInvoice(v ARInvoicesType)`

SetInvoice sets Invoice field to given value.

### HasInvoice

`func (o *ArInvoiceDetails) HasInvoice() bool`

HasInvoice returns a boolean if a field has been set.

### GetLinks

`func (o *ArInvoiceDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ArInvoiceDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ArInvoiceDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ArInvoiceDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ArInvoiceDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ArInvoiceDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ArInvoiceDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ArInvoiceDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


