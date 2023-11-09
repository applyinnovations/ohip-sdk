# HousekeepingRoomStatusCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingRoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**HousekeepingStatus** | Pointer to [**FrontOfficeRoomStatusType**](FrontOfficeRoomStatusType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoomList** | Pointer to [**[]RoomInformationType**](RoomInformationType.md) | Collection of room numbers for which the status is to be updated. | [optional] 
**TurndownStatus** | Pointer to [**TurndownStatusType**](TurndownStatusType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewHousekeepingRoomStatusCriteria

`func NewHousekeepingRoomStatusCriteria() *HousekeepingRoomStatusCriteria`

NewHousekeepingRoomStatusCriteria instantiates a new HousekeepingRoomStatusCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingRoomStatusCriteriaWithDefaults

`func NewHousekeepingRoomStatusCriteriaWithDefaults() *HousekeepingRoomStatusCriteria`

NewHousekeepingRoomStatusCriteriaWithDefaults instantiates a new HousekeepingRoomStatusCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingRoomStatus

`func (o *HousekeepingRoomStatusCriteria) GetHousekeepingRoomStatus() HousekeepingRoomStatusType`

GetHousekeepingRoomStatus returns the HousekeepingRoomStatus field if non-nil, zero value otherwise.

### GetHousekeepingRoomStatusOk

`func (o *HousekeepingRoomStatusCriteria) GetHousekeepingRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetHousekeepingRoomStatusOk returns a tuple with the HousekeepingRoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomStatus

`func (o *HousekeepingRoomStatusCriteria) SetHousekeepingRoomStatus(v HousekeepingRoomStatusType)`

SetHousekeepingRoomStatus sets HousekeepingRoomStatus field to given value.

### HasHousekeepingRoomStatus

`func (o *HousekeepingRoomStatusCriteria) HasHousekeepingRoomStatus() bool`

HasHousekeepingRoomStatus returns a boolean if a field has been set.

### GetHousekeepingStatus

`func (o *HousekeepingRoomStatusCriteria) GetHousekeepingStatus() FrontOfficeRoomStatusType`

GetHousekeepingStatus returns the HousekeepingStatus field if non-nil, zero value otherwise.

### GetHousekeepingStatusOk

`func (o *HousekeepingRoomStatusCriteria) GetHousekeepingStatusOk() (*FrontOfficeRoomStatusType, bool)`

GetHousekeepingStatusOk returns a tuple with the HousekeepingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingStatus

`func (o *HousekeepingRoomStatusCriteria) SetHousekeepingStatus(v FrontOfficeRoomStatusType)`

SetHousekeepingStatus sets HousekeepingStatus field to given value.

### HasHousekeepingStatus

`func (o *HousekeepingRoomStatusCriteria) HasHousekeepingStatus() bool`

HasHousekeepingStatus returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingRoomStatusCriteria) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingRoomStatusCriteria) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingRoomStatusCriteria) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingRoomStatusCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomList

`func (o *HousekeepingRoomStatusCriteria) GetRoomList() []RoomInformationType`

GetRoomList returns the RoomList field if non-nil, zero value otherwise.

### GetRoomListOk

`func (o *HousekeepingRoomStatusCriteria) GetRoomListOk() (*[]RoomInformationType, bool)`

GetRoomListOk returns a tuple with the RoomList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomList

`func (o *HousekeepingRoomStatusCriteria) SetRoomList(v []RoomInformationType)`

SetRoomList sets RoomList field to given value.

### HasRoomList

`func (o *HousekeepingRoomStatusCriteria) HasRoomList() bool`

HasRoomList returns a boolean if a field has been set.

### GetTurndownStatus

`func (o *HousekeepingRoomStatusCriteria) GetTurndownStatus() TurndownStatusType`

GetTurndownStatus returns the TurndownStatus field if non-nil, zero value otherwise.

### GetTurndownStatusOk

`func (o *HousekeepingRoomStatusCriteria) GetTurndownStatusOk() (*TurndownStatusType, bool)`

GetTurndownStatusOk returns a tuple with the TurndownStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownStatus

`func (o *HousekeepingRoomStatusCriteria) SetTurndownStatus(v TurndownStatusType)`

SetTurndownStatus sets TurndownStatus field to given value.

### HasTurndownStatus

`func (o *HousekeepingRoomStatusCriteria) HasTurndownStatus() bool`

HasTurndownStatus returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingRoomStatusCriteria) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingRoomStatusCriteria) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingRoomStatusCriteria) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingRoomStatusCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


