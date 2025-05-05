# CurrentServicingAttendantType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Section** | Pointer to [**HousekeepingSectionType**](HousekeepingSectionType.md) |  | [optional] 
**Floor** | Pointer to **string** | The Floor which is assigned to the attendant. | [optional] 
**AttendantId** | Pointer to **string** | Attendant&#39;s unique identifier. | [optional] 
**AttendantName** | Pointer to **string** | Attendant&#39;s name. | [optional] 
**HotelId** | Pointer to **string** | Property where the attendant belongs. | [optional] 
**ActiveFlag** | Pointer to **string** | Indicates if the Attendant is active. | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 
**AppUser** | Pointer to [**ApplicationUserType**](ApplicationUserType.md) |  | [optional] 
**StartTime** | Pointer to **string** | The start time of the service. | [optional] 
**Status** | Pointer to [**ServicingAttendantStatusType**](ServicingAttendantStatusType.md) |  | [optional] 

## Methods

### NewCurrentServicingAttendantType

`func NewCurrentServicingAttendantType() *CurrentServicingAttendantType`

NewCurrentServicingAttendantType instantiates a new CurrentServicingAttendantType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrentServicingAttendantTypeWithDefaults

`func NewCurrentServicingAttendantTypeWithDefaults() *CurrentServicingAttendantType`

NewCurrentServicingAttendantTypeWithDefaults instantiates a new CurrentServicingAttendantType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSection

`func (o *CurrentServicingAttendantType) GetSection() HousekeepingSectionType`

GetSection returns the Section field if non-nil, zero value otherwise.

### GetSectionOk

`func (o *CurrentServicingAttendantType) GetSectionOk() (*HousekeepingSectionType, bool)`

GetSectionOk returns a tuple with the Section field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSection

`func (o *CurrentServicingAttendantType) SetSection(v HousekeepingSectionType)`

SetSection sets Section field to given value.

### HasSection

`func (o *CurrentServicingAttendantType) HasSection() bool`

HasSection returns a boolean if a field has been set.

### GetFloor

`func (o *CurrentServicingAttendantType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *CurrentServicingAttendantType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *CurrentServicingAttendantType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *CurrentServicingAttendantType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetAttendantId

`func (o *CurrentServicingAttendantType) GetAttendantId() string`

GetAttendantId returns the AttendantId field if non-nil, zero value otherwise.

### GetAttendantIdOk

`func (o *CurrentServicingAttendantType) GetAttendantIdOk() (*string, bool)`

GetAttendantIdOk returns a tuple with the AttendantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantId

`func (o *CurrentServicingAttendantType) SetAttendantId(v string)`

SetAttendantId sets AttendantId field to given value.

### HasAttendantId

`func (o *CurrentServicingAttendantType) HasAttendantId() bool`

HasAttendantId returns a boolean if a field has been set.

### GetAttendantName

`func (o *CurrentServicingAttendantType) GetAttendantName() string`

GetAttendantName returns the AttendantName field if non-nil, zero value otherwise.

### GetAttendantNameOk

`func (o *CurrentServicingAttendantType) GetAttendantNameOk() (*string, bool)`

GetAttendantNameOk returns a tuple with the AttendantName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantName

`func (o *CurrentServicingAttendantType) SetAttendantName(v string)`

SetAttendantName sets AttendantName field to given value.

### HasAttendantName

`func (o *CurrentServicingAttendantType) HasAttendantName() bool`

HasAttendantName returns a boolean if a field has been set.

### GetHotelId

`func (o *CurrentServicingAttendantType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CurrentServicingAttendantType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CurrentServicingAttendantType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CurrentServicingAttendantType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetActiveFlag

`func (o *CurrentServicingAttendantType) GetActiveFlag() string`

GetActiveFlag returns the ActiveFlag field if non-nil, zero value otherwise.

### GetActiveFlagOk

`func (o *CurrentServicingAttendantType) GetActiveFlagOk() (*string, bool)`

GetActiveFlagOk returns a tuple with the ActiveFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveFlag

`func (o *CurrentServicingAttendantType) SetActiveFlag(v string)`

SetActiveFlag sets ActiveFlag field to given value.

### HasActiveFlag

`func (o *CurrentServicingAttendantType) HasActiveFlag() bool`

HasActiveFlag returns a boolean if a field has been set.

### GetSunday

`func (o *CurrentServicingAttendantType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *CurrentServicingAttendantType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *CurrentServicingAttendantType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *CurrentServicingAttendantType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetMonday

`func (o *CurrentServicingAttendantType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *CurrentServicingAttendantType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *CurrentServicingAttendantType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *CurrentServicingAttendantType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetTuesday

`func (o *CurrentServicingAttendantType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *CurrentServicingAttendantType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *CurrentServicingAttendantType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *CurrentServicingAttendantType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *CurrentServicingAttendantType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *CurrentServicingAttendantType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *CurrentServicingAttendantType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *CurrentServicingAttendantType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.

### GetThursday

`func (o *CurrentServicingAttendantType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *CurrentServicingAttendantType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *CurrentServicingAttendantType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *CurrentServicingAttendantType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetFriday

`func (o *CurrentServicingAttendantType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *CurrentServicingAttendantType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *CurrentServicingAttendantType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *CurrentServicingAttendantType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetSaturday

`func (o *CurrentServicingAttendantType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *CurrentServicingAttendantType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *CurrentServicingAttendantType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *CurrentServicingAttendantType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.

### GetAppUser

`func (o *CurrentServicingAttendantType) GetAppUser() ApplicationUserType`

GetAppUser returns the AppUser field if non-nil, zero value otherwise.

### GetAppUserOk

`func (o *CurrentServicingAttendantType) GetAppUserOk() (*ApplicationUserType, bool)`

GetAppUserOk returns a tuple with the AppUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUser

`func (o *CurrentServicingAttendantType) SetAppUser(v ApplicationUserType)`

SetAppUser sets AppUser field to given value.

### HasAppUser

`func (o *CurrentServicingAttendantType) HasAppUser() bool`

HasAppUser returns a boolean if a field has been set.

### GetStartTime

`func (o *CurrentServicingAttendantType) GetStartTime() string`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *CurrentServicingAttendantType) GetStartTimeOk() (*string, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *CurrentServicingAttendantType) SetStartTime(v string)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *CurrentServicingAttendantType) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetStatus

`func (o *CurrentServicingAttendantType) GetStatus() ServicingAttendantStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CurrentServicingAttendantType) GetStatusOk() (*ServicingAttendantStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CurrentServicingAttendantType) SetStatus(v ServicingAttendantStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CurrentServicingAttendantType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


