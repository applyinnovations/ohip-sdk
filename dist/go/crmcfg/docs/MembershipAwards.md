# MembershipAwards

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipAwards** | Pointer to [**[]MembershipAwardType**](MembershipAwardType.md) | Membership Award details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipAwards

`func NewMembershipAwards() *MembershipAwards`

NewMembershipAwards instantiates a new MembershipAwards object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipAwardsWithDefaults

`func NewMembershipAwardsWithDefaults() *MembershipAwards`

NewMembershipAwardsWithDefaults instantiates a new MembershipAwards object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipAwards

`func (o *MembershipAwards) GetMembershipAwards() []MembershipAwardType`

GetMembershipAwards returns the MembershipAwards field if non-nil, zero value otherwise.

### GetMembershipAwardsOk

`func (o *MembershipAwards) GetMembershipAwardsOk() (*[]MembershipAwardType, bool)`

GetMembershipAwardsOk returns a tuple with the MembershipAwards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipAwards

`func (o *MembershipAwards) SetMembershipAwards(v []MembershipAwardType)`

SetMembershipAwards sets MembershipAwards field to given value.

### HasMembershipAwards

`func (o *MembershipAwards) HasMembershipAwards() bool`

HasMembershipAwards returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipAwards) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipAwards) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipAwards) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipAwards) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipAwards) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipAwards) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipAwards) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipAwards) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


