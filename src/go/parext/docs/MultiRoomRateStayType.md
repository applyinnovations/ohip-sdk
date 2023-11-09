# MultiRoomRateStayType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomClass** | Pointer to **string** | Room Class grouping the returned availability. | [optional] 
**RoomTypes** | Pointer to [**[]MultiRoomTypesType**](MultiRoomTypesType.md) |  | [optional] 

## Methods

### NewMultiRoomRateStayType

`func NewMultiRoomRateStayType() *MultiRoomRateStayType`

NewMultiRoomRateStayType instantiates a new MultiRoomRateStayType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiRoomRateStayTypeWithDefaults

`func NewMultiRoomRateStayTypeWithDefaults() *MultiRoomRateStayType`

NewMultiRoomRateStayTypeWithDefaults instantiates a new MultiRoomRateStayType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomClass

`func (o *MultiRoomRateStayType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *MultiRoomRateStayType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *MultiRoomRateStayType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *MultiRoomRateStayType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomTypes

`func (o *MultiRoomRateStayType) GetRoomTypes() []MultiRoomTypesType`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *MultiRoomRateStayType) GetRoomTypesOk() (*[]MultiRoomTypesType, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *MultiRoomRateStayType) SetRoomTypes(v []MultiRoomTypesType)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *MultiRoomRateStayType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


