# ScheduledSearch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**HousekeepingSchedule** | Pointer to [**ReservationHousekeepingScheduleType**](ReservationHousekeepingScheduleType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewScheduledSearch

`func NewScheduledSearch() *ScheduledSearch`

NewScheduledSearch instantiates a new ScheduledSearch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledSearchWithDefaults

`func NewScheduledSearchWithDefaults() *ScheduledSearch`

NewScheduledSearchWithDefaults instantiates a new ScheduledSearch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *ScheduledSearch) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ScheduledSearch) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ScheduledSearch) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ScheduledSearch) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetHotelId

`func (o *ScheduledSearch) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ScheduledSearch) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ScheduledSearch) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ScheduledSearch) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHousekeepingSchedule

`func (o *ScheduledSearch) GetHousekeepingSchedule() ReservationHousekeepingScheduleType`

GetHousekeepingSchedule returns the HousekeepingSchedule field if non-nil, zero value otherwise.

### GetHousekeepingScheduleOk

`func (o *ScheduledSearch) GetHousekeepingScheduleOk() (*ReservationHousekeepingScheduleType, bool)`

GetHousekeepingScheduleOk returns a tuple with the HousekeepingSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingSchedule

`func (o *ScheduledSearch) SetHousekeepingSchedule(v ReservationHousekeepingScheduleType)`

SetHousekeepingSchedule sets HousekeepingSchedule field to given value.

### HasHousekeepingSchedule

`func (o *ScheduledSearch) HasHousekeepingSchedule() bool`

HasHousekeepingSchedule returns a boolean if a field has been set.

### GetLinks

`func (o *ScheduledSearch) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ScheduledSearch) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ScheduledSearch) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ScheduledSearch) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ScheduledSearch) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ScheduledSearch) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ScheduledSearch) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ScheduledSearch) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


