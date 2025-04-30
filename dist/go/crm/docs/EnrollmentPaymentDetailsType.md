# EnrollmentPaymentDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PaymentMethod** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Amount** | Pointer to **float32** | Amount/Fee to enroll to membership Program. | [optional] 
**AmountCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**PaymentDate** | Pointer to **string** | The date of Payment for enrollment to membership program. | [optional] 
**Comments** | Pointer to **string** | Payment Comments. | [optional] 

## Methods

### NewEnrollmentPaymentDetailsType

`func NewEnrollmentPaymentDetailsType() *EnrollmentPaymentDetailsType`

NewEnrollmentPaymentDetailsType instantiates a new EnrollmentPaymentDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnrollmentPaymentDetailsTypeWithDefaults

`func NewEnrollmentPaymentDetailsTypeWithDefaults() *EnrollmentPaymentDetailsType`

NewEnrollmentPaymentDetailsTypeWithDefaults instantiates a new EnrollmentPaymentDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPaymentMethod

`func (o *EnrollmentPaymentDetailsType) GetPaymentMethod() CodeDescriptionType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *EnrollmentPaymentDetailsType) GetPaymentMethodOk() (*CodeDescriptionType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *EnrollmentPaymentDetailsType) SetPaymentMethod(v CodeDescriptionType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *EnrollmentPaymentDetailsType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetAmount

`func (o *EnrollmentPaymentDetailsType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *EnrollmentPaymentDetailsType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *EnrollmentPaymentDetailsType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *EnrollmentPaymentDetailsType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetAmountCode

`func (o *EnrollmentPaymentDetailsType) GetAmountCode() CodeDescriptionType`

GetAmountCode returns the AmountCode field if non-nil, zero value otherwise.

### GetAmountCodeOk

`func (o *EnrollmentPaymentDetailsType) GetAmountCodeOk() (*CodeDescriptionType, bool)`

GetAmountCodeOk returns a tuple with the AmountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountCode

`func (o *EnrollmentPaymentDetailsType) SetAmountCode(v CodeDescriptionType)`

SetAmountCode sets AmountCode field to given value.

### HasAmountCode

`func (o *EnrollmentPaymentDetailsType) HasAmountCode() bool`

HasAmountCode returns a boolean if a field has been set.

### GetPaymentDate

`func (o *EnrollmentPaymentDetailsType) GetPaymentDate() string`

GetPaymentDate returns the PaymentDate field if non-nil, zero value otherwise.

### GetPaymentDateOk

`func (o *EnrollmentPaymentDetailsType) GetPaymentDateOk() (*string, bool)`

GetPaymentDateOk returns a tuple with the PaymentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDate

`func (o *EnrollmentPaymentDetailsType) SetPaymentDate(v string)`

SetPaymentDate sets PaymentDate field to given value.

### HasPaymentDate

`func (o *EnrollmentPaymentDetailsType) HasPaymentDate() bool`

HasPaymentDate returns a boolean if a field has been set.

### GetComments

`func (o *EnrollmentPaymentDetailsType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *EnrollmentPaymentDetailsType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *EnrollmentPaymentDetailsType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *EnrollmentPaymentDetailsType) HasComments() bool`

HasComments returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


