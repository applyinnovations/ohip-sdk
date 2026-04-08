# BlockCutoffScheduleRangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Contains Hotel Code. | [optional] 
**CutoffCodeId** | Pointer to **int32** | Contains Cutoff Schedule Code Id. | [optional] 
**RoomTypes** | Pointer to **[]string** | Contains Room Types. | [optional] 
**CutoffDays** | Pointer to **int32** | Number of cutoff Days. | [optional] 
**OverwriteExistingcutoffschedule** | Pointer to **bool** | Flag to indicate if the cutoff schedule already exists for criteria then overwrite the records. | [optional] 
**StayDateFrom** | Pointer to **string** | The starting value of the date range. | [optional] 
**StayDateTo** | Pointer to **string** | The ending value of the date range. | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 

## Methods

### NewBlockCutoffScheduleRangeType

`func NewBlockCutoffScheduleRangeType() *BlockCutoffScheduleRangeType`

NewBlockCutoffScheduleRangeType instantiates a new BlockCutoffScheduleRangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockCutoffScheduleRangeTypeWithDefaults

`func NewBlockCutoffScheduleRangeTypeWithDefaults() *BlockCutoffScheduleRangeType`

NewBlockCutoffScheduleRangeTypeWithDefaults instantiates a new BlockCutoffScheduleRangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BlockCutoffScheduleRangeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockCutoffScheduleRangeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockCutoffScheduleRangeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockCutoffScheduleRangeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCutoffCodeId

`func (o *BlockCutoffScheduleRangeType) GetCutoffCodeId() int32`

GetCutoffCodeId returns the CutoffCodeId field if non-nil, zero value otherwise.

### GetCutoffCodeIdOk

`func (o *BlockCutoffScheduleRangeType) GetCutoffCodeIdOk() (*int32, bool)`

GetCutoffCodeIdOk returns a tuple with the CutoffCodeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffCodeId

`func (o *BlockCutoffScheduleRangeType) SetCutoffCodeId(v int32)`

SetCutoffCodeId sets CutoffCodeId field to given value.

### HasCutoffCodeId

`func (o *BlockCutoffScheduleRangeType) HasCutoffCodeId() bool`

HasCutoffCodeId returns a boolean if a field has been set.

### GetRoomTypes

`func (o *BlockCutoffScheduleRangeType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *BlockCutoffScheduleRangeType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *BlockCutoffScheduleRangeType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *BlockCutoffScheduleRangeType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetCutoffDays

`func (o *BlockCutoffScheduleRangeType) GetCutoffDays() int32`

GetCutoffDays returns the CutoffDays field if non-nil, zero value otherwise.

### GetCutoffDaysOk

`func (o *BlockCutoffScheduleRangeType) GetCutoffDaysOk() (*int32, bool)`

GetCutoffDaysOk returns a tuple with the CutoffDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffDays

`func (o *BlockCutoffScheduleRangeType) SetCutoffDays(v int32)`

SetCutoffDays sets CutoffDays field to given value.

### HasCutoffDays

`func (o *BlockCutoffScheduleRangeType) HasCutoffDays() bool`

HasCutoffDays returns a boolean if a field has been set.

### GetOverwriteExistingcutoffschedule

`func (o *BlockCutoffScheduleRangeType) GetOverwriteExistingcutoffschedule() bool`

GetOverwriteExistingcutoffschedule returns the OverwriteExistingcutoffschedule field if non-nil, zero value otherwise.

### GetOverwriteExistingcutoffscheduleOk

`func (o *BlockCutoffScheduleRangeType) GetOverwriteExistingcutoffscheduleOk() (*bool, bool)`

GetOverwriteExistingcutoffscheduleOk returns a tuple with the OverwriteExistingcutoffschedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverwriteExistingcutoffschedule

`func (o *BlockCutoffScheduleRangeType) SetOverwriteExistingcutoffschedule(v bool)`

SetOverwriteExistingcutoffschedule sets OverwriteExistingcutoffschedule field to given value.

### HasOverwriteExistingcutoffschedule

`func (o *BlockCutoffScheduleRangeType) HasOverwriteExistingcutoffschedule() bool`

HasOverwriteExistingcutoffschedule returns a boolean if a field has been set.

### GetStayDateFrom

`func (o *BlockCutoffScheduleRangeType) GetStayDateFrom() string`

GetStayDateFrom returns the StayDateFrom field if non-nil, zero value otherwise.

### GetStayDateFromOk

`func (o *BlockCutoffScheduleRangeType) GetStayDateFromOk() (*string, bool)`

GetStayDateFromOk returns a tuple with the StayDateFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDateFrom

`func (o *BlockCutoffScheduleRangeType) SetStayDateFrom(v string)`

SetStayDateFrom sets StayDateFrom field to given value.

### HasStayDateFrom

`func (o *BlockCutoffScheduleRangeType) HasStayDateFrom() bool`

HasStayDateFrom returns a boolean if a field has been set.

### GetStayDateTo

`func (o *BlockCutoffScheduleRangeType) GetStayDateTo() string`

GetStayDateTo returns the StayDateTo field if non-nil, zero value otherwise.

### GetStayDateToOk

`func (o *BlockCutoffScheduleRangeType) GetStayDateToOk() (*string, bool)`

GetStayDateToOk returns a tuple with the StayDateTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDateTo

`func (o *BlockCutoffScheduleRangeType) SetStayDateTo(v string)`

SetStayDateTo sets StayDateTo field to given value.

### HasStayDateTo

`func (o *BlockCutoffScheduleRangeType) HasStayDateTo() bool`

HasStayDateTo returns a boolean if a field has been set.

### GetSunday

`func (o *BlockCutoffScheduleRangeType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *BlockCutoffScheduleRangeType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *BlockCutoffScheduleRangeType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *BlockCutoffScheduleRangeType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetMonday

`func (o *BlockCutoffScheduleRangeType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *BlockCutoffScheduleRangeType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *BlockCutoffScheduleRangeType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *BlockCutoffScheduleRangeType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetTuesday

`func (o *BlockCutoffScheduleRangeType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *BlockCutoffScheduleRangeType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *BlockCutoffScheduleRangeType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *BlockCutoffScheduleRangeType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *BlockCutoffScheduleRangeType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *BlockCutoffScheduleRangeType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *BlockCutoffScheduleRangeType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *BlockCutoffScheduleRangeType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.

### GetThursday

`func (o *BlockCutoffScheduleRangeType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *BlockCutoffScheduleRangeType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *BlockCutoffScheduleRangeType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *BlockCutoffScheduleRangeType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetFriday

`func (o *BlockCutoffScheduleRangeType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *BlockCutoffScheduleRangeType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *BlockCutoffScheduleRangeType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *BlockCutoffScheduleRangeType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetSaturday

`func (o *BlockCutoffScheduleRangeType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *BlockCutoffScheduleRangeType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *BlockCutoffScheduleRangeType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *BlockCutoffScheduleRangeType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


