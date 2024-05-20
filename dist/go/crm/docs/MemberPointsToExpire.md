# MemberPointsToExpire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MemberPointsToExpireList** | Pointer to [**[]MemberPointToExpireType**](MemberPointToExpireType.md) | List of of member points to expire. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

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

### GetWarnings

`func (o *MemberPointsToExpire) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MemberPointsToExpire) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MemberPointsToExpire) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MemberPointsToExpire) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


