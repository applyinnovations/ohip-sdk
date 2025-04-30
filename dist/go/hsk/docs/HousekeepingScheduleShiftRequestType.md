# HousekeepingScheduleShiftRequestType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The hotel code where reservation is made. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**BeginDate** | Pointer to **string** | Begin date from which to start fetching facility tasks. | [optional] 
**EndDate** | Pointer to **string** | End date for facility task schedule request. | [optional] 
**ShiftDay** | Pointer to [**HousekeepingScheduleShiftDayType**](HousekeepingScheduleShiftDayType.md) |  | [optional] 

## Methods

### NewHousekeepingScheduleShiftRequestType

`func NewHousekeepingScheduleShiftRequestType() *HousekeepingScheduleShiftRequestType`

NewHousekeepingScheduleShiftRequestType instantiates a new HousekeepingScheduleShiftRequestType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingScheduleShiftRequestTypeWithDefaults

`func NewHousekeepingScheduleShiftRequestTypeWithDefaults() *HousekeepingScheduleShiftRequestType`

NewHousekeepingScheduleShiftRequestTypeWithDefaults instantiates a new HousekeepingScheduleShiftRequestType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *HousekeepingScheduleShiftRequestType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HousekeepingScheduleShiftRequestType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HousekeepingScheduleShiftRequestType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HousekeepingScheduleShiftRequestType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *HousekeepingScheduleShiftRequestType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *HousekeepingScheduleShiftRequestType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *HousekeepingScheduleShiftRequestType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *HousekeepingScheduleShiftRequestType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetBeginDate

`func (o *HousekeepingScheduleShiftRequestType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *HousekeepingScheduleShiftRequestType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *HousekeepingScheduleShiftRequestType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *HousekeepingScheduleShiftRequestType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *HousekeepingScheduleShiftRequestType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *HousekeepingScheduleShiftRequestType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *HousekeepingScheduleShiftRequestType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *HousekeepingScheduleShiftRequestType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetShiftDay

`func (o *HousekeepingScheduleShiftRequestType) GetShiftDay() HousekeepingScheduleShiftDayType`

GetShiftDay returns the ShiftDay field if non-nil, zero value otherwise.

### GetShiftDayOk

`func (o *HousekeepingScheduleShiftRequestType) GetShiftDayOk() (*HousekeepingScheduleShiftDayType, bool)`

GetShiftDayOk returns a tuple with the ShiftDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShiftDay

`func (o *HousekeepingScheduleShiftRequestType) SetShiftDay(v HousekeepingScheduleShiftDayType)`

SetShiftDay sets ShiftDay field to given value.

### HasShiftDay

`func (o *HousekeepingScheduleShiftRequestType) HasShiftDay() bool`

HasShiftDay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


