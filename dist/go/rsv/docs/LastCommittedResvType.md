# LastCommittedResvType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**RoomType** | Pointer to **string** | Current room type. | [optional] 
**NumberOfRooms** | Pointer to **int32** | Number of rooms | [optional] 
**ArrivalDate** | Pointer to **string** |  | [optional] 
**DepartureDate** | Pointer to **string** |  | [optional] 

## Methods

### NewLastCommittedResvType

`func NewLastCommittedResvType() *LastCommittedResvType`

NewLastCommittedResvType instantiates a new LastCommittedResvType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLastCommittedResvTypeWithDefaults

`func NewLastCommittedResvTypeWithDefaults() *LastCommittedResvType`

NewLastCommittedResvTypeWithDefaults instantiates a new LastCommittedResvType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationStatus

`func (o *LastCommittedResvType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *LastCommittedResvType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *LastCommittedResvType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *LastCommittedResvType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetRoomType

`func (o *LastCommittedResvType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *LastCommittedResvType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *LastCommittedResvType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *LastCommittedResvType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetNumberOfRooms

`func (o *LastCommittedResvType) GetNumberOfRooms() int32`

GetNumberOfRooms returns the NumberOfRooms field if non-nil, zero value otherwise.

### GetNumberOfRoomsOk

`func (o *LastCommittedResvType) GetNumberOfRoomsOk() (*int32, bool)`

GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfRooms

`func (o *LastCommittedResvType) SetNumberOfRooms(v int32)`

SetNumberOfRooms sets NumberOfRooms field to given value.

### HasNumberOfRooms

`func (o *LastCommittedResvType) HasNumberOfRooms() bool`

HasNumberOfRooms returns a boolean if a field has been set.

### GetArrivalDate

`func (o *LastCommittedResvType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *LastCommittedResvType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *LastCommittedResvType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *LastCommittedResvType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *LastCommittedResvType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *LastCommittedResvType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *LastCommittedResvType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *LastCommittedResvType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


