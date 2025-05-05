# RoomCalendarType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Room** | Pointer to [**[]RoomCalendarInfoType**](RoomCalendarInfoType.md) | Holds the Room Information. | [optional] 
**HotelId** | Pointer to **string** | The resort of the Room Calendar. | [optional] 
**TotalRooms** | Pointer to **int32** | Total Numebr of Rooms. | [optional] 
**PageIndex** | Pointer to **int32** | Current Page the group of Rooms is included in. | [optional] 
**RecordsPerPage** | Pointer to **int32** | Number of records per page. | [optional] 

## Methods

### NewRoomCalendarType

`func NewRoomCalendarType() *RoomCalendarType`

NewRoomCalendarType instantiates a new RoomCalendarType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomCalendarTypeWithDefaults

`func NewRoomCalendarTypeWithDefaults() *RoomCalendarType`

NewRoomCalendarTypeWithDefaults instantiates a new RoomCalendarType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoom

`func (o *RoomCalendarType) GetRoom() []RoomCalendarInfoType`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *RoomCalendarType) GetRoomOk() (*[]RoomCalendarInfoType, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *RoomCalendarType) SetRoom(v []RoomCalendarInfoType)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *RoomCalendarType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomCalendarType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomCalendarType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomCalendarType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomCalendarType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTotalRooms

`func (o *RoomCalendarType) GetTotalRooms() int32`

GetTotalRooms returns the TotalRooms field if non-nil, zero value otherwise.

### GetTotalRoomsOk

`func (o *RoomCalendarType) GetTotalRoomsOk() (*int32, bool)`

GetTotalRoomsOk returns a tuple with the TotalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRooms

`func (o *RoomCalendarType) SetTotalRooms(v int32)`

SetTotalRooms sets TotalRooms field to given value.

### HasTotalRooms

`func (o *RoomCalendarType) HasTotalRooms() bool`

HasTotalRooms returns a boolean if a field has been set.

### GetPageIndex

`func (o *RoomCalendarType) GetPageIndex() int32`

GetPageIndex returns the PageIndex field if non-nil, zero value otherwise.

### GetPageIndexOk

`func (o *RoomCalendarType) GetPageIndexOk() (*int32, bool)`

GetPageIndexOk returns a tuple with the PageIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageIndex

`func (o *RoomCalendarType) SetPageIndex(v int32)`

SetPageIndex sets PageIndex field to given value.

### HasPageIndex

`func (o *RoomCalendarType) HasPageIndex() bool`

HasPageIndex returns a boolean if a field has been set.

### GetRecordsPerPage

`func (o *RoomCalendarType) GetRecordsPerPage() int32`

GetRecordsPerPage returns the RecordsPerPage field if non-nil, zero value otherwise.

### GetRecordsPerPageOk

`func (o *RoomCalendarType) GetRecordsPerPageOk() (*int32, bool)`

GetRecordsPerPageOk returns a tuple with the RecordsPerPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordsPerPage

`func (o *RoomCalendarType) SetRecordsPerPage(v int32)`

SetRecordsPerPage sets RecordsPerPage field to given value.

### HasRecordsPerPage

`func (o *RoomCalendarType) HasRecordsPerPage() bool`

HasRecordsPerPage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


