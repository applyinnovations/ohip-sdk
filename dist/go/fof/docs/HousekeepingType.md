# HousekeepingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomStatus** | Pointer to [**RoomStatusType**](RoomStatusType.md) |  | [optional] 
**RoomPersons** | Pointer to [**RoomPersonsType**](RoomPersonsType.md) |  | [optional] 
**GuestServiceRequest** | Pointer to [**GuestHousekeepingServiceRequestType**](GuestHousekeepingServiceRequestType.md) |  | [optional] 
**CleaningPriority** | Pointer to [**RoomCleaningPriorityType**](RoomCleaningPriorityType.md) |  | [optional] 
**RoomCondition** | Pointer to [**RoomConditionType**](RoomConditionType.md) |  | [optional] 
**LinenChange** | Pointer to **bool** | Indicates if a linen change is necessary. | [optional] 
**FacilityTaskCode** | Pointer to **[]string** |  | [optional] 

## Methods

### NewHousekeepingType

`func NewHousekeepingType() *HousekeepingType`

NewHousekeepingType instantiates a new HousekeepingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTypeWithDefaults

`func NewHousekeepingTypeWithDefaults() *HousekeepingType`

NewHousekeepingTypeWithDefaults instantiates a new HousekeepingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomStatus

`func (o *HousekeepingType) GetRoomStatus() RoomStatusType`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *HousekeepingType) GetRoomStatusOk() (*RoomStatusType, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *HousekeepingType) SetRoomStatus(v RoomStatusType)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *HousekeepingType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetRoomPersons

`func (o *HousekeepingType) GetRoomPersons() RoomPersonsType`

GetRoomPersons returns the RoomPersons field if non-nil, zero value otherwise.

### GetRoomPersonsOk

`func (o *HousekeepingType) GetRoomPersonsOk() (*RoomPersonsType, bool)`

GetRoomPersonsOk returns a tuple with the RoomPersons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomPersons

`func (o *HousekeepingType) SetRoomPersons(v RoomPersonsType)`

SetRoomPersons sets RoomPersons field to given value.

### HasRoomPersons

`func (o *HousekeepingType) HasRoomPersons() bool`

HasRoomPersons returns a boolean if a field has been set.

### GetGuestServiceRequest

`func (o *HousekeepingType) GetGuestServiceRequest() GuestHousekeepingServiceRequestType`

GetGuestServiceRequest returns the GuestServiceRequest field if non-nil, zero value otherwise.

### GetGuestServiceRequestOk

`func (o *HousekeepingType) GetGuestServiceRequestOk() (*GuestHousekeepingServiceRequestType, bool)`

GetGuestServiceRequestOk returns a tuple with the GuestServiceRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestServiceRequest

`func (o *HousekeepingType) SetGuestServiceRequest(v GuestHousekeepingServiceRequestType)`

SetGuestServiceRequest sets GuestServiceRequest field to given value.

### HasGuestServiceRequest

`func (o *HousekeepingType) HasGuestServiceRequest() bool`

HasGuestServiceRequest returns a boolean if a field has been set.

### GetCleaningPriority

`func (o *HousekeepingType) GetCleaningPriority() RoomCleaningPriorityType`

GetCleaningPriority returns the CleaningPriority field if non-nil, zero value otherwise.

### GetCleaningPriorityOk

`func (o *HousekeepingType) GetCleaningPriorityOk() (*RoomCleaningPriorityType, bool)`

GetCleaningPriorityOk returns a tuple with the CleaningPriority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCleaningPriority

`func (o *HousekeepingType) SetCleaningPriority(v RoomCleaningPriorityType)`

SetCleaningPriority sets CleaningPriority field to given value.

### HasCleaningPriority

`func (o *HousekeepingType) HasCleaningPriority() bool`

HasCleaningPriority returns a boolean if a field has been set.

### GetRoomCondition

`func (o *HousekeepingType) GetRoomCondition() RoomConditionType`

GetRoomCondition returns the RoomCondition field if non-nil, zero value otherwise.

### GetRoomConditionOk

`func (o *HousekeepingType) GetRoomConditionOk() (*RoomConditionType, bool)`

GetRoomConditionOk returns a tuple with the RoomCondition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCondition

`func (o *HousekeepingType) SetRoomCondition(v RoomConditionType)`

SetRoomCondition sets RoomCondition field to given value.

### HasRoomCondition

`func (o *HousekeepingType) HasRoomCondition() bool`

HasRoomCondition returns a boolean if a field has been set.

### GetLinenChange

`func (o *HousekeepingType) GetLinenChange() bool`

GetLinenChange returns the LinenChange field if non-nil, zero value otherwise.

### GetLinenChangeOk

`func (o *HousekeepingType) GetLinenChangeOk() (*bool, bool)`

GetLinenChangeOk returns a tuple with the LinenChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinenChange

`func (o *HousekeepingType) SetLinenChange(v bool)`

SetLinenChange sets LinenChange field to given value.

### HasLinenChange

`func (o *HousekeepingType) HasLinenChange() bool`

HasLinenChange returns a boolean if a field has been set.

### GetFacilityTaskCode

`func (o *HousekeepingType) GetFacilityTaskCode() []string`

GetFacilityTaskCode returns the FacilityTaskCode field if non-nil, zero value otherwise.

### GetFacilityTaskCodeOk

`func (o *HousekeepingType) GetFacilityTaskCodeOk() (*[]string, bool)`

GetFacilityTaskCodeOk returns a tuple with the FacilityTaskCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityTaskCode

`func (o *HousekeepingType) SetFacilityTaskCode(v []string)`

SetFacilityTaskCode sets FacilityTaskCode field to given value.

### HasFacilityTaskCode

`func (o *HousekeepingType) HasFacilityTaskCode() bool`

HasFacilityTaskCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


