# PostMembershipClaimRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MembershipClaimDetails** | Pointer to [**MembershipClaimDetailsType**](MembershipClaimDetailsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostMembershipClaimRequest

`func NewPostMembershipClaimRequest() *PostMembershipClaimRequest`

NewPostMembershipClaimRequest instantiates a new PostMembershipClaimRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipClaimRequestWithDefaults

`func NewPostMembershipClaimRequestWithDefaults() *PostMembershipClaimRequest`

NewPostMembershipClaimRequestWithDefaults instantiates a new PostMembershipClaimRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostMembershipClaimRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipClaimRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipClaimRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipClaimRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipClaimDetails

`func (o *PostMembershipClaimRequest) GetMembershipClaimDetails() MembershipClaimDetailsType`

GetMembershipClaimDetails returns the MembershipClaimDetails field if non-nil, zero value otherwise.

### GetMembershipClaimDetailsOk

`func (o *PostMembershipClaimRequest) GetMembershipClaimDetailsOk() (*MembershipClaimDetailsType, bool)`

GetMembershipClaimDetailsOk returns a tuple with the MembershipClaimDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClaimDetails

`func (o *PostMembershipClaimRequest) SetMembershipClaimDetails(v MembershipClaimDetailsType)`

SetMembershipClaimDetails sets MembershipClaimDetails field to given value.

### HasMembershipClaimDetails

`func (o *PostMembershipClaimRequest) HasMembershipClaimDetails() bool`

HasMembershipClaimDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipClaimRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipClaimRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipClaimRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipClaimRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


