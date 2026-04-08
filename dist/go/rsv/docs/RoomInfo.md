# RoomInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomType** | Pointer to **string** | Room Type of the Room. | [optional] 
**RoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**RoomCondition** | Pointer to **string** | Room Condition information if the room has an associated Room Condition. | [optional] 
**ComponentRoomNumber** | Pointer to **string** | Component Room Number. | [optional] 
**ComponentSuiteRoomNumbers** | Pointer to **[]string** | Component Suite Room Numbers. | [optional] 
**ConnectingRooms** | Pointer to **[]string** | Room number. | [optional] 

## Methods

### NewRoomInfo

`func NewRoomInfo() *RoomInfo`

NewRoomInfo instantiates a new RoomInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomInfoWithDefaults

`func NewRoomInfoWithDefaults() *RoomInfo`

NewRoomInfoWithDefaults instantiates a new RoomInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomType

`func (o *RoomInfo) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomInfo) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomInfo) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomInfo) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomStatus

`func (o *RoomInfo) GetRoomStatus() HousekeepingRoomStatusType`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *RoomInfo) GetRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *RoomInfo) SetRoomStatus(v HousekeepingRoomStatusType)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *RoomInfo) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetRoomCondition

`func (o *RoomInfo) GetRoomCondition() string`

GetRoomCondition returns the RoomCondition field if non-nil, zero value otherwise.

### GetRoomConditionOk

`func (o *RoomInfo) GetRoomConditionOk() (*string, bool)`

GetRoomConditionOk returns a tuple with the RoomCondition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCondition

`func (o *RoomInfo) SetRoomCondition(v string)`

SetRoomCondition sets RoomCondition field to given value.

### HasRoomCondition

`func (o *RoomInfo) HasRoomCondition() bool`

HasRoomCondition returns a boolean if a field has been set.

### GetComponentRoomNumber

`func (o *RoomInfo) GetComponentRoomNumber() string`

GetComponentRoomNumber returns the ComponentRoomNumber field if non-nil, zero value otherwise.

### GetComponentRoomNumberOk

`func (o *RoomInfo) GetComponentRoomNumberOk() (*string, bool)`

GetComponentRoomNumberOk returns a tuple with the ComponentRoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomNumber

`func (o *RoomInfo) SetComponentRoomNumber(v string)`

SetComponentRoomNumber sets ComponentRoomNumber field to given value.

### HasComponentRoomNumber

`func (o *RoomInfo) HasComponentRoomNumber() bool`

HasComponentRoomNumber returns a boolean if a field has been set.

### GetComponentSuiteRoomNumbers

`func (o *RoomInfo) GetComponentSuiteRoomNumbers() []string`

GetComponentSuiteRoomNumbers returns the ComponentSuiteRoomNumbers field if non-nil, zero value otherwise.

### GetComponentSuiteRoomNumbersOk

`func (o *RoomInfo) GetComponentSuiteRoomNumbersOk() (*[]string, bool)`

GetComponentSuiteRoomNumbersOk returns a tuple with the ComponentSuiteRoomNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentSuiteRoomNumbers

`func (o *RoomInfo) SetComponentSuiteRoomNumbers(v []string)`

SetComponentSuiteRoomNumbers sets ComponentSuiteRoomNumbers field to given value.

### HasComponentSuiteRoomNumbers

`func (o *RoomInfo) HasComponentSuiteRoomNumbers() bool`

HasComponentSuiteRoomNumbers returns a boolean if a field has been set.

### GetConnectingRooms

`func (o *RoomInfo) GetConnectingRooms() []string`

GetConnectingRooms returns the ConnectingRooms field if non-nil, zero value otherwise.

### GetConnectingRoomsOk

`func (o *RoomInfo) GetConnectingRoomsOk() (*[]string, bool)`

GetConnectingRoomsOk returns a tuple with the ConnectingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectingRooms

`func (o *RoomInfo) SetConnectingRooms(v []string)`

SetConnectingRooms sets ConnectingRooms field to given value.

### HasConnectingRooms

`func (o *RoomInfo) HasConnectingRooms() bool`

HasConnectingRooms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


