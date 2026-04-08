# MembershipRateGroupsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipRateGroups** | Pointer to [**[]MembershipRateGroupType**](MembershipRateGroupType.md) | Details for Membership Rate Group. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipRateGroupsInfo

`func NewMembershipRateGroupsInfo() *MembershipRateGroupsInfo`

NewMembershipRateGroupsInfo instantiates a new MembershipRateGroupsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipRateGroupsInfoWithDefaults

`func NewMembershipRateGroupsInfoWithDefaults() *MembershipRateGroupsInfo`

NewMembershipRateGroupsInfoWithDefaults instantiates a new MembershipRateGroupsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipRateGroups

`func (o *MembershipRateGroupsInfo) GetMembershipRateGroups() []MembershipRateGroupType`

GetMembershipRateGroups returns the MembershipRateGroups field if non-nil, zero value otherwise.

### GetMembershipRateGroupsOk

`func (o *MembershipRateGroupsInfo) GetMembershipRateGroupsOk() (*[]MembershipRateGroupType, bool)`

GetMembershipRateGroupsOk returns a tuple with the MembershipRateGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipRateGroups

`func (o *MembershipRateGroupsInfo) SetMembershipRateGroups(v []MembershipRateGroupType)`

SetMembershipRateGroups sets MembershipRateGroups field to given value.

### HasMembershipRateGroups

`func (o *MembershipRateGroupsInfo) HasMembershipRateGroups() bool`

HasMembershipRateGroups returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipRateGroupsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipRateGroupsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipRateGroupsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipRateGroupsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipRateGroupsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipRateGroupsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipRateGroupsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipRateGroupsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


