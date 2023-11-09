# ValidateReservationChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Instructions** | Pointer to [**ValidateReservationChangesInstructions**](ValidateReservationChangesInstructions.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Reservation** | Pointer to [**HotelReservationType**](HotelReservationType.md) |  | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewValidateReservationChanges

`func NewValidateReservationChanges() *ValidateReservationChanges`

NewValidateReservationChanges instantiates a new ValidateReservationChanges object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateReservationChangesWithDefaults

`func NewValidateReservationChangesWithDefaults() *ValidateReservationChanges`

NewValidateReservationChangesWithDefaults instantiates a new ValidateReservationChanges object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInstructions

`func (o *ValidateReservationChanges) GetInstructions() ValidateReservationChangesInstructions`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *ValidateReservationChanges) GetInstructionsOk() (*ValidateReservationChangesInstructions, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *ValidateReservationChanges) SetInstructions(v ValidateReservationChangesInstructions)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *ValidateReservationChanges) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *ValidateReservationChanges) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ValidateReservationChanges) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ValidateReservationChanges) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ValidateReservationChanges) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservation

`func (o *ValidateReservationChanges) GetReservation() HotelReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *ValidateReservationChanges) GetReservationOk() (*HotelReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *ValidateReservationChanges) SetReservation(v HotelReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *ValidateReservationChanges) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetTimeSpan

`func (o *ValidateReservationChanges) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *ValidateReservationChanges) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *ValidateReservationChanges) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *ValidateReservationChanges) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetWarnings

`func (o *ValidateReservationChanges) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ValidateReservationChanges) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ValidateReservationChanges) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ValidateReservationChanges) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


