# CardUsageRulesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizationAtCheckin** | Pointer to **bool** | Indicates if this payment method can be used for Authorization at check in. | [optional] 
**AuthorizationDuringStay** | Pointer to **bool** | Indicates if this payment method can be used for Authorization during stay. | [optional] 
**AuthorizationReversal** | Pointer to **bool** | Indicates if this payment method can be used for Authorization reversal can be done. | [optional] 
**AuthorizationSettlementAtCheckout** | Pointer to **bool** | Indicates if this payment method can be used for Authorization settlement can happen during checkout. | [optional] 
**CVVCheck** | Pointer to **bool** | Indicates if this payment method needs CVV check. | [optional] 
**AddressVerification** | Pointer to **bool** | Indicates if this payment method requires an address verification. | [optional] 
**PromptAtCheckin** | Pointer to **bool** | Indicates if this payment method needs a prompt during check in. | [optional] 
**ChipAndPin** | Pointer to **bool** | Indicates if this payment method is a chip and pin. | [optional] 

## Methods

### NewCardUsageRulesType

`func NewCardUsageRulesType() *CardUsageRulesType`

NewCardUsageRulesType instantiates a new CardUsageRulesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCardUsageRulesTypeWithDefaults

`func NewCardUsageRulesTypeWithDefaults() *CardUsageRulesType`

NewCardUsageRulesTypeWithDefaults instantiates a new CardUsageRulesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizationAtCheckin

`func (o *CardUsageRulesType) GetAuthorizationAtCheckin() bool`

GetAuthorizationAtCheckin returns the AuthorizationAtCheckin field if non-nil, zero value otherwise.

### GetAuthorizationAtCheckinOk

`func (o *CardUsageRulesType) GetAuthorizationAtCheckinOk() (*bool, bool)`

GetAuthorizationAtCheckinOk returns a tuple with the AuthorizationAtCheckin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationAtCheckin

`func (o *CardUsageRulesType) SetAuthorizationAtCheckin(v bool)`

SetAuthorizationAtCheckin sets AuthorizationAtCheckin field to given value.

### HasAuthorizationAtCheckin

`func (o *CardUsageRulesType) HasAuthorizationAtCheckin() bool`

HasAuthorizationAtCheckin returns a boolean if a field has been set.

### GetAuthorizationDuringStay

`func (o *CardUsageRulesType) GetAuthorizationDuringStay() bool`

GetAuthorizationDuringStay returns the AuthorizationDuringStay field if non-nil, zero value otherwise.

### GetAuthorizationDuringStayOk

`func (o *CardUsageRulesType) GetAuthorizationDuringStayOk() (*bool, bool)`

GetAuthorizationDuringStayOk returns a tuple with the AuthorizationDuringStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationDuringStay

`func (o *CardUsageRulesType) SetAuthorizationDuringStay(v bool)`

SetAuthorizationDuringStay sets AuthorizationDuringStay field to given value.

### HasAuthorizationDuringStay

`func (o *CardUsageRulesType) HasAuthorizationDuringStay() bool`

HasAuthorizationDuringStay returns a boolean if a field has been set.

### GetAuthorizationReversal

`func (o *CardUsageRulesType) GetAuthorizationReversal() bool`

GetAuthorizationReversal returns the AuthorizationReversal field if non-nil, zero value otherwise.

### GetAuthorizationReversalOk

`func (o *CardUsageRulesType) GetAuthorizationReversalOk() (*bool, bool)`

GetAuthorizationReversalOk returns a tuple with the AuthorizationReversal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationReversal

`func (o *CardUsageRulesType) SetAuthorizationReversal(v bool)`

SetAuthorizationReversal sets AuthorizationReversal field to given value.

### HasAuthorizationReversal

`func (o *CardUsageRulesType) HasAuthorizationReversal() bool`

HasAuthorizationReversal returns a boolean if a field has been set.

### GetAuthorizationSettlementAtCheckout

`func (o *CardUsageRulesType) GetAuthorizationSettlementAtCheckout() bool`

GetAuthorizationSettlementAtCheckout returns the AuthorizationSettlementAtCheckout field if non-nil, zero value otherwise.

### GetAuthorizationSettlementAtCheckoutOk

`func (o *CardUsageRulesType) GetAuthorizationSettlementAtCheckoutOk() (*bool, bool)`

GetAuthorizationSettlementAtCheckoutOk returns a tuple with the AuthorizationSettlementAtCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationSettlementAtCheckout

`func (o *CardUsageRulesType) SetAuthorizationSettlementAtCheckout(v bool)`

SetAuthorizationSettlementAtCheckout sets AuthorizationSettlementAtCheckout field to given value.

### HasAuthorizationSettlementAtCheckout

`func (o *CardUsageRulesType) HasAuthorizationSettlementAtCheckout() bool`

HasAuthorizationSettlementAtCheckout returns a boolean if a field has been set.

### GetCVVCheck

`func (o *CardUsageRulesType) GetCVVCheck() bool`

GetCVVCheck returns the CVVCheck field if non-nil, zero value otherwise.

### GetCVVCheckOk

`func (o *CardUsageRulesType) GetCVVCheckOk() (*bool, bool)`

GetCVVCheckOk returns a tuple with the CVVCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCVVCheck

`func (o *CardUsageRulesType) SetCVVCheck(v bool)`

SetCVVCheck sets CVVCheck field to given value.

### HasCVVCheck

`func (o *CardUsageRulesType) HasCVVCheck() bool`

HasCVVCheck returns a boolean if a field has been set.

### GetAddressVerification

`func (o *CardUsageRulesType) GetAddressVerification() bool`

GetAddressVerification returns the AddressVerification field if non-nil, zero value otherwise.

### GetAddressVerificationOk

`func (o *CardUsageRulesType) GetAddressVerificationOk() (*bool, bool)`

GetAddressVerificationOk returns a tuple with the AddressVerification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressVerification

`func (o *CardUsageRulesType) SetAddressVerification(v bool)`

SetAddressVerification sets AddressVerification field to given value.

### HasAddressVerification

`func (o *CardUsageRulesType) HasAddressVerification() bool`

HasAddressVerification returns a boolean if a field has been set.

### GetPromptAtCheckin

`func (o *CardUsageRulesType) GetPromptAtCheckin() bool`

GetPromptAtCheckin returns the PromptAtCheckin field if non-nil, zero value otherwise.

### GetPromptAtCheckinOk

`func (o *CardUsageRulesType) GetPromptAtCheckinOk() (*bool, bool)`

GetPromptAtCheckinOk returns a tuple with the PromptAtCheckin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromptAtCheckin

`func (o *CardUsageRulesType) SetPromptAtCheckin(v bool)`

SetPromptAtCheckin sets PromptAtCheckin field to given value.

### HasPromptAtCheckin

`func (o *CardUsageRulesType) HasPromptAtCheckin() bool`

HasPromptAtCheckin returns a boolean if a field has been set.

### GetChipAndPin

`func (o *CardUsageRulesType) GetChipAndPin() bool`

GetChipAndPin returns the ChipAndPin field if non-nil, zero value otherwise.

### GetChipAndPinOk

`func (o *CardUsageRulesType) GetChipAndPinOk() (*bool, bool)`

GetChipAndPinOk returns a tuple with the ChipAndPin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChipAndPin

`func (o *CardUsageRulesType) SetChipAndPin(v bool)`

SetChipAndPin sets ChipAndPin field to given value.

### HasChipAndPin

`func (o *CardUsageRulesType) HasChipAndPin() bool`

HasChipAndPin returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


