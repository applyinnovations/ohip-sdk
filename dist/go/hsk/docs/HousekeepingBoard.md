# HousekeepingBoard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingRoomInfo** | Pointer to [**HousekeepingBoardHousekeepingRoomInfo**](HousekeepingBoardHousekeepingRoomInfo.md) |  | [optional] 
**HousekeepingRoomStatusInfoList** | Pointer to [**[]HousekeepingRoomStatusInfo**](HousekeepingRoomStatusInfo.md) | Collection of Housekeeping Room Status Information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingBoard

`func NewHousekeepingBoard() *HousekeepingBoard`

NewHousekeepingBoard instantiates a new HousekeepingBoard object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingBoardWithDefaults

`func NewHousekeepingBoardWithDefaults() *HousekeepingBoard`

NewHousekeepingBoardWithDefaults instantiates a new HousekeepingBoard object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingRoomInfo

`func (o *HousekeepingBoard) GetHousekeepingRoomInfo() HousekeepingBoardHousekeepingRoomInfo`

GetHousekeepingRoomInfo returns the HousekeepingRoomInfo field if non-nil, zero value otherwise.

### GetHousekeepingRoomInfoOk

`func (o *HousekeepingBoard) GetHousekeepingRoomInfoOk() (*HousekeepingBoardHousekeepingRoomInfo, bool)`

GetHousekeepingRoomInfoOk returns a tuple with the HousekeepingRoomInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomInfo

`func (o *HousekeepingBoard) SetHousekeepingRoomInfo(v HousekeepingBoardHousekeepingRoomInfo)`

SetHousekeepingRoomInfo sets HousekeepingRoomInfo field to given value.

### HasHousekeepingRoomInfo

`func (o *HousekeepingBoard) HasHousekeepingRoomInfo() bool`

HasHousekeepingRoomInfo returns a boolean if a field has been set.

### GetHousekeepingRoomStatusInfoList

`func (o *HousekeepingBoard) GetHousekeepingRoomStatusInfoList() []HousekeepingRoomStatusInfo`

GetHousekeepingRoomStatusInfoList returns the HousekeepingRoomStatusInfoList field if non-nil, zero value otherwise.

### GetHousekeepingRoomStatusInfoListOk

`func (o *HousekeepingBoard) GetHousekeepingRoomStatusInfoListOk() (*[]HousekeepingRoomStatusInfo, bool)`

GetHousekeepingRoomStatusInfoListOk returns a tuple with the HousekeepingRoomStatusInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomStatusInfoList

`func (o *HousekeepingBoard) SetHousekeepingRoomStatusInfoList(v []HousekeepingRoomStatusInfo)`

SetHousekeepingRoomStatusInfoList sets HousekeepingRoomStatusInfoList field to given value.

### HasHousekeepingRoomStatusInfoList

`func (o *HousekeepingBoard) HasHousekeepingRoomStatusInfoList() bool`

HasHousekeepingRoomStatusInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingBoard) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingBoard) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingBoard) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingBoard) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingBoard) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingBoard) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingBoard) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingBoard) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


