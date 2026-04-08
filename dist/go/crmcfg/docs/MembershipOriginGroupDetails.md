# MembershipOriginGroupDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipOriginGroup** | Pointer to [**MembershipOriginGroupType**](MembershipOriginGroupType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipOriginGroupDetails

`func NewMembershipOriginGroupDetails() *MembershipOriginGroupDetails`

NewMembershipOriginGroupDetails instantiates a new MembershipOriginGroupDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipOriginGroupDetailsWithDefaults

`func NewMembershipOriginGroupDetailsWithDefaults() *MembershipOriginGroupDetails`

NewMembershipOriginGroupDetailsWithDefaults instantiates a new MembershipOriginGroupDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipOriginGroup

`func (o *MembershipOriginGroupDetails) GetMembershipOriginGroup() MembershipOriginGroupType`

GetMembershipOriginGroup returns the MembershipOriginGroup field if non-nil, zero value otherwise.

### GetMembershipOriginGroupOk

`func (o *MembershipOriginGroupDetails) GetMembershipOriginGroupOk() (*MembershipOriginGroupType, bool)`

GetMembershipOriginGroupOk returns a tuple with the MembershipOriginGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipOriginGroup

`func (o *MembershipOriginGroupDetails) SetMembershipOriginGroup(v MembershipOriginGroupType)`

SetMembershipOriginGroup sets MembershipOriginGroup field to given value.

### HasMembershipOriginGroup

`func (o *MembershipOriginGroupDetails) HasMembershipOriginGroup() bool`

HasMembershipOriginGroup returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipOriginGroupDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipOriginGroupDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipOriginGroupDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipOriginGroupDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipOriginGroupDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipOriginGroupDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipOriginGroupDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipOriginGroupDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


