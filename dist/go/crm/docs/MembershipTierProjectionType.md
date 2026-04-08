# MembershipTierProjectionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Upgrade** | Pointer to **string** | Upgrade information which includes member&#39;s next tier level requirements for next upgrade. | [optional] 
**Downgrade** | Pointer to **string** | Information regarding member&#39;s possible downgrades. | [optional] 

## Methods

### NewMembershipTierProjectionType

`func NewMembershipTierProjectionType() *MembershipTierProjectionType`

NewMembershipTierProjectionType instantiates a new MembershipTierProjectionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTierProjectionTypeWithDefaults

`func NewMembershipTierProjectionTypeWithDefaults() *MembershipTierProjectionType`

NewMembershipTierProjectionTypeWithDefaults instantiates a new MembershipTierProjectionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUpgrade

`func (o *MembershipTierProjectionType) GetUpgrade() string`

GetUpgrade returns the Upgrade field if non-nil, zero value otherwise.

### GetUpgradeOk

`func (o *MembershipTierProjectionType) GetUpgradeOk() (*string, bool)`

GetUpgradeOk returns a tuple with the Upgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgrade

`func (o *MembershipTierProjectionType) SetUpgrade(v string)`

SetUpgrade sets Upgrade field to given value.

### HasUpgrade

`func (o *MembershipTierProjectionType) HasUpgrade() bool`

HasUpgrade returns a boolean if a field has been set.

### GetDowngrade

`func (o *MembershipTierProjectionType) GetDowngrade() string`

GetDowngrade returns the Downgrade field if non-nil, zero value otherwise.

### GetDowngradeOk

`func (o *MembershipTierProjectionType) GetDowngradeOk() (*string, bool)`

GetDowngradeOk returns a tuple with the Downgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngrade

`func (o *MembershipTierProjectionType) SetDowngrade(v string)`

SetDowngrade sets Downgrade field to given value.

### HasDowngrade

`func (o *MembershipTierProjectionType) HasDowngrade() bool`

HasDowngrade returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


