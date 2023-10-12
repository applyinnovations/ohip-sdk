# PostMembershipMarketGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipMarketGroups** | Pointer to [**[]MembershipMarketGroupType**](MembershipMarketGroupType.md) | Details for Membership Market Group along with associated Market codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMembershipMarketGroupsRequest

`func NewPostMembershipMarketGroupsRequest() *PostMembershipMarketGroupsRequest`

NewPostMembershipMarketGroupsRequest instantiates a new PostMembershipMarketGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipMarketGroupsRequestWithDefaults

`func NewPostMembershipMarketGroupsRequestWithDefaults() *PostMembershipMarketGroupsRequest`

NewPostMembershipMarketGroupsRequestWithDefaults instantiates a new PostMembershipMarketGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipMarketGroups

`func (o *PostMembershipMarketGroupsRequest) GetMembershipMarketGroups() []MembershipMarketGroupType`

GetMembershipMarketGroups returns the MembershipMarketGroups field if non-nil, zero value otherwise.

### GetMembershipMarketGroupsOk

`func (o *PostMembershipMarketGroupsRequest) GetMembershipMarketGroupsOk() (*[]MembershipMarketGroupType, bool)`

GetMembershipMarketGroupsOk returns a tuple with the MembershipMarketGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipMarketGroups

`func (o *PostMembershipMarketGroupsRequest) SetMembershipMarketGroups(v []MembershipMarketGroupType)`

SetMembershipMarketGroups sets MembershipMarketGroups field to given value.

### HasMembershipMarketGroups

`func (o *PostMembershipMarketGroupsRequest) HasMembershipMarketGroups() bool`

HasMembershipMarketGroups returns a boolean if a field has been set.

### GetLinks

`func (o *PostMembershipMarketGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipMarketGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipMarketGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipMarketGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipMarketGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipMarketGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipMarketGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipMarketGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


