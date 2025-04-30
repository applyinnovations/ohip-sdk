# ReservationRotationPointsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomId** | Pointer to **string** | Room Number | [optional] 
**ArrivalDate** | Pointer to **string** | Reservation arrival date | [optional] 
**DepartureDate** | Pointer to **string** | Reservation departure date | [optional] 
**Nights** | Pointer to **int32** | The number of nights of the reservation. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique identifier of the reservation like Reservation Name Id, Confirmation Number. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**GuestName** | Pointer to **string** | The guest name on the reservation. | [optional] 
**TotalPoints** | Pointer to **float32** | Total rotation points for the room. | [optional] 
**PointsAdjusted** | Pointer to **bool** | Whether rotation points for the room have been adjusted. | [optional] 

## Methods

### NewReservationRotationPointsType

`func NewReservationRotationPointsType() *ReservationRotationPointsType`

NewReservationRotationPointsType instantiates a new ReservationRotationPointsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationRotationPointsTypeWithDefaults

`func NewReservationRotationPointsTypeWithDefaults() *ReservationRotationPointsType`

NewReservationRotationPointsTypeWithDefaults instantiates a new ReservationRotationPointsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomId

`func (o *ReservationRotationPointsType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ReservationRotationPointsType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ReservationRotationPointsType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ReservationRotationPointsType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetArrivalDate

`func (o *ReservationRotationPointsType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *ReservationRotationPointsType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *ReservationRotationPointsType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *ReservationRotationPointsType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *ReservationRotationPointsType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *ReservationRotationPointsType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *ReservationRotationPointsType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *ReservationRotationPointsType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetNights

`func (o *ReservationRotationPointsType) GetNights() int32`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *ReservationRotationPointsType) GetNightsOk() (*int32, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *ReservationRotationPointsType) SetNights(v int32)`

SetNights sets Nights field to given value.

### HasNights

`func (o *ReservationRotationPointsType) HasNights() bool`

HasNights returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ReservationRotationPointsType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReservationRotationPointsType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReservationRotationPointsType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReservationRotationPointsType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetProfileId

`func (o *ReservationRotationPointsType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ReservationRotationPointsType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ReservationRotationPointsType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ReservationRotationPointsType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetGuestName

`func (o *ReservationRotationPointsType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *ReservationRotationPointsType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *ReservationRotationPointsType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *ReservationRotationPointsType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetTotalPoints

`func (o *ReservationRotationPointsType) GetTotalPoints() float32`

GetTotalPoints returns the TotalPoints field if non-nil, zero value otherwise.

### GetTotalPointsOk

`func (o *ReservationRotationPointsType) GetTotalPointsOk() (*float32, bool)`

GetTotalPointsOk returns a tuple with the TotalPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPoints

`func (o *ReservationRotationPointsType) SetTotalPoints(v float32)`

SetTotalPoints sets TotalPoints field to given value.

### HasTotalPoints

`func (o *ReservationRotationPointsType) HasTotalPoints() bool`

HasTotalPoints returns a boolean if a field has been set.

### GetPointsAdjusted

`func (o *ReservationRotationPointsType) GetPointsAdjusted() bool`

GetPointsAdjusted returns the PointsAdjusted field if non-nil, zero value otherwise.

### GetPointsAdjustedOk

`func (o *ReservationRotationPointsType) GetPointsAdjustedOk() (*bool, bool)`

GetPointsAdjustedOk returns a tuple with the PointsAdjusted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsAdjusted

`func (o *ReservationRotationPointsType) SetPointsAdjusted(v bool)`

SetPointsAdjusted sets PointsAdjusted field to given value.

### HasPointsAdjusted

`func (o *ReservationRotationPointsType) HasPointsAdjusted() bool`

HasPointsAdjusted returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


