# VacantRoomStatusDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomTypes** | Pointer to **[]string** | Room Type of the room. | [optional] 
**BeginDate** | Pointer to **string** | The starting value of the date range. By default this would be the current business date. | [optional] 
**EndDate** | Pointer to **string** | The ending value of the date range. The time span between the endDate and the beginDate must not exceed two years. | [optional] 
**NumberOfDays** | Pointer to **float32** | Number of days to change room status of those rooms that are vacant from X number of days. | [optional] 
**HouseKeepingRoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewVacantRoomStatusDetails

`func NewVacantRoomStatusDetails() *VacantRoomStatusDetails`

NewVacantRoomStatusDetails instantiates a new VacantRoomStatusDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVacantRoomStatusDetailsWithDefaults

`func NewVacantRoomStatusDetailsWithDefaults() *VacantRoomStatusDetails`

NewVacantRoomStatusDetailsWithDefaults instantiates a new VacantRoomStatusDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomTypes

`func (o *VacantRoomStatusDetails) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *VacantRoomStatusDetails) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *VacantRoomStatusDetails) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *VacantRoomStatusDetails) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetBeginDate

`func (o *VacantRoomStatusDetails) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *VacantRoomStatusDetails) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *VacantRoomStatusDetails) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *VacantRoomStatusDetails) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *VacantRoomStatusDetails) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *VacantRoomStatusDetails) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *VacantRoomStatusDetails) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *VacantRoomStatusDetails) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetNumberOfDays

`func (o *VacantRoomStatusDetails) GetNumberOfDays() float32`

GetNumberOfDays returns the NumberOfDays field if non-nil, zero value otherwise.

### GetNumberOfDaysOk

`func (o *VacantRoomStatusDetails) GetNumberOfDaysOk() (*float32, bool)`

GetNumberOfDaysOk returns a tuple with the NumberOfDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfDays

`func (o *VacantRoomStatusDetails) SetNumberOfDays(v float32)`

SetNumberOfDays sets NumberOfDays field to given value.

### HasNumberOfDays

`func (o *VacantRoomStatusDetails) HasNumberOfDays() bool`

HasNumberOfDays returns a boolean if a field has been set.

### GetHouseKeepingRoomStatus

`func (o *VacantRoomStatusDetails) GetHouseKeepingRoomStatus() HousekeepingRoomStatusType`

GetHouseKeepingRoomStatus returns the HouseKeepingRoomStatus field if non-nil, zero value otherwise.

### GetHouseKeepingRoomStatusOk

`func (o *VacantRoomStatusDetails) GetHouseKeepingRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetHouseKeepingRoomStatusOk returns a tuple with the HouseKeepingRoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouseKeepingRoomStatus

`func (o *VacantRoomStatusDetails) SetHouseKeepingRoomStatus(v HousekeepingRoomStatusType)`

SetHouseKeepingRoomStatus sets HouseKeepingRoomStatus field to given value.

### HasHouseKeepingRoomStatus

`func (o *VacantRoomStatusDetails) HasHouseKeepingRoomStatus() bool`

HasHouseKeepingRoomStatus returns a boolean if a field has been set.

### GetLinks

`func (o *VacantRoomStatusDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *VacantRoomStatusDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *VacantRoomStatusDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *VacantRoomStatusDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *VacantRoomStatusDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *VacantRoomStatusDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *VacantRoomStatusDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *VacantRoomStatusDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


