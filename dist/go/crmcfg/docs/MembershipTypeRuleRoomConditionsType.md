# MembershipTypeRuleRoomConditionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomType** | Pointer to **string** | Room type/label for which the rule is applied. | [optional] 
**RoomGroup** | Pointer to **string** | Membership room group for which the rule is applied. | [optional] 
**RoomClass** | Pointer to **string** | Room class for the room for which the rule is applied. | [optional] 
**RoomsToCharge** | Pointer to **bool** | Indicates whether to use Room Type or Booked Room Type for the rule. If Y then Booked Room Type will be used for points calculation otherwise Room Type to be used. | [optional] 

## Methods

### NewMembershipTypeRuleRoomConditionsType

`func NewMembershipTypeRuleRoomConditionsType() *MembershipTypeRuleRoomConditionsType`

NewMembershipTypeRuleRoomConditionsType instantiates a new MembershipTypeRuleRoomConditionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeRuleRoomConditionsTypeWithDefaults

`func NewMembershipTypeRuleRoomConditionsTypeWithDefaults() *MembershipTypeRuleRoomConditionsType`

NewMembershipTypeRuleRoomConditionsTypeWithDefaults instantiates a new MembershipTypeRuleRoomConditionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomType

`func (o *MembershipTypeRuleRoomConditionsType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *MembershipTypeRuleRoomConditionsType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *MembershipTypeRuleRoomConditionsType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *MembershipTypeRuleRoomConditionsType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomGroup

`func (o *MembershipTypeRuleRoomConditionsType) GetRoomGroup() string`

GetRoomGroup returns the RoomGroup field if non-nil, zero value otherwise.

### GetRoomGroupOk

`func (o *MembershipTypeRuleRoomConditionsType) GetRoomGroupOk() (*string, bool)`

GetRoomGroupOk returns a tuple with the RoomGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomGroup

`func (o *MembershipTypeRuleRoomConditionsType) SetRoomGroup(v string)`

SetRoomGroup sets RoomGroup field to given value.

### HasRoomGroup

`func (o *MembershipTypeRuleRoomConditionsType) HasRoomGroup() bool`

HasRoomGroup returns a boolean if a field has been set.

### GetRoomClass

`func (o *MembershipTypeRuleRoomConditionsType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *MembershipTypeRuleRoomConditionsType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *MembershipTypeRuleRoomConditionsType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *MembershipTypeRuleRoomConditionsType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomsToCharge

`func (o *MembershipTypeRuleRoomConditionsType) GetRoomsToCharge() bool`

GetRoomsToCharge returns the RoomsToCharge field if non-nil, zero value otherwise.

### GetRoomsToChargeOk

`func (o *MembershipTypeRuleRoomConditionsType) GetRoomsToChargeOk() (*bool, bool)`

GetRoomsToChargeOk returns a tuple with the RoomsToCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsToCharge

`func (o *MembershipTypeRuleRoomConditionsType) SetRoomsToCharge(v bool)`

SetRoomsToCharge sets RoomsToCharge field to given value.

### HasRoomsToCharge

`func (o *MembershipTypeRuleRoomConditionsType) HasRoomsToCharge() bool`

HasRoomsToCharge returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


