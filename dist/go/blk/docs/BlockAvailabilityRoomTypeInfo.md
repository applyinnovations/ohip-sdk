# BlockAvailabilityRoomTypeInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Packages** | Pointer to [**[]PackageElementType**](PackageElementType.md) | Package information. | [optional] 
**RoomTypeInfo** | Pointer to [**RoomTypeInfoType**](RoomTypeInfoType.md) |  | [optional] 
**Available** | Pointer to **bool** | Indicates whether the room type is defined in the rate code for which availability is fetched. | [optional] 
**RoomType** | Pointer to **string** | Room type for which the details can be found in this node. | [optional] 

## Methods

### NewBlockAvailabilityRoomTypeInfo

`func NewBlockAvailabilityRoomTypeInfo() *BlockAvailabilityRoomTypeInfo`

NewBlockAvailabilityRoomTypeInfo instantiates a new BlockAvailabilityRoomTypeInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAvailabilityRoomTypeInfoWithDefaults

`func NewBlockAvailabilityRoomTypeInfoWithDefaults() *BlockAvailabilityRoomTypeInfo`

NewBlockAvailabilityRoomTypeInfoWithDefaults instantiates a new BlockAvailabilityRoomTypeInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPackages

`func (o *BlockAvailabilityRoomTypeInfo) GetPackages() []PackageElementType`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *BlockAvailabilityRoomTypeInfo) GetPackagesOk() (*[]PackageElementType, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *BlockAvailabilityRoomTypeInfo) SetPackages(v []PackageElementType)`

SetPackages sets Packages field to given value.

### HasPackages

`func (o *BlockAvailabilityRoomTypeInfo) HasPackages() bool`

HasPackages returns a boolean if a field has been set.

### GetRoomTypeInfo

`func (o *BlockAvailabilityRoomTypeInfo) GetRoomTypeInfo() RoomTypeInfoType`

GetRoomTypeInfo returns the RoomTypeInfo field if non-nil, zero value otherwise.

### GetRoomTypeInfoOk

`func (o *BlockAvailabilityRoomTypeInfo) GetRoomTypeInfoOk() (*RoomTypeInfoType, bool)`

GetRoomTypeInfoOk returns a tuple with the RoomTypeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeInfo

`func (o *BlockAvailabilityRoomTypeInfo) SetRoomTypeInfo(v RoomTypeInfoType)`

SetRoomTypeInfo sets RoomTypeInfo field to given value.

### HasRoomTypeInfo

`func (o *BlockAvailabilityRoomTypeInfo) HasRoomTypeInfo() bool`

HasRoomTypeInfo returns a boolean if a field has been set.

### GetAvailable

`func (o *BlockAvailabilityRoomTypeInfo) GetAvailable() bool`

GetAvailable returns the Available field if non-nil, zero value otherwise.

### GetAvailableOk

`func (o *BlockAvailabilityRoomTypeInfo) GetAvailableOk() (*bool, bool)`

GetAvailableOk returns a tuple with the Available field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailable

`func (o *BlockAvailabilityRoomTypeInfo) SetAvailable(v bool)`

SetAvailable sets Available field to given value.

### HasAvailable

`func (o *BlockAvailabilityRoomTypeInfo) HasAvailable() bool`

HasAvailable returns a boolean if a field has been set.

### GetRoomType

`func (o *BlockAvailabilityRoomTypeInfo) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *BlockAvailabilityRoomTypeInfo) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *BlockAvailabilityRoomTypeInfo) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *BlockAvailabilityRoomTypeInfo) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


