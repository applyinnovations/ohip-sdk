# PutReleasedInventoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**ExistingReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**RoomType** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**AdultCount** | Pointer to **int32** | The number of adults that are expected to stay in a room. | [optional] 
**InventoryToReturnList** | Pointer to [**[]InventoryToReturnType**](InventoryToReturnType.md) | The date and number of rooms to return to either a room type or House. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutReleasedInventoryRequest

`func NewPutReleasedInventoryRequest() *PutReleasedInventoryRequest`

NewPutReleasedInventoryRequest instantiates a new PutReleasedInventoryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutReleasedInventoryRequestWithDefaults

`func NewPutReleasedInventoryRequestWithDefaults() *PutReleasedInventoryRequest`

NewPutReleasedInventoryRequestWithDefaults instantiates a new PutReleasedInventoryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PutReleasedInventoryRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutReleasedInventoryRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutReleasedInventoryRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutReleasedInventoryRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockId

`func (o *PutReleasedInventoryRequest) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *PutReleasedInventoryRequest) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *PutReleasedInventoryRequest) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *PutReleasedInventoryRequest) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetExistingReservationId

`func (o *PutReleasedInventoryRequest) GetExistingReservationId() UniqueIDType`

GetExistingReservationId returns the ExistingReservationId field if non-nil, zero value otherwise.

### GetExistingReservationIdOk

`func (o *PutReleasedInventoryRequest) GetExistingReservationIdOk() (*UniqueIDType, bool)`

GetExistingReservationIdOk returns a tuple with the ExistingReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistingReservationId

`func (o *PutReleasedInventoryRequest) SetExistingReservationId(v UniqueIDType)`

SetExistingReservationId sets ExistingReservationId field to given value.

### HasExistingReservationId

`func (o *PutReleasedInventoryRequest) HasExistingReservationId() bool`

HasExistingReservationId returns a boolean if a field has been set.

### GetRoomType

`func (o *PutReleasedInventoryRequest) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *PutReleasedInventoryRequest) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *PutReleasedInventoryRequest) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *PutReleasedInventoryRequest) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetAdultCount

`func (o *PutReleasedInventoryRequest) GetAdultCount() int32`

GetAdultCount returns the AdultCount field if non-nil, zero value otherwise.

### GetAdultCountOk

`func (o *PutReleasedInventoryRequest) GetAdultCountOk() (*int32, bool)`

GetAdultCountOk returns a tuple with the AdultCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdultCount

`func (o *PutReleasedInventoryRequest) SetAdultCount(v int32)`

SetAdultCount sets AdultCount field to given value.

### HasAdultCount

`func (o *PutReleasedInventoryRequest) HasAdultCount() bool`

HasAdultCount returns a boolean if a field has been set.

### GetInventoryToReturnList

`func (o *PutReleasedInventoryRequest) GetInventoryToReturnList() []InventoryToReturnType`

GetInventoryToReturnList returns the InventoryToReturnList field if non-nil, zero value otherwise.

### GetInventoryToReturnListOk

`func (o *PutReleasedInventoryRequest) GetInventoryToReturnListOk() (*[]InventoryToReturnType, bool)`

GetInventoryToReturnListOk returns a tuple with the InventoryToReturnList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryToReturnList

`func (o *PutReleasedInventoryRequest) SetInventoryToReturnList(v []InventoryToReturnType)`

SetInventoryToReturnList sets InventoryToReturnList field to given value.

### HasInventoryToReturnList

`func (o *PutReleasedInventoryRequest) HasInventoryToReturnList() bool`

HasInventoryToReturnList returns a boolean if a field has been set.

### GetLinks

`func (o *PutReleasedInventoryRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutReleasedInventoryRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutReleasedInventoryRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutReleasedInventoryRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutReleasedInventoryRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutReleasedInventoryRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutReleasedInventoryRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutReleasedInventoryRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


