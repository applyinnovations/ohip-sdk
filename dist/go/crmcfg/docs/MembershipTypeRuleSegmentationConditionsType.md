# MembershipTypeRuleSegmentationConditionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketCode** | Pointer to **string** | Market Code for which the rule is applied. | [optional] 
**MarketGroup** | Pointer to **string** | Market group for which the rule is applied. | [optional] 
**ExcludeMarketGroup** | Pointer to **bool** | To specify the exclusion of market group while applying rule. | [optional] 

## Methods

### NewMembershipTypeRuleSegmentationConditionsType

`func NewMembershipTypeRuleSegmentationConditionsType() *MembershipTypeRuleSegmentationConditionsType`

NewMembershipTypeRuleSegmentationConditionsType instantiates a new MembershipTypeRuleSegmentationConditionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeRuleSegmentationConditionsTypeWithDefaults

`func NewMembershipTypeRuleSegmentationConditionsTypeWithDefaults() *MembershipTypeRuleSegmentationConditionsType`

NewMembershipTypeRuleSegmentationConditionsTypeWithDefaults instantiates a new MembershipTypeRuleSegmentationConditionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMarketCode

`func (o *MembershipTypeRuleSegmentationConditionsType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *MembershipTypeRuleSegmentationConditionsType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *MembershipTypeRuleSegmentationConditionsType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *MembershipTypeRuleSegmentationConditionsType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetMarketGroup

`func (o *MembershipTypeRuleSegmentationConditionsType) GetMarketGroup() string`

GetMarketGroup returns the MarketGroup field if non-nil, zero value otherwise.

### GetMarketGroupOk

`func (o *MembershipTypeRuleSegmentationConditionsType) GetMarketGroupOk() (*string, bool)`

GetMarketGroupOk returns a tuple with the MarketGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketGroup

`func (o *MembershipTypeRuleSegmentationConditionsType) SetMarketGroup(v string)`

SetMarketGroup sets MarketGroup field to given value.

### HasMarketGroup

`func (o *MembershipTypeRuleSegmentationConditionsType) HasMarketGroup() bool`

HasMarketGroup returns a boolean if a field has been set.

### GetExcludeMarketGroup

`func (o *MembershipTypeRuleSegmentationConditionsType) GetExcludeMarketGroup() bool`

GetExcludeMarketGroup returns the ExcludeMarketGroup field if non-nil, zero value otherwise.

### GetExcludeMarketGroupOk

`func (o *MembershipTypeRuleSegmentationConditionsType) GetExcludeMarketGroupOk() (*bool, bool)`

GetExcludeMarketGroupOk returns a tuple with the ExcludeMarketGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeMarketGroup

`func (o *MembershipTypeRuleSegmentationConditionsType) SetExcludeMarketGroup(v bool)`

SetExcludeMarketGroup sets ExcludeMarketGroup field to given value.

### HasExcludeMarketGroup

`func (o *MembershipTypeRuleSegmentationConditionsType) HasExcludeMarketGroup() bool`

HasExcludeMarketGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


