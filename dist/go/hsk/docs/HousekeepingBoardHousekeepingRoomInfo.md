# HousekeepingBoardHousekeepingRoomInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingRooms** | Pointer to [**HotelRoomsType**](HotelRoomsType.md) |  | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewHousekeepingBoardHousekeepingRoomInfo

`func NewHousekeepingBoardHousekeepingRoomInfo() *HousekeepingBoardHousekeepingRoomInfo`

NewHousekeepingBoardHousekeepingRoomInfo instantiates a new HousekeepingBoardHousekeepingRoomInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingBoardHousekeepingRoomInfoWithDefaults

`func NewHousekeepingBoardHousekeepingRoomInfoWithDefaults() *HousekeepingBoardHousekeepingRoomInfo`

NewHousekeepingBoardHousekeepingRoomInfoWithDefaults instantiates a new HousekeepingBoardHousekeepingRoomInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingRooms

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetHousekeepingRooms() HotelRoomsType`

GetHousekeepingRooms returns the HousekeepingRooms field if non-nil, zero value otherwise.

### GetHousekeepingRoomsOk

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetHousekeepingRoomsOk() (*HotelRoomsType, bool)`

GetHousekeepingRoomsOk returns a tuple with the HousekeepingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRooms

`func (o *HousekeepingBoardHousekeepingRoomInfo) SetHousekeepingRooms(v HotelRoomsType)`

SetHousekeepingRooms sets HousekeepingRooms field to given value.

### HasHousekeepingRooms

`func (o *HousekeepingBoardHousekeepingRoomInfo) HasHousekeepingRooms() bool`

HasHousekeepingRooms returns a boolean if a field has been set.

### GetTotalPages

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *HousekeepingBoardHousekeepingRoomInfo) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *HousekeepingBoardHousekeepingRoomInfo) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetOffset

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *HousekeepingBoardHousekeepingRoomInfo) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *HousekeepingBoardHousekeepingRoomInfo) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *HousekeepingBoardHousekeepingRoomInfo) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *HousekeepingBoardHousekeepingRoomInfo) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasMore

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *HousekeepingBoardHousekeepingRoomInfo) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *HousekeepingBoardHousekeepingRoomInfo) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *HousekeepingBoardHousekeepingRoomInfo) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *HousekeepingBoardHousekeepingRoomInfo) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *HousekeepingBoardHousekeepingRoomInfo) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *HousekeepingBoardHousekeepingRoomInfo) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *HousekeepingBoardHousekeepingRoomInfo) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


