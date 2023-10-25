# MembershipRateGroups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipRateGroups** | Pointer to [**[]MembershipRateGroupType**](MembershipRateGroupType.md) | Details for Membership Rate Group. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipRateGroups

`func NewMembershipRateGroups() *MembershipRateGroups`

NewMembershipRateGroups instantiates a new MembershipRateGroups object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipRateGroupsWithDefaults

`func NewMembershipRateGroupsWithDefaults() *MembershipRateGroups`

NewMembershipRateGroupsWithDefaults instantiates a new MembershipRateGroups object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipRateGroups) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipRateGroups) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipRateGroups) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipRateGroups) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipRateGroups

`func (o *MembershipRateGroups) GetMembershipRateGroups() []MembershipRateGroupType`

GetMembershipRateGroups returns the MembershipRateGroups field if non-nil, zero value otherwise.

### GetMembershipRateGroupsOk

`func (o *MembershipRateGroups) GetMembershipRateGroupsOk() (*[]MembershipRateGroupType, bool)`

GetMembershipRateGroupsOk returns a tuple with the MembershipRateGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipRateGroups

`func (o *MembershipRateGroups) SetMembershipRateGroups(v []MembershipRateGroupType)`

SetMembershipRateGroups sets MembershipRateGroups field to given value.

### HasMembershipRateGroups

`func (o *MembershipRateGroups) HasMembershipRateGroups() bool`

HasMembershipRateGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipRateGroups) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipRateGroups) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipRateGroups) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipRateGroups) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


