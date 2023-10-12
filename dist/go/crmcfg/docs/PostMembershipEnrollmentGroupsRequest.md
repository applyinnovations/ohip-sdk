# PostMembershipEnrollmentGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipEnrollmentGroups** | Pointer to [**[]MembershipEnrollmentGroupType**](MembershipEnrollmentGroupType.md) | Details of membership enrollment group type. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMembershipEnrollmentGroupsRequest

`func NewPostMembershipEnrollmentGroupsRequest() *PostMembershipEnrollmentGroupsRequest`

NewPostMembershipEnrollmentGroupsRequest instantiates a new PostMembershipEnrollmentGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipEnrollmentGroupsRequestWithDefaults

`func NewPostMembershipEnrollmentGroupsRequestWithDefaults() *PostMembershipEnrollmentGroupsRequest`

NewPostMembershipEnrollmentGroupsRequestWithDefaults instantiates a new PostMembershipEnrollmentGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipEnrollmentGroups

`func (o *PostMembershipEnrollmentGroupsRequest) GetMembershipEnrollmentGroups() []MembershipEnrollmentGroupType`

GetMembershipEnrollmentGroups returns the MembershipEnrollmentGroups field if non-nil, zero value otherwise.

### GetMembershipEnrollmentGroupsOk

`func (o *PostMembershipEnrollmentGroupsRequest) GetMembershipEnrollmentGroupsOk() (*[]MembershipEnrollmentGroupType, bool)`

GetMembershipEnrollmentGroupsOk returns a tuple with the MembershipEnrollmentGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEnrollmentGroups

`func (o *PostMembershipEnrollmentGroupsRequest) SetMembershipEnrollmentGroups(v []MembershipEnrollmentGroupType)`

SetMembershipEnrollmentGroups sets MembershipEnrollmentGroups field to given value.

### HasMembershipEnrollmentGroups

`func (o *PostMembershipEnrollmentGroupsRequest) HasMembershipEnrollmentGroups() bool`

HasMembershipEnrollmentGroups returns a boolean if a field has been set.

### GetLinks

`func (o *PostMembershipEnrollmentGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipEnrollmentGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipEnrollmentGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipEnrollmentGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipEnrollmentGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipEnrollmentGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipEnrollmentGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipEnrollmentGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


