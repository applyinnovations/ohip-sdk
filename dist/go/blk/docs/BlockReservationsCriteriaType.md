# BlockReservationsCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**[]BlockReservationId**](BlockReservationId.md) | Unique identifier for a block reservation. | [optional] 
**StayOn** | Pointer to [**BlockReservationsCriteriaTypeStayOn**](BlockReservationsCriteriaTypeStayOn.md) |  | [optional] 
**ApplyChangesTo** | Pointer to [**BlockApplyChangesToType**](BlockApplyChangesToType.md) |  | [optional] 

## Methods

### NewBlockReservationsCriteriaType

`func NewBlockReservationsCriteriaType() *BlockReservationsCriteriaType`

NewBlockReservationsCriteriaType instantiates a new BlockReservationsCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockReservationsCriteriaTypeWithDefaults

`func NewBlockReservationsCriteriaTypeWithDefaults() *BlockReservationsCriteriaType`

NewBlockReservationsCriteriaTypeWithDefaults instantiates a new BlockReservationsCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservations

`func (o *BlockReservationsCriteriaType) GetReservations() []BlockReservationId`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *BlockReservationsCriteriaType) GetReservationsOk() (*[]BlockReservationId, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *BlockReservationsCriteriaType) SetReservations(v []BlockReservationId)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *BlockReservationsCriteriaType) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetStayOn

`func (o *BlockReservationsCriteriaType) GetStayOn() BlockReservationsCriteriaTypeStayOn`

GetStayOn returns the StayOn field if non-nil, zero value otherwise.

### GetStayOnOk

`func (o *BlockReservationsCriteriaType) GetStayOnOk() (*BlockReservationsCriteriaTypeStayOn, bool)`

GetStayOnOk returns a tuple with the StayOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayOn

`func (o *BlockReservationsCriteriaType) SetStayOn(v BlockReservationsCriteriaTypeStayOn)`

SetStayOn sets StayOn field to given value.

### HasStayOn

`func (o *BlockReservationsCriteriaType) HasStayOn() bool`

HasStayOn returns a boolean if a field has been set.

### GetApplyChangesTo

`func (o *BlockReservationsCriteriaType) GetApplyChangesTo() BlockApplyChangesToType`

GetApplyChangesTo returns the ApplyChangesTo field if non-nil, zero value otherwise.

### GetApplyChangesToOk

`func (o *BlockReservationsCriteriaType) GetApplyChangesToOk() (*BlockApplyChangesToType, bool)`

GetApplyChangesToOk returns a tuple with the ApplyChangesTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyChangesTo

`func (o *BlockReservationsCriteriaType) SetApplyChangesTo(v BlockApplyChangesToType)`

SetApplyChangesTo sets ApplyChangesTo field to given value.

### HasApplyChangesTo

`func (o *BlockReservationsCriteriaType) HasApplyChangesTo() bool`

HasApplyChangesTo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


