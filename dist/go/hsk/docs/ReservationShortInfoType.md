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
**RoomId** | Pointer to **string** | Indicates room number of the reservation. | [optional] 
**AdultCount** | Pointer to **int32** | Number of adults on the reservation. | [optional] 
**ChildCount** | Pointer to **int32** | Number of children on the reservation. | [optional] 
**ScheduledRoomMoveInfo** | Pointer to [**ScheduledRoomMoveInfoType**](ScheduledRoomMoveInfoType.md) |  | [optional] 
**ScheduledMoveInRoomId** | Pointer to **string** | Indicates the scheduled Move-In Room Number. | [optional] 
**ScheduledMoveOutRoomId** | Pointer to **string** | Indicates the scheduled Move-Out Room Number. | [optional] 
**Nationality** | Pointer to **string** | Nationality code identification. | [optional] 
**AlternateGivenName** | Pointer to **string** | Guest alternate given name, first name or any other names. | [optional] 

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

### GetRoomId

`func (o *ReservationShortInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ReservationShortInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ReservationShortInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ReservationShortInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetAdultCount

`func (o *ReservationShortInfoType) GetAdultCount() int32`

GetAdultCount returns the AdultCount field if non-nil, zero value otherwise.

### GetAdultCountOk

`func (o *ReservationShortInfoType) GetAdultCountOk() (*int32, bool)`

GetAdultCountOk returns a tuple with the AdultCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdultCount

`func (o *ReservationShortInfoType) SetAdultCount(v int32)`

SetAdultCount sets AdultCount field to given value.

### HasAdultCount

`func (o *ReservationShortInfoType) HasAdultCount() bool`

HasAdultCount returns a boolean if a field has been set.

### GetChildCount

`func (o *ReservationShortInfoType) GetChildCount() int32`

GetChildCount returns the ChildCount field if non-nil, zero value otherwise.

### GetChildCountOk

`func (o *ReservationShortInfoType) GetChildCountOk() (*int32, bool)`

GetChildCountOk returns a tuple with the ChildCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildCount

`func (o *ReservationShortInfoType) SetChildCount(v int32)`

SetChildCount sets ChildCount field to given value.

### HasChildCount

`func (o *ReservationShortInfoType) HasChildCount() bool`

HasChildCount returns a boolean if a field has been set.

### GetScheduledRoomMoveInfo

`func (o *ReservationShortInfoType) GetScheduledRoomMoveInfo() ScheduledRoomMoveInfoType`

GetScheduledRoomMoveInfo returns the ScheduledRoomMoveInfo field if non-nil, zero value otherwise.

### GetScheduledRoomMoveInfoOk

`func (o *ReservationShortInfoType) GetScheduledRoomMoveInfoOk() (*ScheduledRoomMoveInfoType, bool)`

GetScheduledRoomMoveInfoOk returns a tuple with the ScheduledRoomMoveInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledRoomMoveInfo

`func (o *ReservationShortInfoType) SetScheduledRoomMoveInfo(v ScheduledRoomMoveInfoType)`

SetScheduledRoomMoveInfo sets ScheduledRoomMoveInfo field to given value.

### HasScheduledRoomMoveInfo

`func (o *ReservationShortInfoType) HasScheduledRoomMoveInfo() bool`

HasScheduledRoomMoveInfo returns a boolean if a field has been set.

### GetScheduledMoveInRoomId

`func (o *ReservationShortInfoType) GetScheduledMoveInRoomId() string`

GetScheduledMoveInRoomId returns the ScheduledMoveInRoomId field if non-nil, zero value otherwise.

### GetScheduledMoveInRoomIdOk

`func (o *ReservationShortInfoType) GetScheduledMoveInRoomIdOk() (*string, bool)`

GetScheduledMoveInRoomIdOk returns a tuple with the ScheduledMoveInRoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledMoveInRoomId

`func (o *ReservationShortInfoType) SetScheduledMoveInRoomId(v string)`

SetScheduledMoveInRoomId sets ScheduledMoveInRoomId field to given value.

### HasScheduledMoveInRoomId

`func (o *ReservationShortInfoType) HasScheduledMoveInRoomId() bool`

HasScheduledMoveInRoomId returns a boolean if a field has been set.

### GetScheduledMoveOutRoomId

`func (o *ReservationShortInfoType) GetScheduledMoveOutRoomId() string`

GetScheduledMoveOutRoomId returns the ScheduledMoveOutRoomId field if non-nil, zero value otherwise.

### GetScheduledMoveOutRoomIdOk

`func (o *ReservationShortInfoType) GetScheduledMoveOutRoomIdOk() (*string, bool)`

GetScheduledMoveOutRoomIdOk returns a tuple with the ScheduledMoveOutRoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledMoveOutRoomId

`func (o *ReservationShortInfoType) SetScheduledMoveOutRoomId(v string)`

SetScheduledMoveOutRoomId sets ScheduledMoveOutRoomId field to given value.

### HasScheduledMoveOutRoomId

`func (o *ReservationShortInfoType) HasScheduledMoveOutRoomId() bool`

HasScheduledMoveOutRoomId returns a boolean if a field has been set.

### GetNationality

`func (o *ReservationShortInfoType) GetNationality() string`

GetNationality returns the Nationality field if non-nil, zero value otherwise.

### GetNationalityOk

`func (o *ReservationShortInfoType) GetNationalityOk() (*string, bool)`

GetNationalityOk returns a tuple with the Nationality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNationality

`func (o *ReservationShortInfoType) SetNationality(v string)`

SetNationality sets Nationality field to given value.

### HasNationality

`func (o *ReservationShortInfoType) HasNationality() bool`

HasNationality returns a boolean if a field has been set.

### GetAlternateGivenName

`func (o *ReservationShortInfoType) GetAlternateGivenName() string`

GetAlternateGivenName returns the AlternateGivenName field if non-nil, zero value otherwise.

### GetAlternateGivenNameOk

`func (o *ReservationShortInfoType) GetAlternateGivenNameOk() (*string, bool)`

GetAlternateGivenNameOk returns a tuple with the AlternateGivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateGivenName

`func (o *ReservationShortInfoType) SetAlternateGivenName(v string)`

SetAlternateGivenName sets AlternateGivenName field to given value.

### HasAlternateGivenName

`func (o *ReservationShortInfoType) HasAlternateGivenName() bool`

HasAlternateGivenName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


