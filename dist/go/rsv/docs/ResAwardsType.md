# ResAwardsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipNo** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**OriginalRoomType** | Pointer to **string** | Room Type before the Upgrade Award. | [optional] 
**UpgradeRoomType** | Pointer to **string** | Room Type after the Upgrade Award. | [optional] 

## Methods

### NewResAwardsType

`func NewResAwardsType() *ResAwardsType`

NewResAwardsType instantiates a new ResAwardsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResAwardsTypeWithDefaults

`func NewResAwardsTypeWithDefaults() *ResAwardsType`

NewResAwardsTypeWithDefaults instantiates a new ResAwardsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipNo

`func (o *ResAwardsType) GetMembershipNo() UniqueIDType`

GetMembershipNo returns the MembershipNo field if non-nil, zero value otherwise.

### GetMembershipNoOk

`func (o *ResAwardsType) GetMembershipNoOk() (*UniqueIDType, bool)`

GetMembershipNoOk returns a tuple with the MembershipNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipNo

`func (o *ResAwardsType) SetMembershipNo(v UniqueIDType)`

SetMembershipNo sets MembershipNo field to given value.

### HasMembershipNo

`func (o *ResAwardsType) HasMembershipNo() bool`

HasMembershipNo returns a boolean if a field has been set.

### GetOriginalRoomType

`func (o *ResAwardsType) GetOriginalRoomType() string`

GetOriginalRoomType returns the OriginalRoomType field if non-nil, zero value otherwise.

### GetOriginalRoomTypeOk

`func (o *ResAwardsType) GetOriginalRoomTypeOk() (*string, bool)`

GetOriginalRoomTypeOk returns a tuple with the OriginalRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalRoomType

`func (o *ResAwardsType) SetOriginalRoomType(v string)`

SetOriginalRoomType sets OriginalRoomType field to given value.

### HasOriginalRoomType

`func (o *ResAwardsType) HasOriginalRoomType() bool`

HasOriginalRoomType returns a boolean if a field has been set.

### GetUpgradeRoomType

`func (o *ResAwardsType) GetUpgradeRoomType() string`

GetUpgradeRoomType returns the UpgradeRoomType field if non-nil, zero value otherwise.

### GetUpgradeRoomTypeOk

`func (o *ResAwardsType) GetUpgradeRoomTypeOk() (*string, bool)`

GetUpgradeRoomTypeOk returns a tuple with the UpgradeRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradeRoomType

`func (o *ResAwardsType) SetUpgradeRoomType(v string)`

SetUpgradeRoomType sets UpgradeRoomType field to given value.

### HasUpgradeRoomType

`func (o *ResAwardsType) HasUpgradeRoomType() bool`

HasUpgradeRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


