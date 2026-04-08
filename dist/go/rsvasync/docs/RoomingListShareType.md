# RoomingListShareType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservation** | Pointer to [**[]RoomingListShareReservationType**](RoomingListShareReservationType.md) | Contains information about the rooming list reservation that is to be shared and specifies the type of share that is to be created. | [optional] 
**EffectiveRates** | Pointer to [**[]EffectiveRateType**](EffectiveRateType.md) | Collection of effective rate amount per guest on specific dates. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewRoomingListShareType

`func NewRoomingListShareType() *RoomingListShareType`

NewRoomingListShareType instantiates a new RoomingListShareType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomingListShareTypeWithDefaults

`func NewRoomingListShareTypeWithDefaults() *RoomingListShareType`

NewRoomingListShareTypeWithDefaults instantiates a new RoomingListShareType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservation

`func (o *RoomingListShareType) GetReservation() []RoomingListShareReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *RoomingListShareType) GetReservationOk() (*[]RoomingListShareReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *RoomingListShareType) SetReservation(v []RoomingListShareReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *RoomingListShareType) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetEffectiveRates

`func (o *RoomingListShareType) GetEffectiveRates() []EffectiveRateType`

GetEffectiveRates returns the EffectiveRates field if non-nil, zero value otherwise.

### GetEffectiveRatesOk

`func (o *RoomingListShareType) GetEffectiveRatesOk() (*[]EffectiveRateType, bool)`

GetEffectiveRatesOk returns a tuple with the EffectiveRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveRates

`func (o *RoomingListShareType) SetEffectiveRates(v []EffectiveRateType)`

SetEffectiveRates sets EffectiveRates field to given value.

### HasEffectiveRates

`func (o *RoomingListShareType) HasEffectiveRates() bool`

HasEffectiveRates returns a boolean if a field has been set.

### GetTimeSpan

`func (o *RoomingListShareType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *RoomingListShareType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *RoomingListShareType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *RoomingListShareType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


