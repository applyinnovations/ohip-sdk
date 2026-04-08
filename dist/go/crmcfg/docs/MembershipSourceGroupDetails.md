# MembershipSourceGroupDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipSourceGroup** | Pointer to [**MembershipSourceGroupType**](MembershipSourceGroupType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipSourceGroupDetails

`func NewMembershipSourceGroupDetails() *MembershipSourceGroupDetails`

NewMembershipSourceGroupDetails instantiates a new MembershipSourceGroupDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipSourceGroupDetailsWithDefaults

`func NewMembershipSourceGroupDetailsWithDefaults() *MembershipSourceGroupDetails`

NewMembershipSourceGroupDetailsWithDefaults instantiates a new MembershipSourceGroupDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipSourceGroup

`func (o *MembershipSourceGroupDetails) GetMembershipSourceGroup() MembershipSourceGroupType`

GetMembershipSourceGroup returns the MembershipSourceGroup field if non-nil, zero value otherwise.

### GetMembershipSourceGroupOk

`func (o *MembershipSourceGroupDetails) GetMembershipSourceGroupOk() (*MembershipSourceGroupType, bool)`

GetMembershipSourceGroupOk returns a tuple with the MembershipSourceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipSourceGroup

`func (o *MembershipSourceGroupDetails) SetMembershipSourceGroup(v MembershipSourceGroupType)`

SetMembershipSourceGroup sets MembershipSourceGroup field to given value.

### HasMembershipSourceGroup

`func (o *MembershipSourceGroupDetails) HasMembershipSourceGroup() bool`

HasMembershipSourceGroup returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipSourceGroupDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipSourceGroupDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipSourceGroupDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipSourceGroupDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipSourceGroupDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipSourceGroupDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipSourceGroupDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipSourceGroupDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


