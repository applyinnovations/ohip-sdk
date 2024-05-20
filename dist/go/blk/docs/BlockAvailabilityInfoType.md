# BlockAvailabilityInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExtendedStay** | Pointer to **bool** |  | [optional] 
**RoomInfo** | Pointer to [**[]BlockAvailabilityRoomInfoType**](BlockAvailabilityRoomInfoType.md) |  | [optional] 
**StayDate** | Pointer to **string** |  | [optional] 

## Methods

### NewBlockAvailabilityInfoType

`func NewBlockAvailabilityInfoType() *BlockAvailabilityInfoType`

NewBlockAvailabilityInfoType instantiates a new BlockAvailabilityInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAvailabilityInfoTypeWithDefaults

`func NewBlockAvailabilityInfoTypeWithDefaults() *BlockAvailabilityInfoType`

NewBlockAvailabilityInfoTypeWithDefaults instantiates a new BlockAvailabilityInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExtendedStay

`func (o *BlockAvailabilityInfoType) GetExtendedStay() bool`

GetExtendedStay returns the ExtendedStay field if non-nil, zero value otherwise.

### GetExtendedStayOk

`func (o *BlockAvailabilityInfoType) GetExtendedStayOk() (*bool, bool)`

GetExtendedStayOk returns a tuple with the ExtendedStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtendedStay

`func (o *BlockAvailabilityInfoType) SetExtendedStay(v bool)`

SetExtendedStay sets ExtendedStay field to given value.

### HasExtendedStay

`func (o *BlockAvailabilityInfoType) HasExtendedStay() bool`

HasExtendedStay returns a boolean if a field has been set.

### GetRoomInfo

`func (o *BlockAvailabilityInfoType) GetRoomInfo() []BlockAvailabilityRoomInfoType`

GetRoomInfo returns the RoomInfo field if non-nil, zero value otherwise.

### GetRoomInfoOk

`func (o *BlockAvailabilityInfoType) GetRoomInfoOk() (*[]BlockAvailabilityRoomInfoType, bool)`

GetRoomInfoOk returns a tuple with the RoomInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomInfo

`func (o *BlockAvailabilityInfoType) SetRoomInfo(v []BlockAvailabilityRoomInfoType)`

SetRoomInfo sets RoomInfo field to given value.

### HasRoomInfo

`func (o *BlockAvailabilityInfoType) HasRoomInfo() bool`

HasRoomInfo returns a boolean if a field has been set.

### GetStayDate

`func (o *BlockAvailabilityInfoType) GetStayDate() string`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *BlockAvailabilityInfoType) GetStayDateOk() (*string, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *BlockAvailabilityInfoType) SetStayDate(v string)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *BlockAvailabilityInfoType) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


