# MembershipSourceGroupsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipSourceGroups** | Pointer to [**[]MembershipSourceGroupType**](MembershipSourceGroupType.md) | Collection of Membership Source Groups configurations. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipSourceGroupsDetails

`func NewMembershipSourceGroupsDetails() *MembershipSourceGroupsDetails`

NewMembershipSourceGroupsDetails instantiates a new MembershipSourceGroupsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipSourceGroupsDetailsWithDefaults

`func NewMembershipSourceGroupsDetailsWithDefaults() *MembershipSourceGroupsDetails`

NewMembershipSourceGroupsDetailsWithDefaults instantiates a new MembershipSourceGroupsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipSourceGroups

`func (o *MembershipSourceGroupsDetails) GetMembershipSourceGroups() []MembershipSourceGroupType`

GetMembershipSourceGroups returns the MembershipSourceGroups field if non-nil, zero value otherwise.

### GetMembershipSourceGroupsOk

`func (o *MembershipSourceGroupsDetails) GetMembershipSourceGroupsOk() (*[]MembershipSourceGroupType, bool)`

GetMembershipSourceGroupsOk returns a tuple with the MembershipSourceGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipSourceGroups

`func (o *MembershipSourceGroupsDetails) SetMembershipSourceGroups(v []MembershipSourceGroupType)`

SetMembershipSourceGroups sets MembershipSourceGroups field to given value.

### HasMembershipSourceGroups

`func (o *MembershipSourceGroupsDetails) HasMembershipSourceGroups() bool`

HasMembershipSourceGroups returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipSourceGroupsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipSourceGroupsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipSourceGroupsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipSourceGroupsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipSourceGroupsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipSourceGroupsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipSourceGroupsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipSourceGroupsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


