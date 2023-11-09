# PostMembershipClassesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MembershipClasses** | Pointer to [**MembershipClassesType**](MembershipClassesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostMembershipClassesRequest

`func NewPostMembershipClassesRequest() *PostMembershipClassesRequest`

NewPostMembershipClassesRequest instantiates a new PostMembershipClassesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipClassesRequestWithDefaults

`func NewPostMembershipClassesRequestWithDefaults() *PostMembershipClassesRequest`

NewPostMembershipClassesRequestWithDefaults instantiates a new PostMembershipClassesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostMembershipClassesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipClassesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipClassesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipClassesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipClasses

`func (o *PostMembershipClassesRequest) GetMembershipClasses() MembershipClassesType`

GetMembershipClasses returns the MembershipClasses field if non-nil, zero value otherwise.

### GetMembershipClassesOk

`func (o *PostMembershipClassesRequest) GetMembershipClassesOk() (*MembershipClassesType, bool)`

GetMembershipClassesOk returns a tuple with the MembershipClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClasses

`func (o *PostMembershipClassesRequest) SetMembershipClasses(v MembershipClassesType)`

SetMembershipClasses sets MembershipClasses field to given value.

### HasMembershipClasses

`func (o *PostMembershipClassesRequest) HasMembershipClasses() bool`

HasMembershipClasses returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipClassesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipClassesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipClassesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipClassesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


