# BillingPrivilegesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostingRestriction** | Pointer to **bool** | Flag used by interface program during check in. | [optional] 
**PreStayCharging** | Pointer to **bool** | Indicates if the reservation has charging privileges before arrival. | [optional] 
**PostStayCharging** | Pointer to **bool** | Indicates if the reservation has charging privileges after checkout. | [optional] 
**VideoCheckout** | Pointer to **bool** | Indicates if the guest can do video checkout | [optional] 
**AllowAutoCheckin** | Pointer to **bool** | Indicated if a new reservation should be created and automatically checked in whenever the room is checked out. Available for pseudo room types only. | [optional] 
**AutoSettlement** | Pointer to **bool** | Indicates if the is a candidate for auto folio settlement. | [optional] 
**AutoSettlementType** | Pointer to **string** | The folio settlement type for auto folio settlement. | [optional] 
**AutoSettlementFreq** | Pointer to **int32** | The interval of days between each auto folio settlement. | [optional] 
**CreditLimitAutoPay** | Pointer to **bool** | Indicates if the reservation will be included in the Automatic Credit Limit Overages process and also be listed in the Credit Limit Overages screen results. | [optional] 

## Methods

### NewBillingPrivilegesType

`func NewBillingPrivilegesType() *BillingPrivilegesType`

NewBillingPrivilegesType instantiates a new BillingPrivilegesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBillingPrivilegesTypeWithDefaults

`func NewBillingPrivilegesTypeWithDefaults() *BillingPrivilegesType`

NewBillingPrivilegesTypeWithDefaults instantiates a new BillingPrivilegesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPostingRestriction

`func (o *BillingPrivilegesType) GetPostingRestriction() bool`

GetPostingRestriction returns the PostingRestriction field if non-nil, zero value otherwise.

### GetPostingRestrictionOk

`func (o *BillingPrivilegesType) GetPostingRestrictionOk() (*bool, bool)`

GetPostingRestrictionOk returns a tuple with the PostingRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRestriction

`func (o *BillingPrivilegesType) SetPostingRestriction(v bool)`

SetPostingRestriction sets PostingRestriction field to given value.

### HasPostingRestriction

`func (o *BillingPrivilegesType) HasPostingRestriction() bool`

HasPostingRestriction returns a boolean if a field has been set.

### GetPreStayCharging

`func (o *BillingPrivilegesType) GetPreStayCharging() bool`

GetPreStayCharging returns the PreStayCharging field if non-nil, zero value otherwise.

### GetPreStayChargingOk

`func (o *BillingPrivilegesType) GetPreStayChargingOk() (*bool, bool)`

GetPreStayChargingOk returns a tuple with the PreStayCharging field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreStayCharging

`func (o *BillingPrivilegesType) SetPreStayCharging(v bool)`

SetPreStayCharging sets PreStayCharging field to given value.

### HasPreStayCharging

`func (o *BillingPrivilegesType) HasPreStayCharging() bool`

HasPreStayCharging returns a boolean if a field has been set.

### GetPostStayCharging

`func (o *BillingPrivilegesType) GetPostStayCharging() bool`

GetPostStayCharging returns the PostStayCharging field if non-nil, zero value otherwise.

### GetPostStayChargingOk

`func (o *BillingPrivilegesType) GetPostStayChargingOk() (*bool, bool)`

GetPostStayChargingOk returns a tuple with the PostStayCharging field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostStayCharging

`func (o *BillingPrivilegesType) SetPostStayCharging(v bool)`

SetPostStayCharging sets PostStayCharging field to given value.

### HasPostStayCharging

`func (o *BillingPrivilegesType) HasPostStayCharging() bool`

HasPostStayCharging returns a boolean if a field has been set.

### GetVideoCheckout

`func (o *BillingPrivilegesType) GetVideoCheckout() bool`

GetVideoCheckout returns the VideoCheckout field if non-nil, zero value otherwise.

### GetVideoCheckoutOk

`func (o *BillingPrivilegesType) GetVideoCheckoutOk() (*bool, bool)`

GetVideoCheckoutOk returns a tuple with the VideoCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVideoCheckout

`func (o *BillingPrivilegesType) SetVideoCheckout(v bool)`

SetVideoCheckout sets VideoCheckout field to given value.

### HasVideoCheckout

`func (o *BillingPrivilegesType) HasVideoCheckout() bool`

HasVideoCheckout returns a boolean if a field has been set.

### GetAllowAutoCheckin

`func (o *BillingPrivilegesType) GetAllowAutoCheckin() bool`

GetAllowAutoCheckin returns the AllowAutoCheckin field if non-nil, zero value otherwise.

### GetAllowAutoCheckinOk

`func (o *BillingPrivilegesType) GetAllowAutoCheckinOk() (*bool, bool)`

GetAllowAutoCheckinOk returns a tuple with the AllowAutoCheckin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowAutoCheckin

`func (o *BillingPrivilegesType) SetAllowAutoCheckin(v bool)`

SetAllowAutoCheckin sets AllowAutoCheckin field to given value.

### HasAllowAutoCheckin

`func (o *BillingPrivilegesType) HasAllowAutoCheckin() bool`

HasAllowAutoCheckin returns a boolean if a field has been set.

### GetAutoSettlement

`func (o *BillingPrivilegesType) GetAutoSettlement() bool`

GetAutoSettlement returns the AutoSettlement field if non-nil, zero value otherwise.

### GetAutoSettlementOk

`func (o *BillingPrivilegesType) GetAutoSettlementOk() (*bool, bool)`

GetAutoSettlementOk returns a tuple with the AutoSettlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoSettlement

`func (o *BillingPrivilegesType) SetAutoSettlement(v bool)`

SetAutoSettlement sets AutoSettlement field to given value.

### HasAutoSettlement

`func (o *BillingPrivilegesType) HasAutoSettlement() bool`

HasAutoSettlement returns a boolean if a field has been set.

### GetAutoSettlementType

`func (o *BillingPrivilegesType) GetAutoSettlementType() string`

GetAutoSettlementType returns the AutoSettlementType field if non-nil, zero value otherwise.

### GetAutoSettlementTypeOk

`func (o *BillingPrivilegesType) GetAutoSettlementTypeOk() (*string, bool)`

GetAutoSettlementTypeOk returns a tuple with the AutoSettlementType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoSettlementType

`func (o *BillingPrivilegesType) SetAutoSettlementType(v string)`

SetAutoSettlementType sets AutoSettlementType field to given value.

### HasAutoSettlementType

`func (o *BillingPrivilegesType) HasAutoSettlementType() bool`

HasAutoSettlementType returns a boolean if a field has been set.

### GetAutoSettlementFreq

`func (o *BillingPrivilegesType) GetAutoSettlementFreq() int32`

GetAutoSettlementFreq returns the AutoSettlementFreq field if non-nil, zero value otherwise.

### GetAutoSettlementFreqOk

`func (o *BillingPrivilegesType) GetAutoSettlementFreqOk() (*int32, bool)`

GetAutoSettlementFreqOk returns a tuple with the AutoSettlementFreq field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoSettlementFreq

`func (o *BillingPrivilegesType) SetAutoSettlementFreq(v int32)`

SetAutoSettlementFreq sets AutoSettlementFreq field to given value.

### HasAutoSettlementFreq

`func (o *BillingPrivilegesType) HasAutoSettlementFreq() bool`

HasAutoSettlementFreq returns a boolean if a field has been set.

### GetCreditLimitAutoPay

`func (o *BillingPrivilegesType) GetCreditLimitAutoPay() bool`

GetCreditLimitAutoPay returns the CreditLimitAutoPay field if non-nil, zero value otherwise.

### GetCreditLimitAutoPayOk

`func (o *BillingPrivilegesType) GetCreditLimitAutoPayOk() (*bool, bool)`

GetCreditLimitAutoPayOk returns a tuple with the CreditLimitAutoPay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimitAutoPay

`func (o *BillingPrivilegesType) SetCreditLimitAutoPay(v bool)`

SetCreditLimitAutoPay sets CreditLimitAutoPay field to given value.

### HasCreditLimitAutoPay

`func (o *BillingPrivilegesType) HasCreditLimitAutoPay() bool`

HasCreditLimitAutoPay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


