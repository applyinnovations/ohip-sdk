# PaymentMethodsCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PaymentMethods** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of payment methods to be copied. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPaymentMethodsCopy

`func NewPaymentMethodsCopy() *PaymentMethodsCopy`

NewPaymentMethodsCopy instantiates a new PaymentMethodsCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentMethodsCopyWithDefaults

`func NewPaymentMethodsCopyWithDefaults() *PaymentMethodsCopy`

NewPaymentMethodsCopyWithDefaults instantiates a new PaymentMethodsCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PaymentMethodsCopy) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PaymentMethodsCopy) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PaymentMethodsCopy) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PaymentMethodsCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPaymentMethods

`func (o *PaymentMethodsCopy) GetPaymentMethods() []CopyConfigurationCodeType`

GetPaymentMethods returns the PaymentMethods field if non-nil, zero value otherwise.

### GetPaymentMethodsOk

`func (o *PaymentMethodsCopy) GetPaymentMethodsOk() (*[]CopyConfigurationCodeType, bool)`

GetPaymentMethodsOk returns a tuple with the PaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethods

`func (o *PaymentMethodsCopy) SetPaymentMethods(v []CopyConfigurationCodeType)`

SetPaymentMethods sets PaymentMethods field to given value.

### HasPaymentMethods

`func (o *PaymentMethodsCopy) HasPaymentMethods() bool`

HasPaymentMethods returns a boolean if a field has been set.

### GetWarnings

`func (o *PaymentMethodsCopy) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PaymentMethodsCopy) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PaymentMethodsCopy) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PaymentMethodsCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


