# PaymentReversal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReversedPayment** | Pointer to [**PostingType**](PostingType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPaymentReversal

`func NewPaymentReversal() *PaymentReversal`

NewPaymentReversal instantiates a new PaymentReversal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentReversalWithDefaults

`func NewPaymentReversalWithDefaults() *PaymentReversal`

NewPaymentReversalWithDefaults instantiates a new PaymentReversal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReversedPayment

`func (o *PaymentReversal) GetReversedPayment() PostingType`

GetReversedPayment returns the ReversedPayment field if non-nil, zero value otherwise.

### GetReversedPaymentOk

`func (o *PaymentReversal) GetReversedPaymentOk() (*PostingType, bool)`

GetReversedPaymentOk returns a tuple with the ReversedPayment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReversedPayment

`func (o *PaymentReversal) SetReversedPayment(v PostingType)`

SetReversedPayment sets ReversedPayment field to given value.

### HasReversedPayment

`func (o *PaymentReversal) HasReversedPayment() bool`

HasReversedPayment returns a boolean if a field has been set.

### GetLinks

`func (o *PaymentReversal) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PaymentReversal) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PaymentReversal) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PaymentReversal) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PaymentReversal) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PaymentReversal) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PaymentReversal) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PaymentReversal) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


