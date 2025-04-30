# DepartureTaskInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomType** | Pointer to [**[]RoomTypeSuppliesType**](RoomTypeSuppliesType.md) | Supplies based on the room type. | [optional] 
**Code** | Pointer to **string** | Facility task code of the departure task. | [optional] 

## Methods

### NewDepartureTaskInfoType

`func NewDepartureTaskInfoType() *DepartureTaskInfoType`

NewDepartureTaskInfoType instantiates a new DepartureTaskInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepartureTaskInfoTypeWithDefaults

`func NewDepartureTaskInfoTypeWithDefaults() *DepartureTaskInfoType`

NewDepartureTaskInfoTypeWithDefaults instantiates a new DepartureTaskInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomType

`func (o *DepartureTaskInfoType) GetRoomType() []RoomTypeSuppliesType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *DepartureTaskInfoType) GetRoomTypeOk() (*[]RoomTypeSuppliesType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *DepartureTaskInfoType) SetRoomType(v []RoomTypeSuppliesType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *DepartureTaskInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetCode

`func (o *DepartureTaskInfoType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *DepartureTaskInfoType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *DepartureTaskInfoType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *DepartureTaskInfoType) HasCode() bool`

HasCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


