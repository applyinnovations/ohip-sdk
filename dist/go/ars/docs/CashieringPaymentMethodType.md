# CashieringPaymentMethodType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizationApproval** | Pointer to [**AuthorizationInfoType**](AuthorizationInfoType.md) |  | [optional] 
**AuthorizationRule** | Pointer to [**AuthorizationRuleType**](AuthorizationRuleType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**EmailFolioInfo** | Pointer to [**CashieringPaymentMethodTypeEmailFolioInfo**](CashieringPaymentMethodTypeEmailFolioInfo.md) |  | [optional] 
**FolioView** | Pointer to **int32** |  | [optional] 
**PaymentCard** | Pointer to [**ResPaymentCardType**](ResPaymentCardType.md) |  | [optional] 
**PaymentMethod** | Pointer to **string** |  | [optional] 
**Track2Data** | Pointer to **string** | Track2 data for the card which would be sent to the CC vendor as part of the authorization. | [optional] 

## Methods

### NewCashieringPaymentMethodType

`func NewCashieringPaymentMethodType() *CashieringPaymentMethodType`

NewCashieringPaymentMethodType instantiates a new CashieringPaymentMethodType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashieringPaymentMethodTypeWithDefaults

`func NewCashieringPaymentMethodTypeWithDefaults() *CashieringPaymentMethodType`

NewCashieringPaymentMethodTypeWithDefaults instantiates a new CashieringPaymentMethodType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizationApproval

`func (o *CashieringPaymentMethodType) GetAuthorizationApproval() AuthorizationInfoType`

GetAuthorizationApproval returns the AuthorizationApproval field if non-nil, zero value otherwise.

### GetAuthorizationApprovalOk

`func (o *CashieringPaymentMethodType) GetAuthorizationApprovalOk() (*AuthorizationInfoType, bool)`

GetAuthorizationApprovalOk returns a tuple with the AuthorizationApproval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationApproval

`func (o *CashieringPaymentMethodType) SetAuthorizationApproval(v AuthorizationInfoType)`

SetAuthorizationApproval sets AuthorizationApproval field to given value.

### HasAuthorizationApproval

`func (o *CashieringPaymentMethodType) HasAuthorizationApproval() bool`

HasAuthorizationApproval returns a boolean if a field has been set.

### GetAuthorizationRule

`func (o *CashieringPaymentMethodType) GetAuthorizationRule() AuthorizationRuleType`

GetAuthorizationRule returns the AuthorizationRule field if non-nil, zero value otherwise.

### GetAuthorizationRuleOk

`func (o *CashieringPaymentMethodType) GetAuthorizationRuleOk() (*AuthorizationRuleType, bool)`

GetAuthorizationRuleOk returns a tuple with the AuthorizationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationRule

`func (o *CashieringPaymentMethodType) SetAuthorizationRule(v AuthorizationRuleType)`

SetAuthorizationRule sets AuthorizationRule field to given value.

### HasAuthorizationRule

`func (o *CashieringPaymentMethodType) HasAuthorizationRule() bool`

HasAuthorizationRule returns a boolean if a field has been set.

### GetBalance

`func (o *CashieringPaymentMethodType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *CashieringPaymentMethodType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *CashieringPaymentMethodType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *CashieringPaymentMethodType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetDescription

`func (o *CashieringPaymentMethodType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CashieringPaymentMethodType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CashieringPaymentMethodType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CashieringPaymentMethodType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEmailFolioInfo

`func (o *CashieringPaymentMethodType) GetEmailFolioInfo() CashieringPaymentMethodTypeEmailFolioInfo`

GetEmailFolioInfo returns the EmailFolioInfo field if non-nil, zero value otherwise.

### GetEmailFolioInfoOk

`func (o *CashieringPaymentMethodType) GetEmailFolioInfoOk() (*CashieringPaymentMethodTypeEmailFolioInfo, bool)`

GetEmailFolioInfoOk returns a tuple with the EmailFolioInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailFolioInfo

`func (o *CashieringPaymentMethodType) SetEmailFolioInfo(v CashieringPaymentMethodTypeEmailFolioInfo)`

SetEmailFolioInfo sets EmailFolioInfo field to given value.

### HasEmailFolioInfo

`func (o *CashieringPaymentMethodType) HasEmailFolioInfo() bool`

HasEmailFolioInfo returns a boolean if a field has been set.

### GetFolioView

`func (o *CashieringPaymentMethodType) GetFolioView() int32`

GetFolioView returns the FolioView field if non-nil, zero value otherwise.

### GetFolioViewOk

`func (o *CashieringPaymentMethodType) GetFolioViewOk() (*int32, bool)`

GetFolioViewOk returns a tuple with the FolioView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioView

`func (o *CashieringPaymentMethodType) SetFolioView(v int32)`

SetFolioView sets FolioView field to given value.

### HasFolioView

`func (o *CashieringPaymentMethodType) HasFolioView() bool`

HasFolioView returns a boolean if a field has been set.

### GetPaymentCard

`func (o *CashieringPaymentMethodType) GetPaymentCard() ResPaymentCardType`

GetPaymentCard returns the PaymentCard field if non-nil, zero value otherwise.

### GetPaymentCardOk

`func (o *CashieringPaymentMethodType) GetPaymentCardOk() (*ResPaymentCardType, bool)`

GetPaymentCardOk returns a tuple with the PaymentCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentCard

`func (o *CashieringPaymentMethodType) SetPaymentCard(v ResPaymentCardType)`

SetPaymentCard sets PaymentCard field to given value.

### HasPaymentCard

`func (o *CashieringPaymentMethodType) HasPaymentCard() bool`

HasPaymentCard returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *CashieringPaymentMethodType) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *CashieringPaymentMethodType) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *CashieringPaymentMethodType) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *CashieringPaymentMethodType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetTrack2Data

`func (o *CashieringPaymentMethodType) GetTrack2Data() string`

GetTrack2Data returns the Track2Data field if non-nil, zero value otherwise.

### GetTrack2DataOk

`func (o *CashieringPaymentMethodType) GetTrack2DataOk() (*string, bool)`

GetTrack2DataOk returns a tuple with the Track2Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrack2Data

`func (o *CashieringPaymentMethodType) SetTrack2Data(v string)`

SetTrack2Data sets Track2Data field to given value.

### HasTrack2Data

`func (o *CashieringPaymentMethodType) HasTrack2Data() bool`

HasTrack2Data returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


