# ReservationBlockType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**BlockIdList**](BlockIdList.md) |  | [optional] 
**BlockName** | Pointer to **string** | The Name of the block that is attached to the reservation. | [optional] 
**HotelId** | Pointer to **string** | This is the HotelCode of the Block. | [optional] 

## Methods

### NewReservationBlockType

`func NewReservationBlockType() *ReservationBlockType`

NewReservationBlockType instantiates a new ReservationBlockType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationBlockTypeWithDefaults

`func NewReservationBlockTypeWithDefaults() *ReservationBlockType`

NewReservationBlockTypeWithDefaults instantiates a new ReservationBlockType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *ReservationBlockType) GetBlockIdList() BlockIdList`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *ReservationBlockType) GetBlockIdListOk() (*BlockIdList, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *ReservationBlockType) SetBlockIdList(v BlockIdList)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *ReservationBlockType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetBlockName

`func (o *ReservationBlockType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *ReservationBlockType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *ReservationBlockType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *ReservationBlockType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationBlockType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationBlockType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationBlockType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationBlockType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


