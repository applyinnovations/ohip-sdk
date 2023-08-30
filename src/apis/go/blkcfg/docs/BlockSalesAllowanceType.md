# BlockSalesAllowanceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Contains Hotel Code. | [optional] 
**SalesAllowanceDate** | Pointer to **string** | Contains sales allowance date. | [optional] 
**RoomType** | Pointer to **string** | Contains room type. | [optional] 
**RoomPool** | Pointer to **string** | Contains room pool code. | [optional] 
**Allowance** | Pointer to **int32** | Contains allocated number of rooms for allowance. | [optional] 
**Booked** | Pointer to **int32** | Contains number of rooms are booked/consumed from sales allowance. | [optional] 
**OverBooked** | Pointer to **int32** | Contains number of rooms are overbooked from sales allowance. | [optional] 
**CutoffDate** | Pointer to **string** | Contains cutoff date for sales allowance. | [optional] 

## Methods

### NewBlockSalesAllowanceType

`func NewBlockSalesAllowanceType() *BlockSalesAllowanceType`

NewBlockSalesAllowanceType instantiates a new BlockSalesAllowanceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockSalesAllowanceTypeWithDefaults

`func NewBlockSalesAllowanceTypeWithDefaults() *BlockSalesAllowanceType`

NewBlockSalesAllowanceTypeWithDefaults instantiates a new BlockSalesAllowanceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BlockSalesAllowanceType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockSalesAllowanceType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockSalesAllowanceType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockSalesAllowanceType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSalesAllowanceDate

`func (o *BlockSalesAllowanceType) GetSalesAllowanceDate() string`

GetSalesAllowanceDate returns the SalesAllowanceDate field if non-nil, zero value otherwise.

### GetSalesAllowanceDateOk

`func (o *BlockSalesAllowanceType) GetSalesAllowanceDateOk() (*string, bool)`

GetSalesAllowanceDateOk returns a tuple with the SalesAllowanceDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesAllowanceDate

`func (o *BlockSalesAllowanceType) SetSalesAllowanceDate(v string)`

SetSalesAllowanceDate sets SalesAllowanceDate field to given value.

### HasSalesAllowanceDate

`func (o *BlockSalesAllowanceType) HasSalesAllowanceDate() bool`

HasSalesAllowanceDate returns a boolean if a field has been set.

### GetRoomType

`func (o *BlockSalesAllowanceType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *BlockSalesAllowanceType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *BlockSalesAllowanceType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *BlockSalesAllowanceType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomPool

`func (o *BlockSalesAllowanceType) GetRoomPool() string`

GetRoomPool returns the RoomPool field if non-nil, zero value otherwise.

### GetRoomPoolOk

`func (o *BlockSalesAllowanceType) GetRoomPoolOk() (*string, bool)`

GetRoomPoolOk returns a tuple with the RoomPool field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomPool

`func (o *BlockSalesAllowanceType) SetRoomPool(v string)`

SetRoomPool sets RoomPool field to given value.

### HasRoomPool

`func (o *BlockSalesAllowanceType) HasRoomPool() bool`

HasRoomPool returns a boolean if a field has been set.

### GetAllowance

`func (o *BlockSalesAllowanceType) GetAllowance() int32`

GetAllowance returns the Allowance field if non-nil, zero value otherwise.

### GetAllowanceOk

`func (o *BlockSalesAllowanceType) GetAllowanceOk() (*int32, bool)`

GetAllowanceOk returns a tuple with the Allowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowance

`func (o *BlockSalesAllowanceType) SetAllowance(v int32)`

SetAllowance sets Allowance field to given value.

### HasAllowance

`func (o *BlockSalesAllowanceType) HasAllowance() bool`

HasAllowance returns a boolean if a field has been set.

### GetBooked

`func (o *BlockSalesAllowanceType) GetBooked() int32`

GetBooked returns the Booked field if non-nil, zero value otherwise.

### GetBookedOk

`func (o *BlockSalesAllowanceType) GetBookedOk() (*int32, bool)`

GetBookedOk returns a tuple with the Booked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBooked

`func (o *BlockSalesAllowanceType) SetBooked(v int32)`

SetBooked sets Booked field to given value.

### HasBooked

`func (o *BlockSalesAllowanceType) HasBooked() bool`

HasBooked returns a boolean if a field has been set.

### GetOverBooked

`func (o *BlockSalesAllowanceType) GetOverBooked() int32`

GetOverBooked returns the OverBooked field if non-nil, zero value otherwise.

### GetOverBookedOk

`func (o *BlockSalesAllowanceType) GetOverBookedOk() (*int32, bool)`

GetOverBookedOk returns a tuple with the OverBooked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverBooked

`func (o *BlockSalesAllowanceType) SetOverBooked(v int32)`

SetOverBooked sets OverBooked field to given value.

### HasOverBooked

`func (o *BlockSalesAllowanceType) HasOverBooked() bool`

HasOverBooked returns a boolean if a field has been set.

### GetCutoffDate

`func (o *BlockSalesAllowanceType) GetCutoffDate() string`

GetCutoffDate returns the CutoffDate field if non-nil, zero value otherwise.

### GetCutoffDateOk

`func (o *BlockSalesAllowanceType) GetCutoffDateOk() (*string, bool)`

GetCutoffDateOk returns a tuple with the CutoffDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffDate

`func (o *BlockSalesAllowanceType) SetCutoffDate(v string)`

SetCutoffDate sets CutoffDate field to given value.

### HasCutoffDate

`func (o *BlockSalesAllowanceType) HasCutoffDate() bool`

HasCutoffDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


