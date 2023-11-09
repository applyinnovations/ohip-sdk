# PostMembershipTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MembershipTypes** | Pointer to [**MembershipTypesType**](MembershipTypesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

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

### GetLinks

`func (o *PostMembershipTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipTypes

`func (o *PostMembershipTypesRequest) GetMembershipTypes() MembershipTypesType`

GetMembershipTypes returns the MembershipTypes field if non-nil, zero value otherwise.

### GetMembershipTypesOk

`func (o *PostMembershipTypesRequest) GetMembershipTypesOk() (*MembershipTypesType, bool)`

GetMembershipTypesOk returns a tuple with the MembershipTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTypes

`func (o *PostMembershipTypesRequest) SetMembershipTypes(v MembershipTypesType)`

SetMembershipTypes sets MembershipTypes field to given value.

### HasMembershipTypes

`func (o *PostMembershipTypesRequest) HasMembershipTypes() bool`

HasMembershipTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


