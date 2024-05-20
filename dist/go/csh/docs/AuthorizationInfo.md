# AuthorizationInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthInfo** | Pointer to [**AuthorizationInfoType**](AuthorizationInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Payment** | Pointer to [**CashieringPaymentMethodType**](CashieringPaymentMethodType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAuthorizationInfo

`func NewAuthorizationInfo() *AuthorizationInfo`

NewAuthorizationInfo instantiates a new AuthorizationInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizationInfoWithDefaults

`func NewAuthorizationInfoWithDefaults() *AuthorizationInfo`

NewAuthorizationInfoWithDefaults instantiates a new AuthorizationInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthInfo

`func (o *AuthorizationInfo) GetAuthInfo() AuthorizationInfoType`

GetAuthInfo returns the AuthInfo field if non-nil, zero value otherwise.

### GetAuthInfoOk

`func (o *AuthorizationInfo) GetAuthInfoOk() (*AuthorizationInfoType, bool)`

GetAuthInfoOk returns a tuple with the AuthInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthInfo

`func (o *AuthorizationInfo) SetAuthInfo(v AuthorizationInfoType)`

SetAuthInfo sets AuthInfo field to given value.

### HasAuthInfo

`func (o *AuthorizationInfo) HasAuthInfo() bool`

HasAuthInfo returns a boolean if a field has been set.

### GetLinks

`func (o *AuthorizationInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AuthorizationInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AuthorizationInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AuthorizationInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPayment

`func (o *AuthorizationInfo) GetPayment() CashieringPaymentMethodType`

GetPayment returns the Payment field if non-nil, zero value otherwise.

### GetPaymentOk

`func (o *AuthorizationInfo) GetPaymentOk() (*CashieringPaymentMethodType, bool)`

GetPaymentOk returns a tuple with the Payment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayment

`func (o *AuthorizationInfo) SetPayment(v CashieringPaymentMethodType)`

SetPayment sets Payment field to given value.

### HasPayment

`func (o *AuthorizationInfo) HasPayment() bool`

HasPayment returns a boolean if a field has been set.

### GetWarnings

`func (o *AuthorizationInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AuthorizationInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AuthorizationInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AuthorizationInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


