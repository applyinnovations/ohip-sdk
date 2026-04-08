# MembershipOriginGroupsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipOriginGroups** | Pointer to [**[]MembershipOriginGroupType**](MembershipOriginGroupType.md) | Collection of Membership Origin Groups configurations. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipOriginGroupsDetails

`func NewMembershipOriginGroupsDetails() *MembershipOriginGroupsDetails`

NewMembershipOriginGroupsDetails instantiates a new MembershipOriginGroupsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipOriginGroupsDetailsWithDefaults

`func NewMembershipOriginGroupsDetailsWithDefaults() *MembershipOriginGroupsDetails`

NewMembershipOriginGroupsDetailsWithDefaults instantiates a new MembershipOriginGroupsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipOriginGroups

`func (o *MembershipOriginGroupsDetails) GetMembershipOriginGroups() []MembershipOriginGroupType`

GetMembershipOriginGroups returns the MembershipOriginGroups field if non-nil, zero value otherwise.

### GetMembershipOriginGroupsOk

`func (o *MembershipOriginGroupsDetails) GetMembershipOriginGroupsOk() (*[]MembershipOriginGroupType, bool)`

GetMembershipOriginGroupsOk returns a tuple with the MembershipOriginGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipOriginGroups

`func (o *MembershipOriginGroupsDetails) SetMembershipOriginGroups(v []MembershipOriginGroupType)`

SetMembershipOriginGroups sets MembershipOriginGroups field to given value.

### HasMembershipOriginGroups

`func (o *MembershipOriginGroupsDetails) HasMembershipOriginGroups() bool`

HasMembershipOriginGroups returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipOriginGroupsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipOriginGroupsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipOriginGroupsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipOriginGroupsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipOriginGroupsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipOriginGroupsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipOriginGroupsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipOriginGroupsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


