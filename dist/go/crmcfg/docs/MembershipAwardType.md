# MembershipAwardType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipType** | Pointer to **string** | Membership type for which awards are defined. | [optional] 
**AwardCode** | Pointer to **string** | Membership Award Code. | [optional] 
**ShortDescription** | Pointer to **string** | Short description of Award. | [optional] 
**LongDescription** | Pointer to **string** | Detailed description and specification of the Award. | [optional] 
**RuleScheduleCode** | Pointer to **string** | Rule Schedule applied to this Award. | [optional] 
**BillingGroup** | Pointer to **string** | The billing group that represents a billing rule schedule for the membership award. | [optional] 
**MembershipLevel** | Pointer to **string** | Membership level required for eligibility to receive this award. Other membership levels are not eligible for this award. | [optional] 
**DateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**Inactive** | Pointer to **bool** | Inactive flag for Membership Award. The award record cannot be deleted. | [optional] 
**DisplaySequence** | Pointer to **float32** | Display sequence of Award. | [optional] 
**AwardQuantity** | Pointer to **int32** | Number of awards to be given. | [optional] 
**AutoConsume** | Pointer to **bool** | Indicates if award consumtion is tracked by the system. If value is Y, then system keeps track of availability of award after it is issued. | [optional] 
**ForceVerification** | Pointer to **bool** | Force verification whether Rate or Product for the Award is valid at reservation. | [optional] 
**AwardBasedOn** | Pointer to [**MembershipAwardBasedOnType**](MembershipAwardBasedOnType.md) |  | [optional] 
**RateInfo** | Pointer to [**MembershipAwardRateInfoType**](MembershipAwardRateInfoType.md) |  | [optional] 
**ProductInfo** | Pointer to [**MembershipAwardProductInfoType**](MembershipAwardProductInfoType.md) |  | [optional] 
**UpgradeInfo** | Pointer to [**MembershipAwardUpgradeInfoType**](MembershipAwardUpgradeInfoType.md) |  | [optional] 
**OtherInfo** | Pointer to [**MembershipAwardOtherInfoType**](MembershipAwardOtherInfoType.md) |  | [optional] 
**FinancialTransactionInfo** | Pointer to [**MembershipAwardFinancialTransactionInfoType**](MembershipAwardFinancialTransactionInfoType.md) |  | [optional] 
**AwardDetails** | Pointer to [**[]MembershipAwardDetailType**](MembershipAwardDetailType.md) | Membership Award Rate details. | [optional] 

## Methods

### NewMembershipAwardType

`func NewMembershipAwardType() *MembershipAwardType`

NewMembershipAwardType instantiates a new MembershipAwardType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipAwardTypeWithDefaults

`func NewMembershipAwardTypeWithDefaults() *MembershipAwardType`

NewMembershipAwardTypeWithDefaults instantiates a new MembershipAwardType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipType

`func (o *MembershipAwardType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MembershipAwardType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MembershipAwardType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MembershipAwardType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetAwardCode

`func (o *MembershipAwardType) GetAwardCode() string`

GetAwardCode returns the AwardCode field if non-nil, zero value otherwise.

### GetAwardCodeOk

`func (o *MembershipAwardType) GetAwardCodeOk() (*string, bool)`

GetAwardCodeOk returns a tuple with the AwardCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCode

`func (o *MembershipAwardType) SetAwardCode(v string)`

SetAwardCode sets AwardCode field to given value.

### HasAwardCode

`func (o *MembershipAwardType) HasAwardCode() bool`

HasAwardCode returns a boolean if a field has been set.

### GetShortDescription

`func (o *MembershipAwardType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *MembershipAwardType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *MembershipAwardType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *MembershipAwardType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetLongDescription

`func (o *MembershipAwardType) GetLongDescription() string`

GetLongDescription returns the LongDescription field if non-nil, zero value otherwise.

### GetLongDescriptionOk

`func (o *MembershipAwardType) GetLongDescriptionOk() (*string, bool)`

GetLongDescriptionOk returns a tuple with the LongDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongDescription

`func (o *MembershipAwardType) SetLongDescription(v string)`

SetLongDescription sets LongDescription field to given value.

### HasLongDescription

`func (o *MembershipAwardType) HasLongDescription() bool`

HasLongDescription returns a boolean if a field has been set.

### GetRuleScheduleCode

`func (o *MembershipAwardType) GetRuleScheduleCode() string`

GetRuleScheduleCode returns the RuleScheduleCode field if non-nil, zero value otherwise.

### GetRuleScheduleCodeOk

`func (o *MembershipAwardType) GetRuleScheduleCodeOk() (*string, bool)`

GetRuleScheduleCodeOk returns a tuple with the RuleScheduleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleScheduleCode

`func (o *MembershipAwardType) SetRuleScheduleCode(v string)`

SetRuleScheduleCode sets RuleScheduleCode field to given value.

### HasRuleScheduleCode

`func (o *MembershipAwardType) HasRuleScheduleCode() bool`

HasRuleScheduleCode returns a boolean if a field has been set.

### GetBillingGroup

`func (o *MembershipAwardType) GetBillingGroup() string`

GetBillingGroup returns the BillingGroup field if non-nil, zero value otherwise.

### GetBillingGroupOk

`func (o *MembershipAwardType) GetBillingGroupOk() (*string, bool)`

GetBillingGroupOk returns a tuple with the BillingGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingGroup

`func (o *MembershipAwardType) SetBillingGroup(v string)`

SetBillingGroup sets BillingGroup field to given value.

### HasBillingGroup

`func (o *MembershipAwardType) HasBillingGroup() bool`

HasBillingGroup returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *MembershipAwardType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *MembershipAwardType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *MembershipAwardType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *MembershipAwardType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetDateRange

`func (o *MembershipAwardType) GetDateRange() DateRangeType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *MembershipAwardType) GetDateRangeOk() (*DateRangeType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *MembershipAwardType) SetDateRange(v DateRangeType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *MembershipAwardType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetInactive

`func (o *MembershipAwardType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *MembershipAwardType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *MembershipAwardType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *MembershipAwardType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *MembershipAwardType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *MembershipAwardType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *MembershipAwardType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *MembershipAwardType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetAwardQuantity

`func (o *MembershipAwardType) GetAwardQuantity() int32`

GetAwardQuantity returns the AwardQuantity field if non-nil, zero value otherwise.

### GetAwardQuantityOk

`func (o *MembershipAwardType) GetAwardQuantityOk() (*int32, bool)`

GetAwardQuantityOk returns a tuple with the AwardQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardQuantity

`func (o *MembershipAwardType) SetAwardQuantity(v int32)`

SetAwardQuantity sets AwardQuantity field to given value.

### HasAwardQuantity

`func (o *MembershipAwardType) HasAwardQuantity() bool`

HasAwardQuantity returns a boolean if a field has been set.

### GetAutoConsume

`func (o *MembershipAwardType) GetAutoConsume() bool`

GetAutoConsume returns the AutoConsume field if non-nil, zero value otherwise.

### GetAutoConsumeOk

`func (o *MembershipAwardType) GetAutoConsumeOk() (*bool, bool)`

GetAutoConsumeOk returns a tuple with the AutoConsume field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoConsume

`func (o *MembershipAwardType) SetAutoConsume(v bool)`

SetAutoConsume sets AutoConsume field to given value.

### HasAutoConsume

`func (o *MembershipAwardType) HasAutoConsume() bool`

HasAutoConsume returns a boolean if a field has been set.

### GetForceVerification

`func (o *MembershipAwardType) GetForceVerification() bool`

GetForceVerification returns the ForceVerification field if non-nil, zero value otherwise.

### GetForceVerificationOk

`func (o *MembershipAwardType) GetForceVerificationOk() (*bool, bool)`

GetForceVerificationOk returns a tuple with the ForceVerification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceVerification

`func (o *MembershipAwardType) SetForceVerification(v bool)`

SetForceVerification sets ForceVerification field to given value.

### HasForceVerification

`func (o *MembershipAwardType) HasForceVerification() bool`

HasForceVerification returns a boolean if a field has been set.

### GetAwardBasedOn

`func (o *MembershipAwardType) GetAwardBasedOn() MembershipAwardBasedOnType`

GetAwardBasedOn returns the AwardBasedOn field if non-nil, zero value otherwise.

### GetAwardBasedOnOk

`func (o *MembershipAwardType) GetAwardBasedOnOk() (*MembershipAwardBasedOnType, bool)`

GetAwardBasedOnOk returns a tuple with the AwardBasedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardBasedOn

`func (o *MembershipAwardType) SetAwardBasedOn(v MembershipAwardBasedOnType)`

SetAwardBasedOn sets AwardBasedOn field to given value.

### HasAwardBasedOn

`func (o *MembershipAwardType) HasAwardBasedOn() bool`

HasAwardBasedOn returns a boolean if a field has been set.

### GetRateInfo

`func (o *MembershipAwardType) GetRateInfo() MembershipAwardRateInfoType`

GetRateInfo returns the RateInfo field if non-nil, zero value otherwise.

### GetRateInfoOk

`func (o *MembershipAwardType) GetRateInfoOk() (*MembershipAwardRateInfoType, bool)`

GetRateInfoOk returns a tuple with the RateInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateInfo

`func (o *MembershipAwardType) SetRateInfo(v MembershipAwardRateInfoType)`

SetRateInfo sets RateInfo field to given value.

### HasRateInfo

`func (o *MembershipAwardType) HasRateInfo() bool`

HasRateInfo returns a boolean if a field has been set.

### GetProductInfo

`func (o *MembershipAwardType) GetProductInfo() MembershipAwardProductInfoType`

GetProductInfo returns the ProductInfo field if non-nil, zero value otherwise.

### GetProductInfoOk

`func (o *MembershipAwardType) GetProductInfoOk() (*MembershipAwardProductInfoType, bool)`

GetProductInfoOk returns a tuple with the ProductInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductInfo

`func (o *MembershipAwardType) SetProductInfo(v MembershipAwardProductInfoType)`

SetProductInfo sets ProductInfo field to given value.

### HasProductInfo

`func (o *MembershipAwardType) HasProductInfo() bool`

HasProductInfo returns a boolean if a field has been set.

### GetUpgradeInfo

`func (o *MembershipAwardType) GetUpgradeInfo() MembershipAwardUpgradeInfoType`

GetUpgradeInfo returns the UpgradeInfo field if non-nil, zero value otherwise.

### GetUpgradeInfoOk

`func (o *MembershipAwardType) GetUpgradeInfoOk() (*MembershipAwardUpgradeInfoType, bool)`

GetUpgradeInfoOk returns a tuple with the UpgradeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradeInfo

`func (o *MembershipAwardType) SetUpgradeInfo(v MembershipAwardUpgradeInfoType)`

SetUpgradeInfo sets UpgradeInfo field to given value.

### HasUpgradeInfo

`func (o *MembershipAwardType) HasUpgradeInfo() bool`

HasUpgradeInfo returns a boolean if a field has been set.

### GetOtherInfo

`func (o *MembershipAwardType) GetOtherInfo() MembershipAwardOtherInfoType`

GetOtherInfo returns the OtherInfo field if non-nil, zero value otherwise.

### GetOtherInfoOk

`func (o *MembershipAwardType) GetOtherInfoOk() (*MembershipAwardOtherInfoType, bool)`

GetOtherInfoOk returns a tuple with the OtherInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtherInfo

`func (o *MembershipAwardType) SetOtherInfo(v MembershipAwardOtherInfoType)`

SetOtherInfo sets OtherInfo field to given value.

### HasOtherInfo

`func (o *MembershipAwardType) HasOtherInfo() bool`

HasOtherInfo returns a boolean if a field has been set.

### GetFinancialTransactionInfo

`func (o *MembershipAwardType) GetFinancialTransactionInfo() MembershipAwardFinancialTransactionInfoType`

GetFinancialTransactionInfo returns the FinancialTransactionInfo field if non-nil, zero value otherwise.

### GetFinancialTransactionInfoOk

`func (o *MembershipAwardType) GetFinancialTransactionInfoOk() (*MembershipAwardFinancialTransactionInfoType, bool)`

GetFinancialTransactionInfoOk returns a tuple with the FinancialTransactionInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinancialTransactionInfo

`func (o *MembershipAwardType) SetFinancialTransactionInfo(v MembershipAwardFinancialTransactionInfoType)`

SetFinancialTransactionInfo sets FinancialTransactionInfo field to given value.

### HasFinancialTransactionInfo

`func (o *MembershipAwardType) HasFinancialTransactionInfo() bool`

HasFinancialTransactionInfo returns a boolean if a field has been set.

### GetAwardDetails

`func (o *MembershipAwardType) GetAwardDetails() []MembershipAwardDetailType`

GetAwardDetails returns the AwardDetails field if non-nil, zero value otherwise.

### GetAwardDetailsOk

`func (o *MembershipAwardType) GetAwardDetailsOk() (*[]MembershipAwardDetailType, bool)`

GetAwardDetailsOk returns a tuple with the AwardDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardDetails

`func (o *MembershipAwardType) SetAwardDetails(v []MembershipAwardDetailType)`

SetAwardDetails sets AwardDetails field to given value.

### HasAwardDetails

`func (o *MembershipAwardType) HasAwardDetails() bool`

HasAwardDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


