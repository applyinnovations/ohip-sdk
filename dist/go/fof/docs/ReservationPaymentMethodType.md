# ReservationPaymentMethodType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizationRule** | Pointer to [**AuthorizationRuleType**](AuthorizationRuleType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**EmailFolioInfo** | Pointer to [**ReservationPaymentMethodTypeEmailFolioInfo**](ReservationPaymentMethodTypeEmailFolioInfo.md) |  | [optional] 
**FolioView** | Pointer to **int32** |  | [optional] 
**PaymentCard** | Pointer to [**ResPaymentCardType**](ResPaymentCardType.md) |  | [optional] 
**PaymentMethod** | Pointer to **string** |  | [optional] 

## Methods

### NewReservationPaymentMethodType

`func NewReservationPaymentMethodType() *ReservationPaymentMethodType`

NewReservationPaymentMethodType instantiates a new ReservationPaymentMethodType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPaymentMethodTypeWithDefaults

`func NewReservationPaymentMethodTypeWithDefaults() *ReservationPaymentMethodType`

NewReservationPaymentMethodTypeWithDefaults instantiates a new ReservationPaymentMethodType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizationRule

`func (o *ReservationPaymentMethodType) GetAuthorizationRule() AuthorizationRuleType`

GetAuthorizationRule returns the AuthorizationRule field if non-nil, zero value otherwise.

### GetAuthorizationRuleOk

`func (o *ReservationPaymentMethodType) GetAuthorizationRuleOk() (*AuthorizationRuleType, bool)`

GetAuthorizationRuleOk returns a tuple with the AuthorizationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationRule

`func (o *ReservationPaymentMethodType) SetAuthorizationRule(v AuthorizationRuleType)`

SetAuthorizationRule sets AuthorizationRule field to given value.

### HasAuthorizationRule

`func (o *ReservationPaymentMethodType) HasAuthorizationRule() bool`

HasAuthorizationRule returns a boolean if a field has been set.

### GetBalance

`func (o *ReservationPaymentMethodType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *ReservationPaymentMethodType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *ReservationPaymentMethodType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *ReservationPaymentMethodType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetDescription

`func (o *ReservationPaymentMethodType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReservationPaymentMethodType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReservationPaymentMethodType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReservationPaymentMethodType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEmailFolioInfo

`func (o *ReservationPaymentMethodType) GetEmailFolioInfo() ReservationPaymentMethodTypeEmailFolioInfo`

GetEmailFolioInfo returns the EmailFolioInfo field if non-nil, zero value otherwise.

### GetEmailFolioInfoOk

`func (o *ReservationPaymentMethodType) GetEmailFolioInfoOk() (*ReservationPaymentMethodTypeEmailFolioInfo, bool)`

GetEmailFolioInfoOk returns a tuple with the EmailFolioInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailFolioInfo

`func (o *ReservationPaymentMethodType) SetEmailFolioInfo(v ReservationPaymentMethodTypeEmailFolioInfo)`

SetEmailFolioInfo sets EmailFolioInfo field to given value.

### HasEmailFolioInfo

`func (o *ReservationPaymentMethodType) HasEmailFolioInfo() bool`

HasEmailFolioInfo returns a boolean if a field has been set.

### GetFolioView

`func (o *ReservationPaymentMethodType) GetFolioView() int32`

GetFolioView returns the FolioView field if non-nil, zero value otherwise.

### GetFolioViewOk

`func (o *ReservationPaymentMethodType) GetFolioViewOk() (*int32, bool)`

GetFolioViewOk returns a tuple with the FolioView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioView

`func (o *ReservationPaymentMethodType) SetFolioView(v int32)`

SetFolioView sets FolioView field to given value.

### HasFolioView

`func (o *ReservationPaymentMethodType) HasFolioView() bool`

HasFolioView returns a boolean if a field has been set.

### GetPaymentCard

`func (o *ReservationPaymentMethodType) GetPaymentCard() ResPaymentCardType`

GetPaymentCard returns the PaymentCard field if non-nil, zero value otherwise.

### GetPaymentCardOk

`func (o *ReservationPaymentMethodType) GetPaymentCardOk() (*ResPaymentCardType, bool)`

GetPaymentCardOk returns a tuple with the PaymentCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentCard

`func (o *ReservationPaymentMethodType) SetPaymentCard(v ResPaymentCardType)`

SetPaymentCard sets PaymentCard field to given value.

### HasPaymentCard

`func (o *ReservationPaymentMethodType) HasPaymentCard() bool`

HasPaymentCard returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *ReservationPaymentMethodType) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *ReservationPaymentMethodType) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *ReservationPaymentMethodType) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *ReservationPaymentMethodType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


