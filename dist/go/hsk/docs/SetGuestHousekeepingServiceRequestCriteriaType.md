# SetGuestHousekeepingServiceRequestCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The hotel code of the rooms for which the guest service status needs to be changed. | [optional] 
**RoomList** | Pointer to **[]string** | Collection of room numbers for which the status is to be updated. | [optional] 
**Status** | Pointer to [**GuestHousekeepingServiceRequestType**](GuestHousekeepingServiceRequestType.md) |  | [optional] 

## Methods

### NewSetGuestHousekeepingServiceRequestCriteriaType

`func NewSetGuestHousekeepingServiceRequestCriteriaType() *SetGuestHousekeepingServiceRequestCriteriaType`

NewSetGuestHousekeepingServiceRequestCriteriaType instantiates a new SetGuestHousekeepingServiceRequestCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetGuestHousekeepingServiceRequestCriteriaTypeWithDefaults

`func NewSetGuestHousekeepingServiceRequestCriteriaTypeWithDefaults() *SetGuestHousekeepingServiceRequestCriteriaType`

NewSetGuestHousekeepingServiceRequestCriteriaTypeWithDefaults instantiates a new SetGuestHousekeepingServiceRequestCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomList

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetRoomList() []string`

GetRoomList returns the RoomList field if non-nil, zero value otherwise.

### GetRoomListOk

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetRoomListOk() (*[]string, bool)`

GetRoomListOk returns a tuple with the RoomList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomList

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) SetRoomList(v []string)`

SetRoomList sets RoomList field to given value.

### HasRoomList

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) HasRoomList() bool`

HasRoomList returns a boolean if a field has been set.

### GetStatus

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetStatus() GuestHousekeepingServiceRequestType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) GetStatusOk() (*GuestHousekeepingServiceRequestType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) SetStatus(v GuestHousekeepingServiceRequestType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SetGuestHousekeepingServiceRequestCriteriaType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


