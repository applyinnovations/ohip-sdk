# MembershipPointsExceptionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipTransactionIds** | Pointer to [**[]MembershipTransactionId**](MembershipTransactionId.md) | Unique identifier associated with the membership transaction. | [optional] 
**AcceptPoints** | Pointer to **bool** | Indicates if the membership points exception are to be accepted or rejected. | [optional] 
**UserNotes** | Pointer to **string** | Notes regarding the resolution of the membership transaction exception or for any other reason. | [optional] 

## Methods

### NewMembershipPointsExceptionsType

`func NewMembershipPointsExceptionsType() *MembershipPointsExceptionsType`

NewMembershipPointsExceptionsType instantiates a new MembershipPointsExceptionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipPointsExceptionsTypeWithDefaults

`func NewMembershipPointsExceptionsTypeWithDefaults() *MembershipPointsExceptionsType`

NewMembershipPointsExceptionsTypeWithDefaults instantiates a new MembershipPointsExceptionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipTransactionIds

`func (o *MembershipPointsExceptionsType) GetMembershipTransactionIds() []MembershipTransactionId`

GetMembershipTransactionIds returns the MembershipTransactionIds field if non-nil, zero value otherwise.

### GetMembershipTransactionIdsOk

`func (o *MembershipPointsExceptionsType) GetMembershipTransactionIdsOk() (*[]MembershipTransactionId, bool)`

GetMembershipTransactionIdsOk returns a tuple with the MembershipTransactionIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTransactionIds

`func (o *MembershipPointsExceptionsType) SetMembershipTransactionIds(v []MembershipTransactionId)`

SetMembershipTransactionIds sets MembershipTransactionIds field to given value.

### HasMembershipTransactionIds

`func (o *MembershipPointsExceptionsType) HasMembershipTransactionIds() bool`

HasMembershipTransactionIds returns a boolean if a field has been set.

### GetAcceptPoints

`func (o *MembershipPointsExceptionsType) GetAcceptPoints() bool`

GetAcceptPoints returns the AcceptPoints field if non-nil, zero value otherwise.

### GetAcceptPointsOk

`func (o *MembershipPointsExceptionsType) GetAcceptPointsOk() (*bool, bool)`

GetAcceptPointsOk returns a tuple with the AcceptPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAcceptPoints

`func (o *MembershipPointsExceptionsType) SetAcceptPoints(v bool)`

SetAcceptPoints sets AcceptPoints field to given value.

### HasAcceptPoints

`func (o *MembershipPointsExceptionsType) HasAcceptPoints() bool`

HasAcceptPoints returns a boolean if a field has been set.

### GetUserNotes

`func (o *MembershipPointsExceptionsType) GetUserNotes() string`

GetUserNotes returns the UserNotes field if non-nil, zero value otherwise.

### GetUserNotesOk

`func (o *MembershipPointsExceptionsType) GetUserNotesOk() (*string, bool)`

GetUserNotesOk returns a tuple with the UserNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserNotes

`func (o *MembershipPointsExceptionsType) SetUserNotes(v string)`

SetUserNotes sets UserNotes field to given value.

### HasUserNotes

`func (o *MembershipPointsExceptionsType) HasUserNotes() bool`

HasUserNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


