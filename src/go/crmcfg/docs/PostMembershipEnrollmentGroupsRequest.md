# PostMembershipEnrollmentGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MembershipEnrollmentGroups** | Pointer to [**MembershipEnrollmentGroupsType**](MembershipEnrollmentGroupsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

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

### GetLinks

`func (o *PostMembershipEnrollmentGroupsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipEnrollmentGroupsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipEnrollmentGroupsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipEnrollmentGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipEnrollmentGroups

`func (o *PostMembershipEnrollmentGroupsRequest) GetMembershipEnrollmentGroups() MembershipEnrollmentGroupsType`

GetMembershipEnrollmentGroups returns the MembershipEnrollmentGroups field if non-nil, zero value otherwise.

### GetMembershipEnrollmentGroupsOk

`func (o *PostMembershipEnrollmentGroupsRequest) GetMembershipEnrollmentGroupsOk() (*MembershipEnrollmentGroupsType, bool)`

GetMembershipEnrollmentGroupsOk returns a tuple with the MembershipEnrollmentGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEnrollmentGroups

`func (o *PostMembershipEnrollmentGroupsRequest) SetMembershipEnrollmentGroups(v MembershipEnrollmentGroupsType)`

SetMembershipEnrollmentGroups sets MembershipEnrollmentGroups field to given value.

### HasMembershipEnrollmentGroups

`func (o *PostMembershipEnrollmentGroupsRequest) HasMembershipEnrollmentGroups() bool`

HasMembershipEnrollmentGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipEnrollmentGroupsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipEnrollmentGroupsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipEnrollmentGroupsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipEnrollmentGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


