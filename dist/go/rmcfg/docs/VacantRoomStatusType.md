# VacantRoomStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomTypes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Room types of the room. | [optional] 
**BeginDate** | Pointer to **string** | The date from which the vacant room status will be updated during end of day. | [optional] 
**EndDate** | Pointer to **string** | The last date till which the vacant room status will be updated during end of day. | [optional] 
**HouseKeepingRoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**NumberOfDays** | Pointer to **float32** | Number of days to change room status of those rooms that are vacant from X number of days. | [optional] 
**VacantRoomStatusId** | Pointer to **float32** | The unique ID of the vacant room configuration to which this record applies. | [optional] 

## Methods

### NewVacantRoomStatusType

`func NewVacantRoomStatusType() *VacantRoomStatusType`

NewVacantRoomStatusType instantiates a new VacantRoomStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVacantRoomStatusTypeWithDefaults

`func NewVacantRoomStatusTypeWithDefaults() *VacantRoomStatusType`

NewVacantRoomStatusTypeWithDefaults instantiates a new VacantRoomStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomTypes

`func (o *VacantRoomStatusType) GetRoomTypes() []CodeDescriptionType`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *VacantRoomStatusType) GetRoomTypesOk() (*[]CodeDescriptionType, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *VacantRoomStatusType) SetRoomTypes(v []CodeDescriptionType)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *VacantRoomStatusType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetBeginDate

`func (o *VacantRoomStatusType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *VacantRoomStatusType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *VacantRoomStatusType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *VacantRoomStatusType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *VacantRoomStatusType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *VacantRoomStatusType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *VacantRoomStatusType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *VacantRoomStatusType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetHouseKeepingRoomStatus

`func (o *VacantRoomStatusType) GetHouseKeepingRoomStatus() HousekeepingRoomStatusType`

GetHouseKeepingRoomStatus returns the HouseKeepingRoomStatus field if non-nil, zero value otherwise.

### GetHouseKeepingRoomStatusOk

`func (o *VacantRoomStatusType) GetHouseKeepingRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetHouseKeepingRoomStatusOk returns a tuple with the HouseKeepingRoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouseKeepingRoomStatus

`func (o *VacantRoomStatusType) SetHouseKeepingRoomStatus(v HousekeepingRoomStatusType)`

SetHouseKeepingRoomStatus sets HouseKeepingRoomStatus field to given value.

### HasHouseKeepingRoomStatus

`func (o *VacantRoomStatusType) HasHouseKeepingRoomStatus() bool`

HasHouseKeepingRoomStatus returns a boolean if a field has been set.

### GetNumberOfDays

`func (o *VacantRoomStatusType) GetNumberOfDays() float32`

GetNumberOfDays returns the NumberOfDays field if non-nil, zero value otherwise.

### GetNumberOfDaysOk

`func (o *VacantRoomStatusType) GetNumberOfDaysOk() (*float32, bool)`

GetNumberOfDaysOk returns a tuple with the NumberOfDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfDays

`func (o *VacantRoomStatusType) SetNumberOfDays(v float32)`

SetNumberOfDays sets NumberOfDays field to given value.

### HasNumberOfDays

`func (o *VacantRoomStatusType) HasNumberOfDays() bool`

HasNumberOfDays returns a boolean if a field has been set.

### GetVacantRoomStatusId

`func (o *VacantRoomStatusType) GetVacantRoomStatusId() float32`

GetVacantRoomStatusId returns the VacantRoomStatusId field if non-nil, zero value otherwise.

### GetVacantRoomStatusIdOk

`func (o *VacantRoomStatusType) GetVacantRoomStatusIdOk() (*float32, bool)`

GetVacantRoomStatusIdOk returns a tuple with the VacantRoomStatusId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVacantRoomStatusId

`func (o *VacantRoomStatusType) SetVacantRoomStatusId(v float32)`

SetVacantRoomStatusId sets VacantRoomStatusId field to given value.

### HasVacantRoomStatusId

`func (o *VacantRoomStatusType) HasVacantRoomStatusId() bool`

HasVacantRoomStatusId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


