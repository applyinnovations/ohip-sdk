# RoomingListShareReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TypeOfRateAmount** | Pointer to [**ShareDistributionInstructionType**](ShareDistributionInstructionType.md) |  | [optional] 
**PrimaryShare** | Pointer to **bool** | Indicates if this reservation is a primary sharer. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewRoomingListShareReservationType

`func NewRoomingListShareReservationType() *RoomingListShareReservationType`

NewRoomingListShareReservationType instantiates a new RoomingListShareReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomingListShareReservationTypeWithDefaults

`func NewRoomingListShareReservationTypeWithDefaults() *RoomingListShareReservationType`

NewRoomingListShareReservationTypeWithDefaults instantiates a new RoomingListShareReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *RoomingListShareReservationType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *RoomingListShareReservationType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *RoomingListShareReservationType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *RoomingListShareReservationType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetTypeOfRateAmount

`func (o *RoomingListShareReservationType) GetTypeOfRateAmount() ShareDistributionInstructionType`

GetTypeOfRateAmount returns the TypeOfRateAmount field if non-nil, zero value otherwise.

### GetTypeOfRateAmountOk

`func (o *RoomingListShareReservationType) GetTypeOfRateAmountOk() (*ShareDistributionInstructionType, bool)`

GetTypeOfRateAmountOk returns a tuple with the TypeOfRateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeOfRateAmount

`func (o *RoomingListShareReservationType) SetTypeOfRateAmount(v ShareDistributionInstructionType)`

SetTypeOfRateAmount sets TypeOfRateAmount field to given value.

### HasTypeOfRateAmount

`func (o *RoomingListShareReservationType) HasTypeOfRateAmount() bool`

HasTypeOfRateAmount returns a boolean if a field has been set.

### GetPrimaryShare

`func (o *RoomingListShareReservationType) GetPrimaryShare() bool`

GetPrimaryShare returns the PrimaryShare field if non-nil, zero value otherwise.

### GetPrimaryShareOk

`func (o *RoomingListShareReservationType) GetPrimaryShareOk() (*bool, bool)`

GetPrimaryShareOk returns a tuple with the PrimaryShare field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryShare

`func (o *RoomingListShareReservationType) SetPrimaryShare(v bool)`

SetPrimaryShare sets PrimaryShare field to given value.

### HasPrimaryShare

`func (o *RoomingListShareReservationType) HasPrimaryShare() bool`

HasPrimaryShare returns a boolean if a field has been set.

### GetTimeSpan

`func (o *RoomingListShareReservationType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *RoomingListShareReservationType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *RoomingListShareReservationType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *RoomingListShareReservationType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


