# ReservationInterfaceStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelInterface** | Pointer to [**HotelInterfaceType**](HotelInterfaceType.md) |  | [optional] 
**InterfaceRights** | Pointer to [**[]InterfaceRightsStatusType**](InterfaceRightsStatusType.md) | Contains a list of status/rights for the various services under this interface | [optional] 
**RoomExtension** | Pointer to **string** | Identifier for the room extension | [optional] 

## Methods

### NewReservationInterfaceStatusType

`func NewReservationInterfaceStatusType() *ReservationInterfaceStatusType`

NewReservationInterfaceStatusType instantiates a new ReservationInterfaceStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationInterfaceStatusTypeWithDefaults

`func NewReservationInterfaceStatusTypeWithDefaults() *ReservationInterfaceStatusType`

NewReservationInterfaceStatusTypeWithDefaults instantiates a new ReservationInterfaceStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelInterface

`func (o *ReservationInterfaceStatusType) GetHotelInterface() HotelInterfaceType`

GetHotelInterface returns the HotelInterface field if non-nil, zero value otherwise.

### GetHotelInterfaceOk

`func (o *ReservationInterfaceStatusType) GetHotelInterfaceOk() (*HotelInterfaceType, bool)`

GetHotelInterfaceOk returns a tuple with the HotelInterface field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelInterface

`func (o *ReservationInterfaceStatusType) SetHotelInterface(v HotelInterfaceType)`

SetHotelInterface sets HotelInterface field to given value.

### HasHotelInterface

`func (o *ReservationInterfaceStatusType) HasHotelInterface() bool`

HasHotelInterface returns a boolean if a field has been set.

### GetInterfaceRights

`func (o *ReservationInterfaceStatusType) GetInterfaceRights() []InterfaceRightsStatusType`

GetInterfaceRights returns the InterfaceRights field if non-nil, zero value otherwise.

### GetInterfaceRightsOk

`func (o *ReservationInterfaceStatusType) GetInterfaceRightsOk() (*[]InterfaceRightsStatusType, bool)`

GetInterfaceRightsOk returns a tuple with the InterfaceRights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceRights

`func (o *ReservationInterfaceStatusType) SetInterfaceRights(v []InterfaceRightsStatusType)`

SetInterfaceRights sets InterfaceRights field to given value.

### HasInterfaceRights

`func (o *ReservationInterfaceStatusType) HasInterfaceRights() bool`

HasInterfaceRights returns a boolean if a field has been set.

### GetRoomExtension

`func (o *ReservationInterfaceStatusType) GetRoomExtension() string`

GetRoomExtension returns the RoomExtension field if non-nil, zero value otherwise.

### GetRoomExtensionOk

`func (o *ReservationInterfaceStatusType) GetRoomExtensionOk() (*string, bool)`

GetRoomExtensionOk returns a tuple with the RoomExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomExtension

`func (o *ReservationInterfaceStatusType) SetRoomExtension(v string)`

SetRoomExtension sets RoomExtension field to given value.

### HasRoomExtension

`func (o *ReservationInterfaceStatusType) HasRoomExtension() bool`

HasRoomExtension returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


