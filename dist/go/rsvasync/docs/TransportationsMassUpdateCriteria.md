# TransportationsMassUpdateCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIds** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique ID of reservations to be updated. | [optional] 
**ArrivalTransport** | Pointer to [**MassTransportInfoType**](MassTransportInfoType.md) |  | [optional] 
**DepartureTransport** | Pointer to [**MassTransportInfoType**](MassTransportInfoType.md) |  | [optional] 

## Methods

### NewTransportationsMassUpdateCriteria

`func NewTransportationsMassUpdateCriteria() *TransportationsMassUpdateCriteria`

NewTransportationsMassUpdateCriteria instantiates a new TransportationsMassUpdateCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransportationsMassUpdateCriteriaWithDefaults

`func NewTransportationsMassUpdateCriteriaWithDefaults() *TransportationsMassUpdateCriteria`

NewTransportationsMassUpdateCriteriaWithDefaults instantiates a new TransportationsMassUpdateCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIds

`func (o *TransportationsMassUpdateCriteria) GetReservationIds() []UniqueIDType`

GetReservationIds returns the ReservationIds field if non-nil, zero value otherwise.

### GetReservationIdsOk

`func (o *TransportationsMassUpdateCriteria) GetReservationIdsOk() (*[]UniqueIDType, bool)`

GetReservationIdsOk returns a tuple with the ReservationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIds

`func (o *TransportationsMassUpdateCriteria) SetReservationIds(v []UniqueIDType)`

SetReservationIds sets ReservationIds field to given value.

### HasReservationIds

`func (o *TransportationsMassUpdateCriteria) HasReservationIds() bool`

HasReservationIds returns a boolean if a field has been set.

### GetArrivalTransport

`func (o *TransportationsMassUpdateCriteria) GetArrivalTransport() MassTransportInfoType`

GetArrivalTransport returns the ArrivalTransport field if non-nil, zero value otherwise.

### GetArrivalTransportOk

`func (o *TransportationsMassUpdateCriteria) GetArrivalTransportOk() (*MassTransportInfoType, bool)`

GetArrivalTransportOk returns a tuple with the ArrivalTransport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalTransport

`func (o *TransportationsMassUpdateCriteria) SetArrivalTransport(v MassTransportInfoType)`

SetArrivalTransport sets ArrivalTransport field to given value.

### HasArrivalTransport

`func (o *TransportationsMassUpdateCriteria) HasArrivalTransport() bool`

HasArrivalTransport returns a boolean if a field has been set.

### GetDepartureTransport

`func (o *TransportationsMassUpdateCriteria) GetDepartureTransport() MassTransportInfoType`

GetDepartureTransport returns the DepartureTransport field if non-nil, zero value otherwise.

### GetDepartureTransportOk

`func (o *TransportationsMassUpdateCriteria) GetDepartureTransportOk() (*MassTransportInfoType, bool)`

GetDepartureTransportOk returns a tuple with the DepartureTransport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureTransport

`func (o *TransportationsMassUpdateCriteria) SetDepartureTransport(v MassTransportInfoType)`

SetDepartureTransport sets DepartureTransport field to given value.

### HasDepartureTransport

`func (o *TransportationsMassUpdateCriteria) HasDepartureTransport() bool`

HasDepartureTransport returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


