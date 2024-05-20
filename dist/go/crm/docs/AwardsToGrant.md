# AwardsToGrant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipAwardsList** | Pointer to [**[]MembershipAwardAvailabilityType**](MembershipAwardAvailabilityType.md) | List of available awards information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAwardsToGrant

`func NewAwardsToGrant() *AwardsToGrant`

NewAwardsToGrant instantiates a new AwardsToGrant object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwardsToGrantWithDefaults

`func NewAwardsToGrantWithDefaults() *AwardsToGrant`

NewAwardsToGrantWithDefaults instantiates a new AwardsToGrant object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *AwardsToGrant) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AwardsToGrant) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AwardsToGrant) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AwardsToGrant) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipAwardsList

`func (o *AwardsToGrant) GetMembershipAwardsList() []MembershipAwardAvailabilityType`

GetMembershipAwardsList returns the MembershipAwardsList field if non-nil, zero value otherwise.

### GetMembershipAwardsListOk

`func (o *AwardsToGrant) GetMembershipAwardsListOk() (*[]MembershipAwardAvailabilityType, bool)`

GetMembershipAwardsListOk returns a tuple with the MembershipAwardsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipAwardsList

`func (o *AwardsToGrant) SetMembershipAwardsList(v []MembershipAwardAvailabilityType)`

SetMembershipAwardsList sets MembershipAwardsList field to given value.

### HasMembershipAwardsList

`func (o *AwardsToGrant) HasMembershipAwardsList() bool`

HasMembershipAwardsList returns a boolean if a field has been set.

### GetWarnings

`func (o *AwardsToGrant) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AwardsToGrant) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AwardsToGrant) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AwardsToGrant) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


