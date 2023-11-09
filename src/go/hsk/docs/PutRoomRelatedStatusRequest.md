# PutRoomRelatedStatusRequest

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

### NewPutRoomRelatedStatusRequest

`func NewPutRoomRelatedStatusRequest() *PutRoomRelatedStatusRequest`

NewPutRoomRelatedStatusRequest instantiates a new PutRoomRelatedStatusRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRoomRelatedStatusRequestWithDefaults

`func NewPutRoomRelatedStatusRequestWithDefaults() *PutRoomRelatedStatusRequest`

NewPutRoomRelatedStatusRequestWithDefaults instantiates a new PutRoomRelatedStatusRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingRoomStatus

`func (o *PutRoomRelatedStatusRequest) GetHousekeepingRoomStatus() HousekeepingRoomStatusType`

GetHousekeepingRoomStatus returns the HousekeepingRoomStatus field if non-nil, zero value otherwise.

### GetHousekeepingRoomStatusOk

`func (o *PutRoomRelatedStatusRequest) GetHousekeepingRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetHousekeepingRoomStatusOk returns a tuple with the HousekeepingRoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomStatus

`func (o *PutRoomRelatedStatusRequest) SetHousekeepingRoomStatus(v HousekeepingRoomStatusType)`

SetHousekeepingRoomStatus sets HousekeepingRoomStatus field to given value.

### HasHousekeepingRoomStatus

`func (o *PutRoomRelatedStatusRequest) HasHousekeepingRoomStatus() bool`

HasHousekeepingRoomStatus returns a boolean if a field has been set.

### GetHousekeepingStatus

`func (o *PutRoomRelatedStatusRequest) GetHousekeepingStatus() FrontOfficeRoomStatusType`

GetHousekeepingStatus returns the HousekeepingStatus field if non-nil, zero value otherwise.

### GetHousekeepingStatusOk

`func (o *PutRoomRelatedStatusRequest) GetHousekeepingStatusOk() (*FrontOfficeRoomStatusType, bool)`

GetHousekeepingStatusOk returns a tuple with the HousekeepingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingStatus

`func (o *PutRoomRelatedStatusRequest) SetHousekeepingStatus(v FrontOfficeRoomStatusType)`

SetHousekeepingStatus sets HousekeepingStatus field to given value.

### HasHousekeepingStatus

`func (o *PutRoomRelatedStatusRequest) HasHousekeepingStatus() bool`

HasHousekeepingStatus returns a boolean if a field has been set.

### GetLinks

`func (o *PutRoomRelatedStatusRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRoomRelatedStatusRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRoomRelatedStatusRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRoomRelatedStatusRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomList

`func (o *PutRoomRelatedStatusRequest) GetRoomList() []RoomInformationType`

GetRoomList returns the RoomList field if non-nil, zero value otherwise.

### GetRoomListOk

`func (o *PutRoomRelatedStatusRequest) GetRoomListOk() (*[]RoomInformationType, bool)`

GetRoomListOk returns a tuple with the RoomList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomList

`func (o *PutRoomRelatedStatusRequest) SetRoomList(v []RoomInformationType)`

SetRoomList sets RoomList field to given value.

### HasRoomList

`func (o *PutRoomRelatedStatusRequest) HasRoomList() bool`

HasRoomList returns a boolean if a field has been set.

### GetTurndownStatus

`func (o *PutRoomRelatedStatusRequest) GetTurndownStatus() TurndownStatusType`

GetTurndownStatus returns the TurndownStatus field if non-nil, zero value otherwise.

### GetTurndownStatusOk

`func (o *PutRoomRelatedStatusRequest) GetTurndownStatusOk() (*TurndownStatusType, bool)`

GetTurndownStatusOk returns a tuple with the TurndownStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownStatus

`func (o *PutRoomRelatedStatusRequest) SetTurndownStatus(v TurndownStatusType)`

SetTurndownStatus sets TurndownStatus field to given value.

### HasTurndownStatus

`func (o *PutRoomRelatedStatusRequest) HasTurndownStatus() bool`

HasTurndownStatus returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRoomRelatedStatusRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRoomRelatedStatusRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRoomRelatedStatusRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRoomRelatedStatusRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


