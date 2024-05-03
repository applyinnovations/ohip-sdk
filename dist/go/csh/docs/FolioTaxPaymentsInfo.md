# FolioTaxPaymentsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PaymentTaxInfo** | Pointer to [**PaymentTaxInfoType**](PaymentTaxInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFolioTaxPaymentsInfo

`func NewFolioTaxPaymentsInfo() *FolioTaxPaymentsInfo`

NewFolioTaxPaymentsInfo instantiates a new FolioTaxPaymentsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioTaxPaymentsInfoWithDefaults

`func NewFolioTaxPaymentsInfoWithDefaults() *FolioTaxPaymentsInfo`

NewFolioTaxPaymentsInfoWithDefaults instantiates a new FolioTaxPaymentsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *FolioTaxPaymentsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FolioTaxPaymentsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FolioTaxPaymentsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FolioTaxPaymentsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPaymentTaxInfo

`func (o *FolioTaxPaymentsInfo) GetPaymentTaxInfo() PaymentTaxInfoType`

GetPaymentTaxInfo returns the PaymentTaxInfo field if non-nil, zero value otherwise.

### GetPaymentTaxInfoOk

`func (o *FolioTaxPaymentsInfo) GetPaymentTaxInfoOk() (*PaymentTaxInfoType, bool)`

GetPaymentTaxInfoOk returns a tuple with the PaymentTaxInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTaxInfo

`func (o *FolioTaxPaymentsInfo) SetPaymentTaxInfo(v PaymentTaxInfoType)`

SetPaymentTaxInfo sets PaymentTaxInfo field to given value.

### HasPaymentTaxInfo

`func (o *FolioTaxPaymentsInfo) HasPaymentTaxInfo() bool`

HasPaymentTaxInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *FolioTaxPaymentsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FolioTaxPaymentsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FolioTaxPaymentsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FolioTaxPaymentsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


