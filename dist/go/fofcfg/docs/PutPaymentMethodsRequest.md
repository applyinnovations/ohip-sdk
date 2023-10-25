# PutPaymentMethodsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PaymentMethods** | Pointer to [**[]PaymentMethodType**](PaymentMethodType.md) | Holds the various types of payment methods. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutPaymentMethodsRequest

`func NewPutPaymentMethodsRequest() *PutPaymentMethodsRequest`

NewPutPaymentMethodsRequest instantiates a new PutPaymentMethodsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutPaymentMethodsRequestWithDefaults

`func NewPutPaymentMethodsRequestWithDefaults() *PutPaymentMethodsRequest`

NewPutPaymentMethodsRequestWithDefaults instantiates a new PutPaymentMethodsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutPaymentMethodsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutPaymentMethodsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutPaymentMethodsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutPaymentMethodsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPaymentMethods

`func (o *PutPaymentMethodsRequest) GetPaymentMethods() []PaymentMethodType`

GetPaymentMethods returns the PaymentMethods field if non-nil, zero value otherwise.

### GetPaymentMethodsOk

`func (o *PutPaymentMethodsRequest) GetPaymentMethodsOk() (*[]PaymentMethodType, bool)`

GetPaymentMethodsOk returns a tuple with the PaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethods

`func (o *PutPaymentMethodsRequest) SetPaymentMethods(v []PaymentMethodType)`

SetPaymentMethods sets PaymentMethods field to given value.

### HasPaymentMethods

`func (o *PutPaymentMethodsRequest) HasPaymentMethods() bool`

HasPaymentMethods returns a boolean if a field has been set.

### GetWarnings

`func (o *PutPaymentMethodsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutPaymentMethodsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutPaymentMethodsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutPaymentMethodsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


