# RoomStatusStatisticsListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomStatusStatistics** | Pointer to [**[]RoomStatusStatisticsType**](RoomStatusStatisticsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomStatusStatisticsListType

`func NewRoomStatusStatisticsListType() *RoomStatusStatisticsListType`

NewRoomStatusStatisticsListType instantiates a new RoomStatusStatisticsListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomStatusStatisticsListTypeWithDefaults

`func NewRoomStatusStatisticsListTypeWithDefaults() *RoomStatusStatisticsListType`

NewRoomStatusStatisticsListTypeWithDefaults instantiates a new RoomStatusStatisticsListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomStatusStatisticsListType) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomStatusStatisticsListType) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomStatusStatisticsListType) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomStatusStatisticsListType) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomStatusStatistics

`func (o *RoomStatusStatisticsListType) GetRoomStatusStatistics() []RoomStatusStatisticsType`

GetRoomStatusStatistics returns the RoomStatusStatistics field if non-nil, zero value otherwise.

### GetRoomStatusStatisticsOk

`func (o *RoomStatusStatisticsListType) GetRoomStatusStatisticsOk() (*[]RoomStatusStatisticsType, bool)`

GetRoomStatusStatisticsOk returns a tuple with the RoomStatusStatistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatusStatistics

`func (o *RoomStatusStatisticsListType) SetRoomStatusStatistics(v []RoomStatusStatisticsType)`

SetRoomStatusStatistics sets RoomStatusStatistics field to given value.

### HasRoomStatusStatistics

`func (o *RoomStatusStatisticsListType) HasRoomStatusStatistics() bool`

HasRoomStatusStatistics returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomStatusStatisticsListType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomStatusStatisticsListType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomStatusStatisticsListType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomStatusStatisticsListType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


