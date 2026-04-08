# HousekeepingAttendantsScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code the Housekeeping Attendant belongs to. | [optional] 
**ScheduleDate** | Pointer to **string** | Schedule date of attendants&#39; assignment. Used when attendants to scheduled are of the same date. | [optional] 
**AttendantsSchedule** | Pointer to [**[]HousekeepingAttendantScheduleType**](HousekeepingAttendantScheduleType.md) |  | [optional] 

## Methods

### NewHousekeepingAttendantsScheduleType

`func NewHousekeepingAttendantsScheduleType() *HousekeepingAttendantsScheduleType`

NewHousekeepingAttendantsScheduleType instantiates a new HousekeepingAttendantsScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingAttendantsScheduleTypeWithDefaults

`func NewHousekeepingAttendantsScheduleTypeWithDefaults() *HousekeepingAttendantsScheduleType`

NewHousekeepingAttendantsScheduleTypeWithDefaults instantiates a new HousekeepingAttendantsScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *HousekeepingAttendantsScheduleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HousekeepingAttendantsScheduleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HousekeepingAttendantsScheduleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HousekeepingAttendantsScheduleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetScheduleDate

`func (o *HousekeepingAttendantsScheduleType) GetScheduleDate() string`

GetScheduleDate returns the ScheduleDate field if non-nil, zero value otherwise.

### GetScheduleDateOk

`func (o *HousekeepingAttendantsScheduleType) GetScheduleDateOk() (*string, bool)`

GetScheduleDateOk returns a tuple with the ScheduleDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleDate

`func (o *HousekeepingAttendantsScheduleType) SetScheduleDate(v string)`

SetScheduleDate sets ScheduleDate field to given value.

### HasScheduleDate

`func (o *HousekeepingAttendantsScheduleType) HasScheduleDate() bool`

HasScheduleDate returns a boolean if a field has been set.

### GetAttendantsSchedule

`func (o *HousekeepingAttendantsScheduleType) GetAttendantsSchedule() []HousekeepingAttendantScheduleType`

GetAttendantsSchedule returns the AttendantsSchedule field if non-nil, zero value otherwise.

### GetAttendantsScheduleOk

`func (o *HousekeepingAttendantsScheduleType) GetAttendantsScheduleOk() (*[]HousekeepingAttendantScheduleType, bool)`

GetAttendantsScheduleOk returns a tuple with the AttendantsSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantsSchedule

`func (o *HousekeepingAttendantsScheduleType) SetAttendantsSchedule(v []HousekeepingAttendantScheduleType)`

SetAttendantsSchedule sets AttendantsSchedule field to given value.

### HasAttendantsSchedule

`func (o *HousekeepingAttendantsScheduleType) HasAttendantsSchedule() bool`

HasAttendantsSchedule returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


