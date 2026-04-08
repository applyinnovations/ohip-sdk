# MembershipClaimOriginsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipClaimOrigins** | Pointer to [**[]MembershipClaimOriginType**](MembershipClaimOriginType.md) | List of Membership Claim Origins. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipClaimOriginsDetails

`func NewMembershipClaimOriginsDetails() *MembershipClaimOriginsDetails`

NewMembershipClaimOriginsDetails instantiates a new MembershipClaimOriginsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipClaimOriginsDetailsWithDefaults

`func NewMembershipClaimOriginsDetailsWithDefaults() *MembershipClaimOriginsDetails`

NewMembershipClaimOriginsDetailsWithDefaults instantiates a new MembershipClaimOriginsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipClaimOrigins

`func (o *MembershipClaimOriginsDetails) GetMembershipClaimOrigins() []MembershipClaimOriginType`

GetMembershipClaimOrigins returns the MembershipClaimOrigins field if non-nil, zero value otherwise.

### GetMembershipClaimOriginsOk

`func (o *MembershipClaimOriginsDetails) GetMembershipClaimOriginsOk() (*[]MembershipClaimOriginType, bool)`

GetMembershipClaimOriginsOk returns a tuple with the MembershipClaimOrigins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClaimOrigins

`func (o *MembershipClaimOriginsDetails) SetMembershipClaimOrigins(v []MembershipClaimOriginType)`

SetMembershipClaimOrigins sets MembershipClaimOrigins field to given value.

### HasMembershipClaimOrigins

`func (o *MembershipClaimOriginsDetails) HasMembershipClaimOrigins() bool`

HasMembershipClaimOrigins returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipClaimOriginsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipClaimOriginsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipClaimOriginsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipClaimOriginsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipClaimOriginsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipClaimOriginsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipClaimOriginsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipClaimOriginsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


