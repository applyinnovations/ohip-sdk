# MoveReservationHotelCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceHotelCode** | Pointer to **string** | Hotel code for the current reservation being moved. | [optional] 
**DestinationHotelCode** | Pointer to **string** | Hotel code for the hotel which the reservation will be moved. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ConfiguredReservation** | Pointer to [**HotelReservationInstructionType**](HotelReservationInstructionType.md) |  | [optional] 
**IncludedSharers** | Pointer to [**[][]UniqueIDType**]([]UniqueIDType.md) | Valid share reservation identifier. This ID will be verified against the SourceHotel. | [optional] 
**MoveReasonCode** | Pointer to **string** |  | [optional] 
**RetainRateCodeAndAmount** | Pointer to **bool** | If true, it indicates that rate codes and amounts for different days of the source reservation will be moved to target reservation. When false or null that means available rate codes from target property is used and will be part of REST request already. | [optional] 

## Methods

### NewMoveReservationHotelCriteriaType

`func NewMoveReservationHotelCriteriaType() *MoveReservationHotelCriteriaType`

NewMoveReservationHotelCriteriaType instantiates a new MoveReservationHotelCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMoveReservationHotelCriteriaTypeWithDefaults

`func NewMoveReservationHotelCriteriaTypeWithDefaults() *MoveReservationHotelCriteriaType`

NewMoveReservationHotelCriteriaTypeWithDefaults instantiates a new MoveReservationHotelCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceHotelCode

`func (o *MoveReservationHotelCriteriaType) GetSourceHotelCode() string`

GetSourceHotelCode returns the SourceHotelCode field if non-nil, zero value otherwise.

### GetSourceHotelCodeOk

`func (o *MoveReservationHotelCriteriaType) GetSourceHotelCodeOk() (*string, bool)`

GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceHotelCode

`func (o *MoveReservationHotelCriteriaType) SetSourceHotelCode(v string)`

SetSourceHotelCode sets SourceHotelCode field to given value.

### HasSourceHotelCode

`func (o *MoveReservationHotelCriteriaType) HasSourceHotelCode() bool`

HasSourceHotelCode returns a boolean if a field has been set.

### GetDestinationHotelCode

`func (o *MoveReservationHotelCriteriaType) GetDestinationHotelCode() string`

GetDestinationHotelCode returns the DestinationHotelCode field if non-nil, zero value otherwise.

### GetDestinationHotelCodeOk

`func (o *MoveReservationHotelCriteriaType) GetDestinationHotelCodeOk() (*string, bool)`

GetDestinationHotelCodeOk returns a tuple with the DestinationHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinationHotelCode

`func (o *MoveReservationHotelCriteriaType) SetDestinationHotelCode(v string)`

SetDestinationHotelCode sets DestinationHotelCode field to given value.

### HasDestinationHotelCode

`func (o *MoveReservationHotelCriteriaType) HasDestinationHotelCode() bool`

HasDestinationHotelCode returns a boolean if a field has been set.

### GetReservationId

`func (o *MoveReservationHotelCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *MoveReservationHotelCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *MoveReservationHotelCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *MoveReservationHotelCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetConfiguredReservation

`func (o *MoveReservationHotelCriteriaType) GetConfiguredReservation() HotelReservationInstructionType`

GetConfiguredReservation returns the ConfiguredReservation field if non-nil, zero value otherwise.

### GetConfiguredReservationOk

`func (o *MoveReservationHotelCriteriaType) GetConfiguredReservationOk() (*HotelReservationInstructionType, bool)`

GetConfiguredReservationOk returns a tuple with the ConfiguredReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfiguredReservation

`func (o *MoveReservationHotelCriteriaType) SetConfiguredReservation(v HotelReservationInstructionType)`

SetConfiguredReservation sets ConfiguredReservation field to given value.

### HasConfiguredReservation

`func (o *MoveReservationHotelCriteriaType) HasConfiguredReservation() bool`

HasConfiguredReservation returns a boolean if a field has been set.

### GetIncludedSharers

`func (o *MoveReservationHotelCriteriaType) GetIncludedSharers() [][]UniqueIDType`

GetIncludedSharers returns the IncludedSharers field if non-nil, zero value otherwise.

### GetIncludedSharersOk

`func (o *MoveReservationHotelCriteriaType) GetIncludedSharersOk() (*[][]UniqueIDType, bool)`

GetIncludedSharersOk returns a tuple with the IncludedSharers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedSharers

`func (o *MoveReservationHotelCriteriaType) SetIncludedSharers(v [][]UniqueIDType)`

SetIncludedSharers sets IncludedSharers field to given value.

### HasIncludedSharers

`func (o *MoveReservationHotelCriteriaType) HasIncludedSharers() bool`

HasIncludedSharers returns a boolean if a field has been set.

### GetMoveReasonCode

`func (o *MoveReservationHotelCriteriaType) GetMoveReasonCode() string`

GetMoveReasonCode returns the MoveReasonCode field if non-nil, zero value otherwise.

### GetMoveReasonCodeOk

`func (o *MoveReservationHotelCriteriaType) GetMoveReasonCodeOk() (*string, bool)`

GetMoveReasonCodeOk returns a tuple with the MoveReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveReasonCode

`func (o *MoveReservationHotelCriteriaType) SetMoveReasonCode(v string)`

SetMoveReasonCode sets MoveReasonCode field to given value.

### HasMoveReasonCode

`func (o *MoveReservationHotelCriteriaType) HasMoveReasonCode() bool`

HasMoveReasonCode returns a boolean if a field has been set.

### GetRetainRateCodeAndAmount

`func (o *MoveReservationHotelCriteriaType) GetRetainRateCodeAndAmount() bool`

GetRetainRateCodeAndAmount returns the RetainRateCodeAndAmount field if non-nil, zero value otherwise.

### GetRetainRateCodeAndAmountOk

`func (o *MoveReservationHotelCriteriaType) GetRetainRateCodeAndAmountOk() (*bool, bool)`

GetRetainRateCodeAndAmountOk returns a tuple with the RetainRateCodeAndAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetainRateCodeAndAmount

`func (o *MoveReservationHotelCriteriaType) SetRetainRateCodeAndAmount(v bool)`

SetRetainRateCodeAndAmount sets RetainRateCodeAndAmount field to given value.

### HasRetainRateCodeAndAmount

`func (o *MoveReservationHotelCriteriaType) HasRetainRateCodeAndAmount() bool`

HasRetainRateCodeAndAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


