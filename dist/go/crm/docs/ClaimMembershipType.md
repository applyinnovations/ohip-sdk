# ClaimMembershipType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EffectiveDate** | Pointer to **string** | Indicates the starting date. | [optional] 
**ExpireDate** | Pointer to **string** | Indicates the ending date. | [optional] 
**ExpireDateExclusiveIndicator** | Pointer to **bool** | When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14). | [optional] 
**MembershipClass** | Pointer to **string** | Indicates the membership class. | [optional] 
**MembershipId** | Pointer to **string** | Card Number of the membership. | [optional] 
**MembershipIdNo** | Pointer to **float32** | Membership ID Number. | [optional] 
**MembershipLevel** | Pointer to **string** | The current level of the membership. | [optional] 
**MembershipType** | Pointer to **string** | Membership Type code. | [optional] 
**NameOnCard** | Pointer to **string** | Name to be displayed on the membership card. | [optional] 

## Methods

### NewClaimMembershipType

`func NewClaimMembershipType() *ClaimMembershipType`

NewClaimMembershipType instantiates a new ClaimMembershipType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClaimMembershipTypeWithDefaults

`func NewClaimMembershipTypeWithDefaults() *ClaimMembershipType`

NewClaimMembershipTypeWithDefaults instantiates a new ClaimMembershipType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEffectiveDate

`func (o *ClaimMembershipType) GetEffectiveDate() string`

GetEffectiveDate returns the EffectiveDate field if non-nil, zero value otherwise.

### GetEffectiveDateOk

`func (o *ClaimMembershipType) GetEffectiveDateOk() (*string, bool)`

GetEffectiveDateOk returns a tuple with the EffectiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveDate

`func (o *ClaimMembershipType) SetEffectiveDate(v string)`

SetEffectiveDate sets EffectiveDate field to given value.

### HasEffectiveDate

`func (o *ClaimMembershipType) HasEffectiveDate() bool`

HasEffectiveDate returns a boolean if a field has been set.

### GetExpireDate

`func (o *ClaimMembershipType) GetExpireDate() string`

GetExpireDate returns the ExpireDate field if non-nil, zero value otherwise.

### GetExpireDateOk

`func (o *ClaimMembershipType) GetExpireDateOk() (*string, bool)`

GetExpireDateOk returns a tuple with the ExpireDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpireDate

`func (o *ClaimMembershipType) SetExpireDate(v string)`

SetExpireDate sets ExpireDate field to given value.

### HasExpireDate

`func (o *ClaimMembershipType) HasExpireDate() bool`

HasExpireDate returns a boolean if a field has been set.

### GetExpireDateExclusiveIndicator

`func (o *ClaimMembershipType) GetExpireDateExclusiveIndicator() bool`

GetExpireDateExclusiveIndicator returns the ExpireDateExclusiveIndicator field if non-nil, zero value otherwise.

### GetExpireDateExclusiveIndicatorOk

`func (o *ClaimMembershipType) GetExpireDateExclusiveIndicatorOk() (*bool, bool)`

GetExpireDateExclusiveIndicatorOk returns a tuple with the ExpireDateExclusiveIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpireDateExclusiveIndicator

`func (o *ClaimMembershipType) SetExpireDateExclusiveIndicator(v bool)`

SetExpireDateExclusiveIndicator sets ExpireDateExclusiveIndicator field to given value.

### HasExpireDateExclusiveIndicator

`func (o *ClaimMembershipType) HasExpireDateExclusiveIndicator() bool`

HasExpireDateExclusiveIndicator returns a boolean if a field has been set.

### GetMembershipClass

`func (o *ClaimMembershipType) GetMembershipClass() string`

GetMembershipClass returns the MembershipClass field if non-nil, zero value otherwise.

### GetMembershipClassOk

`func (o *ClaimMembershipType) GetMembershipClassOk() (*string, bool)`

GetMembershipClassOk returns a tuple with the MembershipClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClass

`func (o *ClaimMembershipType) SetMembershipClass(v string)`

SetMembershipClass sets MembershipClass field to given value.

### HasMembershipClass

`func (o *ClaimMembershipType) HasMembershipClass() bool`

HasMembershipClass returns a boolean if a field has been set.

### GetMembershipId

`func (o *ClaimMembershipType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *ClaimMembershipType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *ClaimMembershipType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *ClaimMembershipType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipIdNo

`func (o *ClaimMembershipType) GetMembershipIdNo() float32`

GetMembershipIdNo returns the MembershipIdNo field if non-nil, zero value otherwise.

### GetMembershipIdNoOk

`func (o *ClaimMembershipType) GetMembershipIdNoOk() (*float32, bool)`

GetMembershipIdNoOk returns a tuple with the MembershipIdNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipIdNo

`func (o *ClaimMembershipType) SetMembershipIdNo(v float32)`

SetMembershipIdNo sets MembershipIdNo field to given value.

### HasMembershipIdNo

`func (o *ClaimMembershipType) HasMembershipIdNo() bool`

HasMembershipIdNo returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *ClaimMembershipType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *ClaimMembershipType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *ClaimMembershipType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *ClaimMembershipType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetMembershipType

`func (o *ClaimMembershipType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ClaimMembershipType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ClaimMembershipType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ClaimMembershipType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetNameOnCard

`func (o *ClaimMembershipType) GetNameOnCard() string`

GetNameOnCard returns the NameOnCard field if non-nil, zero value otherwise.

### GetNameOnCardOk

`func (o *ClaimMembershipType) GetNameOnCardOk() (*string, bool)`

GetNameOnCardOk returns a tuple with the NameOnCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameOnCard

`func (o *ClaimMembershipType) SetNameOnCard(v string)`

SetNameOnCard sets NameOnCard field to given value.

### HasNameOnCard

`func (o *ClaimMembershipType) HasNameOnCard() bool`

HasNameOnCard returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


