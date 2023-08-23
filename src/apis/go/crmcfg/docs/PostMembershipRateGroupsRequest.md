# PostMembershipRateGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipRateGroups** | Pointer to [**[]MembershipRateGroupType**](MembershipRateGroupType.md) | Details for Membership Rate Group. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMembershipRateGroupsRequest

`func NewPostMembershipRateGroupsRequest() *PostMembershipRateGroupsRequest`

NewPostMembershipRateGroupsRequest instantiates a new PostMembershipRateGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipRateGroupsRequestWithDefaults

`func NewPostMembershipRateGroupsRequestWithDefaults() *PostMembershipRateGroupsRequest`

NewPostMembershipRateGroupsRequestWithDefaults instantiates a new PostMembershipRateGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipRateGroups

`func (o *PostMembershipRateGroupsRequest) GetMembershipRateGroups() []MembershipRateGroupType`

GetMembershipRateGroups returns the MembershipRateGroups field if non-nil, zero value otherwise.

### GetMembershipRateGroupsOk

`func (o *PostMembershipRateGroupsRequest) GetMembershipRateGroupsOk() (*[]MembershipRateGroupType, bool)`

GetMembershipRateGroupsOk returns a tuple with the MembershipRateGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipRateGroups

`func (o *PostMembershipRateGroupsRequest) SetMembershipRateGroups(v []MembershipRateGroupType)`

SetMembershipRateGroups sets MembershipRateGroups field to given value.

### HasMembershipRateGroups

`func (o *PostMembershipRateGroupsRequest) HasMembershipRateGroups() bool`

HasMembershipRateGroups returns a boolean if a field has been set.

### GetLinks

`func (o *PostMembershipRateGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipRateGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipRateGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipRateGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipRateGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipRateGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipRateGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipRateGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


