# MembershipTypeRulesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipTypeRules** | Pointer to [**[]MembershipTypeRuleIDType**](MembershipTypeRuleIDType.md) | List of membership type rule ID&#39;s. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipTypeRulesDetails

`func NewMembershipTypeRulesDetails() *MembershipTypeRulesDetails`

NewMembershipTypeRulesDetails instantiates a new MembershipTypeRulesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeRulesDetailsWithDefaults

`func NewMembershipTypeRulesDetailsWithDefaults() *MembershipTypeRulesDetails`

NewMembershipTypeRulesDetailsWithDefaults instantiates a new MembershipTypeRulesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipTypeRulesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipTypeRulesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipTypeRulesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipTypeRulesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipTypeRules

`func (o *MembershipTypeRulesDetails) GetMembershipTypeRules() []MembershipTypeRuleIDType`

GetMembershipTypeRules returns the MembershipTypeRules field if non-nil, zero value otherwise.

### GetMembershipTypeRulesOk

`func (o *MembershipTypeRulesDetails) GetMembershipTypeRulesOk() (*[]MembershipTypeRuleIDType, bool)`

GetMembershipTypeRulesOk returns a tuple with the MembershipTypeRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTypeRules

`func (o *MembershipTypeRulesDetails) SetMembershipTypeRules(v []MembershipTypeRuleIDType)`

SetMembershipTypeRules sets MembershipTypeRules field to given value.

### HasMembershipTypeRules

`func (o *MembershipTypeRulesDetails) HasMembershipTypeRules() bool`

HasMembershipTypeRules returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipTypeRulesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipTypeRulesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipTypeRulesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipTypeRulesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


