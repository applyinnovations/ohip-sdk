# Membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProfileMemberships** | Pointer to [**[]ProfileMembershipType**](ProfileMembershipType.md) | Detailed information of membership related to the profile | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewMembership

`func NewMembership() *Membership`

NewMembership instantiates a new Membership object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipWithDefaults

`func NewMembershipWithDefaults() *Membership`

NewMembershipWithDefaults instantiates a new Membership object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileIdList

`func (o *Membership) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *Membership) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *Membership) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *Membership) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfileMemberships

`func (o *Membership) GetProfileMemberships() []ProfileMembershipType`

GetProfileMemberships returns the ProfileMemberships field if non-nil, zero value otherwise.

### GetProfileMembershipsOk

`func (o *Membership) GetProfileMembershipsOk() (*[]ProfileMembershipType, bool)`

GetProfileMembershipsOk returns a tuple with the ProfileMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMemberships

`func (o *Membership) SetProfileMemberships(v []ProfileMembershipType)`

SetProfileMemberships sets ProfileMemberships field to given value.

### HasProfileMemberships

`func (o *Membership) HasProfileMemberships() bool`

HasProfileMemberships returns a boolean if a field has been set.

### GetLinks

`func (o *Membership) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Membership) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Membership) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Membership) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


