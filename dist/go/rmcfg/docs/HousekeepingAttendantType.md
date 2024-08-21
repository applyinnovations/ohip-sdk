# HousekeepingAttendantType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppUser** | Pointer to **string** | Application User ID assigned for the attendant. | [optional] 
**AttendantId** | Pointer to **string** | An attendant ID. | [optional] 
**Floor** | Pointer to **string** | Floor where the attendant is assigned. | [optional] 
**HotelId** | Pointer to **string** | Resort Code | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the attendant is active or not. | [optional] 
**Job** | Pointer to **string** | Job which the attendant is assigned. | [optional] 
**Name** | Pointer to **string** | An attendant ID. | [optional] 
**PhoneNo** | Pointer to **string** | An attendant&#39;s phone No. | [optional] 
**Section** | Pointer to **string** | Section where the attendant is assigned. | [optional] 
**WorkingDays** | Pointer to [**DaysOfWeekAttrType**](DaysOfWeekAttrType.md) |  | [optional] 

## Methods

### NewHousekeepingAttendantType

`func NewHousekeepingAttendantType() *HousekeepingAttendantType`

NewHousekeepingAttendantType instantiates a new HousekeepingAttendantType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingAttendantTypeWithDefaults

`func NewHousekeepingAttendantTypeWithDefaults() *HousekeepingAttendantType`

NewHousekeepingAttendantTypeWithDefaults instantiates a new HousekeepingAttendantType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppUser

`func (o *HousekeepingAttendantType) GetAppUser() string`

GetAppUser returns the AppUser field if non-nil, zero value otherwise.

### GetAppUserOk

`func (o *HousekeepingAttendantType) GetAppUserOk() (*string, bool)`

GetAppUserOk returns a tuple with the AppUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUser

`func (o *HousekeepingAttendantType) SetAppUser(v string)`

SetAppUser sets AppUser field to given value.

### HasAppUser

`func (o *HousekeepingAttendantType) HasAppUser() bool`

HasAppUser returns a boolean if a field has been set.

### GetAttendantId

`func (o *HousekeepingAttendantType) GetAttendantId() string`

GetAttendantId returns the AttendantId field if non-nil, zero value otherwise.

### GetAttendantIdOk

`func (o *HousekeepingAttendantType) GetAttendantIdOk() (*string, bool)`

GetAttendantIdOk returns a tuple with the AttendantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantId

`func (o *HousekeepingAttendantType) SetAttendantId(v string)`

SetAttendantId sets AttendantId field to given value.

### HasAttendantId

`func (o *HousekeepingAttendantType) HasAttendantId() bool`

HasAttendantId returns a boolean if a field has been set.

### GetFloor

`func (o *HousekeepingAttendantType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *HousekeepingAttendantType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *HousekeepingAttendantType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *HousekeepingAttendantType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetHotelId

`func (o *HousekeepingAttendantType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HousekeepingAttendantType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HousekeepingAttendantType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HousekeepingAttendantType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *HousekeepingAttendantType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *HousekeepingAttendantType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *HousekeepingAttendantType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *HousekeepingAttendantType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetJob

`func (o *HousekeepingAttendantType) GetJob() string`

GetJob returns the Job field if non-nil, zero value otherwise.

### GetJobOk

`func (o *HousekeepingAttendantType) GetJobOk() (*string, bool)`

GetJobOk returns a tuple with the Job field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJob

`func (o *HousekeepingAttendantType) SetJob(v string)`

SetJob sets Job field to given value.

### HasJob

`func (o *HousekeepingAttendantType) HasJob() bool`

HasJob returns a boolean if a field has been set.

### GetName

`func (o *HousekeepingAttendantType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *HousekeepingAttendantType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *HousekeepingAttendantType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *HousekeepingAttendantType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPhoneNo

`func (o *HousekeepingAttendantType) GetPhoneNo() string`

GetPhoneNo returns the PhoneNo field if non-nil, zero value otherwise.

### GetPhoneNoOk

`func (o *HousekeepingAttendantType) GetPhoneNoOk() (*string, bool)`

GetPhoneNoOk returns a tuple with the PhoneNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNo

`func (o *HousekeepingAttendantType) SetPhoneNo(v string)`

SetPhoneNo sets PhoneNo field to given value.

### HasPhoneNo

`func (o *HousekeepingAttendantType) HasPhoneNo() bool`

HasPhoneNo returns a boolean if a field has been set.

### GetSection

`func (o *HousekeepingAttendantType) GetSection() string`

GetSection returns the Section field if non-nil, zero value otherwise.

### GetSectionOk

`func (o *HousekeepingAttendantType) GetSectionOk() (*string, bool)`

GetSectionOk returns a tuple with the Section field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSection

`func (o *HousekeepingAttendantType) SetSection(v string)`

SetSection sets Section field to given value.

### HasSection

`func (o *HousekeepingAttendantType) HasSection() bool`

HasSection returns a boolean if a field has been set.

### GetWorkingDays

`func (o *HousekeepingAttendantType) GetWorkingDays() DaysOfWeekAttrType`

GetWorkingDays returns the WorkingDays field if non-nil, zero value otherwise.

### GetWorkingDaysOk

`func (o *HousekeepingAttendantType) GetWorkingDaysOk() (*DaysOfWeekAttrType, bool)`

GetWorkingDaysOk returns a tuple with the WorkingDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkingDays

`func (o *HousekeepingAttendantType) SetWorkingDays(v DaysOfWeekAttrType)`

SetWorkingDays sets WorkingDays field to given value.

### HasWorkingDays

`func (o *HousekeepingAttendantType) HasWorkingDays() bool`

HasWorkingDays returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


