# DiscountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to **float32** | A monetary amount. | [optional] 
**CurrencyCode** | Pointer to **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | [optional] 
**DiscountCode** | Pointer to **string** | Specifies the type of discount (e.g., No condition, LOS, Deposit or Total amount spent). | [optional] 
**DiscountReason** | Pointer to **string** |  | [optional] 
**Percent** | Pointer to **float32** | Percentage discount. | [optional] 

## Methods

### NewDiscountType

`func NewDiscountType() *DiscountType`

NewDiscountType instantiates a new DiscountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDiscountTypeWithDefaults

`func NewDiscountTypeWithDefaults() *DiscountType`

NewDiscountTypeWithDefaults instantiates a new DiscountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *DiscountType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *DiscountType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *DiscountType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *DiscountType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *DiscountType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *DiscountType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *DiscountType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *DiscountType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetDiscountCode

`func (o *DiscountType) GetDiscountCode() string`

GetDiscountCode returns the DiscountCode field if non-nil, zero value otherwise.

### GetDiscountCodeOk

`func (o *DiscountType) GetDiscountCodeOk() (*string, bool)`

GetDiscountCodeOk returns a tuple with the DiscountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountCode

`func (o *DiscountType) SetDiscountCode(v string)`

SetDiscountCode sets DiscountCode field to given value.

### HasDiscountCode

`func (o *DiscountType) HasDiscountCode() bool`

HasDiscountCode returns a boolean if a field has been set.

### GetDiscountReason

`func (o *DiscountType) GetDiscountReason() string`

GetDiscountReason returns the DiscountReason field if non-nil, zero value otherwise.

### GetDiscountReasonOk

`func (o *DiscountType) GetDiscountReasonOk() (*string, bool)`

GetDiscountReasonOk returns a tuple with the DiscountReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountReason

`func (o *DiscountType) SetDiscountReason(v string)`

SetDiscountReason sets DiscountReason field to given value.

### HasDiscountReason

`func (o *DiscountType) HasDiscountReason() bool`

HasDiscountReason returns a boolean if a field has been set.

### GetPercent

`func (o *DiscountType) GetPercent() float32`

GetPercent returns the Percent field if non-nil, zero value otherwise.

### GetPercentOk

`func (o *DiscountType) GetPercentOk() (*float32, bool)`

GetPercentOk returns a tuple with the Percent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercent

`func (o *DiscountType) SetPercent(v float32)`

SetPercent sets Percent field to given value.

### HasPercent

`func (o *DiscountType) HasPercent() bool`

HasPercent returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


