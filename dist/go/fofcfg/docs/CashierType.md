# CashierType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppUsers** | Pointer to [**[]ApplicationUserType**](ApplicationUserType.md) | List of application users associated with the cashier | [optional] 
**AttachedUser** | Pointer to **string** | User(s) assigned to the cashier. | [optional] 
**CashierId** | Pointer to **float32** | Numeric code for cashier ID. | [optional] 
**CashierType** | Pointer to [**CashierTypeType**](CashierTypeType.md) |  | [optional] 
**CurrencyCode** | Pointer to **string** | The currency code used by the hotel that the cashier belongs to. | [optional] 
**FloatOverShort** | Pointer to **bool** | Selected if the cashier is allowed to drop below or above the required drop amount. | [optional] 
**Inactive** | Pointer to **bool** | Indicator that tells whether the cashier is active or not. | [optional] 
**Kiosk** | Pointer to **bool** | Indicator that this cashier is the one to be used by Kiosk Partner to carry out postings and payments for the guest. | [optional] 
**Name** | Pointer to **string** | Name assigned to the cashier. | [optional] 
**Open** | Pointer to **bool** | Indicator that tells whether the cashier is open or not. | [optional] 
**StartingAmount** | Pointer to **float32** | The Starting Amount in the Cashier drawer. | [optional] 
**UsageInfo** | Pointer to [**CashierTypeUsageInfo**](CashierTypeUsageInfo.md) |  | [optional] 

## Methods

### NewCashierType

`func NewCashierType() *CashierType`

NewCashierType instantiates a new CashierType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashierTypeWithDefaults

`func NewCashierTypeWithDefaults() *CashierType`

NewCashierTypeWithDefaults instantiates a new CashierType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppUsers

`func (o *CashierType) GetAppUsers() []ApplicationUserType`

GetAppUsers returns the AppUsers field if non-nil, zero value otherwise.

### GetAppUsersOk

`func (o *CashierType) GetAppUsersOk() (*[]ApplicationUserType, bool)`

GetAppUsersOk returns a tuple with the AppUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUsers

`func (o *CashierType) SetAppUsers(v []ApplicationUserType)`

SetAppUsers sets AppUsers field to given value.

### HasAppUsers

`func (o *CashierType) HasAppUsers() bool`

HasAppUsers returns a boolean if a field has been set.

### GetAttachedUser

`func (o *CashierType) GetAttachedUser() string`

GetAttachedUser returns the AttachedUser field if non-nil, zero value otherwise.

### GetAttachedUserOk

`func (o *CashierType) GetAttachedUserOk() (*string, bool)`

GetAttachedUserOk returns a tuple with the AttachedUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachedUser

`func (o *CashierType) SetAttachedUser(v string)`

SetAttachedUser sets AttachedUser field to given value.

### HasAttachedUser

`func (o *CashierType) HasAttachedUser() bool`

HasAttachedUser returns a boolean if a field has been set.

### GetCashierId

`func (o *CashierType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *CashierType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *CashierType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *CashierType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCashierType

`func (o *CashierType) GetCashierType() CashierTypeType`

GetCashierType returns the CashierType field if non-nil, zero value otherwise.

### GetCashierTypeOk

`func (o *CashierType) GetCashierTypeOk() (*CashierTypeType, bool)`

GetCashierTypeOk returns a tuple with the CashierType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierType

`func (o *CashierType) SetCashierType(v CashierTypeType)`

SetCashierType sets CashierType field to given value.

### HasCashierType

`func (o *CashierType) HasCashierType() bool`

HasCashierType returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *CashierType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *CashierType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *CashierType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *CashierType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetFloatOverShort

`func (o *CashierType) GetFloatOverShort() bool`

GetFloatOverShort returns the FloatOverShort field if non-nil, zero value otherwise.

### GetFloatOverShortOk

`func (o *CashierType) GetFloatOverShortOk() (*bool, bool)`

GetFloatOverShortOk returns a tuple with the FloatOverShort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloatOverShort

`func (o *CashierType) SetFloatOverShort(v bool)`

SetFloatOverShort sets FloatOverShort field to given value.

### HasFloatOverShort

`func (o *CashierType) HasFloatOverShort() bool`

HasFloatOverShort returns a boolean if a field has been set.

### GetInactive

`func (o *CashierType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *CashierType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *CashierType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *CashierType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetKiosk

`func (o *CashierType) GetKiosk() bool`

GetKiosk returns the Kiosk field if non-nil, zero value otherwise.

### GetKioskOk

`func (o *CashierType) GetKioskOk() (*bool, bool)`

GetKioskOk returns a tuple with the Kiosk field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKiosk

`func (o *CashierType) SetKiosk(v bool)`

SetKiosk sets Kiosk field to given value.

### HasKiosk

`func (o *CashierType) HasKiosk() bool`

HasKiosk returns a boolean if a field has been set.

### GetName

`func (o *CashierType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CashierType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CashierType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CashierType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOpen

`func (o *CashierType) GetOpen() bool`

GetOpen returns the Open field if non-nil, zero value otherwise.

### GetOpenOk

`func (o *CashierType) GetOpenOk() (*bool, bool)`

GetOpenOk returns a tuple with the Open field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpen

`func (o *CashierType) SetOpen(v bool)`

SetOpen sets Open field to given value.

### HasOpen

`func (o *CashierType) HasOpen() bool`

HasOpen returns a boolean if a field has been set.

### GetStartingAmount

`func (o *CashierType) GetStartingAmount() float32`

GetStartingAmount returns the StartingAmount field if non-nil, zero value otherwise.

### GetStartingAmountOk

`func (o *CashierType) GetStartingAmountOk() (*float32, bool)`

GetStartingAmountOk returns a tuple with the StartingAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartingAmount

`func (o *CashierType) SetStartingAmount(v float32)`

SetStartingAmount sets StartingAmount field to given value.

### HasStartingAmount

`func (o *CashierType) HasStartingAmount() bool`

HasStartingAmount returns a boolean if a field has been set.

### GetUsageInfo

`func (o *CashierType) GetUsageInfo() CashierTypeUsageInfo`

GetUsageInfo returns the UsageInfo field if non-nil, zero value otherwise.

### GetUsageInfoOk

`func (o *CashierType) GetUsageInfoOk() (*CashierTypeUsageInfo, bool)`

GetUsageInfoOk returns a tuple with the UsageInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageInfo

`func (o *CashierType) SetUsageInfo(v CashierTypeUsageInfo)`

SetUsageInfo sets UsageInfo field to given value.

### HasUsageInfo

`func (o *CashierType) HasUsageInfo() bool`

HasUsageInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


