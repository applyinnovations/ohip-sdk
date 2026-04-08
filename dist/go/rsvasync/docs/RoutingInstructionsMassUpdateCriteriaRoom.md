# RoutingInstructionsMassUpdateCriteriaRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Instructions** | Pointer to [**[]MassUpdateRoutingInstructionType**](MassUpdateRoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 

## Methods

### NewRoutingInstructionsMassUpdateCriteriaRoom

`func NewRoutingInstructionsMassUpdateCriteriaRoom() *RoutingInstructionsMassUpdateCriteriaRoom`

NewRoutingInstructionsMassUpdateCriteriaRoom instantiates a new RoutingInstructionsMassUpdateCriteriaRoom object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsMassUpdateCriteriaRoomWithDefaults

`func NewRoutingInstructionsMassUpdateCriteriaRoomWithDefaults() *RoutingInstructionsMassUpdateCriteriaRoom`

NewRoutingInstructionsMassUpdateCriteriaRoomWithDefaults instantiates a new RoutingInstructionsMassUpdateCriteriaRoom object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationNameId

`func (o *RoutingInstructionsMassUpdateCriteriaRoom) GetReservationNameId() UniqueIDType`

GetReservationNameId returns the ReservationNameId field if non-nil, zero value otherwise.

### GetReservationNameIdOk

`func (o *RoutingInstructionsMassUpdateCriteriaRoom) GetReservationNameIdOk() (*UniqueIDType, bool)`

GetReservationNameIdOk returns a tuple with the ReservationNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNameId

`func (o *RoutingInstructionsMassUpdateCriteriaRoom) SetReservationNameId(v UniqueIDType)`

SetReservationNameId sets ReservationNameId field to given value.

### HasReservationNameId

`func (o *RoutingInstructionsMassUpdateCriteriaRoom) HasReservationNameId() bool`

HasReservationNameId returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInstructionsMassUpdateCriteriaRoom) GetInstructions() []MassUpdateRoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInstructionsMassUpdateCriteriaRoom) GetInstructionsOk() (*[]MassUpdateRoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInstructionsMassUpdateCriteriaRoom) SetInstructions(v []MassUpdateRoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInstructionsMassUpdateCriteriaRoom) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


