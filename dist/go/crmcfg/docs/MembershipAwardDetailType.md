# MembershipAwardDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardCode** | Pointer to **string** | Membership Award Code. | [optional] 
**Code** | Pointer to **string** | Membership Award Detail Code. | [optional] 
**DateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**FromRoom** | Pointer to **string** | Upgrade from Room. | [optional] 
**FromRoomGroup** | Pointer to **string** | Upgrade from Room Group. | [optional] 
**GroupUpgrade** | Pointer to **bool** | Identify whether Room or Room Group upgrade record. | [optional] 
**HotelId** | Pointer to **string** | Hotel code to which the record belongs. | [optional] 
**Inactive** | Pointer to **bool** | Inactive flag for Membership Award detail (Rate/Product/upgrade). | [optional] 
**MembershipType** | Pointer to **string** | Membership type for which awards are defined. | [optional] 
**PointsRequired** | Pointer to **float32** | Points required to upgrade. | [optional] 
**ToRoom** | Pointer to **string** | Upgrade to Room. | [optional] 
**ToRoomGroup** | Pointer to **string** | Upgrade to Room Group. | [optional] 
**UpgradeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewMembershipAwardDetailType

`func NewMembershipAwardDetailType() *MembershipAwardDetailType`

NewMembershipAwardDetailType instantiates a new MembershipAwardDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipAwardDetailTypeWithDefaults

`func NewMembershipAwardDetailTypeWithDefaults() *MembershipAwardDetailType`

NewMembershipAwardDetailTypeWithDefaults instantiates a new MembershipAwardDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardCode

`func (o *MembershipAwardDetailType) GetAwardCode() string`

GetAwardCode returns the AwardCode field if non-nil, zero value otherwise.

### GetAwardCodeOk

`func (o *MembershipAwardDetailType) GetAwardCodeOk() (*string, bool)`

GetAwardCodeOk returns a tuple with the AwardCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCode

`func (o *MembershipAwardDetailType) SetAwardCode(v string)`

SetAwardCode sets AwardCode field to given value.

### HasAwardCode

`func (o *MembershipAwardDetailType) HasAwardCode() bool`

HasAwardCode returns a boolean if a field has been set.

### GetCode

`func (o *MembershipAwardDetailType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MembershipAwardDetailType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MembershipAwardDetailType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *MembershipAwardDetailType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDateRange

`func (o *MembershipAwardDetailType) GetDateRange() DateRangeType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *MembershipAwardDetailType) GetDateRangeOk() (*DateRangeType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *MembershipAwardDetailType) SetDateRange(v DateRangeType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *MembershipAwardDetailType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetFromRoom

`func (o *MembershipAwardDetailType) GetFromRoom() string`

GetFromRoom returns the FromRoom field if non-nil, zero value otherwise.

### GetFromRoomOk

`func (o *MembershipAwardDetailType) GetFromRoomOk() (*string, bool)`

GetFromRoomOk returns a tuple with the FromRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRoom

`func (o *MembershipAwardDetailType) SetFromRoom(v string)`

SetFromRoom sets FromRoom field to given value.

### HasFromRoom

`func (o *MembershipAwardDetailType) HasFromRoom() bool`

HasFromRoom returns a boolean if a field has been set.

### GetFromRoomGroup

`func (o *MembershipAwardDetailType) GetFromRoomGroup() string`

GetFromRoomGroup returns the FromRoomGroup field if non-nil, zero value otherwise.

### GetFromRoomGroupOk

`func (o *MembershipAwardDetailType) GetFromRoomGroupOk() (*string, bool)`

GetFromRoomGroupOk returns a tuple with the FromRoomGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRoomGroup

`func (o *MembershipAwardDetailType) SetFromRoomGroup(v string)`

SetFromRoomGroup sets FromRoomGroup field to given value.

### HasFromRoomGroup

`func (o *MembershipAwardDetailType) HasFromRoomGroup() bool`

HasFromRoomGroup returns a boolean if a field has been set.

### GetGroupUpgrade

`func (o *MembershipAwardDetailType) GetGroupUpgrade() bool`

GetGroupUpgrade returns the GroupUpgrade field if non-nil, zero value otherwise.

### GetGroupUpgradeOk

`func (o *MembershipAwardDetailType) GetGroupUpgradeOk() (*bool, bool)`

GetGroupUpgradeOk returns a tuple with the GroupUpgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupUpgrade

`func (o *MembershipAwardDetailType) SetGroupUpgrade(v bool)`

SetGroupUpgrade sets GroupUpgrade field to given value.

### HasGroupUpgrade

`func (o *MembershipAwardDetailType) HasGroupUpgrade() bool`

HasGroupUpgrade returns a boolean if a field has been set.

### GetHotelId

`func (o *MembershipAwardDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MembershipAwardDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MembershipAwardDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MembershipAwardDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *MembershipAwardDetailType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *MembershipAwardDetailType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *MembershipAwardDetailType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *MembershipAwardDetailType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetMembershipType

`func (o *MembershipAwardDetailType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MembershipAwardDetailType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MembershipAwardDetailType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MembershipAwardDetailType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetPointsRequired

`func (o *MembershipAwardDetailType) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *MembershipAwardDetailType) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *MembershipAwardDetailType) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *MembershipAwardDetailType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetToRoom

`func (o *MembershipAwardDetailType) GetToRoom() string`

GetToRoom returns the ToRoom field if non-nil, zero value otherwise.

### GetToRoomOk

`func (o *MembershipAwardDetailType) GetToRoomOk() (*string, bool)`

GetToRoomOk returns a tuple with the ToRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRoom

`func (o *MembershipAwardDetailType) SetToRoom(v string)`

SetToRoom sets ToRoom field to given value.

### HasToRoom

`func (o *MembershipAwardDetailType) HasToRoom() bool`

HasToRoom returns a boolean if a field has been set.

### GetToRoomGroup

`func (o *MembershipAwardDetailType) GetToRoomGroup() string`

GetToRoomGroup returns the ToRoomGroup field if non-nil, zero value otherwise.

### GetToRoomGroupOk

`func (o *MembershipAwardDetailType) GetToRoomGroupOk() (*string, bool)`

GetToRoomGroupOk returns a tuple with the ToRoomGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRoomGroup

`func (o *MembershipAwardDetailType) SetToRoomGroup(v string)`

SetToRoomGroup sets ToRoomGroup field to given value.

### HasToRoomGroup

`func (o *MembershipAwardDetailType) HasToRoomGroup() bool`

HasToRoomGroup returns a boolean if a field has been set.

### GetUpgradeId

`func (o *MembershipAwardDetailType) GetUpgradeId() UniqueIDType`

GetUpgradeId returns the UpgradeId field if non-nil, zero value otherwise.

### GetUpgradeIdOk

`func (o *MembershipAwardDetailType) GetUpgradeIdOk() (*UniqueIDType, bool)`

GetUpgradeIdOk returns a tuple with the UpgradeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradeId

`func (o *MembershipAwardDetailType) SetUpgradeId(v UniqueIDType)`

SetUpgradeId sets UpgradeId field to given value.

### HasUpgradeId

`func (o *MembershipAwardDetailType) HasUpgradeId() bool`

HasUpgradeId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


