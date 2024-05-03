# RoomTypeInfoDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomTypeMasterInfoType** | Pointer to [**RoomTypeMasterInfoType**](RoomTypeMasterInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomTypeInfoDetails

`func NewRoomTypeInfoDetails() *RoomTypeInfoDetails`

NewRoomTypeInfoDetails instantiates a new RoomTypeInfoDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeInfoDetailsWithDefaults

`func NewRoomTypeInfoDetailsWithDefaults() *RoomTypeInfoDetails`

NewRoomTypeInfoDetailsWithDefaults instantiates a new RoomTypeInfoDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomTypeInfoDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomTypeInfoDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomTypeInfoDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomTypeInfoDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomTypeMasterInfoType

`func (o *RoomTypeInfoDetails) GetRoomTypeMasterInfoType() RoomTypeMasterInfoType`

GetRoomTypeMasterInfoType returns the RoomTypeMasterInfoType field if non-nil, zero value otherwise.

### GetRoomTypeMasterInfoTypeOk

`func (o *RoomTypeInfoDetails) GetRoomTypeMasterInfoTypeOk() (*RoomTypeMasterInfoType, bool)`

GetRoomTypeMasterInfoTypeOk returns a tuple with the RoomTypeMasterInfoType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeMasterInfoType

`func (o *RoomTypeInfoDetails) SetRoomTypeMasterInfoType(v RoomTypeMasterInfoType)`

SetRoomTypeMasterInfoType sets RoomTypeMasterInfoType field to given value.

### HasRoomTypeMasterInfoType

`func (o *RoomTypeInfoDetails) HasRoomTypeMasterInfoType() bool`

HasRoomTypeMasterInfoType returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomTypeInfoDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomTypeInfoDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomTypeInfoDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomTypeInfoDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


