# PaymentMethodsSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EstablishedCount** | Pointer to **string** | Reservations count with payment method established. | [optional] 
**UnestablishedCount** | Pointer to **string** | Reservations count with no payment method established. | [optional] 

## Methods

### NewPaymentMethodsSummaryType

`func NewPaymentMethodsSummaryType() *PaymentMethodsSummaryType`

NewPaymentMethodsSummaryType instantiates a new PaymentMethodsSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentMethodsSummaryTypeWithDefaults

`func NewPaymentMethodsSummaryTypeWithDefaults() *PaymentMethodsSummaryType`

NewPaymentMethodsSummaryTypeWithDefaults instantiates a new PaymentMethodsSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEstablishedCount

`func (o *PaymentMethodsSummaryType) GetEstablishedCount() string`

GetEstablishedCount returns the EstablishedCount field if non-nil, zero value otherwise.

### GetEstablishedCountOk

`func (o *PaymentMethodsSummaryType) GetEstablishedCountOk() (*string, bool)`

GetEstablishedCountOk returns a tuple with the EstablishedCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstablishedCount

`func (o *PaymentMethodsSummaryType) SetEstablishedCount(v string)`

SetEstablishedCount sets EstablishedCount field to given value.

### HasEstablishedCount

`func (o *PaymentMethodsSummaryType) HasEstablishedCount() bool`

HasEstablishedCount returns a boolean if a field has been set.

### GetUnestablishedCount

`func (o *PaymentMethodsSummaryType) GetUnestablishedCount() string`

GetUnestablishedCount returns the UnestablishedCount field if non-nil, zero value otherwise.

### GetUnestablishedCountOk

`func (o *PaymentMethodsSummaryType) GetUnestablishedCountOk() (*string, bool)`

GetUnestablishedCountOk returns a tuple with the UnestablishedCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnestablishedCount

`func (o *PaymentMethodsSummaryType) SetUnestablishedCount(v string)`

SetUnestablishedCount sets UnestablishedCount field to given value.

### HasUnestablishedCount

`func (o *PaymentMethodsSummaryType) HasUnestablishedCount() bool`

HasUnestablishedCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


