# MembershipDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CardExpirationDate** | Pointer to **string** | Membership card expiration date. | [optional] 
**JoinedDate** | Pointer to **string** | Date when the member enrolled for the membership. | [optional] 
**MembershipCardNo** | Pointer to **string** | The card number associated with this membership. | [optional] 
**MembershipId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**MembershipLevel** | Pointer to **string** | The current level of the membership. | [optional] 
**MembershipType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Name** | Pointer to **string** | The profile name associated with this membership. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 

## Methods

### NewMembershipDetailsType

`func NewMembershipDetailsType() *MembershipDetailsType`

NewMembershipDetailsType instantiates a new MembershipDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipDetailsTypeWithDefaults

`func NewMembershipDetailsTypeWithDefaults() *MembershipDetailsType`

NewMembershipDetailsTypeWithDefaults instantiates a new MembershipDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCardExpirationDate

`func (o *MembershipDetailsType) GetCardExpirationDate() string`

GetCardExpirationDate returns the CardExpirationDate field if non-nil, zero value otherwise.

### GetCardExpirationDateOk

`func (o *MembershipDetailsType) GetCardExpirationDateOk() (*string, bool)`

GetCardExpirationDateOk returns a tuple with the CardExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardExpirationDate

`func (o *MembershipDetailsType) SetCardExpirationDate(v string)`

SetCardExpirationDate sets CardExpirationDate field to given value.

### HasCardExpirationDate

`func (o *MembershipDetailsType) HasCardExpirationDate() bool`

HasCardExpirationDate returns a boolean if a field has been set.

### GetJoinedDate

`func (o *MembershipDetailsType) GetJoinedDate() string`

GetJoinedDate returns the JoinedDate field if non-nil, zero value otherwise.

### GetJoinedDateOk

`func (o *MembershipDetailsType) GetJoinedDateOk() (*string, bool)`

GetJoinedDateOk returns a tuple with the JoinedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinedDate

`func (o *MembershipDetailsType) SetJoinedDate(v string)`

SetJoinedDate sets JoinedDate field to given value.

### HasJoinedDate

`func (o *MembershipDetailsType) HasJoinedDate() bool`

HasJoinedDate returns a boolean if a field has been set.

### GetMembershipCardNo

`func (o *MembershipDetailsType) GetMembershipCardNo() string`

GetMembershipCardNo returns the MembershipCardNo field if non-nil, zero value otherwise.

### GetMembershipCardNoOk

`func (o *MembershipDetailsType) GetMembershipCardNoOk() (*string, bool)`

GetMembershipCardNoOk returns a tuple with the MembershipCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipCardNo

`func (o *MembershipDetailsType) SetMembershipCardNo(v string)`

SetMembershipCardNo sets MembershipCardNo field to given value.

### HasMembershipCardNo

`func (o *MembershipDetailsType) HasMembershipCardNo() bool`

HasMembershipCardNo returns a boolean if a field has been set.

### GetMembershipId

`func (o *MembershipDetailsType) GetMembershipId() UniqueIDType`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *MembershipDetailsType) GetMembershipIdOk() (*UniqueIDType, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *MembershipDetailsType) SetMembershipId(v UniqueIDType)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *MembershipDetailsType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *MembershipDetailsType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *MembershipDetailsType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *MembershipDetailsType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *MembershipDetailsType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetMembershipType

`func (o *MembershipDetailsType) GetMembershipType() CodeDescriptionType`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MembershipDetailsType) GetMembershipTypeOk() (*CodeDescriptionType, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MembershipDetailsType) SetMembershipType(v CodeDescriptionType)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MembershipDetailsType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetName

`func (o *MembershipDetailsType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MembershipDetailsType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MembershipDetailsType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MembershipDetailsType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetProfileId

`func (o *MembershipDetailsType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *MembershipDetailsType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *MembershipDetailsType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *MembershipDetailsType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


