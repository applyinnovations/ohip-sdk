# RatePlanPrimaryDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalStatus** | Pointer to [**RatePlanApprovalStatusType**](RatePlanApprovalStatusType.md) |  | [optional] 
**BaseType** | Pointer to [**BaseType**](BaseType.md) |  | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**EndSellDate** | Pointer to **string** | End sell date of the rate plan. | [optional] 
**LockStatus** | Pointer to [**RateCodeLockStatusType**](RateCodeLockStatusType.md) |  | [optional] 
**PrivilegedRate** | Pointer to **bool** | The particular rate code is marked as privileged making it restrictive on who can update information. | [optional] 
**PrivilegedRateRestriction** | Pointer to **bool** | The restrictions marked on the rate code are marked as privileged making it restrictive on who can update information. | [optional] 
**SellSequence** | Pointer to **float32** | Sell Sequence for the rate plan. | [optional] 
**StartSellDate** | Pointer to **string** | Start sell date of the rate plan. | [optional] 

## Methods

### NewRatePlanPrimaryDetailsType

`func NewRatePlanPrimaryDetailsType() *RatePlanPrimaryDetailsType`

NewRatePlanPrimaryDetailsType instantiates a new RatePlanPrimaryDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanPrimaryDetailsTypeWithDefaults

`func NewRatePlanPrimaryDetailsTypeWithDefaults() *RatePlanPrimaryDetailsType`

NewRatePlanPrimaryDetailsTypeWithDefaults instantiates a new RatePlanPrimaryDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalStatus

`func (o *RatePlanPrimaryDetailsType) GetApprovalStatus() RatePlanApprovalStatusType`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *RatePlanPrimaryDetailsType) GetApprovalStatusOk() (*RatePlanApprovalStatusType, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *RatePlanPrimaryDetailsType) SetApprovalStatus(v RatePlanApprovalStatusType)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *RatePlanPrimaryDetailsType) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetBaseType

`func (o *RatePlanPrimaryDetailsType) GetBaseType() BaseType`

GetBaseType returns the BaseType field if non-nil, zero value otherwise.

### GetBaseTypeOk

`func (o *RatePlanPrimaryDetailsType) GetBaseTypeOk() (*BaseType, bool)`

GetBaseTypeOk returns a tuple with the BaseType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseType

`func (o *RatePlanPrimaryDetailsType) SetBaseType(v BaseType)`

SetBaseType sets BaseType field to given value.

### HasBaseType

`func (o *RatePlanPrimaryDetailsType) HasBaseType() bool`

HasBaseType returns a boolean if a field has been set.

### GetDescription

`func (o *RatePlanPrimaryDetailsType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RatePlanPrimaryDetailsType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RatePlanPrimaryDetailsType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RatePlanPrimaryDetailsType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEndSellDate

`func (o *RatePlanPrimaryDetailsType) GetEndSellDate() string`

GetEndSellDate returns the EndSellDate field if non-nil, zero value otherwise.

### GetEndSellDateOk

`func (o *RatePlanPrimaryDetailsType) GetEndSellDateOk() (*string, bool)`

GetEndSellDateOk returns a tuple with the EndSellDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndSellDate

`func (o *RatePlanPrimaryDetailsType) SetEndSellDate(v string)`

SetEndSellDate sets EndSellDate field to given value.

### HasEndSellDate

`func (o *RatePlanPrimaryDetailsType) HasEndSellDate() bool`

HasEndSellDate returns a boolean if a field has been set.

### GetLockStatus

`func (o *RatePlanPrimaryDetailsType) GetLockStatus() RateCodeLockStatusType`

GetLockStatus returns the LockStatus field if non-nil, zero value otherwise.

### GetLockStatusOk

`func (o *RatePlanPrimaryDetailsType) GetLockStatusOk() (*RateCodeLockStatusType, bool)`

GetLockStatusOk returns a tuple with the LockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockStatus

`func (o *RatePlanPrimaryDetailsType) SetLockStatus(v RateCodeLockStatusType)`

SetLockStatus sets LockStatus field to given value.

### HasLockStatus

`func (o *RatePlanPrimaryDetailsType) HasLockStatus() bool`

HasLockStatus returns a boolean if a field has been set.

### GetPrivilegedRate

`func (o *RatePlanPrimaryDetailsType) GetPrivilegedRate() bool`

GetPrivilegedRate returns the PrivilegedRate field if non-nil, zero value otherwise.

### GetPrivilegedRateOk

`func (o *RatePlanPrimaryDetailsType) GetPrivilegedRateOk() (*bool, bool)`

GetPrivilegedRateOk returns a tuple with the PrivilegedRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegedRate

`func (o *RatePlanPrimaryDetailsType) SetPrivilegedRate(v bool)`

SetPrivilegedRate sets PrivilegedRate field to given value.

### HasPrivilegedRate

`func (o *RatePlanPrimaryDetailsType) HasPrivilegedRate() bool`

HasPrivilegedRate returns a boolean if a field has been set.

### GetPrivilegedRateRestriction

`func (o *RatePlanPrimaryDetailsType) GetPrivilegedRateRestriction() bool`

GetPrivilegedRateRestriction returns the PrivilegedRateRestriction field if non-nil, zero value otherwise.

### GetPrivilegedRateRestrictionOk

`func (o *RatePlanPrimaryDetailsType) GetPrivilegedRateRestrictionOk() (*bool, bool)`

GetPrivilegedRateRestrictionOk returns a tuple with the PrivilegedRateRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegedRateRestriction

`func (o *RatePlanPrimaryDetailsType) SetPrivilegedRateRestriction(v bool)`

SetPrivilegedRateRestriction sets PrivilegedRateRestriction field to given value.

### HasPrivilegedRateRestriction

`func (o *RatePlanPrimaryDetailsType) HasPrivilegedRateRestriction() bool`

HasPrivilegedRateRestriction returns a boolean if a field has been set.

### GetSellSequence

`func (o *RatePlanPrimaryDetailsType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *RatePlanPrimaryDetailsType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *RatePlanPrimaryDetailsType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *RatePlanPrimaryDetailsType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.

### GetStartSellDate

`func (o *RatePlanPrimaryDetailsType) GetStartSellDate() string`

GetStartSellDate returns the StartSellDate field if non-nil, zero value otherwise.

### GetStartSellDateOk

`func (o *RatePlanPrimaryDetailsType) GetStartSellDateOk() (*string, bool)`

GetStartSellDateOk returns a tuple with the StartSellDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartSellDate

`func (o *RatePlanPrimaryDetailsType) SetStartSellDate(v string)`

SetStartSellDate sets StartSellDate field to given value.

### HasStartSellDate

`func (o *RatePlanPrimaryDetailsType) HasStartSellDate() bool`

HasStartSellDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


