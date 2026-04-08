# MembershipAwardPointsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BasePoints** | Pointer to **int32** | Total number of base award points for a membership points transaction. | [optional] 
**BonusPoints** | Pointer to **int32** | If a membership points transaction involves bonus points, the total number of bonus points. | [optional] 
**MiscPoints** | Pointer to **int32** | If a membership points transaction involves points imported into ORS from a third-party system, the total number of points. | [optional] 
**TotalPoints** | Pointer to **int32** | The total number of award points. | [optional] 
**PointsExpiryDate** | Pointer to **string** | The date until points are eligible for redemption based on membership type configuration. | [optional] 
**RuleCode** | Pointer to **string** | Rule Code for award points. | [optional] 

## Methods

### NewMembershipAwardPointsType

`func NewMembershipAwardPointsType() *MembershipAwardPointsType`

NewMembershipAwardPointsType instantiates a new MembershipAwardPointsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipAwardPointsTypeWithDefaults

`func NewMembershipAwardPointsTypeWithDefaults() *MembershipAwardPointsType`

NewMembershipAwardPointsTypeWithDefaults instantiates a new MembershipAwardPointsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBasePoints

`func (o *MembershipAwardPointsType) GetBasePoints() int32`

GetBasePoints returns the BasePoints field if non-nil, zero value otherwise.

### GetBasePointsOk

`func (o *MembershipAwardPointsType) GetBasePointsOk() (*int32, bool)`

GetBasePointsOk returns a tuple with the BasePoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasePoints

`func (o *MembershipAwardPointsType) SetBasePoints(v int32)`

SetBasePoints sets BasePoints field to given value.

### HasBasePoints

`func (o *MembershipAwardPointsType) HasBasePoints() bool`

HasBasePoints returns a boolean if a field has been set.

### GetBonusPoints

`func (o *MembershipAwardPointsType) GetBonusPoints() int32`

GetBonusPoints returns the BonusPoints field if non-nil, zero value otherwise.

### GetBonusPointsOk

`func (o *MembershipAwardPointsType) GetBonusPointsOk() (*int32, bool)`

GetBonusPointsOk returns a tuple with the BonusPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBonusPoints

`func (o *MembershipAwardPointsType) SetBonusPoints(v int32)`

SetBonusPoints sets BonusPoints field to given value.

### HasBonusPoints

`func (o *MembershipAwardPointsType) HasBonusPoints() bool`

HasBonusPoints returns a boolean if a field has been set.

### GetMiscPoints

`func (o *MembershipAwardPointsType) GetMiscPoints() int32`

GetMiscPoints returns the MiscPoints field if non-nil, zero value otherwise.

### GetMiscPointsOk

`func (o *MembershipAwardPointsType) GetMiscPointsOk() (*int32, bool)`

GetMiscPointsOk returns a tuple with the MiscPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiscPoints

`func (o *MembershipAwardPointsType) SetMiscPoints(v int32)`

SetMiscPoints sets MiscPoints field to given value.

### HasMiscPoints

`func (o *MembershipAwardPointsType) HasMiscPoints() bool`

HasMiscPoints returns a boolean if a field has been set.

### GetTotalPoints

`func (o *MembershipAwardPointsType) GetTotalPoints() int32`

GetTotalPoints returns the TotalPoints field if non-nil, zero value otherwise.

### GetTotalPointsOk

`func (o *MembershipAwardPointsType) GetTotalPointsOk() (*int32, bool)`

GetTotalPointsOk returns a tuple with the TotalPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPoints

`func (o *MembershipAwardPointsType) SetTotalPoints(v int32)`

SetTotalPoints sets TotalPoints field to given value.

### HasTotalPoints

`func (o *MembershipAwardPointsType) HasTotalPoints() bool`

HasTotalPoints returns a boolean if a field has been set.

### GetPointsExpiryDate

`func (o *MembershipAwardPointsType) GetPointsExpiryDate() string`

GetPointsExpiryDate returns the PointsExpiryDate field if non-nil, zero value otherwise.

### GetPointsExpiryDateOk

`func (o *MembershipAwardPointsType) GetPointsExpiryDateOk() (*string, bool)`

GetPointsExpiryDateOk returns a tuple with the PointsExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsExpiryDate

`func (o *MembershipAwardPointsType) SetPointsExpiryDate(v string)`

SetPointsExpiryDate sets PointsExpiryDate field to given value.

### HasPointsExpiryDate

`func (o *MembershipAwardPointsType) HasPointsExpiryDate() bool`

HasPointsExpiryDate returns a boolean if a field has been set.

### GetRuleCode

`func (o *MembershipAwardPointsType) GetRuleCode() string`

GetRuleCode returns the RuleCode field if non-nil, zero value otherwise.

### GetRuleCodeOk

`func (o *MembershipAwardPointsType) GetRuleCodeOk() (*string, bool)`

GetRuleCodeOk returns a tuple with the RuleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleCode

`func (o *MembershipAwardPointsType) SetRuleCode(v string)`

SetRuleCode sets RuleCode field to given value.

### HasRuleCode

`func (o *MembershipAwardPointsType) HasRuleCode() bool`

HasRuleCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


