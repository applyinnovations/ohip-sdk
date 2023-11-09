# PaymentMethods

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PaymentMethods** | Pointer to [**PaymentMethodsType**](PaymentMethodsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPaymentMethods

`func NewPaymentMethods() *PaymentMethods`

NewPaymentMethods instantiates a new PaymentMethods object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentMethodsWithDefaults

`func NewPaymentMethodsWithDefaults() *PaymentMethods`

NewPaymentMethodsWithDefaults instantiates a new PaymentMethods object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PaymentMethods) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PaymentMethods) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PaymentMethods) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PaymentMethods) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPaymentMethods

`func (o *PaymentMethods) GetPaymentMethods() PaymentMethodsType`

GetPaymentMethods returns the PaymentMethods field if non-nil, zero value otherwise.

### GetPaymentMethodsOk

`func (o *PaymentMethods) GetPaymentMethodsOk() (*PaymentMethodsType, bool)`

GetPaymentMethodsOk returns a tuple with the PaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethods

`func (o *PaymentMethods) SetPaymentMethods(v PaymentMethodsType)`

SetPaymentMethods sets PaymentMethods field to given value.

### HasPaymentMethods

`func (o *PaymentMethods) HasPaymentMethods() bool`

HasPaymentMethods returns a boolean if a field has been set.

### GetWarnings

`func (o *PaymentMethods) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PaymentMethods) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PaymentMethods) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PaymentMethods) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


