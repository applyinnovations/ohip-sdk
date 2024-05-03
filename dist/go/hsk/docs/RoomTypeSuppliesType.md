# RoomTypeSuppliesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FacilityCode** | Pointer to [**[]FacilityCodeType**](FacilityCodeType.md) |  | [optional] 
**Type** | Pointer to **string** | Room type code. | [optional] 

## Methods

### NewRoomTypeSuppliesType

`func NewRoomTypeSuppliesType() *RoomTypeSuppliesType`

NewRoomTypeSuppliesType instantiates a new RoomTypeSuppliesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeSuppliesTypeWithDefaults

`func NewRoomTypeSuppliesTypeWithDefaults() *RoomTypeSuppliesType`

NewRoomTypeSuppliesTypeWithDefaults instantiates a new RoomTypeSuppliesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFacilityCode

`func (o *RoomTypeSuppliesType) GetFacilityCode() []FacilityCodeType`

GetFacilityCode returns the FacilityCode field if non-nil, zero value otherwise.

### GetFacilityCodeOk

`func (o *RoomTypeSuppliesType) GetFacilityCodeOk() (*[]FacilityCodeType, bool)`

GetFacilityCodeOk returns a tuple with the FacilityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityCode

`func (o *RoomTypeSuppliesType) SetFacilityCode(v []FacilityCodeType)`

SetFacilityCode sets FacilityCode field to given value.

### HasFacilityCode

`func (o *RoomTypeSuppliesType) HasFacilityCode() bool`

HasFacilityCode returns a boolean if a field has been set.

### GetType

`func (o *RoomTypeSuppliesType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoomTypeSuppliesType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoomTypeSuppliesType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoomTypeSuppliesType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


