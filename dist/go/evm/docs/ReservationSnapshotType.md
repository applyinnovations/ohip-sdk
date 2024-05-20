# ReservationSnapshotType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelReservation** | Pointer to [**HotelReservationType**](HotelReservationType.md) |  | [optional] 
**RoutingInstructions** | Pointer to [**[]RoutingInfoType**](RoutingInfoType.md) | A routing info object can either be of type Folio OR of type Room with its corresponding instructions. | [optional] 

## Methods

### NewReservationSnapshotType

`func NewReservationSnapshotType() *ReservationSnapshotType`

NewReservationSnapshotType instantiates a new ReservationSnapshotType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationSnapshotTypeWithDefaults

`func NewReservationSnapshotTypeWithDefaults() *ReservationSnapshotType`

NewReservationSnapshotTypeWithDefaults instantiates a new ReservationSnapshotType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelReservation

`func (o *ReservationSnapshotType) GetHotelReservation() HotelReservationType`

GetHotelReservation returns the HotelReservation field if non-nil, zero value otherwise.

### GetHotelReservationOk

`func (o *ReservationSnapshotType) GetHotelReservationOk() (*HotelReservationType, bool)`

GetHotelReservationOk returns a tuple with the HotelReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelReservation

`func (o *ReservationSnapshotType) SetHotelReservation(v HotelReservationType)`

SetHotelReservation sets HotelReservation field to given value.

### HasHotelReservation

`func (o *ReservationSnapshotType) HasHotelReservation() bool`

HasHotelReservation returns a boolean if a field has been set.

### GetRoutingInstructions

`func (o *ReservationSnapshotType) GetRoutingInstructions() []RoutingInfoType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *ReservationSnapshotType) GetRoutingInstructionsOk() (*[]RoutingInfoType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *ReservationSnapshotType) SetRoutingInstructions(v []RoutingInfoType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *ReservationSnapshotType) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


