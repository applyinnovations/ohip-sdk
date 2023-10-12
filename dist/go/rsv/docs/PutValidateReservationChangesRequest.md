# PutValidateReservationChangesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservation** | Pointer to [**HotelReservationType**](HotelReservationType.md) |  | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Instructions** | Pointer to [**ValidateReservationChangesInstructions**](ValidateReservationChangesInstructions.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutValidateReservationChangesRequest

`func NewPutValidateReservationChangesRequest() *PutValidateReservationChangesRequest`

NewPutValidateReservationChangesRequest instantiates a new PutValidateReservationChangesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutValidateReservationChangesRequestWithDefaults

`func NewPutValidateReservationChangesRequestWithDefaults() *PutValidateReservationChangesRequest`

NewPutValidateReservationChangesRequestWithDefaults instantiates a new PutValidateReservationChangesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservation

`func (o *PutValidateReservationChangesRequest) GetReservation() HotelReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *PutValidateReservationChangesRequest) GetReservationOk() (*HotelReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *PutValidateReservationChangesRequest) SetReservation(v HotelReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *PutValidateReservationChangesRequest) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetTimeSpan

`func (o *PutValidateReservationChangesRequest) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *PutValidateReservationChangesRequest) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *PutValidateReservationChangesRequest) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *PutValidateReservationChangesRequest) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetInstructions

`func (o *PutValidateReservationChangesRequest) GetInstructions() ValidateReservationChangesInstructions`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *PutValidateReservationChangesRequest) GetInstructionsOk() (*ValidateReservationChangesInstructions, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *PutValidateReservationChangesRequest) SetInstructions(v ValidateReservationChangesInstructions)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *PutValidateReservationChangesRequest) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *PutValidateReservationChangesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutValidateReservationChangesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutValidateReservationChangesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutValidateReservationChangesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutValidateReservationChangesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutValidateReservationChangesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutValidateReservationChangesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutValidateReservationChangesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


