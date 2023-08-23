# PostMembershipTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipTypes** | Pointer to [**[]MembershipTypeType**](MembershipTypeType.md) | Membership Type | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMembershipTypesRequest

`func NewPostMembershipTypesRequest() *PostMembershipTypesRequest`

NewPostMembershipTypesRequest instantiates a new PostMembershipTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipTypesRequestWithDefaults

`func NewPostMembershipTypesRequestWithDefaults() *PostMembershipTypesRequest`

NewPostMembershipTypesRequestWithDefaults instantiates a new PostMembershipTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipTypes

`func (o *PostMembershipTypesRequest) GetMembershipTypes() []MembershipTypeType`

GetMembershipTypes returns the MembershipTypes field if non-nil, zero value otherwise.

### GetMembershipTypesOk

`func (o *PostMembershipTypesRequest) GetMembershipTypesOk() (*[]MembershipTypeType, bool)`

GetMembershipTypesOk returns a tuple with the MembershipTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTypes

`func (o *PostMembershipTypesRequest) SetMembershipTypes(v []MembershipTypeType)`

SetMembershipTypes sets MembershipTypes field to given value.

### HasMembershipTypes

`func (o *PostMembershipTypesRequest) HasMembershipTypes() bool`

HasMembershipTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostMembershipTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


