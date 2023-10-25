# CopyPaymentMethodsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PaymentMethods** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of payment methods to be copied. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyPaymentMethodsRequest

`func NewCopyPaymentMethodsRequest() *CopyPaymentMethodsRequest`

NewCopyPaymentMethodsRequest instantiates a new CopyPaymentMethodsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyPaymentMethodsRequestWithDefaults

`func NewCopyPaymentMethodsRequestWithDefaults() *CopyPaymentMethodsRequest`

NewCopyPaymentMethodsRequestWithDefaults instantiates a new CopyPaymentMethodsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyPaymentMethodsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyPaymentMethodsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyPaymentMethodsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyPaymentMethodsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPaymentMethods

`func (o *CopyPaymentMethodsRequest) GetPaymentMethods() []CopyConfigurationCodeType`

GetPaymentMethods returns the PaymentMethods field if non-nil, zero value otherwise.

### GetPaymentMethodsOk

`func (o *CopyPaymentMethodsRequest) GetPaymentMethodsOk() (*[]CopyConfigurationCodeType, bool)`

GetPaymentMethodsOk returns a tuple with the PaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethods

`func (o *CopyPaymentMethodsRequest) SetPaymentMethods(v []CopyConfigurationCodeType)`

SetPaymentMethods sets PaymentMethods field to given value.

### HasPaymentMethods

`func (o *CopyPaymentMethodsRequest) HasPaymentMethods() bool`

HasPaymentMethods returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyPaymentMethodsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyPaymentMethodsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyPaymentMethodsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyPaymentMethodsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


