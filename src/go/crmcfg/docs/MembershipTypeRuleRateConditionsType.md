# MembershipTypeRuleRateConditionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllMembershipRates** | Pointer to **bool** | Points Calculation will be based on all rate codes when specify All Membership Rates. | [optional] 
**AllMembershipTrx** | Pointer to **bool** | Points Calculation will be based on all transaction codes when specify All Membership Transactions. | [optional] 
**AverageRateAmount** | Pointer to **float32** | Average rate amount of the reservations for which rule will be applied. | [optional] 
**ExcludeRateGroup** | Pointer to **bool** | To specify the exclusion of rate group. | [optional] 
**ExcludeRevenueGroup** | Pointer to **bool** | To specify the exclusion of revenue group while applying rule. | [optional] 
**IncludeTransactionGroup** | Pointer to **bool** | To specify the inclusion of Transaction group. | [optional] 
**MinimumRevenue** | Pointer to **float32** | Minimum revenue on which rule will be applied. | [optional] 
**QualifyingRates** | Pointer to **bool** | Points ratio is expressed in terms of %. | [optional] 
**RateCode** | Pointer to **string** | Rate code for which the rule is applied. | [optional] 
**RateGroup** | Pointer to **string** | Rate group for which the rule is applied. | [optional] 
**RevenueGroup** | Pointer to **string** | Revenue group for which the rule is applied. | [optional] 
**TransactionGroup** | Pointer to **string** | Transaction group for which the rule is applied. | [optional] 

## Methods

### NewMembershipTypeRuleRateConditionsType

`func NewMembershipTypeRuleRateConditionsType() *MembershipTypeRuleRateConditionsType`

NewMembershipTypeRuleRateConditionsType instantiates a new MembershipTypeRuleRateConditionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeRuleRateConditionsTypeWithDefaults

`func NewMembershipTypeRuleRateConditionsTypeWithDefaults() *MembershipTypeRuleRateConditionsType`

NewMembershipTypeRuleRateConditionsTypeWithDefaults instantiates a new MembershipTypeRuleRateConditionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllMembershipRates

`func (o *MembershipTypeRuleRateConditionsType) GetAllMembershipRates() bool`

GetAllMembershipRates returns the AllMembershipRates field if non-nil, zero value otherwise.

### GetAllMembershipRatesOk

`func (o *MembershipTypeRuleRateConditionsType) GetAllMembershipRatesOk() (*bool, bool)`

GetAllMembershipRatesOk returns a tuple with the AllMembershipRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllMembershipRates

`func (o *MembershipTypeRuleRateConditionsType) SetAllMembershipRates(v bool)`

SetAllMembershipRates sets AllMembershipRates field to given value.

### HasAllMembershipRates

`func (o *MembershipTypeRuleRateConditionsType) HasAllMembershipRates() bool`

HasAllMembershipRates returns a boolean if a field has been set.

### GetAllMembershipTrx

`func (o *MembershipTypeRuleRateConditionsType) GetAllMembershipTrx() bool`

GetAllMembershipTrx returns the AllMembershipTrx field if non-nil, zero value otherwise.

### GetAllMembershipTrxOk

`func (o *MembershipTypeRuleRateConditionsType) GetAllMembershipTrxOk() (*bool, bool)`

GetAllMembershipTrxOk returns a tuple with the AllMembershipTrx field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllMembershipTrx

`func (o *MembershipTypeRuleRateConditionsType) SetAllMembershipTrx(v bool)`

SetAllMembershipTrx sets AllMembershipTrx field to given value.

### HasAllMembershipTrx

`func (o *MembershipTypeRuleRateConditionsType) HasAllMembershipTrx() bool`

HasAllMembershipTrx returns a boolean if a field has been set.

### GetAverageRateAmount

`func (o *MembershipTypeRuleRateConditionsType) GetAverageRateAmount() float32`

GetAverageRateAmount returns the AverageRateAmount field if non-nil, zero value otherwise.

### GetAverageRateAmountOk

`func (o *MembershipTypeRuleRateConditionsType) GetAverageRateAmountOk() (*float32, bool)`

GetAverageRateAmountOk returns a tuple with the AverageRateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageRateAmount

`func (o *MembershipTypeRuleRateConditionsType) SetAverageRateAmount(v float32)`

SetAverageRateAmount sets AverageRateAmount field to given value.

### HasAverageRateAmount

`func (o *MembershipTypeRuleRateConditionsType) HasAverageRateAmount() bool`

HasAverageRateAmount returns a boolean if a field has been set.

### GetExcludeRateGroup

`func (o *MembershipTypeRuleRateConditionsType) GetExcludeRateGroup() bool`

GetExcludeRateGroup returns the ExcludeRateGroup field if non-nil, zero value otherwise.

### GetExcludeRateGroupOk

`func (o *MembershipTypeRuleRateConditionsType) GetExcludeRateGroupOk() (*bool, bool)`

GetExcludeRateGroupOk returns a tuple with the ExcludeRateGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeRateGroup

`func (o *MembershipTypeRuleRateConditionsType) SetExcludeRateGroup(v bool)`

SetExcludeRateGroup sets ExcludeRateGroup field to given value.

### HasExcludeRateGroup

`func (o *MembershipTypeRuleRateConditionsType) HasExcludeRateGroup() bool`

HasExcludeRateGroup returns a boolean if a field has been set.

### GetExcludeRevenueGroup

`func (o *MembershipTypeRuleRateConditionsType) GetExcludeRevenueGroup() bool`

GetExcludeRevenueGroup returns the ExcludeRevenueGroup field if non-nil, zero value otherwise.

### GetExcludeRevenueGroupOk

`func (o *MembershipTypeRuleRateConditionsType) GetExcludeRevenueGroupOk() (*bool, bool)`

GetExcludeRevenueGroupOk returns a tuple with the ExcludeRevenueGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeRevenueGroup

`func (o *MembershipTypeRuleRateConditionsType) SetExcludeRevenueGroup(v bool)`

SetExcludeRevenueGroup sets ExcludeRevenueGroup field to given value.

### HasExcludeRevenueGroup

`func (o *MembershipTypeRuleRateConditionsType) HasExcludeRevenueGroup() bool`

HasExcludeRevenueGroup returns a boolean if a field has been set.

### GetIncludeTransactionGroup

`func (o *MembershipTypeRuleRateConditionsType) GetIncludeTransactionGroup() bool`

GetIncludeTransactionGroup returns the IncludeTransactionGroup field if non-nil, zero value otherwise.

### GetIncludeTransactionGroupOk

`func (o *MembershipTypeRuleRateConditionsType) GetIncludeTransactionGroupOk() (*bool, bool)`

GetIncludeTransactionGroupOk returns a tuple with the IncludeTransactionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTransactionGroup

`func (o *MembershipTypeRuleRateConditionsType) SetIncludeTransactionGroup(v bool)`

SetIncludeTransactionGroup sets IncludeTransactionGroup field to given value.

### HasIncludeTransactionGroup

`func (o *MembershipTypeRuleRateConditionsType) HasIncludeTransactionGroup() bool`

HasIncludeTransactionGroup returns a boolean if a field has been set.

### GetMinimumRevenue

`func (o *MembershipTypeRuleRateConditionsType) GetMinimumRevenue() float32`

GetMinimumRevenue returns the MinimumRevenue field if non-nil, zero value otherwise.

### GetMinimumRevenueOk

`func (o *MembershipTypeRuleRateConditionsType) GetMinimumRevenueOk() (*float32, bool)`

GetMinimumRevenueOk returns a tuple with the MinimumRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumRevenue

`func (o *MembershipTypeRuleRateConditionsType) SetMinimumRevenue(v float32)`

SetMinimumRevenue sets MinimumRevenue field to given value.

### HasMinimumRevenue

`func (o *MembershipTypeRuleRateConditionsType) HasMinimumRevenue() bool`

HasMinimumRevenue returns a boolean if a field has been set.

### GetQualifyingRates

`func (o *MembershipTypeRuleRateConditionsType) GetQualifyingRates() bool`

GetQualifyingRates returns the QualifyingRates field if non-nil, zero value otherwise.

### GetQualifyingRatesOk

`func (o *MembershipTypeRuleRateConditionsType) GetQualifyingRatesOk() (*bool, bool)`

GetQualifyingRatesOk returns a tuple with the QualifyingRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQualifyingRates

`func (o *MembershipTypeRuleRateConditionsType) SetQualifyingRates(v bool)`

SetQualifyingRates sets QualifyingRates field to given value.

### HasQualifyingRates

`func (o *MembershipTypeRuleRateConditionsType) HasQualifyingRates() bool`

HasQualifyingRates returns a boolean if a field has been set.

### GetRateCode

`func (o *MembershipTypeRuleRateConditionsType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *MembershipTypeRuleRateConditionsType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *MembershipTypeRuleRateConditionsType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *MembershipTypeRuleRateConditionsType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRateGroup

`func (o *MembershipTypeRuleRateConditionsType) GetRateGroup() string`

GetRateGroup returns the RateGroup field if non-nil, zero value otherwise.

### GetRateGroupOk

`func (o *MembershipTypeRuleRateConditionsType) GetRateGroupOk() (*string, bool)`

GetRateGroupOk returns a tuple with the RateGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateGroup

`func (o *MembershipTypeRuleRateConditionsType) SetRateGroup(v string)`

SetRateGroup sets RateGroup field to given value.

### HasRateGroup

`func (o *MembershipTypeRuleRateConditionsType) HasRateGroup() bool`

HasRateGroup returns a boolean if a field has been set.

### GetRevenueGroup

`func (o *MembershipTypeRuleRateConditionsType) GetRevenueGroup() string`

GetRevenueGroup returns the RevenueGroup field if non-nil, zero value otherwise.

### GetRevenueGroupOk

`func (o *MembershipTypeRuleRateConditionsType) GetRevenueGroupOk() (*string, bool)`

GetRevenueGroupOk returns a tuple with the RevenueGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueGroup

`func (o *MembershipTypeRuleRateConditionsType) SetRevenueGroup(v string)`

SetRevenueGroup sets RevenueGroup field to given value.

### HasRevenueGroup

`func (o *MembershipTypeRuleRateConditionsType) HasRevenueGroup() bool`

HasRevenueGroup returns a boolean if a field has been set.

### GetTransactionGroup

`func (o *MembershipTypeRuleRateConditionsType) GetTransactionGroup() string`

GetTransactionGroup returns the TransactionGroup field if non-nil, zero value otherwise.

### GetTransactionGroupOk

`func (o *MembershipTypeRuleRateConditionsType) GetTransactionGroupOk() (*string, bool)`

GetTransactionGroupOk returns a tuple with the TransactionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGroup

`func (o *MembershipTypeRuleRateConditionsType) SetTransactionGroup(v string)`

SetTransactionGroup sets TransactionGroup field to given value.

### HasTransactionGroup

`func (o *MembershipTypeRuleRateConditionsType) HasTransactionGroup() bool`

HasTransactionGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


