# RewardsInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Association** | Pointer to **string** | Indicates guest association. | [optional] 
**CurrentBalance** | Pointer to **float32** | Current membership points. | [optional] 
**MVCIOwner** | Pointer to **string** | Indicates if the member is an MVCI owner. | [optional] 
**MeetingPlanner** | Pointer to **bool** | Indicates if meeting planner is requested. | [optional] 
**MembershipDate** | Pointer to **string** | Indicates membership date of the guest | [optional] 
**MembershipId** | Pointer to **float32** | Indicates membership id of the guest. | [optional] 
**MembershipLevel** | Pointer to **string** | Indicates membership level of the guest | [optional] 
**MembershipNo** | Pointer to **string** | Indicates membership number of the guest | [optional] 
**OwnsVisaCard** | Pointer to **bool** | Indicates if guest owns a visa card. | [optional] 

## Methods

### NewRewardsInfoType

`func NewRewardsInfoType() *RewardsInfoType`

NewRewardsInfoType instantiates a new RewardsInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRewardsInfoTypeWithDefaults

`func NewRewardsInfoTypeWithDefaults() *RewardsInfoType`

NewRewardsInfoTypeWithDefaults instantiates a new RewardsInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssociation

`func (o *RewardsInfoType) GetAssociation() string`

GetAssociation returns the Association field if non-nil, zero value otherwise.

### GetAssociationOk

`func (o *RewardsInfoType) GetAssociationOk() (*string, bool)`

GetAssociationOk returns a tuple with the Association field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociation

`func (o *RewardsInfoType) SetAssociation(v string)`

SetAssociation sets Association field to given value.

### HasAssociation

`func (o *RewardsInfoType) HasAssociation() bool`

HasAssociation returns a boolean if a field has been set.

### GetCurrentBalance

`func (o *RewardsInfoType) GetCurrentBalance() float32`

GetCurrentBalance returns the CurrentBalance field if non-nil, zero value otherwise.

### GetCurrentBalanceOk

`func (o *RewardsInfoType) GetCurrentBalanceOk() (*float32, bool)`

GetCurrentBalanceOk returns a tuple with the CurrentBalance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentBalance

`func (o *RewardsInfoType) SetCurrentBalance(v float32)`

SetCurrentBalance sets CurrentBalance field to given value.

### HasCurrentBalance

`func (o *RewardsInfoType) HasCurrentBalance() bool`

HasCurrentBalance returns a boolean if a field has been set.

### GetMVCIOwner

`func (o *RewardsInfoType) GetMVCIOwner() string`

GetMVCIOwner returns the MVCIOwner field if non-nil, zero value otherwise.

### GetMVCIOwnerOk

`func (o *RewardsInfoType) GetMVCIOwnerOk() (*string, bool)`

GetMVCIOwnerOk returns a tuple with the MVCIOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMVCIOwner

`func (o *RewardsInfoType) SetMVCIOwner(v string)`

SetMVCIOwner sets MVCIOwner field to given value.

### HasMVCIOwner

`func (o *RewardsInfoType) HasMVCIOwner() bool`

HasMVCIOwner returns a boolean if a field has been set.

### GetMeetingPlanner

`func (o *RewardsInfoType) GetMeetingPlanner() bool`

GetMeetingPlanner returns the MeetingPlanner field if non-nil, zero value otherwise.

### GetMeetingPlannerOk

`func (o *RewardsInfoType) GetMeetingPlannerOk() (*bool, bool)`

GetMeetingPlannerOk returns a tuple with the MeetingPlanner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingPlanner

`func (o *RewardsInfoType) SetMeetingPlanner(v bool)`

SetMeetingPlanner sets MeetingPlanner field to given value.

### HasMeetingPlanner

`func (o *RewardsInfoType) HasMeetingPlanner() bool`

HasMeetingPlanner returns a boolean if a field has been set.

### GetMembershipDate

`func (o *RewardsInfoType) GetMembershipDate() string`

GetMembershipDate returns the MembershipDate field if non-nil, zero value otherwise.

### GetMembershipDateOk

`func (o *RewardsInfoType) GetMembershipDateOk() (*string, bool)`

GetMembershipDateOk returns a tuple with the MembershipDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipDate

`func (o *RewardsInfoType) SetMembershipDate(v string)`

SetMembershipDate sets MembershipDate field to given value.

### HasMembershipDate

`func (o *RewardsInfoType) HasMembershipDate() bool`

HasMembershipDate returns a boolean if a field has been set.

### GetMembershipId

`func (o *RewardsInfoType) GetMembershipId() float32`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *RewardsInfoType) GetMembershipIdOk() (*float32, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *RewardsInfoType) SetMembershipId(v float32)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *RewardsInfoType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *RewardsInfoType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *RewardsInfoType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *RewardsInfoType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *RewardsInfoType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetMembershipNo

`func (o *RewardsInfoType) GetMembershipNo() string`

GetMembershipNo returns the MembershipNo field if non-nil, zero value otherwise.

### GetMembershipNoOk

`func (o *RewardsInfoType) GetMembershipNoOk() (*string, bool)`

GetMembershipNoOk returns a tuple with the MembershipNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipNo

`func (o *RewardsInfoType) SetMembershipNo(v string)`

SetMembershipNo sets MembershipNo field to given value.

### HasMembershipNo

`func (o *RewardsInfoType) HasMembershipNo() bool`

HasMembershipNo returns a boolean if a field has been set.

### GetOwnsVisaCard

`func (o *RewardsInfoType) GetOwnsVisaCard() bool`

GetOwnsVisaCard returns the OwnsVisaCard field if non-nil, zero value otherwise.

### GetOwnsVisaCardOk

`func (o *RewardsInfoType) GetOwnsVisaCardOk() (*bool, bool)`

GetOwnsVisaCardOk returns a tuple with the OwnsVisaCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnsVisaCard

`func (o *RewardsInfoType) SetOwnsVisaCard(v bool)`

SetOwnsVisaCard sets OwnsVisaCard field to given value.

### HasOwnsVisaCard

`func (o *RewardsInfoType) HasOwnsVisaCard() bool`

HasOwnsVisaCard returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


