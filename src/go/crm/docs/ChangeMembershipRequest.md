# ChangeMembershipRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ProfileIdList** | Pointer to [**ProfileIdList**](ProfileIdList.md) |  | [optional] 
**ProfileMemberships** | Pointer to [**[]ProfileMembershipType**](ProfileMembershipType.md) | Detailed information of membership related to the profile | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeMembershipRequest

`func NewChangeMembershipRequest() *ChangeMembershipRequest`

NewChangeMembershipRequest instantiates a new ChangeMembershipRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeMembershipRequestWithDefaults

`func NewChangeMembershipRequestWithDefaults() *ChangeMembershipRequest`

NewChangeMembershipRequestWithDefaults instantiates a new ChangeMembershipRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeMembershipRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeMembershipRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeMembershipRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeMembershipRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfileIdList

`func (o *ChangeMembershipRequest) GetProfileIdList() ProfileIdList`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ChangeMembershipRequest) GetProfileIdListOk() (*ProfileIdList, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ChangeMembershipRequest) SetProfileIdList(v ProfileIdList)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ChangeMembershipRequest) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfileMemberships

`func (o *ChangeMembershipRequest) GetProfileMemberships() []ProfileMembershipType`

GetProfileMemberships returns the ProfileMemberships field if non-nil, zero value otherwise.

### GetProfileMembershipsOk

`func (o *ChangeMembershipRequest) GetProfileMembershipsOk() (*[]ProfileMembershipType, bool)`

GetProfileMembershipsOk returns a tuple with the ProfileMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMemberships

`func (o *ChangeMembershipRequest) SetProfileMemberships(v []ProfileMembershipType)`

SetProfileMemberships sets ProfileMemberships field to given value.

### HasProfileMemberships

`func (o *ChangeMembershipRequest) HasProfileMemberships() bool`

HasProfileMemberships returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeMembershipRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeMembershipRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeMembershipRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeMembershipRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


