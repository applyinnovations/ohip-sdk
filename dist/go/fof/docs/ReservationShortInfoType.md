# ReservationShortInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestName** | Pointer to **string** | Guest name that is registered for the reservation. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationStatusInfo** | Pointer to [**HousekeepingRoomReservationStatusType**](HousekeepingRoomReservationStatusType.md) |  | [optional] 
**StayDateInfo** | Pointer to [**StayDateInfoType**](StayDateInfoType.md) |  | [optional] 
**VipStatus** | Pointer to [**VIPStatusType**](VIPStatusType.md) |  | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ScheduledRoomMoveOut** | Pointer to **bool** | This flag will be set to true  for rooms assigned to reservations that are scheduled to  move to another room. | [optional] 
**ScheduledRoomMoveOutTime** | Pointer to **string** | This time indicates when the reservation is scheduled to move out of the room. | [optional] 

## Methods

### NewReservationShortInfoType

`func NewReservationShortInfoType() *ReservationShortInfoType`

NewReservationShortInfoType instantiates a new ReservationShortInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationShortInfoTypeWithDefaults

`func NewReservationShortInfoTypeWithDefaults() *ReservationShortInfoType`

NewReservationShortInfoTypeWithDefaults instantiates a new ReservationShortInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestName

`func (o *ReservationShortInfoType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *ReservationShortInfoType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *ReservationShortInfoType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *ReservationShortInfoType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationShortInfoType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationShortInfoType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationShortInfoType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationShortInfoType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationStatusInfo

`func (o *ReservationShortInfoType) GetReservationStatusInfo() HousekeepingRoomReservationStatusType`

GetReservationStatusInfo returns the ReservationStatusInfo field if non-nil, zero value otherwise.

### GetReservationStatusInfoOk

`func (o *ReservationShortInfoType) GetReservationStatusInfoOk() (*HousekeepingRoomReservationStatusType, bool)`

GetReservationStatusInfoOk returns a tuple with the ReservationStatusInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatusInfo

`func (o *ReservationShortInfoType) SetReservationStatusInfo(v HousekeepingRoomReservationStatusType)`

SetReservationStatusInfo sets ReservationStatusInfo field to given value.

### HasReservationStatusInfo

`func (o *ReservationShortInfoType) HasReservationStatusInfo() bool`

HasReservationStatusInfo returns a boolean if a field has been set.

### GetStayDateInfo

`func (o *ReservationShortInfoType) GetStayDateInfo() StayDateInfoType`

GetStayDateInfo returns the StayDateInfo field if non-nil, zero value otherwise.

### GetStayDateInfoOk

`func (o *ReservationShortInfoType) GetStayDateInfoOk() (*StayDateInfoType, bool)`

GetStayDateInfoOk returns a tuple with the StayDateInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDateInfo

`func (o *ReservationShortInfoType) SetStayDateInfo(v StayDateInfoType)`

SetStayDateInfo sets StayDateInfo field to given value.

### HasStayDateInfo

`func (o *ReservationShortInfoType) HasStayDateInfo() bool`

HasStayDateInfo returns a boolean if a field has been set.

### GetVipStatus

`func (o *ReservationShortInfoType) GetVipStatus() VIPStatusType`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *ReservationShortInfoType) GetVipStatusOk() (*VIPStatusType, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *ReservationShortInfoType) SetVipStatus(v VIPStatusType)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *ReservationShortInfoType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.

### GetProfileId

`func (o *ReservationShortInfoType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ReservationShortInfoType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ReservationShortInfoType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ReservationShortInfoType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetScheduledRoomMoveOut

`func (o *ReservationShortInfoType) GetScheduledRoomMoveOut() bool`

GetScheduledRoomMoveOut returns the ScheduledRoomMoveOut field if non-nil, zero value otherwise.

### GetScheduledRoomMoveOutOk

`func (o *ReservationShortInfoType) GetScheduledRoomMoveOutOk() (*bool, bool)`

GetScheduledRoomMoveOutOk returns a tuple with the ScheduledRoomMoveOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledRoomMoveOut

`func (o *ReservationShortInfoType) SetScheduledRoomMoveOut(v bool)`

SetScheduledRoomMoveOut sets ScheduledRoomMoveOut field to given value.

### HasScheduledRoomMoveOut

`func (o *ReservationShortInfoType) HasScheduledRoomMoveOut() bool`

HasScheduledRoomMoveOut returns a boolean if a field has been set.

### GetScheduledRoomMoveOutTime

`func (o *ReservationShortInfoType) GetScheduledRoomMoveOutTime() string`

GetScheduledRoomMoveOutTime returns the ScheduledRoomMoveOutTime field if non-nil, zero value otherwise.

### GetScheduledRoomMoveOutTimeOk

`func (o *ReservationShortInfoType) GetScheduledRoomMoveOutTimeOk() (*string, bool)`

GetScheduledRoomMoveOutTimeOk returns a tuple with the ScheduledRoomMoveOutTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledRoomMoveOutTime

`func (o *ReservationShortInfoType) SetScheduledRoomMoveOutTime(v string)`

SetScheduledRoomMoveOutTime sets ScheduledRoomMoveOutTime field to given value.

### HasScheduledRoomMoveOutTime

`func (o *ReservationShortInfoType) HasScheduledRoomMoveOutTime() bool`

HasScheduledRoomMoveOutTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


