# BlockPostingReservationsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArrivalDate** | Pointer to **string** | Arrival date. | [optional] 
**BlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ConfirmationNumber** | Pointer to **int32** | Confirmation Number of the Posting Account Reservation. | [optional] 
**DefaultPostingAccount** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**DepartureDate** | Pointer to **string** | Departure date. | [optional] 
**EventId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**GuestFirstName** | Pointer to **string** | Posting Account guest&#39;s first name.. | [optional] 
**GuestName** | Pointer to **string** | Posting Account guest name. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code of the Block. | [optional] 
**NoPost** | Pointer to **bool** | Flag to indicate whether posting charges is allowed. | [optional] 
**ReservationNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReservationStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**RoomHotelCode** | Pointer to **string** | Hotel Code of the Room. | [optional] 
**RoomId** | Pointer to **string** | Room Number. | [optional] 
**Size** | Pointer to **int32** | Number of Posting account reservations per block. | [optional] 

## Methods

### NewBlockPostingReservationsType

`func NewBlockPostingReservationsType() *BlockPostingReservationsType`

NewBlockPostingReservationsType instantiates a new BlockPostingReservationsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockPostingReservationsTypeWithDefaults

`func NewBlockPostingReservationsTypeWithDefaults() *BlockPostingReservationsType`

NewBlockPostingReservationsTypeWithDefaults instantiates a new BlockPostingReservationsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrivalDate

`func (o *BlockPostingReservationsType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *BlockPostingReservationsType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *BlockPostingReservationsType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *BlockPostingReservationsType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetBlockId

`func (o *BlockPostingReservationsType) GetBlockId() UniqueIDType`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BlockPostingReservationsType) GetBlockIdOk() (*UniqueIDType, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BlockPostingReservationsType) SetBlockId(v UniqueIDType)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BlockPostingReservationsType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetConfirmationNumber

`func (o *BlockPostingReservationsType) GetConfirmationNumber() int32`

GetConfirmationNumber returns the ConfirmationNumber field if non-nil, zero value otherwise.

### GetConfirmationNumberOk

`func (o *BlockPostingReservationsType) GetConfirmationNumberOk() (*int32, bool)`

GetConfirmationNumberOk returns a tuple with the ConfirmationNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNumber

`func (o *BlockPostingReservationsType) SetConfirmationNumber(v int32)`

SetConfirmationNumber sets ConfirmationNumber field to given value.

### HasConfirmationNumber

`func (o *BlockPostingReservationsType) HasConfirmationNumber() bool`

HasConfirmationNumber returns a boolean if a field has been set.

### GetDefaultPostingAccount

`func (o *BlockPostingReservationsType) GetDefaultPostingAccount() UniqueIDType`

GetDefaultPostingAccount returns the DefaultPostingAccount field if non-nil, zero value otherwise.

### GetDefaultPostingAccountOk

`func (o *BlockPostingReservationsType) GetDefaultPostingAccountOk() (*UniqueIDType, bool)`

GetDefaultPostingAccountOk returns a tuple with the DefaultPostingAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultPostingAccount

`func (o *BlockPostingReservationsType) SetDefaultPostingAccount(v UniqueIDType)`

SetDefaultPostingAccount sets DefaultPostingAccount field to given value.

### HasDefaultPostingAccount

`func (o *BlockPostingReservationsType) HasDefaultPostingAccount() bool`

HasDefaultPostingAccount returns a boolean if a field has been set.

### GetDepartureDate

`func (o *BlockPostingReservationsType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *BlockPostingReservationsType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *BlockPostingReservationsType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *BlockPostingReservationsType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetEventId

`func (o *BlockPostingReservationsType) GetEventId() UniqueIDType`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *BlockPostingReservationsType) GetEventIdOk() (*UniqueIDType, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *BlockPostingReservationsType) SetEventId(v UniqueIDType)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *BlockPostingReservationsType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetGuestFirstName

`func (o *BlockPostingReservationsType) GetGuestFirstName() string`

GetGuestFirstName returns the GuestFirstName field if non-nil, zero value otherwise.

### GetGuestFirstNameOk

`func (o *BlockPostingReservationsType) GetGuestFirstNameOk() (*string, bool)`

GetGuestFirstNameOk returns a tuple with the GuestFirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestFirstName

`func (o *BlockPostingReservationsType) SetGuestFirstName(v string)`

SetGuestFirstName sets GuestFirstName field to given value.

### HasGuestFirstName

`func (o *BlockPostingReservationsType) HasGuestFirstName() bool`

HasGuestFirstName returns a boolean if a field has been set.

### GetGuestName

`func (o *BlockPostingReservationsType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *BlockPostingReservationsType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *BlockPostingReservationsType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *BlockPostingReservationsType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockPostingReservationsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockPostingReservationsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockPostingReservationsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockPostingReservationsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNoPost

`func (o *BlockPostingReservationsType) GetNoPost() bool`

GetNoPost returns the NoPost field if non-nil, zero value otherwise.

### GetNoPostOk

`func (o *BlockPostingReservationsType) GetNoPostOk() (*bool, bool)`

GetNoPostOk returns a tuple with the NoPost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoPost

`func (o *BlockPostingReservationsType) SetNoPost(v bool)`

SetNoPost sets NoPost field to given value.

### HasNoPost

`func (o *BlockPostingReservationsType) HasNoPost() bool`

HasNoPost returns a boolean if a field has been set.

### GetReservationNameId

`func (o *BlockPostingReservationsType) GetReservationNameId() UniqueIDType`

GetReservationNameId returns the ReservationNameId field if non-nil, zero value otherwise.

### GetReservationNameIdOk

`func (o *BlockPostingReservationsType) GetReservationNameIdOk() (*UniqueIDType, bool)`

GetReservationNameIdOk returns a tuple with the ReservationNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNameId

`func (o *BlockPostingReservationsType) SetReservationNameId(v UniqueIDType)`

SetReservationNameId sets ReservationNameId field to given value.

### HasReservationNameId

`func (o *BlockPostingReservationsType) HasReservationNameId() bool`

HasReservationNameId returns a boolean if a field has been set.

### GetReservationStatus

`func (o *BlockPostingReservationsType) GetReservationStatus() BookingStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *BlockPostingReservationsType) GetReservationStatusOk() (*BookingStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *BlockPostingReservationsType) SetReservationStatus(v BookingStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *BlockPostingReservationsType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetRoomHotelCode

`func (o *BlockPostingReservationsType) GetRoomHotelCode() string`

GetRoomHotelCode returns the RoomHotelCode field if non-nil, zero value otherwise.

### GetRoomHotelCodeOk

`func (o *BlockPostingReservationsType) GetRoomHotelCodeOk() (*string, bool)`

GetRoomHotelCodeOk returns a tuple with the RoomHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomHotelCode

`func (o *BlockPostingReservationsType) SetRoomHotelCode(v string)`

SetRoomHotelCode sets RoomHotelCode field to given value.

### HasRoomHotelCode

`func (o *BlockPostingReservationsType) HasRoomHotelCode() bool`

HasRoomHotelCode returns a boolean if a field has been set.

### GetRoomId

`func (o *BlockPostingReservationsType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *BlockPostingReservationsType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *BlockPostingReservationsType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *BlockPostingReservationsType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetSize

`func (o *BlockPostingReservationsType) GetSize() int32`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *BlockPostingReservationsType) GetSizeOk() (*int32, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *BlockPostingReservationsType) SetSize(v int32)`

SetSize sets Size field to given value.

### HasSize

`func (o *BlockPostingReservationsType) HasSize() bool`

HasSize returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


