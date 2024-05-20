# MembershipTypeRulePrimaryDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipTypeRuleId** | Pointer to [**MembershipTypeRuleIDType**](MembershipTypeRuleIDType.md) |  | [optional] 
**Description** | Pointer to **string** | Description of the rule. | [optional] 
**RuleBasedOn** | Pointer to [**MembershipTypeRuleBasedOnType**](MembershipTypeRuleBasedOnType.md) |  | [optional] 
**RuleStartDate** | Pointer to **string** | Start date indicates the begin date for this points calculation rule. | [optional] 
**RuleEndDate** | Pointer to **string** | End date for this points calculation rule. | [optional] 
**PointsType** | Pointer to [**RulePointsTypeType**](RulePointsTypeType.md) |  | [optional] 
**InactiveDate** | Pointer to **string** | The date that Membership type rule is marked as inactive. | [optional] 
**TransactionCode** | Pointer to [**MembershipTypeRuleTransactionCodeType**](MembershipTypeRuleTransactionCodeType.md) |  | [optional] 

## Methods

### NewMembershipTypeRulePrimaryDetailsType

`func NewMembershipTypeRulePrimaryDetailsType() *MembershipTypeRulePrimaryDetailsType`

NewMembershipTypeRulePrimaryDetailsType instantiates a new MembershipTypeRulePrimaryDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeRulePrimaryDetailsTypeWithDefaults

`func NewMembershipTypeRulePrimaryDetailsTypeWithDefaults() *MembershipTypeRulePrimaryDetailsType`

NewMembershipTypeRulePrimaryDetailsTypeWithDefaults instantiates a new MembershipTypeRulePrimaryDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipTypeRuleId

`func (o *MembershipTypeRulePrimaryDetailsType) GetMembershipTypeRuleId() MembershipTypeRuleIDType`

GetMembershipTypeRuleId returns the MembershipTypeRuleId field if non-nil, zero value otherwise.

### GetMembershipTypeRuleIdOk

`func (o *MembershipTypeRulePrimaryDetailsType) GetMembershipTypeRuleIdOk() (*MembershipTypeRuleIDType, bool)`

GetMembershipTypeRuleIdOk returns a tuple with the MembershipTypeRuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTypeRuleId

`func (o *MembershipTypeRulePrimaryDetailsType) SetMembershipTypeRuleId(v MembershipTypeRuleIDType)`

SetMembershipTypeRuleId sets MembershipTypeRuleId field to given value.

### HasMembershipTypeRuleId

`func (o *MembershipTypeRulePrimaryDetailsType) HasMembershipTypeRuleId() bool`

HasMembershipTypeRuleId returns a boolean if a field has been set.

### GetDescription

`func (o *MembershipTypeRulePrimaryDetailsType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MembershipTypeRulePrimaryDetailsType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MembershipTypeRulePrimaryDetailsType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MembershipTypeRulePrimaryDetailsType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRuleBasedOn

`func (o *MembershipTypeRulePrimaryDetailsType) GetRuleBasedOn() MembershipTypeRuleBasedOnType`

GetRuleBasedOn returns the RuleBasedOn field if non-nil, zero value otherwise.

### GetRuleBasedOnOk

`func (o *MembershipTypeRulePrimaryDetailsType) GetRuleBasedOnOk() (*MembershipTypeRuleBasedOnType, bool)`

GetRuleBasedOnOk returns a tuple with the RuleBasedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleBasedOn

`func (o *MembershipTypeRulePrimaryDetailsType) SetRuleBasedOn(v MembershipTypeRuleBasedOnType)`

SetRuleBasedOn sets RuleBasedOn field to given value.

### HasRuleBasedOn

`func (o *MembershipTypeRulePrimaryDetailsType) HasRuleBasedOn() bool`

HasRuleBasedOn returns a boolean if a field has been set.

### GetRuleStartDate

`func (o *MembershipTypeRulePrimaryDetailsType) GetRuleStartDate() string`

GetRuleStartDate returns the RuleStartDate field if non-nil, zero value otherwise.

### GetRuleStartDateOk

`func (o *MembershipTypeRulePrimaryDetailsType) GetRuleStartDateOk() (*string, bool)`

GetRuleStartDateOk returns a tuple with the RuleStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleStartDate

`func (o *MembershipTypeRulePrimaryDetailsType) SetRuleStartDate(v string)`

SetRuleStartDate sets RuleStartDate field to given value.

### HasRuleStartDate

`func (o *MembershipTypeRulePrimaryDetailsType) HasRuleStartDate() bool`

HasRuleStartDate returns a boolean if a field has been set.

### GetRuleEndDate

`func (o *MembershipTypeRulePrimaryDetailsType) GetRuleEndDate() string`

GetRuleEndDate returns the RuleEndDate field if non-nil, zero value otherwise.

### GetRuleEndDateOk

`func (o *MembershipTypeRulePrimaryDetailsType) GetRuleEndDateOk() (*string, bool)`

GetRuleEndDateOk returns a tuple with the RuleEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleEndDate

`func (o *MembershipTypeRulePrimaryDetailsType) SetRuleEndDate(v string)`

SetRuleEndDate sets RuleEndDate field to given value.

### HasRuleEndDate

`func (o *MembershipTypeRulePrimaryDetailsType) HasRuleEndDate() bool`

HasRuleEndDate returns a boolean if a field has been set.

### GetPointsType

`func (o *MembershipTypeRulePrimaryDetailsType) GetPointsType() RulePointsTypeType`

GetPointsType returns the PointsType field if non-nil, zero value otherwise.

### GetPointsTypeOk

`func (o *MembershipTypeRulePrimaryDetailsType) GetPointsTypeOk() (*RulePointsTypeType, bool)`

GetPointsTypeOk returns a tuple with the PointsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsType

`func (o *MembershipTypeRulePrimaryDetailsType) SetPointsType(v RulePointsTypeType)`

SetPointsType sets PointsType field to given value.

### HasPointsType

`func (o *MembershipTypeRulePrimaryDetailsType) HasPointsType() bool`

HasPointsType returns a boolean if a field has been set.

### GetInactiveDate

`func (o *MembershipTypeRulePrimaryDetailsType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *MembershipTypeRulePrimaryDetailsType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *MembershipTypeRulePrimaryDetailsType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *MembershipTypeRulePrimaryDetailsType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetTransactionCode

`func (o *MembershipTypeRulePrimaryDetailsType) GetTransactionCode() MembershipTypeRuleTransactionCodeType`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *MembershipTypeRulePrimaryDetailsType) GetTransactionCodeOk() (*MembershipTypeRuleTransactionCodeType, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *MembershipTypeRulePrimaryDetailsType) SetTransactionCode(v MembershipTypeRuleTransactionCodeType)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *MembershipTypeRulePrimaryDetailsType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


