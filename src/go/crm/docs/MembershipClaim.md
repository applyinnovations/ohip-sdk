# MembershipClaim

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MembershipClaimDetails** | Pointer to [**MembershipClaimDetailsType**](MembershipClaimDetailsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewMembershipClaim

`func NewMembershipClaim() *MembershipClaim`

NewMembershipClaim instantiates a new MembershipClaim object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipClaimWithDefaults

`func NewMembershipClaimWithDefaults() *MembershipClaim`

NewMembershipClaimWithDefaults instantiates a new MembershipClaim object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipClaim) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipClaim) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipClaim) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipClaim) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipClaimDetails

`func (o *MembershipClaim) GetMembershipClaimDetails() MembershipClaimDetailsType`

GetMembershipClaimDetails returns the MembershipClaimDetails field if non-nil, zero value otherwise.

### GetMembershipClaimDetailsOk

`func (o *MembershipClaim) GetMembershipClaimDetailsOk() (*MembershipClaimDetailsType, bool)`

GetMembershipClaimDetailsOk returns a tuple with the MembershipClaimDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClaimDetails

`func (o *MembershipClaim) SetMembershipClaimDetails(v MembershipClaimDetailsType)`

SetMembershipClaimDetails sets MembershipClaimDetails field to given value.

### HasMembershipClaimDetails

`func (o *MembershipClaim) HasMembershipClaimDetails() bool`

HasMembershipClaimDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipClaim) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipClaim) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipClaim) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipClaim) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


