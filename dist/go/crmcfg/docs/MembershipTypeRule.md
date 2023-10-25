# MembershipTypeRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipTypeRule** | Pointer to [**MembershipTypeRuleDetailType**](MembershipTypeRuleDetailType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipTypeRule

`func NewMembershipTypeRule() *MembershipTypeRule`

NewMembershipTypeRule instantiates a new MembershipTypeRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeRuleWithDefaults

`func NewMembershipTypeRuleWithDefaults() *MembershipTypeRule`

NewMembershipTypeRuleWithDefaults instantiates a new MembershipTypeRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipTypeRule) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipTypeRule) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipTypeRule) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipTypeRule) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipTypeRule

`func (o *MembershipTypeRule) GetMembershipTypeRule() MembershipTypeRuleDetailType`

GetMembershipTypeRule returns the MembershipTypeRule field if non-nil, zero value otherwise.

### GetMembershipTypeRuleOk

`func (o *MembershipTypeRule) GetMembershipTypeRuleOk() (*MembershipTypeRuleDetailType, bool)`

GetMembershipTypeRuleOk returns a tuple with the MembershipTypeRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTypeRule

`func (o *MembershipTypeRule) SetMembershipTypeRule(v MembershipTypeRuleDetailType)`

SetMembershipTypeRule sets MembershipTypeRule field to given value.

### HasMembershipTypeRule

`func (o *MembershipTypeRule) HasMembershipTypeRule() bool`

HasMembershipTypeRule returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipTypeRule) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipTypeRule) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipTypeRule) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipTypeRule) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


