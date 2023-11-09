# ServiceTaskRoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllottedMinutes** | Pointer to **float32** | The allotted minutes for completing the task. | [optional] 
**Attendant** | Pointer to **string** | The Attendant ID who is currently servicing the room. | [optional] 
**FrontOfficeStatus** | Pointer to [**FrontOfficeRoomStatusType**](FrontOfficeRoomStatusType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property where the task sheet exists. | [optional] 
**HousekeepingRoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**RoomId** | Pointer to **string** | The room number to service. | [optional] 
**RoomTaskCode** | Pointer to **string** | The task code for the current room which is to be done. | [optional] 
**SheetNumber** | Pointer to **int32** | The Task Sheet number where the room exists. | [optional] 
**TaskCodes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**TaskDate** | Pointer to **string** | Date for which the task sheet was created. By default this would be the current business date. | [optional] 

## Methods

### NewServiceTaskRoomType

`func NewServiceTaskRoomType() *ServiceTaskRoomType`

NewServiceTaskRoomType instantiates a new ServiceTaskRoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceTaskRoomTypeWithDefaults

`func NewServiceTaskRoomTypeWithDefaults() *ServiceTaskRoomType`

NewServiceTaskRoomTypeWithDefaults instantiates a new ServiceTaskRoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllottedMinutes

`func (o *ServiceTaskRoomType) GetAllottedMinutes() float32`

GetAllottedMinutes returns the AllottedMinutes field if non-nil, zero value otherwise.

### GetAllottedMinutesOk

`func (o *ServiceTaskRoomType) GetAllottedMinutesOk() (*float32, bool)`

GetAllottedMinutesOk returns a tuple with the AllottedMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllottedMinutes

`func (o *ServiceTaskRoomType) SetAllottedMinutes(v float32)`

SetAllottedMinutes sets AllottedMinutes field to given value.

### HasAllottedMinutes

`func (o *ServiceTaskRoomType) HasAllottedMinutes() bool`

HasAllottedMinutes returns a boolean if a field has been set.

### GetAttendant

`func (o *ServiceTaskRoomType) GetAttendant() string`

GetAttendant returns the Attendant field if non-nil, zero value otherwise.

### GetAttendantOk

`func (o *ServiceTaskRoomType) GetAttendantOk() (*string, bool)`

GetAttendantOk returns a tuple with the Attendant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendant

`func (o *ServiceTaskRoomType) SetAttendant(v string)`

SetAttendant sets Attendant field to given value.

### HasAttendant

`func (o *ServiceTaskRoomType) HasAttendant() bool`

HasAttendant returns a boolean if a field has been set.

### GetFrontOfficeStatus

`func (o *ServiceTaskRoomType) GetFrontOfficeStatus() FrontOfficeRoomStatusType`

GetFrontOfficeStatus returns the FrontOfficeStatus field if non-nil, zero value otherwise.

### GetFrontOfficeStatusOk

`func (o *ServiceTaskRoomType) GetFrontOfficeStatusOk() (*FrontOfficeRoomStatusType, bool)`

GetFrontOfficeStatusOk returns a tuple with the FrontOfficeStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrontOfficeStatus

`func (o *ServiceTaskRoomType) SetFrontOfficeStatus(v FrontOfficeRoomStatusType)`

SetFrontOfficeStatus sets FrontOfficeStatus field to given value.

### HasFrontOfficeStatus

`func (o *ServiceTaskRoomType) HasFrontOfficeStatus() bool`

HasFrontOfficeStatus returns a boolean if a field has been set.

### GetHotelId

`func (o *ServiceTaskRoomType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ServiceTaskRoomType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ServiceTaskRoomType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ServiceTaskRoomType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHousekeepingRoomStatus

`func (o *ServiceTaskRoomType) GetHousekeepingRoomStatus() HousekeepingRoomStatusType`

GetHousekeepingRoomStatus returns the HousekeepingRoomStatus field if non-nil, zero value otherwise.

### GetHousekeepingRoomStatusOk

`func (o *ServiceTaskRoomType) GetHousekeepingRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetHousekeepingRoomStatusOk returns a tuple with the HousekeepingRoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomStatus

`func (o *ServiceTaskRoomType) SetHousekeepingRoomStatus(v HousekeepingRoomStatusType)`

SetHousekeepingRoomStatus sets HousekeepingRoomStatus field to given value.

### HasHousekeepingRoomStatus

`func (o *ServiceTaskRoomType) HasHousekeepingRoomStatus() bool`

HasHousekeepingRoomStatus returns a boolean if a field has been set.

### GetRoomId

`func (o *ServiceTaskRoomType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ServiceTaskRoomType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ServiceTaskRoomType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ServiceTaskRoomType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomTaskCode

`func (o *ServiceTaskRoomType) GetRoomTaskCode() string`

GetRoomTaskCode returns the RoomTaskCode field if non-nil, zero value otherwise.

### GetRoomTaskCodeOk

`func (o *ServiceTaskRoomType) GetRoomTaskCodeOk() (*string, bool)`

GetRoomTaskCodeOk returns a tuple with the RoomTaskCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTaskCode

`func (o *ServiceTaskRoomType) SetRoomTaskCode(v string)`

SetRoomTaskCode sets RoomTaskCode field to given value.

### HasRoomTaskCode

`func (o *ServiceTaskRoomType) HasRoomTaskCode() bool`

HasRoomTaskCode returns a boolean if a field has been set.

### GetSheetNumber

`func (o *ServiceTaskRoomType) GetSheetNumber() int32`

GetSheetNumber returns the SheetNumber field if non-nil, zero value otherwise.

### GetSheetNumberOk

`func (o *ServiceTaskRoomType) GetSheetNumberOk() (*int32, bool)`

GetSheetNumberOk returns a tuple with the SheetNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSheetNumber

`func (o *ServiceTaskRoomType) SetSheetNumber(v int32)`

SetSheetNumber sets SheetNumber field to given value.

### HasSheetNumber

`func (o *ServiceTaskRoomType) HasSheetNumber() bool`

HasSheetNumber returns a boolean if a field has been set.

### GetTaskCodes

`func (o *ServiceTaskRoomType) GetTaskCodes() CodeListType`

GetTaskCodes returns the TaskCodes field if non-nil, zero value otherwise.

### GetTaskCodesOk

`func (o *ServiceTaskRoomType) GetTaskCodesOk() (*CodeListType, bool)`

GetTaskCodesOk returns a tuple with the TaskCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskCodes

`func (o *ServiceTaskRoomType) SetTaskCodes(v CodeListType)`

SetTaskCodes sets TaskCodes field to given value.

### HasTaskCodes

`func (o *ServiceTaskRoomType) HasTaskCodes() bool`

HasTaskCodes returns a boolean if a field has been set.

### GetTaskDate

`func (o *ServiceTaskRoomType) GetTaskDate() string`

GetTaskDate returns the TaskDate field if non-nil, zero value otherwise.

### GetTaskDateOk

`func (o *ServiceTaskRoomType) GetTaskDateOk() (*string, bool)`

GetTaskDateOk returns a tuple with the TaskDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDate

`func (o *ServiceTaskRoomType) SetTaskDate(v string)`

SetTaskDate sets TaskDate field to given value.

### HasTaskDate

`func (o *ServiceTaskRoomType) HasTaskDate() bool`

HasTaskDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


