# MembershipTypeRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipTypeRules** | Pointer to [**[]MembershipTypeRuleDetailType**](MembershipTypeRuleDetailType.md) | Collection of Membership type rule details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipTypeRules

`func NewMembershipTypeRules() *MembershipTypeRules`

NewMembershipTypeRules instantiates a new MembershipTypeRules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeRulesWithDefaults

`func NewMembershipTypeRulesWithDefaults() *MembershipTypeRules`

NewMembershipTypeRulesWithDefaults instantiates a new MembershipTypeRules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipTypeRules

`func (o *MembershipTypeRules) GetMembershipTypeRules() []MembershipTypeRuleDetailType`

GetMembershipTypeRules returns the MembershipTypeRules field if non-nil, zero value otherwise.

### GetMembershipTypeRulesOk

`func (o *MembershipTypeRules) GetMembershipTypeRulesOk() (*[]MembershipTypeRuleDetailType, bool)`

GetMembershipTypeRulesOk returns a tuple with the MembershipTypeRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTypeRules

`func (o *MembershipTypeRules) SetMembershipTypeRules(v []MembershipTypeRuleDetailType)`

SetMembershipTypeRules sets MembershipTypeRules field to given value.

### HasMembershipTypeRules

`func (o *MembershipTypeRules) HasMembershipTypeRules() bool`

HasMembershipTypeRules returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipTypeRules) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipTypeRules) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipTypeRules) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipTypeRules) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipTypeRules) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipTypeRules) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipTypeRules) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipTypeRules) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

