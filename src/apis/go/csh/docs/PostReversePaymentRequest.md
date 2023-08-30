# PostReversePaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Payment** | Pointer to [**PaymentReversalType**](PaymentReversalType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostReversePaymentRequest

`func NewPostReversePaymentRequest() *PostReversePaymentRequest`

NewPostReversePaymentRequest instantiates a new PostReversePaymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostReversePaymentRequestWithDefaults

`func NewPostReversePaymentRequestWithDefaults() *PostReversePaymentRequest`

NewPostReversePaymentRequestWithDefaults instantiates a new PostReversePaymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPayment

`func (o *PostReversePaymentRequest) GetPayment() PaymentReversalType`

GetPayment returns the Payment field if non-nil, zero value otherwise.

### GetPaymentOk

`func (o *PostReversePaymentRequest) GetPaymentOk() (*PaymentReversalType, bool)`

GetPaymentOk returns a tuple with the Payment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayment

`func (o *PostReversePaymentRequest) SetPayment(v PaymentReversalType)`

SetPayment sets Payment field to given value.

### HasPayment

`func (o *PostReversePaymentRequest) HasPayment() bool`

HasPayment returns a boolean if a field has been set.

### GetLinks

`func (o *PostReversePaymentRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostReversePaymentRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostReversePaymentRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostReversePaymentRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostReversePaymentRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostReversePaymentRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostReversePaymentRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostReversePaymentRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


