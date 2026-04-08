# ResHousekeepingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Instructions** | Pointer to **string** | Turndown instructions for the room. | [optional] 
**TurndownRequested** | Pointer to **bool** | Indicates whether guest wants turndown facility or not. | [optional] 
**ExpectedServiceTime** | Pointer to **string** | Expected Start Time for housekeeping task(s). | [optional] 
**RoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**FrontOfficeStatus** | Pointer to [**FrontOfficeRoomStatusType**](FrontOfficeRoomStatusType.md) |  | [optional] 
**HousekeepingStatus** | Pointer to [**FrontOfficeRoomStatusType**](FrontOfficeRoomStatusType.md) |  | [optional] 

## Methods

### NewResHousekeepingType

`func NewResHousekeepingType() *ResHousekeepingType`

NewResHousekeepingType instantiates a new ResHousekeepingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResHousekeepingTypeWithDefaults

`func NewResHousekeepingTypeWithDefaults() *ResHousekeepingType`

NewResHousekeepingTypeWithDefaults instantiates a new ResHousekeepingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInstructions

`func (o *ResHousekeepingType) GetInstructions() string`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *ResHousekeepingType) GetInstructionsOk() (*string, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *ResHousekeepingType) SetInstructions(v string)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *ResHousekeepingType) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetTurndownRequested

`func (o *ResHousekeepingType) GetTurndownRequested() bool`

GetTurndownRequested returns the TurndownRequested field if non-nil, zero value otherwise.

### GetTurndownRequestedOk

`func (o *ResHousekeepingType) GetTurndownRequestedOk() (*bool, bool)`

GetTurndownRequestedOk returns a tuple with the TurndownRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownRequested

`func (o *ResHousekeepingType) SetTurndownRequested(v bool)`

SetTurndownRequested sets TurndownRequested field to given value.

### HasTurndownRequested

`func (o *ResHousekeepingType) HasTurndownRequested() bool`

HasTurndownRequested returns a boolean if a field has been set.

### GetExpectedServiceTime

`func (o *ResHousekeepingType) GetExpectedServiceTime() string`

GetExpectedServiceTime returns the ExpectedServiceTime field if non-nil, zero value otherwise.

### GetExpectedServiceTimeOk

`func (o *ResHousekeepingType) GetExpectedServiceTimeOk() (*string, bool)`

GetExpectedServiceTimeOk returns a tuple with the ExpectedServiceTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedServiceTime

`func (o *ResHousekeepingType) SetExpectedServiceTime(v string)`

SetExpectedServiceTime sets ExpectedServiceTime field to given value.

### HasExpectedServiceTime

`func (o *ResHousekeepingType) HasExpectedServiceTime() bool`

HasExpectedServiceTime returns a boolean if a field has been set.

### GetRoomStatus

`func (o *ResHousekeepingType) GetRoomStatus() HousekeepingRoomStatusType`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *ResHousekeepingType) GetRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *ResHousekeepingType) SetRoomStatus(v HousekeepingRoomStatusType)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *ResHousekeepingType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetFrontOfficeStatus

`func (o *ResHousekeepingType) GetFrontOfficeStatus() FrontOfficeRoomStatusType`

GetFrontOfficeStatus returns the FrontOfficeStatus field if non-nil, zero value otherwise.

### GetFrontOfficeStatusOk

`func (o *ResHousekeepingType) GetFrontOfficeStatusOk() (*FrontOfficeRoomStatusType, bool)`

GetFrontOfficeStatusOk returns a tuple with the FrontOfficeStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrontOfficeStatus

`func (o *ResHousekeepingType) SetFrontOfficeStatus(v FrontOfficeRoomStatusType)`

SetFrontOfficeStatus sets FrontOfficeStatus field to given value.

### HasFrontOfficeStatus

`func (o *ResHousekeepingType) HasFrontOfficeStatus() bool`

HasFrontOfficeStatus returns a boolean if a field has been set.

### GetHousekeepingStatus

`func (o *ResHousekeepingType) GetHousekeepingStatus() FrontOfficeRoomStatusType`

GetHousekeepingStatus returns the HousekeepingStatus field if non-nil, zero value otherwise.

### GetHousekeepingStatusOk

`func (o *ResHousekeepingType) GetHousekeepingStatusOk() (*FrontOfficeRoomStatusType, bool)`

GetHousekeepingStatusOk returns a tuple with the HousekeepingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingStatus

`func (o *ResHousekeepingType) SetHousekeepingStatus(v FrontOfficeRoomStatusType)`

SetHousekeepingStatus sets HousekeepingStatus field to given value.

### HasHousekeepingStatus

`func (o *ResHousekeepingType) HasHousekeepingStatus() bool`

HasHousekeepingStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


