# Schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestHouseKeepingInstructions** | Pointer to [**ResHousekeepingType**](ResHousekeepingType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**HousekeepingSchedule** | Pointer to [**ReservationHousekeepingScheduleType**](ReservationHousekeepingScheduleType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSchedule

`func NewSchedule() *Schedule`

NewSchedule instantiates a new Schedule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleWithDefaults

`func NewScheduleWithDefaults() *Schedule`

NewScheduleWithDefaults instantiates a new Schedule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestHouseKeepingInstructions

`func (o *Schedule) GetGuestHouseKeepingInstructions() ResHousekeepingType`

GetGuestHouseKeepingInstructions returns the GuestHouseKeepingInstructions field if non-nil, zero value otherwise.

### GetGuestHouseKeepingInstructionsOk

`func (o *Schedule) GetGuestHouseKeepingInstructionsOk() (*ResHousekeepingType, bool)`

GetGuestHouseKeepingInstructionsOk returns a tuple with the GuestHouseKeepingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestHouseKeepingInstructions

`func (o *Schedule) SetGuestHouseKeepingInstructions(v ResHousekeepingType)`

SetGuestHouseKeepingInstructions sets GuestHouseKeepingInstructions field to given value.

### HasGuestHouseKeepingInstructions

`func (o *Schedule) HasGuestHouseKeepingInstructions() bool`

HasGuestHouseKeepingInstructions returns a boolean if a field has been set.

### GetHotelId

`func (o *Schedule) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *Schedule) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *Schedule) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *Schedule) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHousekeepingSchedule

`func (o *Schedule) GetHousekeepingSchedule() ReservationHousekeepingScheduleType`

GetHousekeepingSchedule returns the HousekeepingSchedule field if non-nil, zero value otherwise.

### GetHousekeepingScheduleOk

`func (o *Schedule) GetHousekeepingScheduleOk() (*ReservationHousekeepingScheduleType, bool)`

GetHousekeepingScheduleOk returns a tuple with the HousekeepingSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingSchedule

`func (o *Schedule) SetHousekeepingSchedule(v ReservationHousekeepingScheduleType)`

SetHousekeepingSchedule sets HousekeepingSchedule field to given value.

### HasHousekeepingSchedule

`func (o *Schedule) HasHousekeepingSchedule() bool`

HasHousekeepingSchedule returns a boolean if a field has been set.

### GetLinks

`func (o *Schedule) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Schedule) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Schedule) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Schedule) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *Schedule) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *Schedule) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *Schedule) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *Schedule) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *Schedule) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Schedule) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Schedule) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Schedule) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


