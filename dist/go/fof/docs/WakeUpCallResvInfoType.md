# WakeUpCallResvInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Arrival** | Pointer to **string** | Reservation arrival date. | [optional] 
**BlockCode** | Pointer to **string** | Block code with which wake up call is associated. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**Departure** | Pointer to **string** | Reservation departure date. | [optional] 
**ExtensionNumber** | Pointer to **string** | Room Phone Extension Number. | [optional] 
**GuestName** | Pointer to **string** | Guest Name. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code where wake up call is set. | [optional] 
**MembershipLevel** | Pointer to **string** | Membership Level of the guest. | [optional] 
**MembershipType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**Room** | Pointer to **string** | Hotel room in which wake up call is to ring. | [optional] 
**RoomPhoneNumber** | Pointer to **string** | Room phone number which wake up call is to ring. | [optional] 
**Timezone** | Pointer to **string** | Timezone of hotel. | [optional] 
**Vip** | Pointer to **string** | Guest Name. | [optional] 

## Methods

### NewWakeUpCallResvInfoType

`func NewWakeUpCallResvInfoType() *WakeUpCallResvInfoType`

NewWakeUpCallResvInfoType instantiates a new WakeUpCallResvInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWakeUpCallResvInfoTypeWithDefaults

`func NewWakeUpCallResvInfoTypeWithDefaults() *WakeUpCallResvInfoType`

NewWakeUpCallResvInfoTypeWithDefaults instantiates a new WakeUpCallResvInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrival

`func (o *WakeUpCallResvInfoType) GetArrival() string`

GetArrival returns the Arrival field if non-nil, zero value otherwise.

### GetArrivalOk

`func (o *WakeUpCallResvInfoType) GetArrivalOk() (*string, bool)`

GetArrivalOk returns a tuple with the Arrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrival

`func (o *WakeUpCallResvInfoType) SetArrival(v string)`

SetArrival sets Arrival field to given value.

### HasArrival

`func (o *WakeUpCallResvInfoType) HasArrival() bool`

HasArrival returns a boolean if a field has been set.

### GetBlockCode

`func (o *WakeUpCallResvInfoType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *WakeUpCallResvInfoType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *WakeUpCallResvInfoType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *WakeUpCallResvInfoType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetBlockId

`func (o *WakeUpCallResvInfoType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *WakeUpCallResvInfoType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *WakeUpCallResvInfoType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *WakeUpCallResvInfoType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetDeparture

`func (o *WakeUpCallResvInfoType) GetDeparture() string`

GetDeparture returns the Departure field if non-nil, zero value otherwise.

### GetDepartureOk

`func (o *WakeUpCallResvInfoType) GetDepartureOk() (*string, bool)`

GetDepartureOk returns a tuple with the Departure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeparture

`func (o *WakeUpCallResvInfoType) SetDeparture(v string)`

SetDeparture sets Departure field to given value.

### HasDeparture

`func (o *WakeUpCallResvInfoType) HasDeparture() bool`

HasDeparture returns a boolean if a field has been set.

### GetExtensionNumber

`func (o *WakeUpCallResvInfoType) GetExtensionNumber() string`

GetExtensionNumber returns the ExtensionNumber field if non-nil, zero value otherwise.

### GetExtensionNumberOk

`func (o *WakeUpCallResvInfoType) GetExtensionNumberOk() (*string, bool)`

GetExtensionNumberOk returns a tuple with the ExtensionNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtensionNumber

`func (o *WakeUpCallResvInfoType) SetExtensionNumber(v string)`

SetExtensionNumber sets ExtensionNumber field to given value.

### HasExtensionNumber

`func (o *WakeUpCallResvInfoType) HasExtensionNumber() bool`

HasExtensionNumber returns a boolean if a field has been set.

### GetGuestName

`func (o *WakeUpCallResvInfoType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *WakeUpCallResvInfoType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *WakeUpCallResvInfoType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *WakeUpCallResvInfoType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetHotelId

`func (o *WakeUpCallResvInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *WakeUpCallResvInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *WakeUpCallResvInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *WakeUpCallResvInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *WakeUpCallResvInfoType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *WakeUpCallResvInfoType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *WakeUpCallResvInfoType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *WakeUpCallResvInfoType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetMembershipType

`func (o *WakeUpCallResvInfoType) GetMembershipType() CodeDescriptionType`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *WakeUpCallResvInfoType) GetMembershipTypeOk() (*CodeDescriptionType, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *WakeUpCallResvInfoType) SetMembershipType(v CodeDescriptionType)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *WakeUpCallResvInfoType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetProfileId

`func (o *WakeUpCallResvInfoType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *WakeUpCallResvInfoType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *WakeUpCallResvInfoType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *WakeUpCallResvInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReservationIdList

`func (o *WakeUpCallResvInfoType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *WakeUpCallResvInfoType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *WakeUpCallResvInfoType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *WakeUpCallResvInfoType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationStatus

`func (o *WakeUpCallResvInfoType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *WakeUpCallResvInfoType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *WakeUpCallResvInfoType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *WakeUpCallResvInfoType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetRoom

`func (o *WakeUpCallResvInfoType) GetRoom() string`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *WakeUpCallResvInfoType) GetRoomOk() (*string, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *WakeUpCallResvInfoType) SetRoom(v string)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *WakeUpCallResvInfoType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetRoomPhoneNumber

`func (o *WakeUpCallResvInfoType) GetRoomPhoneNumber() string`

GetRoomPhoneNumber returns the RoomPhoneNumber field if non-nil, zero value otherwise.

### GetRoomPhoneNumberOk

`func (o *WakeUpCallResvInfoType) GetRoomPhoneNumberOk() (*string, bool)`

GetRoomPhoneNumberOk returns a tuple with the RoomPhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomPhoneNumber

`func (o *WakeUpCallResvInfoType) SetRoomPhoneNumber(v string)`

SetRoomPhoneNumber sets RoomPhoneNumber field to given value.

### HasRoomPhoneNumber

`func (o *WakeUpCallResvInfoType) HasRoomPhoneNumber() bool`

HasRoomPhoneNumber returns a boolean if a field has been set.

### GetTimezone

`func (o *WakeUpCallResvInfoType) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *WakeUpCallResvInfoType) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *WakeUpCallResvInfoType) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.

### HasTimezone

`func (o *WakeUpCallResvInfoType) HasTimezone() bool`

HasTimezone returns a boolean if a field has been set.

### GetVip

`func (o *WakeUpCallResvInfoType) GetVip() string`

GetVip returns the Vip field if non-nil, zero value otherwise.

### GetVipOk

`func (o *WakeUpCallResvInfoType) GetVipOk() (*string, bool)`

GetVipOk returns a tuple with the Vip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVip

`func (o *WakeUpCallResvInfoType) SetVip(v string)`

SetVip sets Vip field to given value.

### HasVip

`func (o *WakeUpCallResvInfoType) HasVip() bool`

HasVip returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


