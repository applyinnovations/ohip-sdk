# MemberPointsToExpire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MemberPointsToExpireList** | Pointer to [**[]MemberPointToExpireType**](MemberPointToExpireType.md) | List of of member points to expire. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewMemberPointsToExpire

`func NewMemberPointsToExpire() *MemberPointsToExpire`

NewMemberPointsToExpire instantiates a new MemberPointsToExpire object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMemberPointsToExpireWithDefaults

`func NewMemberPointsToExpireWithDefaults() *MemberPointsToExpire`

NewMemberPointsToExpireWithDefaults instantiates a new MemberPointsToExpire object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMemberPointsToExpireList

`func (o *MemberPointsToExpire) GetMemberPointsToExpireList() []MemberPointToExpireType`

GetMemberPointsToExpireList returns the MemberPointsToExpireList field if non-nil, zero value otherwise.

### GetMemberPointsToExpireListOk

`func (o *MemberPointsToExpire) GetMemberPointsToExpireListOk() (*[]MemberPointToExpireType, bool)`

GetMemberPointsToExpireListOk returns a tuple with the MemberPointsToExpireList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberPointsToExpireList

`func (o *MemberPointsToExpire) SetMemberPointsToExpireList(v []MemberPointToExpireType)`

SetMemberPointsToExpireList sets MemberPointsToExpireList field to given value.

### HasMemberPointsToExpireList

`func (o *MemberPointsToExpire) HasMemberPointsToExpireList() bool`

HasMemberPointsToExpireList returns a boolean if a field has been set.

### GetLinks

`func (o *MemberPointsToExpire) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MemberPointsToExpire) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MemberPointsToExpire) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MemberPointsToExpire) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


