# MembershipPropertyGroupsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipPropertyGroups** | Pointer to [**[]MembershipPropertyGroupType**](MembershipPropertyGroupType.md) | Details for Membership Property Group along with associated property codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipPropertyGroupsInfo

`func NewMembershipPropertyGroupsInfo() *MembershipPropertyGroupsInfo`

NewMembershipPropertyGroupsInfo instantiates a new MembershipPropertyGroupsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipPropertyGroupsInfoWithDefaults

`func NewMembershipPropertyGroupsInfoWithDefaults() *MembershipPropertyGroupsInfo`

NewMembershipPropertyGroupsInfoWithDefaults instantiates a new MembershipPropertyGroupsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipPropertyGroupsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipPropertyGroupsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipPropertyGroupsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipPropertyGroupsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipPropertyGroups

`func (o *MembershipPropertyGroupsInfo) GetMembershipPropertyGroups() []MembershipPropertyGroupType`

GetMembershipPropertyGroups returns the MembershipPropertyGroups field if non-nil, zero value otherwise.

### GetMembershipPropertyGroupsOk

`func (o *MembershipPropertyGroupsInfo) GetMembershipPropertyGroupsOk() (*[]MembershipPropertyGroupType, bool)`

GetMembershipPropertyGroupsOk returns a tuple with the MembershipPropertyGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipPropertyGroups

`func (o *MembershipPropertyGroupsInfo) SetMembershipPropertyGroups(v []MembershipPropertyGroupType)`

SetMembershipPropertyGroups sets MembershipPropertyGroups field to given value.

### HasMembershipPropertyGroups

`func (o *MembershipPropertyGroupsInfo) HasMembershipPropertyGroups() bool`

HasMembershipPropertyGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipPropertyGroupsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipPropertyGroupsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipPropertyGroupsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipPropertyGroupsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


