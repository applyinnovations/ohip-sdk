# MembershipInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipId** | Pointer to **float32** | Membership ID (Unique ID from the memberships table). | [optional] 
**ProgramCode** | Pointer to **string** | The code or name of the membership program (&#39;Hertz&#39;, &#39;AAdvantage&#39;, etc.). | [optional] 
**BonusCode** | Pointer to **string** | The code or name of the bonus program. BonusCode can be used to indicate the level of membership (Gold Club, Platinum member, etc.) | [optional] 
**MembershipTypeDesc** | Pointer to **string** | The description of the ProgramCode.(Delta Previlige for code DP) | [optional] 
**MembershipLevelDesc** | Pointer to **string** | The description of the Bonus Code.(Platinum for code P) | [optional] 
**AccountId** | Pointer to **string** | The account identification number for this particular member in this particular program. | [optional] 
**MembershipLevel** | Pointer to **string** | The code or name of the membership level and indicates the level of membership (Gold Club, Platinum member, etc.). This is same as the BonusCode. | [optional] 
**PlayerRanking** | Pointer to **int32** | Ranking assigned to the Player Profile by the Gaming system. | [optional] 

## Methods

### NewMembershipInfoType

`func NewMembershipInfoType() *MembershipInfoType`

NewMembershipInfoType instantiates a new MembershipInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipInfoTypeWithDefaults

`func NewMembershipInfoTypeWithDefaults() *MembershipInfoType`

NewMembershipInfoTypeWithDefaults instantiates a new MembershipInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipId

`func (o *MembershipInfoType) GetMembershipId() float32`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *MembershipInfoType) GetMembershipIdOk() (*float32, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *MembershipInfoType) SetMembershipId(v float32)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *MembershipInfoType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetProgramCode

`func (o *MembershipInfoType) GetProgramCode() string`

GetProgramCode returns the ProgramCode field if non-nil, zero value otherwise.

### GetProgramCodeOk

`func (o *MembershipInfoType) GetProgramCodeOk() (*string, bool)`

GetProgramCodeOk returns a tuple with the ProgramCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgramCode

`func (o *MembershipInfoType) SetProgramCode(v string)`

SetProgramCode sets ProgramCode field to given value.

### HasProgramCode

`func (o *MembershipInfoType) HasProgramCode() bool`

HasProgramCode returns a boolean if a field has been set.

### GetBonusCode

`func (o *MembershipInfoType) GetBonusCode() string`

GetBonusCode returns the BonusCode field if non-nil, zero value otherwise.

### GetBonusCodeOk

`func (o *MembershipInfoType) GetBonusCodeOk() (*string, bool)`

GetBonusCodeOk returns a tuple with the BonusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBonusCode

`func (o *MembershipInfoType) SetBonusCode(v string)`

SetBonusCode sets BonusCode field to given value.

### HasBonusCode

`func (o *MembershipInfoType) HasBonusCode() bool`

HasBonusCode returns a boolean if a field has been set.

### GetMembershipTypeDesc

`func (o *MembershipInfoType) GetMembershipTypeDesc() string`

GetMembershipTypeDesc returns the MembershipTypeDesc field if non-nil, zero value otherwise.

### GetMembershipTypeDescOk

`func (o *MembershipInfoType) GetMembershipTypeDescOk() (*string, bool)`

GetMembershipTypeDescOk returns a tuple with the MembershipTypeDesc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTypeDesc

`func (o *MembershipInfoType) SetMembershipTypeDesc(v string)`

SetMembershipTypeDesc sets MembershipTypeDesc field to given value.

### HasMembershipTypeDesc

`func (o *MembershipInfoType) HasMembershipTypeDesc() bool`

HasMembershipTypeDesc returns a boolean if a field has been set.

### GetMembershipLevelDesc

`func (o *MembershipInfoType) GetMembershipLevelDesc() string`

GetMembershipLevelDesc returns the MembershipLevelDesc field if non-nil, zero value otherwise.

### GetMembershipLevelDescOk

`func (o *MembershipInfoType) GetMembershipLevelDescOk() (*string, bool)`

GetMembershipLevelDescOk returns a tuple with the MembershipLevelDesc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevelDesc

`func (o *MembershipInfoType) SetMembershipLevelDesc(v string)`

SetMembershipLevelDesc sets MembershipLevelDesc field to given value.

### HasMembershipLevelDesc

`func (o *MembershipInfoType) HasMembershipLevelDesc() bool`

HasMembershipLevelDesc returns a boolean if a field has been set.

### GetAccountId

`func (o *MembershipInfoType) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *MembershipInfoType) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *MembershipInfoType) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *MembershipInfoType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *MembershipInfoType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *MembershipInfoType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *MembershipInfoType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *MembershipInfoType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetPlayerRanking

`func (o *MembershipInfoType) GetPlayerRanking() int32`

GetPlayerRanking returns the PlayerRanking field if non-nil, zero value otherwise.

### GetPlayerRankingOk

`func (o *MembershipInfoType) GetPlayerRankingOk() (*int32, bool)`

GetPlayerRankingOk returns a tuple with the PlayerRanking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlayerRanking

`func (o *MembershipInfoType) SetPlayerRanking(v int32)`

SetPlayerRanking sets PlayerRanking field to given value.

### HasPlayerRanking

`func (o *MembershipInfoType) HasPlayerRanking() bool`

HasPlayerRanking returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


