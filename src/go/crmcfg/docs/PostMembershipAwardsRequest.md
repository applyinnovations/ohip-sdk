# PostMembershipAwardsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MembershipAwards** | Pointer to [**MembershipAwardsType**](MembershipAwardsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostMembershipAwardsRequest

`func NewPostMembershipAwardsRequest() *PostMembershipAwardsRequest`

NewPostMembershipAwardsRequest instantiates a new PostMembershipAwardsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipAwardsRequestWithDefaults

`func NewPostMembershipAwardsRequestWithDefaults() *PostMembershipAwardsRequest`

NewPostMembershipAwardsRequestWithDefaults instantiates a new PostMembershipAwardsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostMembershipAwardsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipAwardsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipAwardsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipAwardsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipAwards

`func (o *PostMembershipAwardsRequest) GetMembershipAwards() MembershipAwardsType`

GetMembershipAwards returns the MembershipAwards field if non-nil, zero value otherwise.

### GetMembershipAwardsOk

`func (o *PostMembershipAwardsRequest) GetMembershipAwardsOk() (*MembershipAwardsType, bool)`

GetMembershipAwardsOk returns a tuple with the MembershipAwards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipAwards

`func (o *PostMembershipAwardsRequest) SetMembershipAwards(v MembershipAwardsType)`

SetMembershipAwards sets MembershipAwards field to given value.

### HasMembershipAwards

`func (o *PostMembershipAwardsRequest) HasMembershipAwards() bool`

HasMembershipAwards returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipAwardsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipAwardsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipAwardsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipAwardsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


